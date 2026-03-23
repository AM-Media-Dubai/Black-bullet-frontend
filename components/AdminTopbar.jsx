export default function AdminTopbar() {
  return (
    <header className="flex justify-between items-center px-10 py-8 border-b border-white/5 sticky top-0 bg-background/80 backdrop-blur-xl z-10">
      <div>
        <h1 className="font-headline text-3xl font-black italic tracking-tighter text-white uppercase">
          Operations Dashboard
        </h1>
        <p className="text-on-surface-variant text-sm font-medium">
          Monitoring Real-time Performance Metrics
        </p>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-end">
          <span className="text-xs font-headline font-bold uppercase tracking-widest text-primary">
            System Status
          </span>
          <span className="text-xs text-on-surface-variant">
            All Bays Online
          </span>
        </div>
        <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center border border-outline-variant/20 relative">
          <span className="material-symbols-outlined text-white">
            notifications
          </span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </header>
  );
}
