export default function ImageUploader({ label, hint, aspectClass = "aspect-video" }) {
  return (
    <div>
      {label && (
        <label className="block font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">
          {label}
        </label>
      )}
      <div
        className={`relative group ${aspectClass} bg-surface-container-highest border-2 border-dashed border-outline-variant/30 hover:border-primary transition-colors flex flex-col items-center justify-center cursor-pointer overflow-hidden`}
      >
        <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-primary transition-colors mb-2">
          cloud_upload
        </span>
        <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
          Drop Image Here
        </span>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-primary blur-3xl -z-10" />
      </div>
      {hint && (
        <p className="text-[10px] text-on-surface-variant mt-2 font-label uppercase tracking-widest opacity-60">
          {hint}
        </p>
      )}
    </div>
  );
}
