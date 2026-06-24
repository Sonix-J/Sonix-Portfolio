import { projects } from "../../lib/data";
import ProjectCard from "../ui/ProjectCard";
import Card from "../ui/Card";

export default function Projects() {
  return (
    <Card
      title="Recent Projects"
      action={
        <a href="/projects" className="text-sm font-semibold hover:underline">
          View all
        </a>
      }
    >
      <div className="flex flex-col gap-3 md:grid md:grid-cols-2">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            preview={project.preview}
          />
        ))}
      </div>
    </Card>
  );
}
