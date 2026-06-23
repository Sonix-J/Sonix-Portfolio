import Card from "../ui/Card";
import { socials } from "../../lib/data";
import { Mail } from "lucide-react";

export default function Links() {
  return (
    <Card title="Social Links">
      <div className="flex flex-col gap-3">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-70 transition"
          >
            <img src={social.image} alt={social.name} className="w-5 h-5" />
            <span className="text-sm font-medium">{social.name}</span>
          </a>
        ))}
        <a
          href="mailto:limosnerogabriel@gmail.com"
          className="border p-2 border-gray-200 flex flex-col gap-1 shadow-sm"
        >
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <p className="text-xs font-bold ">Email</p>
          </div>
          <div>
            <p className="text-xs font-bold">limosnerogabriel@gmail.com</p>
          </div>
        </a>
      </div>
    </Card>
  );
}
