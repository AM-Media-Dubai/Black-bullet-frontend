"use client";

import AdminSidebar from "@/components/AdminSidebar";
import Link from "next/link";
import Image from "next/image";

const statsCards = [
  { label: "Total Bookings", value: "1,284", change: "+12%", borderColor: "border-primary-dim", progress: 72 },
  { label: "New Enquiries", value: "42", badge: "Pending", borderColor: "border-tertiary", badgeColor: "text-tertiary" },
  { label: "Revenue Velocity", value: "High Performance", isVelocity: true },
];

const chartBars = [
  { label: "Jan", prev: 40, curr: 60 },
  { label: "Feb", prev: 50, curr: 75 },
  { label: "Mar", prev: 45, curr: 85 },
  { label: "Apr", prev: 60, curr: 95 },
  { label: "May", prev: 55, curr: 70 },
  { label: "Jun", prev: 70, curr: 90 },
];

const bookings = [
  { id: "#BBG-9842", client: "Ahmed Al-Maktoum", vehicle: "Lamborghini Huracán STO", vehicleColor: "Nero Noctis", service: "Stage 2 Tuning", status: "Pending", statusColor: "bg-primary/10 text-primary", dotColor: "bg-primary", date: "Oct 24, 2023" },
  { id: "#BBG-9841", client: "Sarah Jenkins", vehicle: "Porsche 911 GT3 RS", vehicleColor: "Python Green", service: "Full PPF Wrap", status: "Confirmed", statusColor: "bg-[#10b981]/10 text-[#10b981]", dotColor: "bg-[#10b981]", date: "Oct 23, 2023" },
  { id: "#BBG-9839", client: "Marcello Rossi", vehicle: "Ferrari SF90 Stradale", vehicleColor: "Rosso Corsa", service: "Exhaust Upgrade", status: "Completed", statusColor: "bg-tertiary-dim/10 text-tertiary-dim", dotColor: "bg-tertiary-dim", date: "Oct 22, 2023" },
];

export default function AdminDashboardPage() {
  return (
    <>
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto bg-surface min-h-screen">
        {/* Topbar */}
        <header className="flex justify-between items-center w-full px-8 py-4 sticky top-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-black tracking-widest text-white uppercase font-headline">
              Operations Overview
            </h1>
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                search
              </span>
              <input
                className="bg-surface-container-highest border-none text-xs text-white px-10 py-2 w-64 focus:ring-0 focus:border-b-2 focus:border-primary transition-all font-label uppercase tracking-widest placeholder:text-outline"
                placeholder="Search vehicle or client..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-white/10">
              <div className="text-right">
                <p className="text-xs font-headline font-bold text-white uppercase tracking-wider">Admin User</p>
                <p className="text-[10px] text-on-surface-variant">Systems Controller</p>
              </div>
              <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary">person</span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-10">
          {/* Stats Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bookings */}
            <div className="bg-surface-container p-6 border-b-2 border-primary-dim shadow-[0_0_40px_rgba(255,143,115,0.1)]">
              <div className="flex justify-between items-start mb-4">
                <p className="font-headline text-xs font-bold uppercase tracking-[0.1em] text-on-surface-variant">Total Bookings</p>
                <span className="text-primary text-xs font-bold">+12%</span>
              </div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-headline font-bold">1,284</h3>
                <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-tighter">Units</span>
              </div>
              <div className="mt-4 w-full h-1 bg-surface-container-highest">
                <div className="h-full bg-primary" style={{ width: "72%" }} />
              </div>
            </div>
            {/* Enquiries */}
            <div className="bg-surface-container p-6 border-b-2 border-tertiary shadow-[0_0_40px_rgba(255,143,115,0.1)]">
              <div className="flex justify-between items-start mb-4">
                <p className="font-headline text-xs font-bold uppercase tracking-[0.1em] text-on-surface-variant">New Enquiries</p>
                <span className="material-symbols-outlined text-tertiary text-sm">chat_bubble</span>
              </div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-headline font-bold">42</h3>
                <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-tighter">Pending</span>
              </div>
              <p className="mt-4 text-[10px] text-tertiary uppercase font-bold tracking-widest">Action Required</p>
            </div>
            {/* Revenue */}
            <div className="bg-surface-container-highest p-6 relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-4">
                <span className="material-symbols-outlined text-white/5 text-6xl">trending_up</span>
              </div>
              <p className="font-headline text-xs font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-2">Revenue Velocity</p>
              <h3 className="text-2xl font-headline font-bold text-white italic tracking-tighter uppercase">High Performance</h3>
              <div className="mt-4 flex gap-1">
                <div className="h-8 w-full bg-primary/20" />
                <div className="h-10 w-full bg-primary/40" />
                <div className="h-12 w-full bg-primary/60" />
                <div className="h-16 w-full bg-primary" />
                <div className="h-14 w-full bg-primary/80" />
              </div>
            </div>
          </section>

          {/* Chart + Live Stats */}
          <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 bg-surface-container p-8">
              <div className="flex justify-between items-center mb-10">
                <h2 className="font-headline text-lg font-bold uppercase tracking-widest">Booking Velocity</h2>
                <div className="flex gap-4">
                  <span className="flex items-center gap-2 text-[10px] uppercase font-bold text-on-surface-variant">
                    <span className="w-2 h-2 bg-primary" /> Current
                  </span>
                  <span className="flex items-center gap-2 text-[10px] uppercase font-bold text-on-surface-variant">
                    <span className="w-2 h-2 bg-white/10" /> Previous
                  </span>
                </div>
              </div>
              <div className="flex items-end gap-4 h-64 border-l border-b border-white/5 pb-2 pl-4">
                {chartBars.map((bar) => (
                  <div key={bar.label} className="flex-1 flex flex-col justify-end gap-1 h-full">
                    <div className="bg-white/5 w-full" style={{ height: `${bar.prev}%` }} />
                    <div className="bg-primary w-full" style={{ height: `${bar.curr}%` }} />
                    <p className="text-[10px] text-center mt-2 font-headline uppercase text-on-surface-variant">{bar.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-container-high p-8 flex flex-col justify-between border-l border-primary/20">
              <div className="space-y-6">
                <h2 className="font-headline text-sm font-bold uppercase tracking-widest text-primary">Live Stats</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-on-surface-variant mb-1">Service Queue</p>
                    <div className="flex items-center gap-3">
                      <p className="text-2xl font-headline font-bold">12</p>
                      <span className="text-[10px] px-2 py-0.5 bg-error-container text-on-error-container font-bold uppercase">At Capacity</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-on-surface-variant mb-1">Technicians</p>
                    <p className="text-2xl font-headline font-bold">08 <span className="text-sm font-normal text-on-surface-variant">/ 10</span></p>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-white/5">
                <div className="w-full aspect-square bg-surface-container-highest flex items-center justify-center p-4 border border-white/5">
                  <div className="relative w-full h-full rounded-full border-4 border-white/5 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-3xl font-headline font-bold">85%</p>
                      <p className="text-[8px] uppercase font-bold tracking-widest text-on-surface-variant">Utilization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Bookings Table */}
          <section className="bg-surface-container">
            <div className="px-8 py-6 border-b border-white/5 flex justify-between items-center">
              <h2 className="font-headline text-lg font-bold uppercase tracking-widest">Recent Bookings</h2>
              <button className="text-xs uppercase font-bold text-primary hover:underline transition-all">Export Report</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low border-b border-white/5">
                    <th className="px-8 py-4 font-headline text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Client Name</th>
                    <th className="px-8 py-4 font-headline text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Vehicle</th>
                    <th className="px-8 py-4 font-headline text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Service</th>
                    <th className="px-8 py-4 font-headline text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Status</th>
                    <th className="px-8 py-4 font-headline text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Date</th>
                    <th className="px-8 py-4 font-headline text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {bookings.map((b) => (
                    <tr key={b.id} className="hover:bg-white/5 transition-colors group">
                      <td className="px-8 py-5">
                        <p className="text-sm font-bold text-white">{b.client}</p>
                        <p className="text-[10px] text-on-surface-variant">{b.id}</p>
                      </td>
                      <td className="px-8 py-5">
                        <p className="text-sm">{b.vehicle}</p>
                        <p className="text-[10px] text-on-surface-variant">{b.vehicleColor}</p>
                      </td>
                      <td className="px-8 py-5">
                        <span className="text-[10px] font-bold uppercase px-2 py-1 bg-surface-container-highest border border-white/10">{b.service}</span>
                      </td>
                      <td className="px-8 py-5">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${b.statusColor} text-[10px] font-bold uppercase`}>
                          <span className={`w-1 h-1 ${b.dotColor} rounded-full`} /> {b.status}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-sm text-on-surface-variant">{b.date}</td>
                      <td className="px-8 py-5">
                        <button className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="material-symbols-outlined text-lg">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-8 py-4 border-t border-white/5 flex justify-center">
              <Link href="/admin/bookings" className="text-[10px] font-headline font-bold uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors">
                View All Transactions
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
