"use client";

import FormSection from "./FormSection";
import ImageUpload from "./ImageUpload";
import RepeaterField from "./RepeaterField";

export default function ServicesPageEditor({ data, onChange }) {
  const updateField = (section, field, value) => {
    onChange({ ...data, [section]: { ...data[section], [field]: value } });
  };

  const updateService = (index, field, value) => {
    const items = [...data.servicesGrid];
    items[index] = { ...items[index], [field]: value };
    onChange({ ...data, servicesGrid: items });
  };

  const addService = () => {
    onChange({
      ...data,
      servicesGrid: [
        ...data.servicesGrid,
        { num: String(data.servicesGrid.length + 1).padStart(2, "0"), title: "", img: "", alt: "", desc: "", slug: "" },
      ],
    });
  };

  const removeService = (index) => {
    onChange({ ...data, servicesGrid: data.servicesGrid.filter((_, i) => i !== index) });
  };

  const updateEcuFeature = (index, field, value) => {
    const items = [...data.ecuDetail.features];
    items[index] = { ...items[index], [field]: value };
    onChange({ ...data, ecuDetail: { ...data.ecuDetail, features: items } });
  };

  return (
    <div className="space-y-8">
      {/* Services Hero */}
      <FormSection title="Services Page Hero" icon="web">
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">
            Label Text
          </label>
          <input
            type="text"
            value={data.hero.label}
            onChange={(e) => updateField("hero", "label", e.target.value)}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">
              Heading
            </label>
            <input
              type="text"
              value={data.hero.heading}
              onChange={(e) => updateField("hero", "heading", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline"
            />
          </div>
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">
              Heading Accent Word
            </label>
            <input
              type="text"
              value={data.hero.accentWord}
              onChange={(e) => updateField("hero", "accentWord", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-primary italic px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline"
            />
          </div>
        </div>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">
            Description
          </label>
          <textarea
            value={data.hero.description}
            onChange={(e) => updateField("hero", "description", e.target.value)}
            rows={3}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all resize-none placeholder:text-outline"
          />
        </div>
      </FormSection>

      {/* Services Grid */}
      <FormSection title="Services Grid" icon="grid_view">
        <div className="space-y-4">
          {data.servicesGrid.map((service, index) => (
            <div
              key={index}
              className="relative bg-surface-container p-5 group hover:bg-surface-container-high transition-all border-l-2 border-primary/30"
            >
              <div className="absolute -top-3 left-4 px-2 py-0.5 bg-surface-container-highest text-[10px] font-headline font-bold uppercase tracking-widest text-on-surface-variant">
                Service {service.num}
              </div>
              <button
                onClick={() => removeService(index)}
                className="absolute top-3 right-3 w-7 h-7 bg-error/10 hover:bg-error/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-error"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
              <div className="pt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Title</label>
                  <input
                    type="text"
                    value={service.title}
                    onChange={(e) => updateService(index, "title", e.target.value)}
                    className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline"
                  />
                </div>
                <div>
                  <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Image Path</label>
                  <input
                    type="text"
                    value={service.img}
                    onChange={(e) => updateService(index, "img", e.target.value)}
                    className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline"
                  />
                </div>
                <div>
                  <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Slug</label>
                  <input
                    type="text"
                    value={service.slug}
                    onChange={(e) => updateService(index, "slug", e.target.value)}
                    className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Description</label>
                <input
                  type="text"
                  value={service.desc || ""}
                  onChange={(e) => updateService(index, "desc", e.target.value)}
                  className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline"
                  placeholder="Short service description..."
                />
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={addService}
          className="mt-4 w-full border-2 border-dashed border-outline-variant/20 hover:border-primary/40 py-3 flex items-center justify-center gap-2 text-on-surface-variant hover:text-primary transition-all group"
        >
          <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">add_circle</span>
          <span className="font-headline text-xs font-bold uppercase tracking-widest">Add Service</span>
        </button>
      </FormSection>

      {/* ECU Detail Section */}
      <FormSection title="ECU Detail Section" icon="settings_input_component" defaultOpen={false}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Section Label</label>
            <input type="text" value={data.ecuDetail.label} onChange={(e) => updateField("ecuDetail", "label", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Section Heading</label>
            <input type="text" value={data.ecuDetail.heading} onChange={(e) => updateField("ecuDetail", "heading", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
        </div>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Paragraph 1</label>
          <textarea value={data.ecuDetail.para1} onChange={(e) => updateField("ecuDetail", "para1", e.target.value)} rows={3}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all resize-none placeholder:text-outline" />
        </div>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Paragraph 2</label>
          <textarea value={data.ecuDetail.para2} onChange={(e) => updateField("ecuDetail", "para2", e.target.value)} rows={3}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all resize-none placeholder:text-outline" />
        </div>
        <div className="space-y-4">
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant">Feature Cards</label>
          {data.ecuDetail.features.map((feat, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-surface-container p-4 border-l-2 border-primary/30">
              <div>
                <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Title</label>
                <input type="text" value={feat.title} onChange={(e) => updateEcuFeature(i, "title", e.target.value)}
                  className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
              </div>
              <div>
                <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Description</label>
                <input type="text" value={feat.desc} onChange={(e) => updateEcuFeature(i, "desc", e.target.value)}
                  className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
              </div>
            </div>
          ))}
        </div>
      </FormSection>

      {/* CTA Section */}
      <FormSection title="CTA Section" icon="ads_click" defaultOpen={false}>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">CTA Heading</label>
          <input type="text" value={data.cta.heading} onChange={(e) => updateField("cta", "heading", e.target.value)}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
        </div>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Accent Word</label>
          <input type="text" value={data.cta.accentWord} onChange={(e) => updateField("cta", "accentWord", e.target.value)}
            className="w-full bg-surface-container-highest border-none text-primary italic px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Primary Button Text</label>
            <input type="text" value={data.cta.primaryText} onChange={(e) => updateField("cta", "primaryText", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Secondary Button Text</label>
            <input type="text" value={data.cta.secondaryText} onChange={(e) => updateField("cta", "secondaryText", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
        </div>
      </FormSection>
    </div>
  );
}
