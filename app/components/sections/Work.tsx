import { PROJECTS } from "../..//lib/data";
import ProjectCard from "../../components/ui/ProjectCard";

export default function Work() {
  const featured = PROJECTS.filter((p) => p.featured);
  const other = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="work" className="py-28 bg-bg-alt">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="heading-rule font-serif text-[clamp(1.6rem,4vw,2.2rem)] font-semibold text-text mb-12 flex items-center gap-3">
          <span className="font-mono text-[0.8rem] text-amber font-normal tracking-[0.06em]">02.</span>
          Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        {other.length > 0 && (
          <>
            <h3 className="text-[0.75rem] tracking-[0.12em] uppercase text-text-muted mb-5">
              Other projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {other.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
