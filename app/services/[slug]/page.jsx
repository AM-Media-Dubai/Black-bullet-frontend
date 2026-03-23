import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import services, { getServiceBySlug, getAllSlugs } from "@/data/services";
import ServiceDetailHero from "@/components/ServiceDetailHero";
import ServiceProcess from "@/components/ServiceProcess";
import RelatedServices from "@/components/RelatedServices";

export function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | BLACK BULLET GARAGE`,
    description: service.heroDescription,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <ServiceDetailHero service={service} />

      {/* Description + Stats */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-8">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-white uppercase tracking-tight">
              {service.descriptionTitle}
            </h2>
            <div className="space-y-4 text-on-surface-variant font-body leading-loose">
              {service.descriptionParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/20">
              {service.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-primary font-headline font-black text-2xl md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-on-surface-variant font-label">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all duration-500" />
            <Image
              src={service.descriptionImage}
              alt={service.descriptionImageAlt}
              width={800}
              height={600}
              className="relative z-10 w-full grayscale contrast-125 border border-outline-variant/10"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <ServiceProcess
        title={service.processTitle}
        steps={service.processSteps}
      />

      {/* Related Services */}
      <RelatedServices services={service.relatedServices} />

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 md:px-12 relative overflow-hidden bg-surface-container-lowest">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="text-center md:text-left">
            <h2 className="font-headline font-black text-3xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter">
              {service.ctaTitle}{" "}
              <span className="text-primary">{service.ctaAccent}</span>
            </h2>
            <p className="text-on-surface-variant mt-4 text-lg">
              {service.ctaDescription}
            </p>
          </div>
          <Link
            href="/booking"
            className="bg-gradient-to-r from-primary to-primary-dim text-on-primary-fixed px-10 md:px-12 py-4 md:py-5 font-label font-bold uppercase tracking-widest text-base md:text-lg shadow-[0_0_50px_rgba(255,143,115,0.3)] hover:scale-105 transition-transform active:scale-95 shrink-0"
          >
            {service.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
