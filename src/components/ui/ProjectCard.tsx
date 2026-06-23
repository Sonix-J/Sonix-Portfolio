type ProjectCardProps = {
  title: string;
  description: string;
  link?: string;
  preview?: string;
};

export default function ProjectCard({
  title,
  description,
  link,
  preview,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col bg-gray-200 rounded overflow-hidden"
    >
      {preview && (
        <img src={preview} alt={title} className="w-full h-36 object-cover" />
      )}
      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-row gap-2 justify-between items-center">
          <h3 className="font-bold text-md">{title}</h3>

          <span className="text-xs px-2 py-1 font-semibold border rounded bg-white self-start">
            {link}
          </span>
        </div>

        <p className="text-sm text-gray-800">{description}</p>
      </div>
    </a>
  );
}
