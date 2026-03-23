import Image from "next/image";
import Link from "next/link";

export default function ServiceDetailHero({ service }) {
  return (
    <section className="relative h-[500px] md:h-[820px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      <div className="relative z-10 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 text-primary font-label font-bold uppercase tracking-[0.2em] text-[10px] mb-6">
            {service.heroTag}
          </span>
          <h1 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tighter leading-none mb-8">
            {service.heroHeadline} <br />
            <span className="text-primary italic">{service.heroAccent}</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl">
            {service.heroDescription}
          </p>
          <div className="flex gap-4">
            <Link
              href="/booking"
              className="bg-primary text-on-primary-fixed px-10 py-4 font-label font-bold uppercase tracking-widest text-sm hover:bg-primary-dim transition-all"
            >
              {service.heroCTA}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
