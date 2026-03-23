"use client";

import AdminSidebar from "@/components/AdminSidebar";
import Link from "next/link";

const blogCards = [
  { title: "Optimizing the 4.0L V8 Twin-Turbo for Dubai Heat", tag: "Engineering", date: "Oct 12, 2023", views: "2.4k Views", excerpt: "A deep dive into the technical modifications required to maintain peak performance during summer months in the UAE..." },
  { title: "Titanium vs Inconel: Choosing the Right Sound", tag: "Exhaust", date: "Oct 08, 2023", views: "1.8k Views", excerpt: "Weight reduction and heat dissipation properties compared for ultra-performance exhaust systems." },
  { title: "Stage 3 Upgrades for the 2024 Land Cruiser", tag: "Off-Road", date: "Sep 29, 2023", views: "3.1k Views", excerpt: "Pushing the boundaries of off-road performance without sacrificing reliability on the dunes." },
  { title: "2023 Summer Event Recap", tag: "Event", date: "Sep 15, 2023", views: "1.2k Views", excerpt: "A look back at our exclusive private track day at Dubai Autodrome.", archived: true },
];

export default function AdminBlogPage() {
  return (
    <>
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto bg-surface-dim min-h-screen">
        {/* Topbar */}
        <header className="flex justify-between items-center w-full px-8 lg:px-10 py-6 lg:py-8 sticky top-0 z-30 bg-background/60 backdrop-blur-xl border-b border-white/5">
          <div className="flex flex-col">
            <h2 className="font-headline text-3xl lg:text-4xl font-extrabold tracking-widest uppercase text-on-surface">Content Engine</h2>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-xs font-label uppercase text-on-surface-variant tracking-widest">Active Publications: 24</span>
              <span className="w-1 h-1 bg-primary rounded-full" />
              <span className="text-xs font-label uppercase text-on-surface-variant tracking-widest">Drafts: 3</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute inset-y-0 left-3 flex items-center text-on-surface-variant text-lg">search</span>
              <input className="bg-surface-container-highest border-none text-xs font-label tracking-widest py-3 pl-10 pr-4 w-64 focus:ring-0 placeholder:text-outline" placeholder="SEARCH ARTICLES..." type="text" />
            </div>
            <Link href="/admin/blog/new" className="bg-gradient-to-br from-primary to-primary-dim px-6 lg:px-8 py-3 font-label font-black text-on-primary-fixed uppercase tracking-tighter flex items-center gap-2">
              <span className="material-symbols-outlined">post_add</span>
              Create Post
            </Link>
          </div>
        </header>

        <section className="p-8 lg:p-10">
          {/* Stats Banner */}
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-8 bg-surface-container p-6 lg:p-8 flex flex-col justify-between border-l-4 border-primary">
              <div>
                <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest mb-2">Performance Summary</p>
                <h3 className="font-headline text-xl lg:text-2xl font-bold uppercase italic">Monthly Engagement Growth +14.2%</h3>
              </div>
              <div className="flex gap-8 lg:gap-12 mt-8">
                <div><p className="text-2xl lg:text-3xl font-headline font-black">12.4k</p><p className="text-[10px] font-label text-on-surface-variant uppercase">Total Views</p></div>
                <div><p className="text-2xl lg:text-3xl font-headline font-black">4.8k</p><p className="text-[10px] font-label text-on-surface-variant uppercase">Reading Time (Min)</p></div>
                <div><p className="text-2xl lg:text-3xl font-headline font-black">890</p><p className="text-[10px] font-label text-on-surface-variant uppercase">New Leads</p></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 bg-surface-container-highest p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <p className="font-label text-[10px] text-primary uppercase tracking-widest mb-4 z-10">System Status</p>
              <div className="w-20 h-20 lg:w-24 lg:h-24 border-4 border-primary-dim border-t-transparent rounded-full flex items-center justify-center mb-4 z-10">
                <span className="font-headline text-xl font-black">100%</span>
              </div>
              <p className="text-xs font-label uppercase tracking-widest z-10">Sync Healthy</p>
            </div>
          </div>

          {/* Published Feed */}
          <div className="flex justify-between items-end mb-8">
            <h4 className="font-headline text-xl font-bold uppercase tracking-widest border-b-2 border-primary-dim pb-2 inline-block">Published Feed</h4>
            <div className="flex gap-4">
              <button className="text-[10px] font-label uppercase tracking-widest px-4 py-2 bg-surface-container-high border border-outline-variant/20 hover:bg-surface-variant transition-colors">Filter: Latest</button>
              <button className="text-[10px] font-label uppercase tracking-widest px-4 py-2 bg-surface-container-high border border-outline-variant/20 hover:bg-surface-variant transition-colors">Category: All</button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
            {blogCards.map((card) => (
              <div key={card.title} className={`group bg-surface-container relative ${card.archived ? "border border-white/5" : ""}`}>
                <div className={`aspect-video overflow-hidden relative ${card.archived ? "opacity-60" : ""}`}>
                  <div className="w-full h-full bg-surface-container-highest flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant/30">{card.archived ? "history" : "image"}</span>
                  </div>
                  {!card.archived && (
                    <div className="absolute top-0 right-0 p-4">
                      <span className="bg-primary text-on-primary-fixed text-[10px] font-black uppercase px-3 py-1 tracking-widest">{card.tag}</span>
                    </div>
                  )}
                  {card.archived && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="material-symbols-outlined text-4xl">history</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">calendar_today</span>{card.date}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">visibility</span>{card.views}</span>
                  </div>
                  <h5 className={`font-headline text-lg font-bold uppercase mb-4 group-hover:text-primary transition-colors leading-tight ${card.archived ? "text-on-surface-variant/60" : ""}`}>{card.title}</h5>
                  <p className={`text-sm ${card.archived ? "text-on-surface-variant/40" : "text-on-surface-variant"} line-clamp-2 mb-8 font-light`}>{card.excerpt}</p>
                  <div className="flex border-t border-white/5 pt-6 gap-2">
                    {card.archived ? (
                      <>
                        <button className="flex-1 bg-surface-container-highest/20 py-3 font-label text-[10px] uppercase tracking-widest hover:bg-primary transition-all flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-sm">unarchive</span> Restore
                        </button>
                        <button className="px-4 bg-surface-container-highest/20 py-3 font-label text-[10px] uppercase tracking-widest hover:bg-error-container transition-all flex items-center justify-center">
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="flex-1 bg-surface-container-highest py-3 font-label text-[10px] uppercase tracking-widest hover:bg-primary hover:text-on-primary-fixed transition-all flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-sm">edit</span> Edit
                        </button>
                        <button className="flex-1 bg-surface-container-highest py-3 font-label text-[10px] uppercase tracking-widest hover:bg-surface-bright transition-all flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-sm">open_in_new</span> Preview
                        </button>
                        <button className="px-4 bg-surface-container-highest py-3 font-label text-[10px] uppercase tracking-widest hover:bg-error-container hover:text-on-error-container transition-all flex items-center justify-center">
                          <span className="material-symbols-outlined text-sm">archive</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-6">
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center bg-surface-container-highest text-primary font-label text-sm">1</button>
              <button className="w-10 h-10 flex items-center justify-center bg-surface-container-low hover:bg-surface-container-highest transition-colors font-label text-sm">2</button>
              <button className="w-10 h-10 flex items-center justify-center bg-surface-container-low hover:bg-surface-container-highest transition-colors font-label text-sm">3</button>
              <span className="w-10 h-10 flex items-center justify-center">...</span>
              <button className="w-10 h-10 flex items-center justify-center bg-surface-container-low hover:bg-surface-container-highest transition-colors font-label text-sm">8</button>
            </div>
            <p className="text-[10px] font-label uppercase tracking-[0.2em] text-on-surface-variant">Showing 4 of 24 Articles</p>
          </div>
        </section>
      </main>
    </>
  );
}
