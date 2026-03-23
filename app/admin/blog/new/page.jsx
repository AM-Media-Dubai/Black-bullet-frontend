"use client";

import AdminSidebar from "@/components/AdminSidebar";
import BlogForm from "@/components/BlogForm";
import Link from "next/link";

export default function AddBlogPage() {
  return (
    <>
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto bg-surface min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-30 flex justify-between items-center w-full px-8 lg:px-12 py-6 md:py-8 bg-background/60 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center gap-6">
            <Link href="/admin/blog" className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
              <span className="font-label text-xs tracking-widest uppercase font-bold">Content Engine</span>
            </Link>
            <h1 className="text-2xl lg:text-4xl font-headline font-bold tracking-[0.05em] uppercase text-white">New Intelligence Report</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 bg-surface-container-highest border border-outline-variant text-xs font-label font-bold uppercase tracking-widest hover:bg-surface-bright transition-all">
              Save Draft
            </button>
            <button className="px-6 py-2 bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed text-xs font-label font-bold uppercase tracking-widest active:scale-95 transition-transform">
              Deploy Post
            </button>
          </div>
        </header>
        <div className="p-8 lg:p-12">
          <BlogForm />
        </div>
      </main>
    </>
  );
}
