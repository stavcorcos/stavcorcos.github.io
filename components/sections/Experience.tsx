import { EXPERIENCE } from "../../app/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="heading-rule font-serif text-[clamp(1.6rem,4vw,2.2rem)] font-semibold text-text mb-12 flex items-center gap-3">
          <span className="font-mono text-[0.8rem] text-amber font-normal tracking-[0.06em]">02.</span>
          Experience
        </h2>

        <div className="flex flex-col gap-10">
          {EXPERIENCE.map((exp, i) => (
            <div
              key={i}
              className="timeline-item border-l-2 border-border pl-7"
            >
              {/* Header */}
              <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                <div>
                  <h3 className="font-serif text-[1.1rem] font-semibold text-cream">
                    {exp.role}
                  </h3>
                  <p className="text-[0.82rem] text-amber mt-0.5">{exp.company}</p>
                </div>
                <span className="text-[0.75rem] text-text-muted whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-2 mb-4 list-none">
                {exp.description.map((d, j) => (
                  <li key={j} className="text-[0.83rem] text-text-muted leading-[1.7]">
                    <span className="text-amber mr-2">▸</span>
                    {d}
                  </li>
                ))}
              </ul>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[0.7rem] text-text-dim bg-surface border border-border px-[9px] py-[2px] rounded-[6px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
