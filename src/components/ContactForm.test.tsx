import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ContactForm from "./ContactForm";
import { site } from "@/lib/site";
import { projectTypeOptions, budgetOptions, timelineOptions } from "@/lib/contact-form-options";

const sendMock = vi.hoisted(() => vi.fn());

vi.mock("@emailjs/browser", () => ({
  default: { send: sendMock },
}));

const projectType = projectTypeOptions[0];
const budget = budgetOptions[1];
const timeline = timelineOptions[0];

function renderForm() {
  return render(
    <MemoryRouter>
      <ContactForm />
    </MemoryRouter>
  );
}

async function fillValidForm(user: ReturnType<typeof userEvent.setup>, name: string, email: string) {
  await user.type(screen.getByLabelText("Name"), name);
  await user.type(screen.getByLabelText("Email"), email);
  await user.selectOptions(screen.getByLabelText("Project type"), projectType);
  await user.selectOptions(screen.getByLabelText("Budget"), budget);
  await user.selectOptions(screen.getByLabelText("Timeline"), timeline);
  await user.type(screen.getByLabelText("Message"), "Please help build this.");
}

function getSubmitButton() {
  return screen.getByRole("button", { name: /send project details/i });
}

beforeEach(() => {
  sendMock.mockReset();
});

describe("ContactForm", () => {
  it("submits the chosen project details to emailjs", async () => {
    sendMock.mockResolvedValueOnce({ status: 200, text: "OK" });
    const user = userEvent.setup();
    renderForm();

    await fillValidForm(user, "Jane Doe", "jane@example.com");
    await user.click(getSubmitButton());

    await waitFor(() => expect(sendMock).toHaveBeenCalledTimes(1));
    const params = sendMock.mock.calls[0][2];
    expect(params).toMatchObject({
      project_type: projectType,
      budget,
      timeline,
    });
  });

  it("shows a success message with the submitted email and clears the name field", async () => {
    sendMock.mockResolvedValueOnce({ status: 200, text: "OK" });
    const user = userEvent.setup();
    const { container } = renderForm();

    await fillValidForm(user, "Jane Doe", "jane@example.com");
    await user.click(getSubmitButton());

    await waitFor(() => expect(container.textContent).toContain("jane@example.com"));
    const nameInput = screen.getByLabelText("Name") as HTMLInputElement;
    expect(nameInput.value).toBe("");
  });

  it("shows an error message with the contact email and keeps the name field on failure", async () => {
    sendMock.mockRejectedValueOnce(new Error("network error"));
    const user = userEvent.setup();
    const { container } = renderForm();

    await fillValidForm(user, "Jane Doe", "jane@example.com");
    await user.click(getSubmitButton());

    await waitFor(() => expect(container.textContent).toContain(site.contactEmail));
    const nameInput = screen.getByLabelText("Name") as HTMLInputElement;
    expect(nameInput.value).toBe("Jane Doe");
  });

  it("does not submit again while a submission is pending", async () => {
    let resolveSend: (value: { status: number; text: string }) => void = () => {};
    sendMock.mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolveSend = resolve;
        })
    );
    const user = userEvent.setup();
    renderForm();

    await fillValidForm(user, "Jane Doe", "jane@example.com");
    const submitButton = getSubmitButton();

    await user.click(submitButton);
    await user.click(submitButton);

    expect(sendMock).toHaveBeenCalledTimes(1);

    resolveSend({ status: 200, text: "OK" });
    await waitFor(() => expect(submitButton).not.toBeDisabled());
  });

  it("clears the error message once the user starts typing again", async () => {
    sendMock.mockRejectedValueOnce(new Error("network error"));
    const user = userEvent.setup();
    const { container } = renderForm();

    await fillValidForm(user, "Jane Doe", "jane@example.com");
    await user.click(getSubmitButton());

    await waitFor(() => expect(container.textContent).toContain(site.contactEmail));

    await user.type(screen.getByLabelText("Name"), "!");

    expect(container.textContent).not.toContain(site.contactEmail);
  });
});
