const services = [
  {
    slug: "mechanical-electrical",
    title: "Mechanical & Electrical Services",
    heroTag: "Technical Excellence",
    heroHeadline: "Precision",
    heroAccent: "Engineering",
    heroImage: "/images/svc-mechanical-hero.jpg",
    heroDescription:
      "Advanced Mechanical & Auto Electrical mastery for the elite performance vehicles of Dubai. We don't just repair; we recalibrate.",
    heroCTA: "Request Inspection",
    descriptionTitle: "Dubai Heat Reliability",
    descriptionParagraphs: [
      "In the extreme climatic conditions of the UAE, standard maintenance protocols are insufficient. Black Bullet Garage specializes in thermal management and high-stress mechanical endurance. Our engine overhaul programs utilize forged internal components and high-temp tolerance seals designed to withstand Dubai's 50°C+ ambient temperatures.",
      "Our Auto Electrical division employs aerospace-grade diagnostic arrays to isolate phantom faults within complex ECU networks and sensor looms. Whether it's a bespoke wiring harness for a custom project or restoring the integrity of a modern supercar's multiplex system, our precision is surgical.",
    ],
    descriptionImage: "/images/svc-mechanical-diag.jpg",
    descriptionImageAlt:
      "Modern automotive technician using high end digital diagnostics",
    stats: [
      { value: "50°C+", label: "Thermal Validation" },
      { value: "0.01mm", label: "Machining Tolerance" },
    ],
    processTitle: "The Process",
    processSteps: [
      { num: "01", title: "Diagnostic", desc: "Deep telemetry capture and visual scoping of mechanical wear states using ultra-sonic and thermal imaging.", icon: "troubleshoot" },
      { num: "02", title: "Analysis", desc: "Data-driven strategy formation. We identify failure points before they occur using predictive modeling.", icon: "analytics" },
      { num: "03", title: "Implementation", desc: "Surgical mechanical repair and electrical recalibration performed in a climate-controlled sterile environment.", icon: "build" },
      { num: "04", title: "Quality Control", desc: "Multi-stage stress tests including Dyno validation and real-world high-ambient temperature endurance cycles.", icon: "verified" },
    ],
    relatedServices: [
      { title: "ECU Tuning", desc: "Stage 1-3 custom mapping optimized for 98 Octane and high-altitude efficiency. Unlock hidden potential without compromising reliability.", icon: "settings_input_component", link: "/services/ecu-programming", cta: "Explore Tuning" },
      { title: "Maintenance", desc: "Predictive service intervals, fluid dynamics management, and preventative part replacement for uncompromising longevity.", icon: "minor_crash", link: "/services/detailing-ceramic", cta: "View Packages" },
    ],
    ctaTitle: "Ready for the",
    ctaAccent: "Next Level?",
    ctaDescription: "Book your technical consultation at our Dubai Performance Center.",
    ctaButton: "Schedule Now",
  },
  {
    slug: "ecu-programming",
    title: "ECU Programming & Diagnostics",
    heroTag: "Digital Precision",
    heroHeadline: "Engine",
    heroAccent: "Intelligence",
    heroImage: "/images/svc-ecu-hero.jpg",
    heroDescription:
      "Unlock the full potential of your vehicle's brain. Our ECU calibration engineers craft bespoke maps for every engine variant, optimized for UAE fuel grades and climate.",
    heroCTA: "Begin Calibration",
    descriptionTitle: "Beyond The Dyno",
    descriptionParagraphs: [
      "ECU remapping has evolved from simple chip-tuning to a complex multidimensional science. At Black Bullet Garage, we conduct a holistic analysis of thermal dynamics, fuel octane variances specific to the UAE, and the kinetic tolerances of each individual component.",
      "We don't just 'flash' a map. The future lies in predictive algorithms that adapt to real-time telemetry data, pushing the boundaries of modern internal combustion and hybrid powertrains.",
    ],
    descriptionImage: "/images/svc-ecu-diag.jpg",
    descriptionImageAlt: "ECU diagnostic equipment with live data graphs",
    stats: [
      { value: "Stage 3", label: "Max Tuning Level" },
      { value: "98 RON", label: "Fuel Optimization" },
    ],
    processTitle: "The Protocol",
    processSteps: [
      { num: "01", title: "Baseline Read", desc: "Full ECU data extraction and stock map analysis with dyno baseline pull.", icon: "sim_card_download" },
      { num: "02", title: "Map Engineering", desc: "Custom calibration of ignition timing, boost pressure, fuel trims and torque limiters.", icon: "tune" },
      { num: "03", title: "Flash & Test", desc: "Map deployment with iterative dyno pulls and real-world validation under load.", icon: "bolt" },
      { num: "04", title: "Certification", desc: "Final performance report with before/after metrics and warranty documentation.", icon: "verified" },
    ],
    relatedServices: [
      { title: "Mechanical Services", desc: "Engine internals, turbo upgrades, and supporting hardware for high-output tunes.", icon: "build", link: "/services/mechanical-electrical", cta: "Explore Mechanical" },
      { title: "Exhaust Systems", desc: "Free-flowing exhaust solutions to complement your ECU tune for maximum gains.", icon: "air", link: "/services/body-repair", cta: "View Exhaust" },
    ],
    ctaTitle: "Unlock",
    ctaAccent: "Hidden Power",
    ctaDescription: "Schedule your ECU consultation at Black Bullet Garage Dubai.",
    ctaButton: "Book Now",
  },
  {
    slug: "body-repair",
    title: "Body Repair & Painting",
    heroTag: "Flawless Restoration",
    heroHeadline: "Body",
    heroAccent: "Perfection",
    heroImage: "/images/svc-body-hero.jpg",
    heroDescription:
      "Factory-grade panel work, custom paint finishes, and structural restoration. Every curve and contour restored to OEM—or beyond.",
    heroCTA: "Request Assessment",
    descriptionTitle: "Precision Bodywork",
    descriptionParagraphs: [
      "From minor cosmetic repairs to full structural restoration, our body shop operates to factory specifications. Utilizing computerized measuring systems and water-based paint technology, we ensure every repair is invisible.",
      "Our custom painting division offers bespoke finishes including multi-stage candy coats, matte wraps, and color-matched aerodynamic components. Dubai's harsh UV environment demands paint systems engineered for longevity.",
    ],
    descriptionImage: "/images/svc-body-diag.jpg",
    descriptionImageAlt: "Professional auto body painting in clean room",
    stats: [
      { value: "OEM+", label: "Paint Quality" },
      { value: "UV-Pro", label: "Climate Protection" },
    ],
    processTitle: "The Process",
    processSteps: [
      { num: "01", title: "Damage Assessment", desc: "3D scanning and structural analysis of all affected panels and sub-frames.", icon: "search" },
      { num: "02", title: "Panel Work", desc: "Precision straightening, welding, and replacement using OEM-spec materials.", icon: "construction" },
      { num: "03", title: "Paint Application", desc: "Multi-layer paint system in climate-controlled booth with computer color matching.", icon: "format_paint" },
      { num: "04", title: "Final Inspection", desc: "Gloss measurement, film thickness verification, and quality sign-off.", icon: "verified" },
    ],
    relatedServices: [
      { title: "PPF & Wrapping", desc: "Protect your fresh paint with self-healing paint protection film or a full color change wrap.", icon: "layers", link: "/services/ppf-wrapping", cta: "View Protection" },
      { title: "Detailing", desc: "Complement your bodywork with professional detailing and ceramic coating.", icon: "auto_awesome", link: "/services/detailing-ceramic", cta: "View Detailing" },
    ],
    ctaTitle: "Restore Your Vehicle's",
    ctaAccent: "Glory",
    ctaDescription: "Get a consultation for paint and body restoration at our Dubai facility.",
    ctaButton: "Get Quote",
  },
  {
    slug: "detailing-ceramic",
    title: "Detailing & Ceramic Coating",
    heroTag: "Surface Science",
    heroHeadline: "Obsessive",
    heroAccent: "Detail",
    heroImage: "/images/svc-detailing-hero.jpg",
    heroDescription:
      "Multi-stage paint correction, nano-ceramic coatings, and interior rejuvenation. Protection that performs under the UAE sun.",
    heroCTA: "Book Detail Package",
    descriptionTitle: "Nano-Level Protection",
    descriptionParagraphs: [
      "Our detailing division treats every vehicle as a canvas. Multi-stage machine polishing removes years of swirl marks and oxidation, revealing the deep clarity beneath. We employ measured paint depth readings at every stage.",
      "Our ceramic coating systems bond at a molecular level, providing years of hydrophobic protection against UV damage, chemical etching, and the abrasive sands of the GCC environment. Each application includes thermal curing for maximum hardness.",
    ],
    descriptionImage: "/images/svc-detailing-diag.jpg",
    descriptionImageAlt: "Close up of ceramic coating application on vehicle",
    stats: [
      { value: "9H+", label: "Coating Hardness" },
      { value: "5 Yr", label: "Protection Duration" },
    ],
    processTitle: "The Protocol",
    processSteps: [
      { num: "01", title: "Deep Wash", desc: "Foam cannon decontamination, clay bar treatment, and iron fallout removal.", icon: "water_drop" },
      { num: "02", title: "Correction", desc: "Multi-stage machine polishing with measured paint depth readings at each stage.", icon: "auto_fix_high" },
      { num: "03", title: "Coating", desc: "Nano-ceramic application in controlled environment with infrared curing.", icon: "layers" },
      { num: "04", title: "Inspection", desc: "UV light inspection, hydrophobic testing, and documentation with photography.", icon: "verified" },
    ],
    relatedServices: [
      { title: "PPF Protection", desc: "Add a physical barrier of self-healing film before your ceramic coating for ultimate defense.", icon: "shield", link: "/services/ppf-wrapping", cta: "Add PPF" },
      { title: "Window Tinting", desc: "Complete your protection package with high-performance ceramic window tint.", icon: "window", link: "/services/window-tinting", cta: "View Tinting" },
    ],
    ctaTitle: "Protect Your",
    ctaAccent: "Investment",
    ctaDescription: "Book your detailing consultation at Black Bullet Garage Dubai.",
    ctaButton: "Book Now",
  },
  {
    slug: "ppf-wrapping",
    title: "PPF & Wrapping",
    heroTag: "Invisible Armor",
    heroHeadline: "Shield",
    heroAccent: "& Transform",
    heroImage: "/images/svc-ppf-hero.jpg",
    heroDescription:
      "Self-healing paint protection film and full-body vinyl wraps. Defend against stone chips, sand abrasion, and UV degradation.",
    heroCTA: "Get Protected",
    descriptionTitle: "Advanced Film Technology",
    descriptionParagraphs: [
      "Our PPF installations utilize the latest self-healing thermoplastic urethane films that recover from light scratches using ambient heat. Computer-cut patterns ensure precise coverage of every panel edge and compound curve.",
      "For color transformation, our vinyl wrapping team offers premium cast films in hundreds of finishes—from satin metallics to color-shifting chromes. Each installation is completed in a dust-free environment with heat-sealed edges.",
    ],
    descriptionImage: "/images/svc-ppf-diag.jpg",
    descriptionImageAlt: "PPF film being carefully applied to car hood",
    stats: [
      { value: "10 Yr", label: "Film Warranty" },
      { value: "200µm", label: "Film Thickness" },
    ],
    processTitle: "The Process",
    processSteps: [
      { num: "01", title: "Surface Prep", desc: "Full decontamination, clay bar, and paint correction of all surfaces to be wrapped.", icon: "cleaning_services" },
      { num: "02", title: "Pattern Cut", desc: "Computer-aided design and cutting for millimeter-precise panel coverage.", icon: "content_cut" },
      { num: "03", title: "Application", desc: "Wet-apply installation in dust-free booth with heat-gun edge sealing.", icon: "layers" },
      { num: "04", title: "Cure & QC", desc: "48-hour controlled cure with final edge inspection under magnification.", icon: "verified" },
    ],
    relatedServices: [
      { title: "Ceramic Coating", desc: "Top your PPF with a ceramic layer for enhanced gloss and self-cleaning properties.", icon: "auto_awesome", link: "/services/detailing-ceramic", cta: "Add Coating" },
      { title: "Window Tinting", desc: "Complete the full exterior protection with heat-rejection window film.", icon: "window", link: "/services/window-tinting", cta: "View Tinting" },
    ],
    ctaTitle: "Wrap or Protect—",
    ctaAccent: "Your Choice",
    ctaDescription: "Schedule your PPF or wrap consultation at our Dubai workshop.",
    ctaButton: "Book Consultation",
  },
  {
    slug: "window-tinting",
    title: "Window Tinting",
    heroTag: "Thermal Defense",
    heroHeadline: "Cool",
    heroAccent: "Precision",
    heroImage: "/images/svc-tinting-hero.jpg",
    heroDescription:
      "High-performance ceramic window films for heat rejection, UV protection, and privacy. Engineered for the Gulf climate.",
    heroCTA: "Select Your Tint",
    descriptionTitle: "Engineered Comfort",
    descriptionParagraphs: [
      "In the GCC, window tinting is not cosmetic—it's essential engineering. Our ceramic IR-rejection films block up to 99% of UV rays and reject over 60% of solar heat, dramatically reducing cabin temperatures and protecting interior surfaces.",
      "We offer multiple tint grades compliant with UAE traffic regulations, from subtle light films to maximum-legal privacy tints. Each installation uses computer-cut templates and is backed by a manufacturer warranty.",
    ],
    descriptionImage: "/images/svc-tinting-diag.jpg",
    descriptionImageAlt: "Professional window tint installation on luxury car",
    stats: [
      { value: "99%", label: "UV Rejection" },
      { value: "60%+", label: "Heat Rejection" },
    ],
    processTitle: "The Protocol",
    processSteps: [
      { num: "01", title: "Glass Prep", desc: "Full cleaning, decontamination, and edge inspection of all glass surfaces.", icon: "cleaning_services" },
      { num: "02", title: "Film Cut", desc: "Computer-template cutting for exact window geometry—no hand-cutting on the vehicle.", icon: "content_cut" },
      { num: "03", title: "Installation", desc: "Wet-apply technique in controlled environment ensuring zero dust or bubbles.", icon: "window" },
      { num: "04", title: "Cure & Test", desc: "Heat gun edge sealing, 72-hour cure, and tint meter verification for compliance.", icon: "verified" },
    ],
    relatedServices: [
      { title: "PPF Protection", desc: "Extend your protection to the paint with self-healing PPF from Black Bullet.", icon: "shield", link: "/services/ppf-wrapping", cta: "Explore PPF" },
      { title: "Detailing", desc: "Pair your tint with a full exterior detail and ceramic coating for complete care.", icon: "auto_awesome", link: "/services/detailing-ceramic", cta: "View Detailing" },
    ],
    ctaTitle: "Beat the",
    ctaAccent: "Heat",
    ctaDescription: "Book your window tinting consultation at our Dubai facility.",
    ctaButton: "Book Now",
  },
];

export default services;

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}

export function getAllSlugs() {
  return services.map((s) => ({ slug: s.slug }));
}
