const bookings = [
  {
    client: "Omar Al-Fayed",
    vehicle: "Nissan GTR (R35)",
    service: "ECU Remapping",
    serviceStyle: "bg-tertiary-container/10 text-tertiary",
    status: "Pending",
    statusDot: "bg-primary animate-pulse",
    date: "Oct 14, 2024",
  },
  {
    client: "Sarah Jenkins",
    vehicle: "Porsche 911 GT3",
    service: "Track Prep",
    serviceStyle: "bg-surface-container-highest text-on-surface-variant",
    status: "Confirmed",
    statusDot: "bg-green-500",
    date: "Oct 12, 2024",
  },
  {
    client: "Ahmed Al-Maktoum",
    vehicle: "Lamborghini Huracan",
    service: "Emergency Repair",
    serviceStyle: "bg-error-container/20 text-error-dim",
    status: "Pending",
    statusDot: "bg-primary animate-pulse",
    date: "Oct 11, 2024",
  },
  {
    client: "Ravi Kapoor",
    vehicle: "BMW M4 Competition",
    service: "Full Detail & PPF",
    serviceStyle: "bg-surface-container-highest text-on-surface-variant",
    status: "Completed",
    statusDot: "bg-outline",
    date: "Oct 09, 2024",
  },
  {
    client: "Fatima Al-Rashidi",
    vehicle: "Mercedes-AMG GT",
    service: "Carbon Aero Kit",
    serviceStyle: "bg-tertiary-container/10 text-tertiary",
    status: "Confirmed",
    statusDot: "bg-green-500",
    date: "Oct 08, 2024",
  },
];

export default function AdminTable() {
  return (
    <section className="bg-surface-container overflow-hidden">
      <div className="px-8 py-6 flex justify-between items-center border-b border-white/5">
        <h3 className="font-headline text-lg font-bold uppercase tracking-tight text-white">
          Recent Service Requests
        </h3>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">
            filter_list
          </span>
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">
            download
          </span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-surface-container-high font-headline text-[10px] uppercase tracking-widest text-on-surface-variant">
            <tr>
              <th className="px-8 py-4">Client Name</th>
              <th className="px-8 py-4">Vehicle</th>
              <th className="px-8 py-4">Service Required</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4">Scheduled Date</th>
              <th className="px-8 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {bookings.map((booking) => (
              <tr
                key={`${booking.client}-${booking.date}`}
                className="hover:bg-white/5 transition-colors group"
              >
                <td className="px-8 py-6 font-medium text-white">
                  {booking.client}
                </td>
                <td className="px-8 py-6 text-on-surface-variant italic">
                  {booking.vehicle}
                </td>
                <td className="px-8 py-6">
                  <span
                    className={`px-2 py-1 ${booking.serviceStyle} text-[10px] font-bold uppercase tracking-tighter`}
                  >
                    {booking.service}
                  </span>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${booking.statusDot}`}
                    />
                    <span className="text-xs font-bold text-white uppercase tracking-widest">
                      {booking.status}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-6 text-xs text-on-surface-variant">
                  {booking.date}
                </td>
                <td className="px-8 py-6 text-right">
                  <button className="text-xs font-headline font-bold uppercase tracking-widest text-primary hover:underline decoration-2">
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
