"use client";

import { useState } from "react";
import FormSection from "./FormSection";
import ImageUpload from "./ImageUpload";

export default function BlogPageEditor({ data, onChange }) {
  const [editingArticle, setEditingArticle] = useState(null);

  const updateField = (section, field, value) => {
    onChange({ ...data, [section]: { ...data[section], [field]: value } });
  };

  const updateArticle = (index, field, value) => {
    const items = [...data.relatedArticles];
    items[index] = { ...items[index], [field]: value };
    onChange({ ...data, relatedArticles: items });
  };

  const addArticle = () => {
    const newItem = { img: "", alt: "", category: "", title: "", desc: "" };
    onChange({ ...data, relatedArticles: [...data.relatedArticles, newItem] });
    setEditingArticle(data.relatedArticles.length);
  };

  const removeArticle = (index) => {
    onChange({
      ...data,
      relatedArticles: data.relatedArticles.filter((_, i) => i !== index),
    });
    if (editingArticle === index) setEditingArticle(null);
  };

  const updateCategory = (index, field, value) => {
    const items = [...data.categories];
    items[index] = { ...items[index], [field]: value };
    onChange({ ...data, categories: items });
  };

  const updateRecentPost = (index, field, value) => {
    const items = [...data.recentPosts];
    items[index] = { ...items[index], [field]: value };
    onChange({ ...data, recentPosts: items });
  };

  return (
    <div className="space-y-8">
      {/* Featured Article */}
      <FormSection title="Featured Article (Hero)" icon="newspaper">
        <ImageUpload
          label="Hero Background Image"
          hint="Current: /images/blog-engine.jpg — Recommended 1920×716px"
          value={data.featuredArticle.image}
          onChange={(file) => updateField("featuredArticle", "image", file)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Category Badge</label>
            <input type="text" value={data.featuredArticle.category} onChange={(e) => updateField("featuredArticle", "category", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Date</label>
            <input type="text" value={data.featuredArticle.date} onChange={(e) => updateField("featuredArticle", "date", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
        </div>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Title</label>
          <input type="text" value={data.featuredArticle.title} onChange={(e) => updateField("featuredArticle", "title", e.target.value)}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
        </div>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Accent Phrase</label>
          <input type="text" value={data.featuredArticle.accentPhrase} onChange={(e) => updateField("featuredArticle", "accentPhrase", e.target.value)}
            className="w-full bg-surface-container-highest border-none text-primary italic px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Author Name</label>
            <input type="text" value={data.featuredArticle.authorName} onChange={(e) => updateField("featuredArticle", "authorName", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
          <div>
            <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Author Title</label>
            <input type="text" value={data.featuredArticle.authorTitle} onChange={(e) => updateField("featuredArticle", "authorTitle", e.target.value)}
              className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          </div>
        </div>
      </FormSection>

      {/* Article Body */}
      <FormSection title="Article Body Content" icon="edit_note">
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Lead Quote</label>
          <textarea value={data.articleBody.leadQuote} onChange={(e) => updateField("articleBody", "leadQuote", e.target.value)} rows={3}
            className="w-full bg-surface-container-highest border-none text-white italic px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all resize-none placeholder:text-outline border-l-4 border-l-primary/30" />
        </div>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Paragraph 1</label>
          <textarea value={data.articleBody.para1} onChange={(e) => updateField("articleBody", "para1", e.target.value)} rows={3}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all resize-none placeholder:text-outline" />
        </div>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Paragraph 2</label>
          <textarea value={data.articleBody.para2} onChange={(e) => updateField("articleBody", "para2", e.target.value)} rows={3}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all resize-none placeholder:text-outline" />
        </div>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Callout Box Heading</label>
          <input type="text" value={data.articleBody.calloutTitle} onChange={(e) => updateField("articleBody", "calloutTitle", e.target.value)}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
        </div>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Closing Paragraph</label>
          <textarea value={data.articleBody.para3} onChange={(e) => updateField("articleBody", "para3", e.target.value)} rows={3}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all resize-none placeholder:text-outline" />
        </div>
      </FormSection>

      {/* Related Articles */}
      <FormSection title="Related Articles" icon="library_books">
        <div className="bg-surface-container">
          <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
            <h2 className="font-headline text-sm font-bold uppercase tracking-widest">Articles</h2>
            <span className="text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-widest">
              {data.relatedArticles.length} entries
            </span>
          </div>
          <div className="divide-y divide-white/5">
            {data.relatedArticles.map((article, index) => {
              const isEditing = editingArticle === index;
              return (
                <div key={index} className={`transition-all ${isEditing ? "bg-white/5" : "hover:bg-white/5"}`}>
                  <div className="flex items-center justify-between px-6 py-4 group">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <span className="text-[10px] font-bold uppercase px-2 py-1 bg-primary/10 text-primary">{article.category}</span>
                      <p className="text-sm font-bold text-white truncate">{article.title || "Untitled"}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setEditingArticle(isEditing ? null : index)}
                        className={`w-8 h-8 flex items-center justify-center transition-colors ${isEditing ? "bg-primary/20 text-primary" : "text-on-surface-variant hover:text-white opacity-0 group-hover:opacity-100"}`}>
                        <span className="material-symbols-outlined text-sm">{isEditing ? "check" : "edit"}</span>
                      </button>
                      <button onClick={() => removeArticle(index)}
                        className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-error opacity-0 group-hover:opacity-100 transition-all">
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  </div>
                  {isEditing && (
                    <div className="px-6 pb-6 space-y-4 border-t border-white/5 pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Title</label>
                          <input type="text" value={article.title} onChange={(e) => updateArticle(index, "title", e.target.value)}
                            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
                        </div>
                        <div>
                          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Category</label>
                          <input type="text" value={article.category} onChange={(e) => updateArticle(index, "category", e.target.value)}
                            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
                        </div>
                      </div>
                      <div>
                        <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Description</label>
                        <textarea value={article.desc} onChange={(e) => updateArticle(index, "desc", e.target.value)} rows={2}
                          className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all resize-none placeholder:text-outline" />
                      </div>
                      <div>
                        <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Image Path</label>
                        <input type="text" value={article.img} onChange={(e) => updateArticle(index, "img", e.target.value)}
                          className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <button onClick={addArticle}
          className="mt-4 w-full border-2 border-dashed border-outline-variant/20 hover:border-primary/40 py-3 flex items-center justify-center gap-2 text-on-surface-variant hover:text-primary transition-all group">
          <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">add_circle</span>
          <span className="font-headline text-xs font-bold uppercase tracking-widest">Add Article</span>
        </button>
      </FormSection>

      {/* Sidebar */}
      <FormSection title="Blog Sidebar" icon="dashboard_customize" defaultOpen={false}>
        <div>
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-3">Categories</label>
          <div className="space-y-3">
            {data.categories.map((cat, index) => (
              <div key={index} className="flex items-center gap-3 bg-surface-container p-3">
                <input type="text" value={cat.name} onChange={(e) => updateCategory(index, "name", e.target.value)}
                  className="flex-1 bg-surface-container-highest border-none text-white px-4 py-2 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
                <input type="number" value={cat.count} onChange={(e) => updateCategory(index, "count", parseInt(e.target.value) || 0)}
                  className="w-20 bg-surface-container-highest border-none text-white px-3 py-2 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all text-center" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-3">Recent Posts</label>
          <div className="space-y-3">
            {data.recentPosts.map((post, index) => (
              <div key={index} className="bg-surface-container p-3 space-y-2">
                <input type="text" value={post.category} onChange={(e) => updateRecentPost(index, "category", e.target.value)} placeholder="Category"
                  className="w-full bg-surface-container-highest border-none text-primary px-4 py-2 text-xs font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
                <input type="text" value={post.title} onChange={(e) => updateRecentPost(index, "title", e.target.value)} placeholder="Post title"
                  className="w-full bg-surface-container-highest border-none text-white px-4 py-2 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Newsletter Title</label>
          <input type="text" value={data.newsletter.title} onChange={(e) => updateField("newsletter", "title", e.target.value)}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-outline" />
          <label className="block font-headline text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2 mt-4">Newsletter Description</label>
          <textarea value={data.newsletter.description} onChange={(e) => updateField("newsletter", "description", e.target.value)} rows={2}
            className="w-full bg-surface-container-highest border-none text-white px-4 py-3 text-sm font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all resize-none placeholder:text-outline" />
        </div>
      </FormSection>
    </div>
  );
}
