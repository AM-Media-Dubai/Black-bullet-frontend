"use client";

import { useState } from "react";

export default function ImageUpload({
  label,
  hint,
  value,
  onChange,
  aspectClass = "aspect-video",
}) {
  const [preview, setPreview] = useState(value || null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      onChange?.(file);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    onChange?.(null);
  };

  return (
    <div>
      {label && (
        <label className="block font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3">
          {label}
        </label>
      )}

      {preview ? (
        <div className={`relative group ${aspectClass} bg-surface-container-highest overflow-hidden`}>
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <label className="cursor-pointer bg-primary/20 hover:bg-primary/30 border border-primary/40 px-4 py-2 text-primary text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">swap_horiz</span>
              Replace
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            <button
              onClick={handleRemove}
              className="bg-error/20 hover:bg-error/30 border border-error/40 px-4 py-2 text-error text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">delete</span>
              Remove
            </button>
          </div>
        </div>
      ) : (
        <label
          className={`relative group ${aspectClass} bg-surface-container-highest border-2 border-dashed border-outline-variant/30 hover:border-primary transition-colors flex flex-col items-center justify-center cursor-pointer overflow-hidden`}
        >
          <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-primary transition-colors mb-2">
            cloud_upload
          </span>
          <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
            Drop Image Here
          </span>
          <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50 mt-1">
            or click to browse
          </span>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-primary blur-3xl -z-10" />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      )}

      {hint && (
        <p className="text-[10px] text-on-surface-variant mt-2 font-label uppercase tracking-widest opacity-60">
          {hint}
        </p>
      )}
    </div>
  );
}
