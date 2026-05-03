import { Project } from "../../types";
import { cn } from "../../lib/utils";

interface Props {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured }: Props) {
  return (
    <article
      className={cn(
        "bg-surface border border-border rounded-[9px] flex flex-col gap-3.5 transition-all duration-200 hover:border-amber-dim hover:-translate-y-0.5",
        featured ? "p-8" : "p-7"
      )}
    >
      <div className="flex justify-between items-center">
        <span className="text-[0.72rem] text-text-dim">{project.year}</span>
        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.75rem] text-text-muted no-underline transition-colors duration-200 hover:text-amber"
            >
              GitHub ↗
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.75rem] text-text-muted no-underline transition-colors duration-200 hover:text-amber"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      <h3 className="font-serif text-[1.15rem] font-semibold text-cream">
        {project.title}
      </h3>

      <p className="text-[0.82rem] text-text-muted leading-[1.75] flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[0.7rem] text-amber-dim bg-amber/[0.07] border border-amber/[0.15] px-[9px] py-[2px] rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}