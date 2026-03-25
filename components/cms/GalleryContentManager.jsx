"use client";

import FormSection from "./FormSection";
import ImageUpload from "./ImageUpload";

export default function GalleryPageEditor({ data, onChange }) {
  const updateField = (section, field, value) => {
    onChange({ ...data, [section]: { ...data[section], [field]: value } });
  };

  const updateGalleryItem = (index, field, value) => {
    const items = [...data.gridItems];
    items[index] = { ...items[index], [field]: value };
    onChange({ ...data, gridItems: items });
  };

  const addGalleryItem = () => {
    onChange({
      ...data,
      gridItems: [
        ...data.gridItems,
        { src: "", alt: "", title: "", subtitle: "", className: "masonry-item-square" },
      ],
    });
  };

  const removeGalleryItem = (index) => {
    onChange({ ...data, gridItems: data.gridItems.filter((_, i) => i !== index) });
  };

  const updateCategory = (index, value) => {
    const cats = [...data.categories];
    cats[index] = value;
    onChange({ ...data, categories: cats });
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <FormSection title="Gallery Page Header" icon="title">
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">
            Page Heading
          </label>
          <input
            type="text"
            value={data.header.heading}
            onChange={(e) => updateField("header", "heading", e.target.value)}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline"
          />
        </div>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">
            Accent Word
          </label>
          <input
            type="text"
            value={data.header.accentWord}
            onChange={(e) => updateField("header", "accentWord", e.target.value)}
            className="w-full bg-surface-container-highest border-none text-primary italic px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline"
          />
        </div>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">
            Subtitle
          </label>
          <textarea
            value={data.header.subtitle}
            onChange={(e) => updateField("header", "subtitle", e.target.value)}
            rows={2}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all resize-none placeholder:text-outline"
          />
        </div>
      </FormSection>

      {/* Featured Build */}
      <FormSection title="Featured Build" icon="star">
        <ImageUpload
          label="Featured Image"
          hint="Current: /images/gallery-ferrari.jpg"
          value={data.featured.image}
          onChange={(file) => updateField("featured", "image", file)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Build Title</label>
            <input type="text" value={data.featured.title} onChange={(e) => updateField("featured", "title", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Build Subtitle</label>
            <input type="text" value={data.featured.subtitle} onChange={(e) => updateField("featured", "subtitle", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container p-4 border-l-2 border-primary/30">
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">HP Gain Label</label>
            <input type="text" value={data.featured.hpLabel} onChange={(e) => updateField("featured", "hpLabel", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2 mt-3">HP Value</label>
            <input type="text" value={data.featured.hpValue} onChange={(e) => updateField("featured", "hpValue", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
          <div className="bg-surface-container p-4 border-l-2 border-tertiary/30">
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Torque Label</label>
            <input type="text" value={data.featured.torqueLabel} onChange={(e) => updateField("featured", "torqueLabel", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2 mt-3">Torque Value</label>
            <input type="text" value={data.featured.torqueValue} onChange={(e) => updateField("featured", "torqueValue", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
        </div>
      </FormSection>

      {/* Filter Categories */}
      <FormSection title="Gallery Filter Categories" icon="filter_list">
        <div className="space-y-3">
          {data.categories.map((cat, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="font-headline text-[10px] font-bold text-on-surface-variant w-6">{index + 1}</span>
              <input
                type="text"
                value={cat}
                onChange={(e) => updateCategory(index, e.target.value)}
                className="flex-1 bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline"
              />
            </div>
          ))}
        </div>
      </FormSection>

      {/* Gallery Items */}
      <FormSection title="Gallery Grid Items" icon="collections" defaultOpen={false}>
        <div className="space-y-4">
          {data.gridItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-surface-container p-5 group hover:bg-surface-container-high transition-all border-l-2 border-primary/30"
            >
              <div className="absolute -top-3 left-4 px-2 py-0.5 bg-surface-container-highest text-[10px] font-headline font-bold uppercase tracking-widest text-on-surface-variant">
                Item #{index + 1}
              </div>
              <button
                onClick={() => removeGalleryItem(index)}
                className="absolute top-3 right-3 w-7 h-7 bg-error/10 hover:bg-error/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-error"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
              <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Title</label>
                  <input type="text" value={item.title} onChange={(e) => updateGalleryItem(index, "title", e.target.value)}
                    className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
                </div>
                <div>
                  <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Subtitle</label>
                  <input type="text" value={item.subtitle} onChange={(e) => updateGalleryItem(index, "subtitle", e.target.value)}
                    className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
                </div>
                <div>
                  <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Image Path</label>
                  <input type="text" value={item.src} onChange={(e) => updateGalleryItem(index, "src", e.target.value)}
                    className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
                </div>
                <div>
                  <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Layout Size</label>
                  <select value={item.className} onChange={(e) => updateGalleryItem(index, "className", e.target.value)}
                    className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all">
                    <option value="masonry-item-square">Square</option>
                    <option value="masonry-item-tall">Tall</option>
                    <option value="masonry-item-wide">Wide</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={addGalleryItem}
          className="mt-4 w-full border-2 border-dashed border-outline-variant/20 hover:border-primary/40 py-3 flex items-center justify-center gap-2 text-on-surface-variant hover:text-primary transition-all group">
          <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">add_circle</span>
          <span className="font-headline text-xs font-bold uppercase tracking-widest">Add Gallery Item</span>
        </button>
      </FormSection>

      {/* CTA Section */}
      <FormSection title="Gallery CTA" icon="ads_click" defaultOpen={false}>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">CTA Heading</label>
          <input type="text" value={data.cta.heading} onChange={(e) => updateField("cta", "heading", e.target.value)}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
        </div>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">CTA Accent Word</label>
          <input type="text" value={data.cta.accentWord} onChange={(e) => updateField("cta", "accentWord", e.target.value)}
            className="w-full bg-surface-container-highest border-none text-primary italic px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Primary Button</label>
            <input type="text" value={data.cta.primaryText} onChange={(e) => updateField("cta", "primaryText", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Secondary Button</label>
            <input type="text" value={data.cta.secondaryText} onChange={(e) => updateField("cta", "secondaryText", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
        </div>
      </FormSection>
    </div>
  );
}
