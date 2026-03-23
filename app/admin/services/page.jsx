"use client";

import AdminSidebar from "@/components/AdminSidebar";
import Link from "next/link";

const serviceRows = [
  { name: "ECU Remapping", sub: "Stage 2 Tuning & Dyno", category: "Performance", price: "AED 3,500", status: "Active", active: true },
  { name: "Carbon Fiber Kits", sub: "Aero Dynamic Enhancements", category: "Exterior", price: "AED 12,900", status: "Active", active: true },
  { name: "Exhaust Systems", sub: "Full Titanium Cat-back", category: "Modifications", price: "AED 8,200", status: "Inactive", active: false },
  { name: "PPF", sub: "Self-healing Paint Protection", category: "Protection", price: "AED 15,000", status: "Active", active: true },
];

export default function AdminServicesPage() {
  return (
    <>
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto bg-surface min-h-screen">
        {/* Topbar */}
        <header className="flex justify-between items-center w-full px-8 lg:px-12 py-6 sticky top-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center gap-8">
            <h2 className="font-headline text-2xl font-black tracking-widest text-white uppercase">Service Inventory</h2>
            <div className="relative hidden lg:block">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-sm">search</span>
              <input className="bg-surface-container-highest border-none text-xs font-label uppercase tracking-widest px-10 py-2 w-64 focus:ring-1 focus:ring-primary placeholder:text-outline" placeholder="Search components..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">notifications</span></button>
            <button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">settings</span></button>
            <div className="h-8 w-8 bg-surface-container-highest flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-sm">person</span>
            </div>
          </div>
        </header>

        <div className="p-8 lg:p-12 space-y-12">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary font-label text-[10px] uppercase tracking-[0.3em]">
                <span className="w-8 h-[1px] bg-primary" />
                <span>Garage Assets</span>
              </div>
              <h3 className="font-headline text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter">Performance Catalog</h3>
            </div>
            <Link href="/admin/services/new" className="bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed px-6 lg:px-8 py-4 font-label uppercase text-sm font-black tracking-widest flex items-center gap-3 hover:shadow-[0_0_40px_rgba(255,143,115,0.1)] transition-all shrink-0">
              <span className="material-symbols-outlined">add_box</span>
              + Add New Service
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-white/5">
            {[
              { label: "Active Services", val: "42" },
              { label: "Pending Updates", val: "05", highlight: true },
              { label: "Avg. Ticket", val: "AED 4.5k" },
              { label: "Category Coverage", val: "12" },
            ].map((s, i) => (
              <div key={s.label} className={`bg-surface-container p-6 lg:p-8 space-y-1 ${i < 3 ? "border-r border-white/5" : ""}`}>
                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">{s.label}</p>
                <p className={`font-headline text-2xl lg:text-3xl font-bold ${s.highlight ? "text-primary" : "text-white"}`}>{s.val}</p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="bg-surface-container/60 backdrop-blur-xl border border-white/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-highest/50 border-b border-white/10">
                  <th className="p-4 lg:p-6 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Image</th>
                  <th className="p-4 lg:p-6 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Service Name</th>
                  <th className="p-4 lg:p-6 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Category</th>
                  <th className="p-4 lg:p-6 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Pricing</th>
                  <th className="p-4 lg:p-6 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Status</th>
                  <th className="p-4 lg:p-6 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {serviceRows.map((r) => (
                  <tr key={r.name} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 lg:p-6">
                      <div className="w-16 h-10 bg-surface-container-lowest border border-white/10 overflow-hidden flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-surface-variant text-sm grayscale group-hover:grayscale-0 transition-all">build</span>
                      </div>
                    </td>
                    <td className="p-4 lg:p-6">
                      <span className="font-headline text-sm font-bold tracking-wider text-white">{r.name}</span>
                      <p className="text-[10px] text-on-surface-variant mt-1">{r.sub}</p>
                    </td>
                    <td className="p-4 lg:p-6"><span className="text-xs font-label uppercase text-on-surface-variant">{r.category}</span></td>
                    <td className="p-4 lg:p-6"><span className="font-headline text-sm font-bold text-white">{r.price}</span></td>
                    <td className="p-4 lg:p-6">
                      <span className={`px-2 py-1 ${r.active ? "bg-primary/10 text-primary" : "bg-error-container/20 text-error"} text-[9px] font-black font-label uppercase tracking-widest`}>{r.status}</span>
                    </td>
                    <td className="p-4 lg:p-6 text-right space-x-2">
                      <button className="p-2 hover:bg-white/5 text-on-surface-variant hover:text-white transition-all"><span className="material-symbols-outlined text-sm">edit</span></button>
                      <button className="p-2 hover:bg-error/10 text-on-surface-variant hover:text-error transition-all"><span className="material-symbols-outlined text-sm">delete</span></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Gauges */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-surface-container/60 backdrop-blur-xl p-8 border border-white/5 relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-label text-xs uppercase tracking-widest font-black">Storage Health</h4>
                  <span className="text-tertiary font-headline font-bold text-lg">78%</span>
                </div>
                <div className="h-1 bg-surface-container-highest overflow-hidden"><div className="h-full bg-tertiary w-[78%]" /></div>
                <p className="text-[10px] text-on-surface-variant leading-relaxed">Media server utilization for 4K service showcase renders.</p>
              </div>
            </div>
            <div className="bg-surface-container/60 backdrop-blur-xl p-8 border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-label text-xs uppercase tracking-widest font-black">Popular Category</h4>
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                </div>
                <p className="font-headline text-xl font-bold uppercase">ECU Remapping</p>
                <p className="text-[10px] text-on-surface-variant leading-relaxed">+12% increase in bookings compared to last month.</p>
              </div>
            </div>
            <div className="bg-surface-container-highest p-8 border border-white/5 space-y-4">
              <h4 className="font-label text-xs uppercase tracking-widest font-black">System Status</h4>
              <div className="flex items-center gap-4">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                </div>
                <span className="font-headline text-sm font-bold uppercase tracking-widest">Core Engine: Optimal</span>
              </div>
              <p className="text-[10px] text-on-surface-variant">Last database sync was performed 4 minutes ago.</p>
            </div>
          </div>

          {/* Footer */}
          <footer className="flex justify-between items-center opacity-50 pt-4">
            <p className="font-label text-[10px] uppercase tracking-widest">© 2024 Black Bullet Garage Admin System v2.4.1</p>
            <div className="flex items-center gap-4">
              <button className="p-2 border border-white/10 hover:border-primary transition-colors"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
              <span className="font-label text-[10px] tracking-widest">01 / 04</span>
              <button className="p-2 border border-white/10 hover:border-primary transition-colors"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
