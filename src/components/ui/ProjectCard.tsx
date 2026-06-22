type ProjectCardProps = {
  title: string
  description: string
  link?: string
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-gray-100  p-4 shadow-sm bg-white"
    >
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="text-gray-500 mt-1">{description}</p>
    </a>
  )
}