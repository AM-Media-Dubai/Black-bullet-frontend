"use client";

import FormSection from "./FormSection";
import ImageUpload from "./ImageUpload";
import RepeaterField from "./RepeaterField";
import StarRating from "./StarRating";
import { useState } from "react";

export default function HomePageEditor({ data, onChange }) {
  const [editingTestimonial, setEditingTestimonial] = useState(null);

  const updateField = (section, field, value) => {
    onChange({ ...data, [section]: { ...data[section], [field]: value } });
  };

  const updatePillar = (index, field, value) => {
    const items = [...data.pillars.items];
    items[index] = { ...items[index], [field]: value };
    onChange({ ...data, pillars: { ...data.pillars, items } });
  };

  const addPillar = () => {
    onChange({
      ...data,
      pillars: { ...data.pillars, items: [...data.pillars.items, { icon: "star", title: "", description: "" }] },
    });
  };

  const removePillar = (index) => {
    onChange({ ...data, pillars: { ...data.pillars, items: data.pillars.items.filter((_, i) => i !== index) } });
  };

  const updateService = (index, field, value) => {
    const items = [...data.services.items];
    items[index] = { ...items[index], [field]: value };
    onChange({ ...data, services: { ...data.services, items } });
  };

  const addService = () => {
    onChange({
      ...data,
      services: { ...data.services, items: [...data.services.items, { icon: "star", title: "", description: "", slug: "" }] },
    });
  };

  const removeService = (index) => {
    onChange({ ...data, services: { ...data.services, items: data.services.items.filter((_, i) => i !== index) } });
  };

  const updateTestimonial = (id, field, value) => {
    onChange({ ...data, testimonials: data.testimonials.map((t) => (t.id === id ? { ...t, [field]: value } : t)) });
  };

  const addTestimonial = () => {
    const newItem = { id: Date.now(), initials: "", name: "", quote: "", rating: 5, highlight: false };
    onChange({ ...data, testimonials: [...data.testimonials, newItem] });
    setEditingTestimonial(newItem.id);
  };

  const removeTestimonial = (id) => {
    onChange({ ...data, testimonials: data.testimonials.filter((t) => t.id !== id) });
    if (editingTestimonial === id) setEditingTestimonial(null);
  };

  return (
    <div className="space-y-8">
      {/* ─── Hero Section ─── */}
      <FormSection title="Hero Section" icon="panorama">
        <ImageUpload
          label="Hero Background Image"
          hint="Current: /images/hero-car.jpg — Recommended 1920×1080px"
          value={data.hero.backgroundImage}
          onChange={(file) => updateField("hero", "backgroundImage", file)}
        />
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Main Heading</label>
          <input type="text" value={data.hero.heading} onChange={(e) => updateField("hero", "heading", e.target.value)}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
        </div>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Heading Accent Word</label>
          <input type="text" value={data.hero.accentWord} onChange={(e) => updateField("hero", "accentWord", e.target.value)}
            className="w-full bg-surface-container-highest border-none text-primary italic px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          <p className="text-[10px] text-on-surface-variant mt-1 opacity-60">This word renders in primary accent color + italic</p>
        </div>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Heading Suffix</label>
          <input type="text" value={data.hero.headingSuffix} onChange={(e) => updateField("hero", "headingSuffix", e.target.value)}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">CTA Button 1 — Text</label>
            <input type="text" value={data.hero.ctaPrimaryText} onChange={(e) => updateField("hero", "ctaPrimaryText", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">CTA Button 1 — Link</label>
            <input type="text" value={data.hero.ctaPrimaryLink} onChange={(e) => updateField("hero", "ctaPrimaryLink", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">CTA Button 2 — Text</label>
            <input type="text" value={data.hero.ctaSecondaryText} onChange={(e) => updateField("hero", "ctaSecondaryText", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">CTA Button 2 — Link</label>
            <input type="text" value={data.hero.ctaSecondaryLink} onChange={(e) => updateField("hero", "ctaSecondaryLink", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
        </div>
      </FormSection>

      {/* ─── Performance Pillars ─── */}
      <FormSection title="Performance Pillars (Why Choose Us)" icon="emoji_events">
        <RepeaterField
          items={data.pillars.items}
          onAdd={addPillar}
          onRemove={removePillar}
          onUpdate={(index, field, value) => updatePillar(index, field, value)}
          addLabel="Add Pillar"
          renderItem={(item, index, update) => (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Material Icon Name</label>
                  <input type="text" value={item.icon} onChange={(e) => update("icon", e.target.value)} placeholder="e.g. precision_manufacturing"
                    className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
                </div>
                <div>
                  <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Title</label>
                  <input type="text" value={item.title} onChange={(e) => update("title", e.target.value)}
                    className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
                </div>
              </div>
              <div>
                <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Description</label>
                <textarea value={item.description} onChange={(e) => update("description", e.target.value)} rows={2}
                  className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all resize-none placeholder:text-outline" />
              </div>
            </div>
          )}
        />
      </FormSection>

      {/* ─── Before / After Slider ─── */}
      <FormSection title="Paint Restoration (Before/After)" icon="compare">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Heading</label>
            <input type="text" value={data.beforeAfter.heading} onChange={(e) => updateField("beforeAfter", "heading", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Accent Word</label>
            <input type="text" value={data.beforeAfter.accentWord} onChange={(e) => updateField("beforeAfter", "accentWord", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-primary italic px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
        </div>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Subtitle</label>
          <input type="text" value={data.beforeAfter.subtitle} onChange={(e) => updateField("beforeAfter", "subtitle", e.target.value)}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ImageUpload label="Before Image" hint="Current: /images/before-car.jpg"
            value={data.beforeAfter.beforeImage} onChange={(file) => updateField("beforeAfter", "beforeImage", file)} />
          <ImageUpload label="After Image" hint="Current: /images/after-car.jpg"
            value={data.beforeAfter.afterImage} onChange={(file) => updateField("beforeAfter", "afterImage", file)} />
        </div>
      </FormSection>

      {/* ─── Performance Ecosystem (Services on Homepage) ─── */}
      <FormSection title="Performance Ecosystem (Services Grid)" icon="grid_view">
        <div className="space-y-4">
          {data.services.items.map((service, index) => (
            <div key={index} className="relative bg-surface-container p-5 group hover:bg-surface-container-high transition-all border-l-2 border-primary/30">
              <div className="absolute -top-3 left-4 px-2 py-0.5 bg-surface-container-highest text-[10px] font-headline font-bold uppercase tracking-widest text-on-surface-variant">
                #{String(index + 1).padStart(2, "0")}
              </div>
              <button onClick={() => removeService(index)}
                className="absolute top-3 right-3 w-7 h-7 bg-error/10 hover:bg-error/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-error">
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
              <div className="pt-2 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Icon</label>
                  <input type="text" value={service.icon} onChange={(e) => updateService(index, "icon", e.target.value)}
                    className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
                </div>
                <div>
                  <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Title</label>
                  <input type="text" value={service.title} onChange={(e) => updateService(index, "title", e.target.value)}
                    className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
                </div>
                <div>
                  <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Description</label>
                  <input type="text" value={service.description} onChange={(e) => updateService(index, "description", e.target.value)}
                    className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
                </div>
                <div>
                  <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Page Slug</label>
                  <input type="text" value={service.slug} onChange={(e) => updateService(index, "slug", e.target.value)}
                    className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={addService}
          className="mt-4 w-full border-2 border-dashed border-outline-variant/20 hover:border-primary/40 py-3 flex items-center justify-center gap-2 text-on-surface-variant hover:text-primary transition-all group">
          <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">add_circle</span>
          <span className="font-headline text-xs font-bold uppercase tracking-widest">Add Service</span>
        </button>
      </FormSection>

      {/* ─── Testimonials ─── */}
      <FormSection title="Client Testimonials" icon="reviews">
        <div className="bg-surface-container">
          <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
            <h2 className="font-headline text-sm font-bold uppercase tracking-widest">Reviews</h2>
            <button onClick={addTestimonial}
              className="bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed font-headline font-bold py-2 px-4 text-[10px] uppercase tracking-widest flex items-center gap-2 active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-xs">add</span> Add
            </button>
          </div>
          <div className="divide-y divide-white/5">
            {data.testimonials.map((t) => {
              const isEditing = editingTestimonial === t.id;
              return (
                <div key={t.id} className={`transition-all ${isEditing ? "bg-white/5" : "hover:bg-white/5"}`}>
                  <div className="flex items-center justify-between px-6 py-4 group">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="w-10 h-10 bg-primary/20 flex items-center justify-center font-headline font-bold text-primary text-sm shrink-0">{t.initials}</div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-white">{t.name || "Untitled"}</p>
                        <div className="flex items-center gap-1 mt-0.5">
                          {Array.from({ length: 5 }, (_, i) => (
                            <span key={i} className={`material-symbols-outlined text-xs ${i < t.rating ? "text-primary" : "text-outline-variant"}`}
                              style={i < t.rating ? { fontVariationSettings: "'FILL' 1" } : undefined}>star</span>
                          ))}
                        </div>
                      </div>
                      {t.highlight && <span className="text-[10px] font-bold uppercase px-2 py-1 bg-primary/10 text-primary border border-primary/20 ml-2">Featured</span>}
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setEditingTestimonial(isEditing ? null : t.id)}
                        className={`w-8 h-8 flex items-center justify-center transition-colors ${isEditing ? "bg-primary/20 text-primary" : "text-on-surface-variant hover:text-white opacity-0 group-hover:opacity-100"}`}>
                        <span className="material-symbols-outlined text-sm">{isEditing ? "check" : "edit"}</span>
                      </button>
                      <button onClick={() => removeTestimonial(t.id)}
                        className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-error opacity-0 group-hover:opacity-100 transition-all">
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  </div>
                  {isEditing && (
                    <div className="px-6 pb-6 space-y-4 border-t border-white/5 pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Client Name</label>
                          <input type="text" value={t.name} onChange={(e) => updateTestimonial(t.id, "name", e.target.value)}
                            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
                        </div>
                        <div>
                          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Initials</label>
                          <input type="text" value={t.initials} onChange={(e) => updateTestimonial(t.id, "initials", e.target.value)} maxLength={2}
                            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all uppercase placeholder:text-outline" />
                        </div>
                      </div>
                      <div>
                        <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Review Text</label>
                        <textarea value={t.quote} onChange={(e) => updateTestimonial(t.id, "quote", e.target.value)} rows={3}
                          className="w-full bg-surface-container-highest border-none text-white italic px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all resize-none placeholder:text-outline" />
                      </div>
                      <div className="flex items-center justify-between">
                        <StarRating label="Rating" value={t.rating} onChange={(val) => updateTestimonial(t.id, "rating", val)} />
                        <div className="flex items-center gap-3">
                          <span className="font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Featured</span>
                          <button onClick={() => updateTestimonial(t.id, "highlight", !t.highlight)}
                            className={`relative w-12 h-6 transition-colors duration-200 ${t.highlight ? "bg-primary" : "bg-surface-container-highest"}`}>
                            <span className={`absolute top-1 w-4 h-4 transition-all duration-200 ${t.highlight ? "left-7 bg-on-primary" : "left-1 bg-on-surface-variant"}`} />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </FormSection>

      {/* ─── Map / Location Section ─── */}
      <FormSection title="Location Section" icon="location_on" defaultOpen={false}>
        <ImageUpload label="Map Background Image" hint="Current: /images/map-dubai.jpg"
          value={data.map.backgroundImage} onChange={(file) => updateField("map", "backgroundImage", file)} />
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Section Title</label>
          <input type="text" value={data.map.title} onChange={(e) => updateField("map", "title", e.target.value)}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
        </div>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Address & Hours</label>
          <textarea value={data.map.addressText} onChange={(e) => updateField("map", "addressText", e.target.value)} rows={2}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all resize-none placeholder:text-outline" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Google Maps Link</label>
            <input type="text" value={data.map.mapsLink} onChange={(e) => updateField("map", "mapsLink", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Button Text</label>
            <input type="text" value={data.map.buttonText} onChange={(e) => updateField("map", "buttonText", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
        </div>
      </FormSection>
    </div>
  );
}
