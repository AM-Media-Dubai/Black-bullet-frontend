"use client";

import ImageUploader from "@/components/ImageUploader";

export default function ServiceForm({ initialData = {} }) {
  const isEdit = !!initialData.title;

  return (
    <div className="grid grid-cols-12 gap-8 md:gap-10">
      {/* Left Column */}
      <div className="col-span-12 lg:col-span-8 flex flex-col gap-8 md:gap-10">
        {/* Core Info */}
        <section className="flex flex-col gap-6 md:gap-8 bg-surface-container p-8 md:p-10 border border-outline-variant/15">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-label text-primary uppercase tracking-[0.2em] font-bold">
              01. Service Essentials
            </span>
            <div className="h-[1px] w-12 bg-primary" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="group relative">
              <label className="block text-xs font-label uppercase text-on-surface-variant mb-3 tracking-widest">
                Service Title
              </label>
              <input
                className="w-full bg-surface-container-highest border-none p-4 text-white focus:ring-0 placeholder:text-outline transition-all focus:bg-surface-bright border-b-2 border-transparent focus:border-primary"
                placeholder="e.g. Stage 2 Performance Remap"
                type="text"
                defaultValue={initialData.title || ""}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-xs font-label uppercase text-on-surface-variant mb-3 tracking-widest">
                  Base Price (AED)
                </label>
                <div className="relative">
                  <input
                    className="w-full bg-surface-container-highest border-none p-4 text-white focus:ring-0 placeholder:text-outline focus:bg-surface-bright border-b-2 border-transparent focus:border-primary"
                    placeholder="2,500"
                    type="number"
                    defaultValue={initialData.price || ""}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xs font-label">
                    AED
                  </span>
                </div>
              </div>
              <div className="group">
                <label className="block text-xs font-label uppercase text-on-surface-variant mb-3 tracking-widest">
                  Category
                </label>
                <select
                  className="w-full bg-surface-container-highest border-none p-4 text-white focus:ring-0 focus:bg-surface-bright border-b-2 border-transparent focus:border-primary appearance-none cursor-pointer"
                  defaultValue={initialData.category || "performance"}
                >
                  <option value="performance">Performance Tuning</option>
                  <option value="aesthetics">Aesthetics &amp; Body</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="protection">Protection</option>
                </select>
              </div>
            </div>
            <div className="group">
              <label className="block text-xs font-label uppercase text-on-surface-variant mb-3 tracking-widest">
                Service Description
              </label>
              <textarea
                className="w-full bg-surface-container-highest border-none p-4 text-white focus:ring-0 placeholder:text-outline focus:bg-surface-bright border-b-2 border-transparent focus:border-primary resize-none"
                placeholder="Describe the precision and performance gains..."
                rows={6}
                defaultValue={initialData.description || ""}
              />
            </div>
          </div>
        </section>

        {/* SEO Section */}
        <section className="flex flex-col gap-6 md:gap-8 bg-surface-container-low p-8 md:p-10 border border-outline-variant/10">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-label text-on-surface-variant uppercase tracking-[0.2em] font-bold">
              02. Search Optimization
            </span>
            <div className="h-[1px] w-12 bg-outline-variant" />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="group">
              <label className="block text-xs font-label uppercase text-on-surface-variant mb-3 tracking-widest">
                Meta Title
              </label>
              <input
                className="w-full bg-surface-container-highest border-none p-4 text-white focus:ring-0 placeholder:text-outline focus:bg-surface-bright border-b-2 border-transparent focus:border-primary"
                placeholder="Service SEO Title"
                type="text"
              />
            </div>
            <div className="group">
              <label className="block text-xs font-label uppercase text-on-surface-variant mb-3 tracking-widest">
                Meta Keywords
              </label>
              <input
                className="w-full bg-surface-container-highest border-none p-4 text-white focus:ring-0 placeholder:text-outline focus:bg-surface-bright border-b-2 border-transparent focus:border-primary"
                placeholder="Dubai, tuning, performance, garage..."
                type="text"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Right Column */}
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 md:gap-8">
        {/* Image Uploader */}
        <div className="bg-surface-container p-6 md:p-8 border border-outline-variant/15">
          <div className="flex flex-col gap-2 mb-6">
            <span className="text-xs font-label text-primary uppercase tracking-[0.2em] font-bold">
              Media Deck
            </span>
            <div className="h-[1px] w-8 bg-primary" />
          </div>
          <ImageUploader
            aspectClass="aspect-square"
            hint="PNG, JPG up to 10MB"
          />
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-outline-variant text-sm">
                  add
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Publishing Card */}
        <div className="bg-surface-container-highest p-6 md:p-8 border-t-4 border-primary shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <h3 className="font-headline text-lg font-bold uppercase tracking-widest text-white mb-6">
            Service Velocity
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <span className="text-xs font-label text-on-surface-variant uppercase">
                Visibility
              </span>
              <span className="text-xs font-label text-white uppercase font-bold">
                Hidden
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <span className="text-xs font-label text-on-surface-variant uppercase">
                Created By
              </span>
              <span className="text-xs font-label text-white uppercase font-bold">
                Admin
              </span>
            </div>
          </div>
          <div className="mt-8 md:mt-10 flex flex-col gap-3">
            <button className="w-full bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed font-label text-xs tracking-[0.2em] uppercase font-black py-4 md:py-5 transition-all active:scale-95 shadow-[0_10px_20px_rgba(255,143,115,0.15)]">
              {isEdit ? "Update Service" : "Publish Service"}
            </button>
            <button className="w-full bg-secondary-container text-on-surface font-label text-xs tracking-[0.2em] uppercase font-bold py-4 md:py-5 hover:bg-surface-bright transition-all border border-outline-variant/20">
              Save Draft
            </button>
          </div>
          <p className="text-[10px] text-on-surface-variant uppercase text-center mt-6 tracking-widest opacity-60">
            Last saved: Just now
          </p>
        </div>

        {/* Alert */}
        <div className="bg-error-container/10 border-l-2 border-error p-4 md:p-6">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-error text-lg">
              error
            </span>
            <div>
              <p className="text-xs font-label uppercase font-bold text-on-error-container tracking-wider">
                Missing Engine Data
              </p>
              <p className="text-[10px] text-on-surface-variant uppercase mt-1">
                Add technical specs to improve conversion rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
