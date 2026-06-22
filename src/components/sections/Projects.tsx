import { projects } from '../../lib/data'
import ProjectCard from '../ui/ProjectCard'
import Card from '../ui/Card'

export default function Projects() {
  return (
    <Card
      title="Recent Projects"
      action={<a href="/projects" className="text-sm font-semibold">View all</a>}
    >
      <div className="flex flex-col gap-3">
        {projects.slice(0, 4).map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </Card>
  )
}