import { SKILLS } from "../../app/lib/data";

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="heading-rule font-serif text-[clamp(1.6rem,4vw,2.2rem)] font-semibold text-text mb-12 flex items-center gap-3">
          <span className="font-mono text-[0.8rem] text-amber font-normal tracking-[0.06em]">01.</span>
          About
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div className="flex flex-col gap-4">
            <p className="text-text leading-[1.85]">
              I'm a Full Stack Web Developer with 5+ years of experience crafting
              dynamic web applications. I've driven a 40% reduction in page load times
              through Node.js and TypeScript optimisations, and boosted organic search
              rankings by 25% with Next.js server-side rendering.
            </p>
            <p className="text-text leading-[1.85]">
              I care about the details that matter. Making responsive, accessible interfaces
              (WCAG 2.1 AA), scalable GraphQL APIs, and CI/CD pipelines that let teams
              ship with confidence. Most recently at Nexthink, most excitedly: always
              building something new.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-6">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-[0.7rem] tracking-[0.12em] uppercase text-amber mb-2.5">
                  {category}
                </h3>
                <ul className="flex flex-wrap gap-2 list-none">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="text-[0.77rem] bg-surface border border-border text-text-muted px-[10px] py-[3px] rounded-[6px]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}