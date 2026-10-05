import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Services from "./Services";
import {
  bluetoothAudit,
  bluetoothAuditRequestPath,
  retainerFeatureNames,
  retainerPlans,
  servicePathSteps,
} from "@/lib/services";

function renderServices() {
  return render(
    <MemoryRouter>
      <Services />
    </MemoryRouter>
  );
}

describe("Services", () => {
  it("shows the audit price", () => {
    renderServices();
    expect(
      screen.getByText(`$${bluetoothAudit.pricePerOperatingSystem} per OS`)
    ).toBeInTheDocument();
  });

  it("links the audit request button to the contact path", () => {
    renderServices();
    const link = screen.getByRole("link", { name: "Request a BLE audit" });
    expect(link).toHaveAttribute("href", bluetoothAuditRequestPath);
  });

  it("renders both retainer plan names", () => {
    renderServices();
    retainerPlans.forEach((plan) => {
      expect(screen.getByRole("heading", { name: plan.name })).toBeInTheDocument();
    });
  });

  it("shows every retainer feature name exactly once per plan", () => {
    renderServices();
    retainerFeatureNames.forEach((featureName) => {
      expect(screen.getAllByText(featureName)).toHaveLength(2);
    });
  });

  it("links to the audit, project and retainer sections", () => {
    const { container } = renderServices();
    servicePathSteps.forEach((step) => {
      expect(container.querySelector(`a[href="#${step.anchorId}"]`)).not.toBeNull();
    });
  });
});
