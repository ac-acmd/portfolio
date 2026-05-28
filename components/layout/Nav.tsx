"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/#about" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium text-foreground tracking-tight hover:text-teal transition-colors"
        >
          Austin Cole
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm px-4 py-1.5 border border-foreground rounded hover:bg-foreground hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        <button
          className="sm:hidden text-muted hover:text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden border-t border-border bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm w-fit px-4 py-1.5 border border-foreground rounded hover:bg-foreground hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
