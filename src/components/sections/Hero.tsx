import { MapPin } from "lucide-react";
import profile from "../../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="flex items-center gap-6">
      <img
        src={profile}
        alt="Jayson Gabriel Limosnero"
        className="w-40 h-40 object-cover"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-bold md:text-xl">
          Jayson Gabriel L. Limosnero
        </h1>
        <p className="flex items-start gap-1 text-sm">
          <MapPin size={16} className="mt-0.5 shrink-0" />
          <span>Cebu, Philippines</span>
        </p>
        <p className="text-sm">
          Frontend Developer - UI/UX Designer
        </p>
      </div>
    </section>
  );
}
