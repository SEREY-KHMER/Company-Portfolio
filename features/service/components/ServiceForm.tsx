"use client";

import { useState } from "react";

import { FOOTER_CONTACT, FOOTER_SOCIAL } from "@/features/home/data/home-copy";
import { SERVICE_FORM } from "@/features/service/data/service-copy";

export function ServiceForm() {
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!phone.trim()) return;
    // TODO: wire to real API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setPhone("");
    setService("");
    setMessage("");
  }

  return (
    <aside className="w-full lg:w-[280px] xl:w-[300px] shrink-0">
      {/* Form card */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 lang="km" className="mb-5 text-[22px] font-bold text-brand-navy">
          {SERVICE_FORM.title}
        </h2>

        <div className="space-y-3">
          {/* Phone */}
          <div>
            <input
              type="tel"
              lang="km"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={SERVICE_FORM.fields.phone.placeholder}
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[16px] text-stone-800 placeholder:text-neutral-400 focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20 transition"
            />
          </div>

          {/* Service dropdown */}
          <div className="relative">
            <select
              lang="km"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full appearance-none rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[16px] text-stone-800 focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20 transition"
            >
              <option value="" disabled>
                {SERVICE_FORM.fields.service.placeholder}
              </option>
              {SERVICE_FORM.fields.service.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {/* chevron */}
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>

          {/* Message */}
          <div>
            <textarea
              lang="km"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={SERVICE_FORM.fields.message.placeholder}
              className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[16px] text-stone-800 placeholder:text-neutral-400 focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20 transition"
            />
          </div>

          {/* Submit */}
          <button
            type="button"
            onClick={handleSubmit}
            className="flex w-full items-center justify-between rounded-xl bg-brand-navy px-5 py-3 text-[17px] font-semibold text-white transition hover:brightness-110 active:scale-[0.98]"
          >
            <span lang="km">{submitted ? "បានផ្ញើ!" : SERVICE_FORM.submitLabel}</span>
            <svg className="size-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Contact info card */}
      <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 lang="km" className="mb-4 text-[18px] font-bold text-brand-navy">
          {SERVICE_FORM.contactTitle}
        </h3>

        <div className="space-y-3">
          {/* Phone */}
          <a
            href={`tel:${FOOTER_CONTACT.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-3 text-stone-700 transition hover:text-brand-navy"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <span lang="en" className="font-en text-[15px] font-medium">
              {FOOTER_CONTACT.phone}
            </span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${FOOTER_CONTACT.email}`}
            className="flex items-center gap-3 text-stone-700 transition hover:text-brand-navy"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <span lang="en" className="font-en text-[15px] font-medium break-all">
              {FOOTER_CONTACT.email}
            </span>
          </a>

          {/* Social icons row */}
          <div className="flex gap-2 pt-1">
            {/* Facebook */}
            <a
              href={FOOTER_SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex size-9 items-center justify-center rounded-full bg-brand-navy text-white transition hover:brightness-110"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 22v-8h2.6l.4-3h-3V9.1c0-.9.2-1.5 1.5-1.5H16.6V5a20 20 0 0 0-2.4-.1c-2.4 0-4.1 1.4-4.1 4.1V11H7.5v3h2.6v8h3.4Z" />
              </svg>
            </a>
            {/* TikTok */}
            <a
              href={FOOTER_SOCIAL.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="inline-flex size-9 items-center justify-center rounded-full bg-brand-navy text-white transition hover:brightness-110"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M15.7 5.1c.7 1.2 1.8 2 3.3 2.2v3.1c-1.6-.1-3-.6-4.2-1.6v6.4c0 3.2-2.6 5.8-5.8 5.8S3.2 18.4 3.2 15.2s2.6-5.8 5.8-5.8c.4 0 .8 0 1.2.1v3.2a2.7 2.7 0 0 0-1.2-.3c-1.5 0-2.8 1.2-2.8 2.8S7.5 18 9 18s2.8-1.2 2.8-2.8V3.1h3c.2.7.5 1.4.9 2Z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href={FOOTER_SOCIAL.youtube}
              aria-label="YouTube"
              className="inline-flex size-9 items-center justify-center rounded-full bg-brand-navy text-white transition hover:brightness-110"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1 31.6 31.6 0 0 0 .5-5.8 31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12 9.6 15.6z" />
              </svg>
            </a>
            {/* Telegram */}
            <a
              href={FOOTER_SOCIAL.telegram}
              aria-label="Telegram"
              className="inline-flex size-9 items-center justify-center rounded-full bg-brand-navy text-white transition hover:brightness-110"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.6 4.6 2.9 11.8c-1.2.5-1.2 1.2-.2 1.5l4.6 1.4 1.7 5.1c.2.6.1.8.7.8.4 0 .6-.2.9-.4l2.2-2.1 4.6 3.4c.8.5 1.4.2 1.6-.7l3-14.1c.3-1.1-.4-1.6-1.4-1.1Zm-2.4 3.1-8.8 7.9-.3 3.3-1.2-3.9 10.4-6.6c.5-.3.9-.1.6.3Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
