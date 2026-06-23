type RecommendationCardProps = {
  name: string;
  testimonials: string;
  position: string;
  contact: string;
};

export default function RecommendationCard({
  name,
  testimonials,
  position,
  contact,
}: RecommendationCardProps) {
  return (
    <div className="flex items-start">
      <div className="flex flex-col gap-2">
        <p className=" text-sm">"{testimonials}"</p>
        <div className="border-b border-gray-300"></div>
        <div>
          <p className="font-bold text-md">{name}</p>
          <p className="text-sm font-semibold">{position}</p>
          <p className="text-gray-500 text-xs">{contact}</p>
        </div>
      </div>
    </div>
  );
}
