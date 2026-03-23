"use client";

import AdminSidebar from "@/components/AdminSidebar";
import ServiceForm from "@/components/ServiceForm";
import Link from "next/link";

export default function AddServicePage() {
  return (
    <>
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto bg-surface min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-30 flex justify-between items-center w-full px-8 lg:px-12 py-6 md:py-8 bg-background/60 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center gap-6">
            <Link href="/admin/services" className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
              <span className="font-label text-xs tracking-widest uppercase font-bold">Back to List</span>
            </Link>
            <h1 className="text-2xl lg:text-4xl font-headline font-bold tracking-[0.05em] uppercase text-white">Create New Service</h1>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-end">
              <span className="text-xs font-label uppercase text-on-surface-variant tracking-tighter">Status</span>
              <span className="text-xs font-label uppercase text-primary font-bold">Drafting Mode</span>
            </div>
          </div>
        </header>
        <div className="flex-1 px-8 lg:px-12 py-8 lg:py-12 max-w-7xl">
          <ServiceForm />
        </div>
      </main>

      {/* Ambient Glows */}
      <div className="fixed top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-tertiary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </>
  );
}
