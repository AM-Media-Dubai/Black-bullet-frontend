import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TestimonialCard from "@/components/TestimonialCard";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Black Bullet Garage Performance | Dubai",
  description:
    "The pinnacle of performance tuning and aesthetic restoration in Dubai. ECU remapping, detailing, PPF, and bespoke automotive engineering.",
};

function PillarsSection() {
  const pillars = [
    {
      icon: "precision_manufacturing",
      title: "Precision",
      desc: "Aerospace-grade diagnostic tools and master technicians calibrated for millimetric accuracy.",
    },
    {
      icon: "thermostat",
      title: "Dubai Heat Optimized",
      desc: "Engineered thermal management systems designed to conquer the most extreme desert climates.",
    },
    {
      icon: "military_tech",
      title: "Elite Craftsmanship",
      desc: "A bespoke approach where every vehicle is treated as a singular piece of kinetic engineering.",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-24 bg-surface">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {pillars.map((p, i) => (
          <div
            key={p.title}
            className={`p-8 md:p-12 ${
              i < 2 ? "md:border-r border-outline-variant/10" : ""
            } hover:bg-surface-container transition-all group ${
              i === 1 ? "bg-surface-container-low" : ""
            }`}
          >
            <span className="material-symbols-outlined text-primary text-4xl md:text-5xl mb-6 md:mb-8 block">
              {p.icon}
            </span>
            <h3 className="font-headline font-bold text-xl md:text-2xl mb-4 uppercase tracking-tight">
              {p.title}
            </h3>
            <p className="text-on-surface-variant font-body leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="h-[400px] md:h-[614px] w-full relative grayscale overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/map-dubai.jpg"
          alt="Stylized map of Dubai with Black Bullet Garage location"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="glass-panel p-8 md:p-12 text-center max-w-lg border border-white/10 mx-6">
          <h3 className="font-headline font-black text-2xl md:text-3xl mb-4 uppercase tracking-tighter">
            Visit the Forge
          </h3>
          <p className="font-body text-on-surface-variant mb-6 md:mb-8">
            Al Quoz Industrial Area 3, Dubai, UAE.
            <br />
            Mon - Sat: 09:00 - 20:00
          </p>
          <Link
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-headline font-bold px-8 py-3 uppercase tracking-widest text-sm hover:bg-primary transition-all inline-block"
          >
            Get Directions
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <PillarsSection />
      <BeforeAfterSlider />
      <ServiceCard />
      <TestimonialCard />
      <MapSection />
    </>
  );
}
