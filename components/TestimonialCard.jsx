const testimonials = [
  {
    initials: "KA",
    name: "Khalid Al-Maktoum",
    quote:
      '"Black Bullet completely transformed my 911 Turbo S. The ECU tuning in Dubai\'s heat usually causes lag, but their map is flawless. True professionals."',
    highlight: true,
  },
  {
    initials: "MS",
    name: "Mark Saunders",
    quote:
      '"Best detailing job I\'ve seen in the UAE. The PPF application is literally invisible. My car looks better than when it left the showroom."',
    highlight: false,
  },
  {
    initials: "RJ",
    name: "Reza Jafari",
    quote:
      '"Professional mechanical work for high-end exotics. They diagnosed an issue my dealer couldn\'t find in 3 months. Highly recommend."',
    highlight: false,
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 text-primary mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="material-symbols-outlined filled">
          star
        </span>
      ))}
    </div>
  );
}

export default function TestimonialCard() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-24 bg-surface-container-low">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="font-headline font-black text-3xl md:text-4xl uppercase tracking-widest">
          Client <span className="text-primary italic">Intelligence</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className={`glass-panel p-8 border-l-4 ${
              testimonial.highlight
                ? "border-primary"
                : "border-outline-variant"
            }`}
          >
            <StarRating />
            <p className="font-body text-on-surface italic leading-relaxed mb-6">
              {testimonial.quote}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/20 flex items-center justify-center font-headline font-bold text-primary text-sm">
                {testimonial.initials}
              </div>
              <div>
                <div className="font-headline font-bold text-sm uppercase">
                  {testimonial.name}
                </div>
                <div className="text-xs text-on-surface-variant">
                  Verified Google Review
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
