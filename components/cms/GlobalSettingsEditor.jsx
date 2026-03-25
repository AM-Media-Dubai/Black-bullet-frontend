"use client";

import FormSection from "./FormSection";

export default function GlobalSettingsEditor({ data, onChange }) {
  const updateField = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  const updateHours = (index, field, value) => {
    const hours = [...data.workingHours];
    hours[index] = { ...hours[index], [field]: value };
    onChange({ ...data, workingHours: hours });
  };

  return (
    <div className="space-y-8">
      {/* Contact */}
      <FormSection title="Contact Information" icon="call">
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">
            WhatsApp Number
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm font-bold">+</span>
            <input
              type="text"
              value={data.whatsappNumber}
              onChange={(e) => updateField("whatsappNumber", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white pl-8 pr-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline"
            />
          </div>
          <p className="text-[10px] text-on-surface-variant mt-1 opacity-60">
            Include country code without + sign. Used in WhatsApp button & Hero CTA.
          </p>
        </div>
      </FormSection>

      {/* SEO */}
      <FormSection title="SEO Defaults" icon="search">
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">
            Default Page Title
          </label>
          <input
            type="text"
            value={data.seoTitle}
            onChange={(e) => updateField("seoTitle", e.target.value)}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline"
          />
          <div className="flex justify-between mt-1">
            <p className="text-[10px] text-on-surface-variant opacity-60">50–60 characters recommended</p>
            <p className={`text-[10px] font-headline font-bold ${data.seoTitle.length > 60 ? "text-error" : "text-on-surface-variant opacity-60"}`}>
              {data.seoTitle.length}/60
            </p>
          </div>
        </div>

        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">
            Meta Description
          </label>
          <textarea
            value={data.metaDescription}
            onChange={(e) => updateField("metaDescription", e.target.value)}
            rows={3}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all resize-none placeholder:text-outline"
          />
          <div className="flex justify-between mt-1">
            <p className="text-[10px] text-on-surface-variant opacity-60">150–160 characters recommended</p>
            <p className={`text-[10px] font-headline font-bold ${data.metaDescription.length > 160 ? "text-error" : "text-on-surface-variant opacity-60"}`}>
              {data.metaDescription.length}/160
            </p>
          </div>
        </div>
      </FormSection>

      {/* Footer */}
      <FormSection title="Footer Content" icon="bottom_navigation">
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">
            Brand Tagline
          </label>
          <textarea
            value={data.footerTagline}
            onChange={(e) => updateField("footerTagline", e.target.value)}
            rows={2}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all resize-none placeholder:text-outline"
          />
        </div>

        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">
            Copyright Text
          </label>
          <input
            type="text"
            value={data.copyrightText}
            onChange={(e) => updateField("copyrightText", e.target.value)}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline"
          />
        </div>
      </FormSection>

      {/* Google Maps */}
      <FormSection title="Google Maps" icon="location_on" defaultOpen={false}>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">
            Google Maps Embed URL
          </label>
          <input
            type="text"
            value={data.mapsEmbedUrl}
            onChange={(e) => updateField("mapsEmbedUrl", e.target.value)}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline"
          />
        </div>

        {data.mapsEmbedUrl && (
          <div className="bg-surface-container-highest">
            <div className="px-4 py-2 border-b border-white/5 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">preview</span>
              <span className="font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Preview</span>
            </div>
            <div className="aspect-video bg-surface-container flex items-center justify-center">
              <div className="text-center">
                <span className="material-symbols-outlined text-4xl text-outline-variant mb-2">map</span>
                <p className="text-xs text-on-surface-variant">Map preview will render here</p>
              </div>
            </div>
          </div>
        )}
      </FormSection>

      {/* Working Hours */}
      <FormSection title="Working Hours" icon="schedule">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low border-b border-white/5">
                <th className="px-4 py-3 font-headline text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Day</th>
                <th className="px-4 py-3 font-headline text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Open</th>
                <th className="px-4 py-3 font-headline text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Close</th>
                <th className="px-4 py-3 font-headline text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {data.workingHours.map((item, index) => (
                <tr key={index} className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3">
                    <span className="text-sm font-bold text-white">{item.day}</span>
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      value={item.open}
                      onChange={(e) => updateHours(index, "open", e.target.value)}
                      className="bg-surface-container-highest border-none text-white px-3 py-2 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all w-24 text-center placeholder:text-outline"
                      placeholder="09:00"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      value={item.close}
                      onChange={(e) => updateHours(index, "close", e.target.value)}
                      className="bg-surface-container-highest border-none text-white px-3 py-2 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all w-24 text-center placeholder:text-outline"
                      placeholder="18:00"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase ${
                      item.closed
                        ? "bg-error/10 text-error"
                        : "bg-[#10b981]/10 text-[#10b981]"
                    }`}>
                      <span className={`w-1 h-1 rounded-full ${item.closed ? "bg-error" : "bg-[#10b981]"}`} />
                      {item.closed ? "Closed" : "Open"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FormSection>
    </div>
  );
}
