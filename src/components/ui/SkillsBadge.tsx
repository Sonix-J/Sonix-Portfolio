type SkillsProps = {
  image: string;
  description: string;
};

export default function SkillsBadge({ image, description }: SkillsProps) {
  return (
    <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md">
      <img src={image} alt={description} className="w-6 h-6 object-cover rounded-full" />
      <p className="text-sm font-semibold">{description}</p>
    </div>
  );
}
