"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black w-full border-t border-[#262626]">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-6 py-12 w-full">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-headline text-xl font-black text-white mb-6 block"
            >
              BLACK BULLET
            </Link>
            <p className="font-body text-[clamp(12px,1vw,14px)] text-on-surface-variant leading-relaxed">
              The pinnacle of performance tuning and aesthetic restoration in
              Dubai. Driven by precision, forged in heat.
            </p>
          </div>

          {/* Engineering */}
          <div>
            <h5 className="font-headline font-bold text-white uppercase text-sm mb-6 tracking-widest">
              Engineering
            </h5>
            <ul className="space-y-4">
              {["ECU Remapping", "Carbon Fiber Kits", "Exhaust Systems"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/services"
                      className="font-body text-[clamp(12px,1vw,14px)] text-outline-variant hover:text-primary transition-all underline-offset-4 hover:underline"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h5 className="font-headline font-bold text-white uppercase text-sm mb-6 tracking-widest">
              Connect
            </h5>
            <ul className="space-y-4">
              {[
                { label: "Contact", href: "/booking" },
                { label: "Instagram", href: "#" },
                { label: "Privacy Policy", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-body text-[clamp(12px,1vw,14px)] text-outline-variant hover:text-primary transition-all underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h5 className="font-headline font-bold text-white uppercase text-sm mb-6 tracking-widest">
              Subscribe
            </h5>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                className="bg-surface-container-highest border-none text-white px-4 py-2 w-full font-body focus:ring-1 focus:ring-primary placeholder:text-outline-variant"
                placeholder="Email"
                type="email"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-primary text-on-primary-fixed px-4 flex items-center justify-center hover:brightness-110 transition-all"
                aria-label="Subscribe"
              >
                <span className="material-symbols-outlined text-[1.2rem]">send</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="px-4 lg:px-6 py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-body text-[clamp(10px,0.8vw,12px)] text-outline-variant">
            © 2024 BLACK BULLET GARAGE PERFORMANCE DUBAI. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-outline-variant text-[1.2rem] hover:text-primary transition-all cursor-pointer">
              share
            </span>
            <span className="material-symbols-outlined text-outline-variant text-[1.2rem] hover:text-primary transition-all cursor-pointer">
              location_on
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
