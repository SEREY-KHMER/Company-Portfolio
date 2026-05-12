"use client";

import { useState } from "react";
import { CONTACT_PAGE, CONTACT_FORM } from "../data/contact-copy";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    if (!form.name || !form.email) return;
    setSent(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">

        {/* ── Left ── */}
        <div className="lg:w-[36%] lg:shrink-0">
          <h1 lang="km" className="text-[30px] font-bold leading-snug text-brand-navy">
            តើអ្នកមានចម្ងល់ <br />
            ឬសំនួរអ្វីដែលឬទេ?
          </h1>
          <p lang="km" className="mt-2 text-[12px] leading-relaxed text-stone-500">
            {CONTACT_PAGE.subtitle}
          </p>

          <h2 lang="km" className="mt-5 text-[30px] font-bold text-brand-navy">
            {CONTACT_PAGE.contactTitle}
          </h2>

          <div className="mt-3 space-y-3">
            {/* Address */}
            <div className="flex items-start gap-3">
              <div
                className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm"
                style={{ border: "1px solid #e5e7eb" }}
              >
                <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="#37517c" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <p lang="km" className="text-[12px] leading-relaxed text-stone-600">{CONTACT_PAGE.address}</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div
                className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm"
                style={{ border: "1px solid #e5e7eb" }}
              >
                <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="#37517c" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <a href={`tel:${CONTACT_PAGE.phone.replace(/\s/g,"")}`} className="text-[12px] font-medium text-stone-600 hover:text-brand-navy">
                {CONTACT_PAGE.phone}
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div
                className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm"
                style={{ border: "1px solid #e5e7eb" }}
              >
                <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="#37517c" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <a href={`mailto:${CONTACT_PAGE.email}`} className="text-[12px] font-medium text-stone-600 hover:text-brand-navy">
                {CONTACT_PAGE.email}
              </a>
            </div>
          </div>

          {/* Social icons */}
          <div className="mt-4 flex gap-2">
            {[
              { href: CONTACT_PAGE.social.facebook, label: "Facebook", path: "M13.5 22v-8h2.6l.4-3h-3V9.1c0-.9.2-1.5 1.5-1.5H16.6V5a20 20 0 0 0-2.4-.1c-2.4 0-4.1 1.4-4.1 4.1V11H7.5v3h2.6v8h3.4Z" },
              { href: CONTACT_PAGE.social.tiktok, label: "TikTok", path: "M15.7 5.1c.7 1.2 1.8 2 3.3 2.2v3.1c-1.6-.1-3-.6-4.2-1.6v6.4c0 3.2-2.6 5.8-5.8 5.8S3.2 18.4 3.2 15.2s2.6-5.8 5.8-5.8c.4 0 .8 0 1.2.1v3.2a2.7 2.7 0 0 0-1.2-.3c-1.5 0-2.8 1.2-2.8 2.8S7.5 18 9 18s2.8-1.2 2.8-2.8V3.1h3c.2.7.5 1.4.9 2Z" },
              { href: CONTACT_PAGE.social.youtube, label: "YouTube", path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1 31.6 31.6 0 0 0 .5-5.8 31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12 9.6 15.6z" },
              { href: CONTACT_PAGE.social.telegram, label: "Telegram", path: "M20.6 4.6 2.9 11.8c-1.2.5-1.2 1.2-.2 1.5l4.6 1.4 1.7 5.1c.2.6.1.8.7.8.4 0 .6-.2.9-.4l2.2-2.1 4.6 3.4c.8.5 1.4.2 1.6-.7l3-14.1c.3-1.1-.4-1.6-1.4-1.1Zm-2.4 3.1-8.8 7.9-.3 3.3-1.2-3.9 10.4-6.6c.5-.3.9-.1.6.3Z" },
            ].map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}
                className="inline-flex size-8 items-center justify-center rounded-full bg-brand-navy text-white transition hover:brightness-110">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d={s.path}/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className="flex-1 rounded-3xl border-2 border-brand-navy bg-white p-6 shadow-sm">
          <h2 lang="en" className="mb-4 text-[20px] font-bold text-brand-navy">
            {CONTACT_FORM.title}
          </h2>

          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label lang="en" className="mb-1 block text-[12px] font-medium text-stone-500">{CONTACT_FORM.fields.name}</label>
                <input type="text" name="name" value={form.name} onChange={handleChange}
                  className="w-full rounded-xl border-0 bg-neutral-100 px-3 py-2.5 text-[13px] text-stone-800 focus:outline-none focus:ring-2 focus:ring-brand-navy/30 transition"/>
              </div>
              <div>
                <label lang="en" className="mb-1 block text-[12px] font-medium text-stone-500">{CONTACT_FORM.fields.email}</label>
                <input type="email" name="email" value={form.email} onChange={handleChange}
                  className="w-full rounded-xl border-0 bg-neutral-100 px-3 py-2.5 text-[13px] text-stone-800 focus:outline-none focus:ring-2 focus:ring-brand-navy/30 transition"/>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label lang="en" className="mb-1 block text-[12px] font-medium text-stone-500">{CONTACT_FORM.fields.phone}</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                  className="w-full rounded-xl border-0 bg-neutral-100 px-3 py-2.5 text-[13px] text-stone-800 focus:outline-none focus:ring-2 focus:ring-brand-navy/30 transition"/>
              </div>
              <div>
                <label lang="en" className="mb-1 block text-[12px] font-medium text-stone-500">{CONTACT_FORM.fields.subject}</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange}
                  className="w-full rounded-xl border-0 bg-neutral-100 px-3 py-2.5 text-[13px] text-stone-800 focus:outline-none focus:ring-2 focus:ring-brand-navy/30 transition"/>
              </div>
            </div>

            <div>
              <label lang="en" className="mb-1 block text-[12px] font-medium text-stone-500">{CONTACT_FORM.fields.message}</label>
              <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                className="w-full resize-none rounded-xl border-0 bg-neutral-100 px-3 py-2.5 text-[13px] text-stone-800 focus:outline-none focus:ring-2 focus:ring-brand-navy/30 transition"/>
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <div className="flex items-center">
                <button type="button" onClick={handleSubmit}
                  className="rounded-full bg-brand-orange px-6 py-3 text-[12px] font-bold tracking-widest text-white transition hover:brightness-110 active:scale-95">
                  {sent ? "បានផ្ញើ!" : CONTACT_FORM.submitLabel}
                </button>
                <button type="button" onClick={handleSubmit}
                  className="flex size-11 items-center justify-center rounded-full bg-brand-orange text-white transition hover:brightness-110 active:scale-95">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
