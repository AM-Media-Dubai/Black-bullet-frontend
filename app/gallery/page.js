import Image from "next/image";
import Link from "next/link";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Gallery | BLACK BULLET GARAGE",
  description:
    "Witness the evolution of performance. Explore our most prestigious Dubai builds — from bespoke aerodynamic kits to radical engine remapping.",
};

export default function GalleryPage() {
  return (
    <div className="pt-24 md:pt-28 pb-12 md:pb-16 px-4 lg:px-6 max-w-[1200px] mx-auto">
      {/* Header */}
      <header className="mb-12 md:mb-16">
        <h1 className="font-headline text-[clamp(48px,6vw,96px)] font-black uppercase tracking-tighter mb-4 leading-none">
          THE PROJECT <span className="text-primary">ARCHIVE</span>
        </h1>
        <p className="font-body text-on-surface-variant max-w-2xl text-[clamp(14px,1.2vw,18px)]">
          Witness the evolution of performance. From bespoke aerodynamic kits to
          radical engine remapping, explore our most prestigious Dubai builds.
        </p>
      </header>

      {/* Featured Build */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16 md:mb-24">
        <div className="relative aspect-video group overflow-hidden bg-surface-container">
          <Image
            src="/images/gallery-ferrari.jpg"
            alt="Dark gray Ferrari F8 Tributo in showroom"
            fill
            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-primary px-3 py-1 font-label text-[10px] font-black uppercase tracking-widest text-on-primary-fixed">
            Featured Build
          </div>
          <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8">
            <h3 className="font-headline text-[clamp(24px,2.5vw,36px)] font-black italic uppercase tracking-tighter">
              F8 TRIBUTO &quot;ONYX&quot;
            </h3>
            <p className="text-on-surface-variant text-[clamp(12px,1vw,14px)] font-medium tracking-wide">
              Full Satin Black Wrap &amp; Stage 2 Tune
            </p>
          </div>
          {/* Slider mockup */}
          <div className="absolute inset-y-0 right-1/2 w-1 bg-primary z-10 hidden md:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-primary text-on-primary-fixed flex items-center justify-center rounded-full shadow-2xl">
              <span className="material-symbols-outlined text-[1.2rem]">
                unfold_more
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {/* Stats Cards */}
          <div className="bg-surface-container-high p-6 md:p-8 flex flex-col justify-center border-l-4 border-primary">
            <span className="font-label text-primary font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-4">
              Performance Gains
            </span>
            <div className="text-[clamp(36px,4vw,64px)] font-headline font-black italic mb-1 md:mb-2 leading-none">
              +145
              <span className="text-[clamp(16px,2vw,24px)] italic font-normal text-on-surface-variant ml-2">
                HP
              </span>
            </div>
            <p className="text-on-surface-variant text-[10px] md:text-xs uppercase font-bold tracking-widest mt-2">
              ECU Remapping &amp; Exhaust
            </p>
          </div>
          <div className="bg-surface-container-high p-6 md:p-8 flex flex-col justify-center border-l-4 border-tertiary">
            <span className="font-label text-tertiary font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-4">
              Torque Increase
            </span>
            <div className="text-[clamp(36px,4vw,64px)] font-headline font-black italic mb-1 md:mb-2 leading-none">
              850
              <span className="text-[clamp(16px,2vw,24px)] italic font-normal text-on-surface-variant ml-2">
                NM
              </span>
            </div>
            <p className="text-on-surface-variant text-[10px] md:text-xs uppercase font-bold tracking-widest mt-2">
              Precision Tuning
            </p>
          </div>

          {/* Video card */}
          <div className="col-span-2 relative aspect-[21/9] bg-surface-container overflow-hidden group">
            <Image
              src="/images/gallery-rear.jpg"
              alt="Rear view of a modern luxury sports car"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-surface-container/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-white text-2xl md:text-3xl filled">
                  play_arrow
                </span>
              </div>
            </div>
            <div className="absolute bottom-3 md:bottom-4 left-4 md:left-6 font-label text-[10px] font-bold uppercase tracking-widest text-white/60">
              Process: Carbon Kit Install
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <GalleryGrid />

      {/* CTA */}
      <section className="mt-16 md:mt-24 py-12 md:py-16 bg-surface-container flex flex-col items-center text-center px-4 border-t border-white/5 rounded-none max-w-full">
        <h2 className="font-headline text-[clamp(28px,4vw,48px)] font-black italic uppercase tracking-tighter mb-8 max-w-3xl">
          Ready to transform your machine into a{" "}
          <span className="text-primary">masterpiece?</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">
          <Link
            href="/booking"
            className="bg-primary text-on-primary-fixed px-8 py-4 font-label font-black uppercase tracking-[0.2em] text-[clamp(12px,1vw,14px)] hover:translate-y-[-4px] transition-transform inline-block w-full md:w-auto"
          >
            Start Custom Project
          </Link>
          <Link
            href="/services"
            className="bg-transparent border border-outline px-8 py-4 font-label font-black uppercase tracking-[0.2em] text-[clamp(12px,1vw,14px)] hover:bg-white hover:text-black transition-all inline-block w-full md:w-auto"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
