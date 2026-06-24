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
      className="flex flex-col bg-gray-200 rounded overflow-hidden hover:bg-gray-300 transition-colors duration-200"
    >
      {preview && (
        <img src={preview} alt={title} className="w-full h-36 object-cover" />
      )}
      <div className="flex flex-col gap-2 p-4 flex-1 justify-between">
        <div>
          <h3 className="font-bold text-md">{title}</h3>

          <p className="text-sm text-gray-800">{description}</p>
        </div>

        <span className="text-xs px-2 py-1 font-semibold border rounded bg-white self-start">
          {link}
        </span>
      </div>
    </a>
  );
}
