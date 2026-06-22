import { MapPin } from 'lucide-react'
import profile from '../../assets/profile.jpg'

export default function Hero() {
  return (
    <section className="flex items-center gap-6 px-4 py-8">
      <img
        src={profile}
        alt="Jayson Gabriel Limosnero"
        className="w-40 h-40 object-cover"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-bold">Jayson Gabriel L. Limosnero</h1>
        <p className="flex items-center text-sm gap-1 font-semibold">
          <MapPin size={12} />
          Tungkil, Minglanilla, Cebu
        </p>
        <p className="text-sm font-semibold">BSIT Student</p>
      </div>
    </section>
  )
}