"use client";

import { useState } from "react";
import Link from "next/link";

const vehicleTypes = [
  { icon: "directions_car", label: "Supercar / Exotic" },
  { icon: "sports_motorsports", label: "Hyper Performance" },
  { icon: "precision_manufacturing", label: "Custom Build" },
];

const serviceProtocols = [
  {
    icon: "bolt",
    label: "ECU STAGE 2 REMAP",
    desc: "Complete optimization for exhaust & intake hardware.",
    elite: true,
  },
  {
    icon: "format_paint",
    label: "CARBON AERO FIT",
    desc: "Precision installation of high-modulus carbon kits.",
    elite: false,
  },
];

const timeSlots = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];
const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const dates = [12, 13, 14, 15, 16, 17, 18];

export default function BookingForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState(0);
  const [selectedService, setSelectedService] = useState(0);
  const [selectedDate, setSelectedDate] = useState(2);
  const [selectedTime, setSelectedTime] = useState(2);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    model: "",
  });

  const steps = [
    { num: "01", stage: "Stage One", label: "Personal Identity" },
    { num: "02", stage: "Stage Two", label: "Vehicle Profile" },
    { num: "03", stage: "Stage Three", label: "Service Scope" },
    { num: "04", stage: "Stage Four", label: "Tactical Timing" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted! A Performance Engineer will contact you soon.");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
      {/* Left: Stepper */}
      <div className="lg:col-span-3">
        <div className="lg:sticky lg:top-40 space-y-6 md:space-y-8">
          {steps.map((step, i) => (
            <button
              key={step.num}
              onClick={() => setActiveStep(i)}
              className={`flex items-center gap-4 w-full text-left transition-all ${
                i <= activeStep ? "opacity-100" : "opacity-40"
              }`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center border-2 font-headline font-bold text-sm ${
                  i <= activeStep
                    ? "border-primary text-primary"
                    : "border-outline text-on-surface-variant"
                }`}
              >
                {step.num}
              </div>
              <div>
                <p
                  className={`font-label text-[10px] font-bold uppercase tracking-widest ${
                    i <= activeStep ? "text-primary" : ""
                  }`}
                >
                  {step.stage}
                </p>
                <p className="font-headline font-bold uppercase text-sm">
                  {step.label}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right: Form */}
      <div className="lg:col-span-9">
        <form
          onSubmit={handleSubmit}
          className="bg-surface-container p-6 md:p-8 lg:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Progress Bar */}
          <div
            className="absolute top-0 left-0 h-1 bg-primary shadow-[0_0_15px_#ff8f73] transition-all duration-500"
            style={{ width: `${((activeStep + 1) / 4) * 100}%` }}
          />

          <div className="space-y-10 md:space-y-12">
            {/* Step 1: Personal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="font-label font-bold text-xs text-on-surface-variant uppercase tracking-widest">
                  Pilot Name
                </label>
                <input
                  className="w-full bg-surface-container-highest border-none text-white p-4 font-headline placeholder:text-outline-variant focus:ring-1 focus:ring-primary transition-all"
                  placeholder="FULL NAME"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  aria-label="Full name"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label font-bold text-xs text-on-surface-variant uppercase tracking-widest">
                  Contact Signal
                </label>
                <input
                  className="w-full bg-surface-container-highest border-none text-white p-4 font-headline placeholder:text-outline-variant focus:ring-1 focus:ring-primary transition-all"
                  placeholder="EMAIL ADDRESS"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  aria-label="Email address"
                />
              </div>
            </div>

            {/* Step 2: Vehicle */}
            <div className="pt-8 md:pt-12 border-t border-outline-variant/20">
              <h3 className="font-headline text-xl md:text-2xl font-black text-white mb-6 md:mb-8 uppercase italic tracking-tight">
                Machine Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {vehicleTypes.map((v, i) => (
                  <button
                    key={v.label}
                    type="button"
                    onClick={() => setSelectedVehicle(i)}
                    className={`p-5 md:p-6 transition-all cursor-pointer text-left ${
                      selectedVehicle === i
                        ? "bg-surface-container-highest"
                        : "bg-surface-container-low opacity-60 hover:opacity-100 border border-transparent hover:border-primary"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined mb-4 ${
                        selectedVehicle === i
                          ? "text-primary"
                          : "text-on-surface-variant"
                      }`}
                    >
                      {v.icon}
                    </span>
                    <p
                      className={`font-headline font-bold uppercase text-sm ${
                        selectedVehicle === i
                          ? "text-white"
                          : "text-on-surface-variant"
                      }`}
                    >
                      {v.label}
                    </p>
                  </button>
                ))}
              </div>
              <input
                className="mt-6 w-full bg-surface-container-highest border-none text-white p-4 font-headline placeholder:text-outline-variant focus:ring-1 focus:ring-primary transition-all"
                placeholder="MODEL YEAR & ENGINE SPEC (E.G. 2023 HURACAN STO)"
                type="text"
                value={formData.model}
                onChange={(e) =>
                  setFormData({ ...formData, model: e.target.value })
                }
                aria-label="Vehicle model"
              />
            </div>

            {/* Step 3: Service */}
            <div className="pt-8 md:pt-12 border-t border-outline-variant/20">
              <h3 className="font-headline text-xl md:text-2xl font-black text-white mb-6 md:mb-8 uppercase italic tracking-tight">
                Select Protocol
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceProtocols.map((s, i) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => setSelectedService(i)}
                    className={`p-5 md:p-6 text-left transition-colors cursor-pointer ${
                      selectedService === i
                        ? "bg-surface-container-highest border-l-2 border-primary"
                        : "bg-surface-container-low hover:bg-surface-container-highest"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className={`material-symbols-outlined ${selectedService === i ? "text-primary" : "text-on-surface-variant"}`}>
                        {s.icon}
                      </span>
                      {s.elite && (
                        <span className="font-label text-[10px] bg-primary text-on-primary-fixed px-2 py-0.5 font-black uppercase">
                          Elite
                        </span>
                      )}
                    </div>
                    <h4 className="font-headline font-bold text-white uppercase text-sm">
                      {s.label}
                    </h4>
                    <p className="text-on-surface-variant text-xs mt-2 font-body">
                      {s.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Date/Time */}
            <div className="pt-8 md:pt-12 border-t border-outline-variant/20">
              <h3 className="font-headline text-xl md:text-2xl font-black text-white mb-6 md:mb-8 uppercase italic tracking-tight">
                Launch Window
              </h3>
              <div className="grid grid-cols-4 md:grid-cols-7 gap-2 mb-6 md:mb-8 text-center">
                {days.map((day, i) => (
                  <div
                    key={day}
                    className={`p-2 text-xs font-label ${
                      i === 2 ? "text-primary font-bold" : "opacity-50"
                    }`}
                  >
                    {day}
                  </div>
                ))}
                {dates.map((date, i) => (
                  <button
                    key={date}
                    type="button"
                    onClick={() => setSelectedDate(i)}
                    className={`p-3 font-headline text-sm transition-colors ${
                      selectedDate === i
                        ? "bg-surface-bright border-b-2 border-primary text-white"
                        : "bg-surface-container-highest hover:bg-surface-bright cursor-pointer"
                    } ${i < 2 ? "opacity-20" : ""}`}
                  >
                    {date}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {timeSlots.map((time, i) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(i)}
                    className={`py-3 px-4 font-headline text-xs font-bold transition-all ${
                      selectedTime === i
                        ? "bg-primary text-on-primary-fixed shadow-[0_0_20px_rgba(255,143,115,0.3)]"
                        : "bg-surface-container-highest text-white hover:bg-primary hover:text-on-primary-fixed"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 md:pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-on-surface-variant text-xs max-w-sm">
                By proceeding, you agree to our performance service terms and
                vehicle diagnostic protocols.
              </p>
              <button
                type="submit"
                className="w-full md:w-auto px-10 md:px-12 py-5 bg-gradient-to-r from-primary to-primary-dim text-on-primary-fixed font-headline font-black text-lg md:text-xl uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-2xl"
              >
                INITIATE BOOKING
              </button>
            </div>
          </div>
        </form>

        {/* Confirmation Preview */}
        <div className="mt-12 bg-surface-container-low p-8 border border-white/5 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">
              task_alt
            </span>
          </div>
          <h5 className="font-headline font-bold text-white text-xl uppercase italic">
            Protocol Confirmed
          </h5>
          <p className="text-on-surface-variant text-sm mt-2 max-w-md">
            Once you submit, a Performance Engineer will contact you within 60
            minutes to finalize the telemetry data for your session.
          </p>
        </div>
      </div>
    </div>
  );
}
