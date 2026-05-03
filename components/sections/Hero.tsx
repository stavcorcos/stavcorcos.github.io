"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity =
          cursorRef.current.style.opacity === "0" ? "1" : "0";
      }
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-glow min-h-screen flex items-center pt-32 pb-24 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <p className="text-[0.85rem] text-amber tracking-[0.12em] uppercase mb-3">
          Hello world. I'm
        </p>

        <h1 className="font-serif text-[clamp(3rem,8vw,5.5rem)] font-semibold leading-[1.05] text-cream mb-4">
          Stav Corcos
          <span ref={cursorRef} className="text-amber font-mono">_</span>
        </h1>

        <p className="text-[0.9rem] text-text-muted tracking-[0.06em] mb-6">
          Full Stack Web Developer
          <span className="text-amber-dim mx-2">/</span>
          DevOps
          <span className="text-amber-dim mx-2">/</span>
          Accessibility Advocate
        </p>

        <p className="text-[1rem] text-text max-w-[52ch] leading-[1.8] mb-10">
          I build fast, accessible web applications — from pixel-perfect React
          interfaces to optimised Node.js backends and cloud-ready CI/CD pipelines.
        </p>

        <div className="flex gap-4 flex-wrap mb-12">
          <a
            href="#work"
            className="inline-flex items-center gap-1.5 bg-amber text-bg font-mono text-[0.82rem] font-medium px-[22px] py-[10px] rounded-[6px] no-underline tracking-[0.04em] transition-all duration-200 hover:opacity-85 hover:-translate-y-px"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center bg-transparent text-text font-mono text-[0.82rem] px-[22px] py-[10px] rounded-[6px] border border-border no-underline tracking-[0.04em] transition-all duration-200 hover:border-text-muted"
          >
            Get in touch
          </a>
        </div>

        {/* Decorative terminal snippet */}
        <div
          aria-hidden="true"
          className="inline-block font-mono text-[0.78rem] text-text-muted bg-surface border border-border rounded-[6px] px-5 py-4 leading-[1.9]"
        >
          <span className="text-green">$ </span>
          <span className="text-text">git log --oneline --all</span>
          <br />
          <span className="text-amber-dim mr-2">a3f8c2d</span>
          <span className="text-text-muted">feat: ship new portfolio</span>
          <br />
          <span className="text-amber-dim mr-2">b91e04a</span>
          <span className="text-text-muted">fix: actually make it look good</span>
        </div>
      </div>
    </section>
  );
}
