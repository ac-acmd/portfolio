import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-2xl font-medium text-foreground mt-10 mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-medium text-foreground mt-10 mb-3">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-base font-medium text-foreground mt-8 mb-2">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-sm text-muted leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-5 mb-4 space-y-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-5 mb-4 space-y-1">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-sm text-muted leading-relaxed">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-teal pl-4 my-6 text-sm text-muted italic">
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => {
    const isBlock = className?.startsWith("language-");
    if (isBlock) {
      return (
        <code className="block bg-gray-50 border border-border rounded-md p-4 text-xs font-mono text-foreground overflow-x-auto mb-4">
          {children}
        </code>
      );
    }
    return (
      <code className="bg-gray-50 border border-border rounded px-1.5 py-0.5 text-xs font-mono text-foreground">
        {children}
      </code>
    );
  },
  pre: ({ children }) => <pre className="mb-4">{children}</pre>,
  hr: () => <hr className="border-border my-10" />,
  strong: ({ children }) => (
    <strong className="font-medium text-foreground">{children}</strong>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-teal hover:text-teal-dark underline underline-offset-2 transition-colors"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
};

export default function Markdown({ content }: { content: string }) {
  return <ReactMarkdown components={components}>{content}</ReactMarkdown>;
}
