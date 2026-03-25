"use client";

export default function RepeaterField({
  label,
  items,
  onAdd,
  onRemove,
  onUpdate,
  renderItem,
  addLabel = "Add Item",
}) {
  return (
    <div>
      {label && (
        <label className="block font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">
          {label}
        </label>
      )}

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative bg-surface-container-low border border-white/5 p-5 group transition-all hover:border-primary/20"
          >
            {/* Item number badge */}
            <div className="absolute -top-3 left-4 px-2 py-0.5 bg-surface-container-highest text-[10px] font-headline font-bold uppercase tracking-widest text-on-surface-variant border border-white/10">
              #{index + 1}
            </div>

            {/* Remove button */}
            <button
              onClick={() => onRemove(index)}
              className="absolute top-3 right-3 w-7 h-7 bg-error/10 hover:bg-error/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-error"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>

            <div className="pt-2">
              {renderItem(item, index, (field, value) =>
                onUpdate(index, field, value)
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add button */}
      <button
        onClick={onAdd}
        className="mt-4 w-full border-2 border-dashed border-outline-variant/20 hover:border-primary/40 py-3 flex items-center justify-center gap-2 text-on-surface-variant hover:text-primary transition-all group"
      >
        <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">
          add_circle
        </span>
        <span className="font-label text-xs font-bold uppercase tracking-widest">
          {addLabel}
        </span>
      </button>
    </div>
  );
}
