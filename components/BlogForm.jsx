"use client";

import ImageUploader from "@/components/ImageUploader";

export default function BlogForm({ initialData = {} }) {
  const isEdit = !!initialData.title;

  return (
    <form className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
      {/* Left Column (2/3) */}
      <div className="lg:col-span-2 space-y-6 md:space-y-8">
        {/* Content Basics */}
        <section className="bg-surface-container p-6 md:p-8 border-l-2 border-primary-dim">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="material-symbols-outlined text-primary">
              description
            </span>
            <h3 className="font-headline text-xl font-bold uppercase tracking-wider">
              Content Basics
            </h3>
          </div>
          <div className="space-y-6">
            <div className="group">
              <label className="block font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 group-focus-within:text-primary transition-colors">
                Blog Title
              </label>
              <input
                className="w-full bg-surface-container-highest border-none focus:ring-0 text-white font-headline text-lg p-4 transition-all focus:shadow-[inset_0_-2px_0_#ff8f73]"
                placeholder="e.g. STAGE 3 TUNING: THE BLACK BULLET PROTOCOL"
                type="text"
                defaultValue={initialData.title || ""}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 group-focus-within:text-primary transition-colors">
                  Slug (System ID)
                </label>
                <input
                  className="w-full bg-surface-container-low border-none focus:ring-0 text-outline font-body text-sm p-4 cursor-not-allowed"
                  disabled
                  placeholder="auto-generated-from-title"
                  type="text"
                  defaultValue={initialData.slug || ""}
                />
              </div>
              <div className="group">
                <label className="block font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 group-focus-within:text-primary transition-colors">
                  Category
                </label>
                <select
                  className="w-full bg-surface-container-highest border-none focus:ring-0 text-white font-body text-sm p-4 appearance-none"
                  defaultValue={initialData.category || ""}
                >
                  <option>Performance Tuning</option>
                  <option>Aesthetic Modifications</option>
                  <option>Workshop News</option>
                  <option>Client Spotlight</option>
                </select>
              </div>
            </div>
            <div className="group">
              <label className="block font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 group-focus-within:text-primary transition-colors">
                Short Description
              </label>
              <textarea
                className="w-full bg-surface-container-highest border-none focus:ring-0 text-white font-body text-sm p-4 transition-all focus:shadow-[inset_0_-2px_0_#ff8f73]"
                placeholder="A brief tactical overview for the listing feed..."
                rows={3}
                defaultValue={initialData.shortDesc || ""}
              />
            </div>
            <div className="group">
              <div className="flex justify-between items-center mb-2">
                <label className="block font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest group-focus-within:text-primary transition-colors">
                  Full Intelligence Content
                </label>
                <div className="flex gap-2">
                  <button
                    className="p-1 text-outline hover:text-white transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-sm">
                      format_bold
                    </span>
                  </button>
                  <button
                    className="p-1 text-outline hover:text-white transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-sm">
                      format_italic
                    </span>
                  </button>
                  <button
                    className="p-1 text-outline hover:text-white transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-sm">
                      link
                    </span>
                  </button>
                </div>
              </div>
              <textarea
                className="w-full bg-surface-container-highest border-none focus:ring-0 text-white font-body text-base p-4 md:p-6 transition-all focus:shadow-[inset_0_-2px_0_#ff8f73] leading-relaxed"
                placeholder="Start documenting the performance journey..."
                rows={12}
                defaultValue={initialData.content || ""}
              />
            </div>
          </div>
        </section>

        {/* SEO Section */}
        <section className="bg-surface-container p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="material-symbols-outlined text-tertiary">
              travel_explore
            </span>
            <h3 className="font-headline text-xl font-bold uppercase tracking-wider">
              Metadata &amp; SEO
            </h3>
          </div>
          <div className="space-y-6">
            <div className="group">
              <label className="block font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 group-focus-within:text-tertiary transition-colors">
                Tags (Comma Separated)
              </label>
              <input
                className="w-full bg-surface-container-highest border-none focus:ring-0 text-white font-body text-sm p-4 transition-all focus:shadow-[inset_0_-2px_0_#e9aaff]"
                placeholder="dubai-tuning, supercar, stage-3, performance"
                type="text"
              />
            </div>
            <div className="group">
              <label className="block font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 group-focus-within:text-tertiary transition-colors">
                SEO Meta Title
              </label>
              <input
                className="w-full bg-surface-container-highest border-none focus:ring-0 text-white font-body text-sm p-4 transition-all focus:shadow-[inset_0_-2px_0_#e9aaff]"
                placeholder="Meta title for search engines"
                type="text"
              />
            </div>
            <div className="group">
              <label className="block font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 group-focus-within:text-tertiary transition-colors">
                SEO Meta Description
              </label>
              <textarea
                className="w-full bg-surface-container-highest border-none focus:ring-0 text-white font-body text-sm p-4 transition-all focus:shadow-[inset_0_-2px_0_#e9aaff]"
                placeholder="Discover the technical specifications and performance gains..."
                rows={3}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Right Column (1/3) */}
      <div className="space-y-6 md:space-y-8">
        {/* Media */}
        <section className="bg-surface-container p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="material-symbols-outlined text-primary">
              photo_library
            </span>
            <h3 className="font-headline text-xl font-bold uppercase tracking-wider">
              Media Assets
            </h3>
          </div>
          <div className="space-y-6 md:space-y-8">
            <ImageUploader
              label="Featured Image"
              hint="Recommended: 1920x1080px (MAX 2MB)"
            />
            <div>
              <label className="block font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">
                Open Graph (Social)
              </label>
              <div className="group h-28 md:h-32 bg-surface-container-highest border border-outline-variant hover:border-tertiary transition-colors flex items-center justify-center cursor-pointer">
                <div className="text-center">
                  <span className="material-symbols-outlined text-2xl text-outline group-hover:text-tertiary">
                    share
                  </span>
                  <span className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">
                    Upload Card Visual
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visibility */}
        <section className="bg-surface-container p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-secondary">
              visibility
            </span>
            <h3 className="font-headline text-xl font-bold uppercase tracking-wider">
              Visibility
            </h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-surface-container-highest/50">
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                Post Status
              </span>
              <span className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant font-label text-[10px] uppercase font-bold tracking-tighter">
                {isEdit ? "Published" : "New Draft"}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-surface-container-highest/50">
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                Access Level
              </span>
              <span className="px-2 py-0.5 bg-primary/10 text-primary font-label text-[10px] uppercase font-bold tracking-tighter">
                Public
              </span>
            </div>
          </div>
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-outline-variant/20">
            <h4 className="font-label text-[10px] font-bold text-outline uppercase tracking-widest mb-4">
              Quick Actions
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="p-3 bg-surface-container-highest text-on-surface-variant hover:text-white hover:bg-surface-bright transition-all"
              >
                <span className="material-symbols-outlined text-sm">
                  preview
                </span>
                <span className="block text-[10px] font-label uppercase font-bold mt-1">
                  Preview
                </span>
              </button>
              <button
                type="button"
                className="p-3 bg-surface-container-highest text-on-surface-variant hover:text-error transition-all"
              >
                <span className="material-symbols-outlined text-sm">
                  delete_forever
                </span>
                <span className="block text-[10px] font-label uppercase font-bold mt-1">
                  Discard
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </form>
  );
}
