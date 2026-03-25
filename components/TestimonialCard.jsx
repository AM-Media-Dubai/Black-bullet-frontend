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

function StarRating({ rating = 5 }) {
  return (
    <div className="flex gap-1 text-primary mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`material-symbols-outlined ${i < Math.round(rating) ? "filled" : ""}`}>
          star
        </span>
      ))}
    </div>
  );
}

export default function TestimonialCard({ reviewsData }) {
  const isDynamic = !!(reviewsData && reviewsData.reviews && reviewsData.reviews.length > 0);
  const displayReviews = isDynamic ? reviewsData.reviews.slice(0, 3) : testimonials;
  const overallRating = reviewsData?.rating || 5.0;
  const totalReviewsCount = reviewsData?.totalReviews || 0;

  return (
    <section className="py-16 md:py-20 bg-surface-container-low">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline font-black text-[clamp(24px,3vw,36px)] uppercase tracking-widest">
            Client <span className="text-primary italic">Intelligence</span>
          </h2>
          {isDynamic && (
            <div className="mt-4 inline-flex items-center gap-2 bg-white/5 py-2 px-6 rounded-full border border-white/10">
              <span className="text-yellow-400 font-bold text-lg">⭐ {overallRating}</span>
              <span className="text-on-surface-variant text-sm font-body">({totalReviewsCount} Google Reviews)</span>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayReviews.map((testimonial, idx) => {
            const isHighlight = isDynamic ? idx === 1 : testimonial.highlight;
            const authorName = isDynamic ? testimonial.author_name : testimonial.name;
            const quoteText = isDynamic ? `"${testimonial.text}"` : testimonial.quote;
            const initials = isDynamic 
              ? authorName.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase()
              : testimonial.initials;
            const timeDesc = isDynamic ? testimonial.relative_time_description : "Verified Google Review";
            const profilePhoto = isDynamic ? testimonial.profile_photo_url : null;
            const rating = isDynamic ? testimonial.rating : 5;

            return (
              <div
                key={authorName + idx}
                className={`glass-panel p-8 border-l-4 ${
                  isHighlight
                    ? "border-primary"
                    : "border-outline-variant"
                } flex flex-col`}
              >
                <StarRating rating={rating} />
                <p className="font-body text-[clamp(14px,1.2vw,18px)] text-on-surface italic leading-relaxed mb-6 line-clamp-6">
                  {quoteText}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  {profilePhoto ? (
                    <img src={profilePhoto} alt={authorName} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                  ) : (
                    <div className="w-10 h-10 bg-primary/20 flex items-center justify-center font-headline font-bold text-primary text-sm flex-shrink-0 rounded-full">
                      {initials}
                    </div>
                  )}
                  <div>
                    <div className="font-headline font-bold text-sm uppercase line-clamp-1">
                      {authorName}
                    </div>
                    <div className="text-xs text-on-surface-variant">
                      {timeDesc}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
