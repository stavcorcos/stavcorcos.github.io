"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "../../lib/data";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { cn } from "../../lib/utils";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(NAV_LINKS.map((l) => l.href.replace("#", "")));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/92 border-b border-border backdrop-blur-md"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono font-medium text-[1.1rem] text-text no-underline tracking-[0.02em] transition-colors duration-200 hover:text-amber"
        >
          <span className="text-amber">[</span>
          SC
          <span className="text-amber">]</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "nav-link-underline text-[0.82rem] no-underline tracking-[0.08em] transition-colors duration-200",
                    isActive ? "text-amber active" : "text-text-muted hover:text-amber"
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="/StavCorcos.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex font-mono text-[0.8rem] text-amber border border-amber px-[14px] py-[6px] rounded-[6px] no-underline tracking-[0.05em] transition-all duration-200 hover:bg-amber hover:text-bg"
        >
          resume ↗
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn("block w-[22px] h-[2px] bg-text rounded-sm transition-transform duration-200", menuOpen && "translate-y-[7px] rotate-45")} />
          <span className={cn("block w-[22px] h-[2px] bg-text rounded-sm transition-opacity duration-200", menuOpen && "opacity-0")} />
          <span className={cn("block w-[22px] h-[2px] bg-text rounded-sm transition-transform duration-200", menuOpen && "-translate-y-[7px] -rotate-45")} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-border px-6 pt-4 pb-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text no-underline text-[0.9rem] tracking-[0.06em]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}