import Link from "next/link";

const serviceSummaries = [
  {
    icon: "settings_input_component",
    title: "Mechanical & Electrical",
    description: "Complete engine overhauls and diagnostic electrical operations.",
    slug: "mechanical-electrical"
  },
  {
    icon: "speed",
    title: "ECU Tuning",
    description: "Proprietary performance maps calibrated for local fuel and heat.",
    slug: "ecu-programming"
  },
  {
    icon: "car_repair",
    title: "Body Repair",
    description: "Chassis alignment and carbon-fiber panel restoration.",
    slug: "body-repair"
  },
  {
    icon: "auto_awesome",
    title: "Detailing",
    description: "Multi-stage correction and ceramic molecular bonding.",
    slug: "detailing-ceramic"
  },
  {
    icon: "layers",
    title: "PPF",
    description: "Self-healing invisible shielding against desert debris.",
    slug: "ppf-wrapping"
  },
  {
    icon: "brightness_low",
    title: "Tinting",
    description: "Nanotechnology films with 99.9% heat and UV rejection.",
    slug: "window-tinting"
  },
];

export default function ServiceCard() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-24 bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-4">
        <div>
          <h2 className="font-headline font-black text-4xl md:text-6xl uppercase tracking-tighter">
            Performance <br />
            <span className="text-primary">Ecosystem</span>
          </h2>
        </div>
        <div className="hidden md:block pb-4 border-b border-outline w-1/3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant/20">
        {serviceSummaries.map((service, index) => (
          <div
            key={service.slug}
            className="bg-surface p-8 md:p-12 hover:bg-surface-container transition-all group relative overflow-hidden flex flex-col items-start"
          >
            <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 font-headline font-black text-7xl md:text-8xl">
              {String(index + 1).padStart(2, "0")}
            </div>
            <span className="material-symbols-outlined text-3xl md:text-4xl mb-6 text-primary">
              {service.icon}
            </span>
            <h4 className="font-headline font-bold text-lg md:text-xl mb-4 uppercase text-white">
              {service.title}
            </h4>
            <p className="text-on-surface-variant mb-8 font-body flex-1">
              {service.description}
            </p>
            <Link
              href={`/services/${service.slug}`}
              className="mt-auto text-primary font-headline font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-4 transition-all"
            >
              Explore{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
