type ProjectCardProps = {
  title: string;
  description: string;
  link?: string;
};

export default function ProjectCard({
  title,
  description,
  link,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-2 border border-gray-100 p-4"
    >
      <h3 className="font-bold text-md">{title}</h3>
      <p className="text-sm text-gray-800">{description}</p>
      <span className="text-xs px-2 py-1 font-semibold bg-gray-200 self-start">
        {link}
      </span>
    </a>
  );
}
