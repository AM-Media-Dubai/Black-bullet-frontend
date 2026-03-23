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
    <div className="pt-28 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 lg:px-12 max-w-[1600px] mx-auto">
      {/* Header */}
      <header className="mb-16 md:mb-20">
        <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-4">
          THE PROJECT <span className="text-primary">ARCHIVE</span>
        </h1>
        <p className="font-body text-on-surface-variant max-w-2xl text-lg">
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
            <h3 className="font-headline text-2xl md:text-3xl font-black italic uppercase tracking-tighter">
              F8 TRIBUTO &quot;ONYX&quot;
            </h3>
            <p className="text-on-surface-variant text-sm font-medium tracking-wide">
              Full Satin Black Wrap &amp; Stage 2 Tune
            </p>
          </div>
          {/* Slider mockup */}
          <div className="absolute inset-y-0 right-1/2 w-1 bg-primary z-10 hidden md:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-on-primary-fixed flex items-center justify-center rounded-full shadow-2xl">
              <span className="material-symbols-outlined text-sm">
                unfold_more
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {/* Stats Cards */}
          <div className="bg-surface-container-high p-6 md:p-8 flex flex-col justify-center border-l-4 border-primary">
            <span className="font-label text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3 md:mb-4">
              Performance Gains
            </span>
            <div className="text-4xl md:text-5xl font-headline font-black italic mb-2">
              +145
              <span className="text-xl italic font-normal text-on-surface-variant ml-2">
                HP
              </span>
            </div>
            <p className="text-on-surface-variant text-xs uppercase font-bold tracking-widest">
              ECU Remapping &amp; Exhaust
            </p>
          </div>
          <div className="bg-surface-container-high p-6 md:p-8 flex flex-col justify-center border-l-4 border-tertiary">
            <span className="font-label text-tertiary font-bold text-xs uppercase tracking-[0.2em] mb-3 md:mb-4">
              Torque Increase
            </span>
            <div className="text-4xl md:text-5xl font-headline font-black italic mb-2">
              850
              <span className="text-xl italic font-normal text-on-surface-variant ml-2">
                NM
              </span>
            </div>
            <p className="text-on-surface-variant text-xs uppercase font-bold tracking-widest">
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
      <section className="mt-20 md:mt-32 py-16 md:py-24 bg-surface-container flex flex-col items-center text-center px-6 border-t border-white/5">
        <h2 className="font-headline text-3xl md:text-4xl lg:text-6xl font-black italic uppercase tracking-tighter mb-8 max-w-4xl">
          Ready to transform your machine into a{" "}
          <span className="text-primary">masterpiece?</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <Link
            href="/booking"
            className="bg-primary text-on-primary-fixed px-10 md:px-12 py-5 font-label font-black uppercase tracking-[0.2em] text-sm hover:translate-y-[-4px] transition-transform inline-block"
          >
            Start Custom Project
          </Link>
          <Link
            href="/services"
            className="bg-transparent border border-outline px-10 md:px-12 py-5 font-label font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all inline-block"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
