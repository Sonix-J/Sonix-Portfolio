import { useState, useEffect } from "react";
import Card from "../ui/Card";
import RecommendationCard from "../ui/RecommendationCard";
import { recommendations } from "../../lib/data";

export default function Recommendation() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % recommendations.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card title="Recommendations">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <RecommendationCard
            key={current}
            name={recommendations[current].name}
            testimonials={recommendations[current].testimonials}
            position={recommendations[current].position}
            contact={recommendations[current].contact}
          />
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {recommendations.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-gray-800 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </Card>
  );
}
