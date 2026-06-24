import { useState } from "react";
import { uiDesigns } from "../../lib/data";
import Card from "../ui/Card";

export default function Designs() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Card
        title="Designs"
        action={
          <a href="/projects" className="text-sm font-semibold hover:underline">
            View all
          </a>
        }
      >
        <div className="flex gap-4 overflow-x-auto pb-2">
          {uiDesigns.slice(0, 6).map((design) => (
            <button
              key={design.id}
              onClick={() => setSelectedImage(design.preview)}
              className="min-w-[300px] flex-shrink-0 overflow-hidden rounded-xl"
            >
              <img
                src={design.preview}
                alt=""
                className="h-48 w-full object-cover transition hover:scale-105"
              />
            </button>
          ))}
        </div>
      </Card>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 text-3xl text-white"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
          />
        </div>
      )}
    </>
  );
}
