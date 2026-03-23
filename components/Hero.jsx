import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-car.jpg"
          alt="Dark high performance supercar in Dubai desert at night"
          fill
          className="object-cover grayscale opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-24 w-full">
        <div className="max-w-4xl">
          <h1 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tighter mb-8 uppercase">
            THE KINETIC{" "}
            <span className="text-primary italic">MONOLITH</span> OF DUBAI
            PERFORMANCE
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mt-12">
            <Link
              href="/booking"
              className="kinetic-gradient text-on-primary-fixed font-headline font-black uppercase tracking-widest text-base md:text-lg px-8 md:px-12 py-5 shadow-[0_0_30px_rgba(255,143,115,0.3)] text-center hover:brightness-110 transition-all"
            >
              Book Now
            </Link>
            <Link
              href="https://wa.me/971000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-container/20 border border-outline-variant/30 backdrop-blur-md text-white font-headline font-bold uppercase tracking-widest text-base md:text-lg px-8 md:px-12 py-5 flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
