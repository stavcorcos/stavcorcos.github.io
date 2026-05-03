export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-amber text-[0.9rem]">[SC]</span>
        <p className="text-[0.75rem] text-text-dim">
          Designed & built by <strong className="font-medium text-text">Stav Corcos</strong> · {year}
        </p>
        <div className="flex gap-5">
          {[
            { label: "GitHub", href: "https://github.com/stavcorcos" },
            { label: "LinkedIn", href: "https://linkedin.com/in/stavcorcos" },
            { label: "Email", href: "mailto:stavcorcos@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-[0.77rem] text-text-muted no-underline transition-colors duration-200 hover:text-amber"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
