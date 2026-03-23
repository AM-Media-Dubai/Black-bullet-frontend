const kpis = [
  {
    label: "Total Bookings",
    value: "1,284",
    change: "+12%",
    changeType: "positive",
    icon: "analytics",
  },
  {
    label: "New Enquiries",
    value: "42",
    change: "New",
    changeType: "positive",
    icon: "chat",
  },
  {
    label: "Blog Performance",
    value: "18.5K",
    change: "Views",
    changeType: "neutral",
    icon: "visibility",
  },
];

const chartData = [
  { label: "JAN", height: "40%" },
  { label: "FEB", height: "65%" },
  { label: "MAR", height: "55%" },
  { label: "APR", height: "85%", highlight: true },
  { label: "MAY", height: "70%" },
  { label: "JUN", height: "95%" },
];

export default function AdminDashboardCards() {
  return (
    <>
      {/* KPI Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="bg-surface-container p-8 relative overflow-hidden group hover:bg-surface-container-high transition-colors"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-7xl text-primary">
                {kpi.icon}
              </span>
            </div>
            <p className="font-headline text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-4">
              {kpi.label}
            </p>
            <div className="flex items-end gap-3">
              <h2 className="text-5xl font-headline font-black text-white italic">
                {kpi.value}
              </h2>
              <span
                className={`text-xs font-bold mb-2 ${
                  kpi.changeType === "positive"
                    ? "text-primary"
                    : "text-on-surface-variant"
                }`}
              >
                {kpi.change}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Performance Chart */}
      <div className="bg-surface-container p-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h3 className="font-headline text-lg font-bold uppercase tracking-tight text-white">
              Performance Metrics
            </h3>
            <p className="text-xs text-on-surface-variant">
              Monthly Bookings Velocity
            </p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-surface-container-highest text-xs font-bold uppercase tracking-tighter text-on-surface-variant hover:text-white transition-colors">
              Day
            </button>
            <button className="px-4 py-2 bg-primary text-on-primary-fixed text-xs font-bold uppercase tracking-tighter">
              Month
            </button>
          </div>
        </div>
        {/* Bar Chart */}
        <div className="h-64 flex items-end justify-between gap-4">
          {chartData.map((bar) => (
            <div
              key={bar.label}
              className="w-full bg-surface-container-highest relative group"
              style={{ height: bar.height }}
            >
              <div
                className={`absolute inset-0 ${
                  bar.highlight ? "bg-primary" : "bg-primary/20"
                } scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500`}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4 font-headline text-[10px] uppercase tracking-widest text-on-surface-variant">
          {chartData.map((bar) => (
            <span key={bar.label}>{bar.label}</span>
          ))}
        </div>
      </div>
    </>
  );
}
