export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-bg-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-[540px] mx-auto">

          <h2 className="heading-rule font-serif text-[clamp(1.6rem,4vw,2.2rem)] font-semibold text-text mb-12 flex items-center gap-3">
            <span className="font-mono text-[0.8rem] text-amber font-normal tracking-[0.06em]">03.</span>
            Contact
          </h2>

          <p className="text-text-muted leading-[1.85] mb-8">
            I'm currently open to new opportunities. Whether you have a question,
            a project idea, or just want to say hi — my inbox is open.
          </p>

          <a
            href="mailto:stavcorcos@gmail.com"
            className="inline-flex items-center gap-1.5 bg-amber text-bg font-mono text-[0.92rem] font-medium px-7 py-3.5 rounded-[6px] no-underline tracking-[0.04em] transition-all duration-200 hover:opacity-85 hover:-translate-y-px"
          >
            Say hello ↗
          </a>

          <div className="flex justify-center gap-8 mt-8">
            {[
              { label: "GitHub", href: "https://github.com/stavcorcos" },
              { label: "LinkedIn", href: "https://linkedin.com/in/stavcorcos" },
              { label: "email", href: "mailto:stavcorcos@gmail.com" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.8rem] text-text-muted no-underline tracking-[0.06em] transition-colors duration-200 hover:text-amber"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
