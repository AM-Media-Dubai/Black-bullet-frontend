"use client";

export default function StarRating({ label, value = 0, onChange, max = 5 }) {
  return (
    <div>
      {label && (
        <label className="block font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3">
          {label}
        </label>
      )}
      <div className="flex items-center gap-1">
        {Array.from({ length: max }, (_, i) => {
          const filled = i < value;
          return (
            <button
              key={i}
              onClick={() => onChange?.(i + 1)}
              className={`transition-all duration-150 hover:scale-125 ${
                filled ? "text-primary" : "text-outline-variant hover:text-primary/50"
              }`}
            >
              <span
                className="material-symbols-outlined text-2xl"
                style={
                  filled
                    ? { fontVariationSettings: "'FILL' 1" }
                    : undefined
                }
              >
                star
              </span>
            </button>
          );
        })}
        <span className="ml-2 text-xs font-headline font-bold text-on-surface-variant">
          {value}/{max}
        </span>
      </div>
    </div>
  );
}
