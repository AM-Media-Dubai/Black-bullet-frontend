"use client";

import AdminSidebar from "@/components/AdminSidebar";
import Image from "next/image";

const bookings = [
  { id: "#BB-2094", client: "Hamad Al-Maktoum", tier: "Premium Tier", vehicle: "Lamborghini Huracán STO", service: "Stage 2 ECU Remap", serviceColor: "bg-tertiary/10 text-tertiary", date: "24 OCT · 14:00", status: "IN-PROGRESS", statusColor: "text-primary" },
  { id: "#BB-2095", client: "Elena Rossi", tier: "New Client", vehicle: "Porsche 911 GT3 RS", service: "Akrapovic Install", serviceColor: "bg-primary/10 text-primary", date: "25 OCT · 09:30", status: "PENDING", statusColor: "text-on-surface-variant" },
  { id: "#BB-2096", client: "Yousif Bin Zayed", tier: "Premium Tier", vehicle: "McLaren 720S", service: "Critical Brake Service", serviceColor: "bg-error-container/20 text-error", date: "25 OCT · 11:00", status: "CRITICAL", statusColor: "text-error" },
  { id: "#BB-2097", client: "Sara Jensen", tier: "Regular", vehicle: "Audi RS6 Avant", service: "Carbon Ceramic Swap", serviceColor: "bg-surface-variant text-on-surface-variant", date: "26 OCT · 16:15", status: "PENDING", statusColor: "text-on-surface-variant" },
];

export default function BookingsPage() {
  return (
    <>
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto bg-surface min-h-screen flex flex-col">
        {/* Topbar */}
        <header className="flex justify-between items-center w-full px-8 py-4 sticky top-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center gap-6">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-sm">search</span>
              <input className="bg-surface-container-highest border-none text-xs font-headline tracking-widest uppercase focus:ring-1 focus:ring-primary pl-10 pr-4 py-2 w-64 text-on-surface" placeholder="SEARCH VIN OR CUSTOMER..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/5 text-on-surface-variant"><span className="material-symbols-outlined">notifications</span></button>
            <button className="p-2 hover:bg-white/5 text-on-surface-variant"><span className="material-symbols-outlined">settings</span></button>
            <div className="h-8 w-8 bg-surface-container-highest border border-outline-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-sm">person</span>
            </div>
          </div>
        </header>

        <section className="p-8 flex-1 flex gap-8">
          {/* Table Section */}
          <div className="flex-1 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
              <div>
                <h2 className="text-4xl font-headline font-black tracking-tight text-white uppercase">Master Booking Log</h2>
                <p className="text-on-surface-variant font-body mt-2">Managing 42 active performance tuning requests.</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-surface-container-low p-1 flex gap-1 border border-white/5">
                  <select className="bg-transparent border-none text-[10px] font-headline font-bold uppercase tracking-widest text-on-surface-variant focus:ring-0">
                    <option>ALL DATES</option><option>TODAY</option><option>THIS WEEK</option>
                  </select>
                  <div className="w-px h-4 bg-white/10 self-center" />
                  <select className="bg-transparent border-none text-[10px] font-headline font-bold uppercase tracking-widest text-on-surface-variant focus:ring-0">
                    <option>STATUS</option><option>PENDING</option><option>IN-PROGRESS</option><option>COMPLETED</option>
                  </select>
                  <div className="w-px h-4 bg-white/10 self-center" />
                  <select className="bg-transparent border-none text-[10px] font-headline font-bold uppercase tracking-widest text-on-surface-variant focus:ring-0">
                    <option>SERVICE</option><option>ECU TUNING</option><option>EXHAUST</option><option>SUSPENSION</option>
                  </select>
                </div>
                <button className="bg-surface-container-highest px-4 py-2 border border-white/5 hover:bg-white/10">
                  <span className="material-symbols-outlined text-sm">filter_list</span>
                </button>
              </div>
            </div>
            <div className="bg-surface-container border border-white/5 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-high border-b border-white/10">
                    <th className="px-6 py-4 text-[10px] font-headline font-black uppercase tracking-widest text-on-surface-variant">ID</th>
                    <th className="px-6 py-4 text-[10px] font-headline font-black uppercase tracking-widest text-on-surface-variant">Customer</th>
                    <th className="px-6 py-4 text-[10px] font-headline font-black uppercase tracking-widest text-on-surface-variant">Vehicle</th>
                    <th className="px-6 py-4 text-[10px] font-headline font-black uppercase tracking-widest text-on-surface-variant">Service Required</th>
                    <th className="px-6 py-4 text-[10px] font-headline font-black uppercase tracking-widest text-on-surface-variant">Scheduled</th>
                    <th className="px-6 py-4 text-[10px] font-headline font-black uppercase tracking-widest text-on-surface-variant">Status</th>
                    <th className="px-6 py-4 text-[10px] font-headline font-black uppercase tracking-widest text-on-surface-variant text-right">Manage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {bookings.map((b) => (
                    <tr key={b.id} className="hover:bg-white/5 transition-colors cursor-pointer">
                      <td className="px-6 py-5 font-headline font-bold text-xs text-primary">{b.id}</td>
                      <td className="px-6 py-5">
                        <span className="text-sm font-bold text-white">{b.client}</span>
                        <span className="block text-[10px] text-on-surface-variant uppercase">{b.tier}</span>
                      </td>
                      <td className="px-6 py-5 text-sm text-on-surface-variant">{b.vehicle}</td>
                      <td className="px-6 py-5">
                        <span className={`px-2 py-1 ${b.serviceColor} text-[10px] font-headline font-bold uppercase tracking-tighter`}>{b.service}</span>
                      </td>
                      <td className="px-6 py-5 text-xs text-on-surface-variant">{b.date}</td>
                      <td className="px-6 py-5">
                        <select className={`bg-surface-container-highest border-none text-[10px] font-headline font-bold uppercase tracking-widest ${b.statusColor} focus:ring-1 focus:ring-primary py-1 px-2`}>
                          <option>{b.status}</option>
                          <option>PENDING</option>
                          <option>IN-PROGRESS</option>
                          <option>COMPLETED</option>
                          <option>CANCELLED</option>
                        </select>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="text-on-surface-variant hover:text-white"><span className="material-symbols-outlined">more_vert</span></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick View Sidebar */}
          <aside className="w-80 2xl:w-96 space-y-6 hidden lg:block">
            <div className="bg-surface-container border border-white/5 p-6 space-y-8 sticky top-24">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-headline font-black uppercase tracking-widest text-white">Quick View</h3>
                <span className="text-[10px] font-headline font-bold text-primary tracking-widest bg-primary/10 px-2 py-1">SELECTED: #BB-2094</span>
              </div>
              <div className="relative group aspect-video overflow-hidden bg-black">
                <div className="w-full h-full bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant">directions_car</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-[10px] font-headline font-bold text-primary uppercase">Vehicle Profile</p>
                  <h4 className="text-xl font-headline font-black text-white uppercase italic">Huracán STO</h4>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[10px] font-headline font-bold text-on-surface-variant uppercase">Current Status</span>
                  <span className="text-[10px] font-headline font-bold text-primary uppercase">Engine Disassembly</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[10px] font-headline font-bold text-on-surface-variant uppercase">Assigned Tech</span>
                  <span className="text-[10px] font-headline font-bold text-white uppercase">Marco V.</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[10px] font-headline font-bold text-on-surface-variant uppercase">Est. Completion</span>
                  <span className="text-[10px] font-headline font-bold text-white uppercase">26 OCT · 18:00</span>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-[10px] font-headline font-bold text-on-surface-variant uppercase mb-4 tracking-widest">Tuning Stage Progress</p>
                <div className="relative h-1 bg-surface-container-highest">
                  <div className="absolute h-full bg-primary" style={{ width: "65%" }} />
                  <div className="absolute right-0 -top-6 text-[10px] font-headline font-bold text-primary">65%</div>
                </div>
              </div>
              <div className="pt-6 grid grid-cols-2 gap-2">
                <button className="bg-surface-container-highest border border-outline-variant text-[10px] font-headline font-bold uppercase py-3 hover:bg-white/5 transition-colors">Contact Client</button>
                <button className="bg-primary text-on-primary-fixed text-[10px] font-headline font-bold uppercase py-3 active:scale-95 transition-transform">Full Worksheet</button>
              </div>
            </div>
            <div className="bg-error-container/10 border border-error-container/30 p-4">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-error">warning</span>
                <div>
                  <p className="text-[10px] font-headline font-black text-error uppercase">Stock Alert</p>
                  <p className="text-[10px] font-body text-on-error-container mt-1">Gaskets for #BB-2096 are currently delayed. ETA +2 days.</p>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}
