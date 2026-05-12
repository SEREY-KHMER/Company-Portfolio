"use client";

import { useState } from "react";
import { PROJECT_TABS } from "../data/project-copy";

type TabId = (typeof PROJECT_TABS)[number]["id"];

export function ProjectTabs() {
  const [active, setActive] = useState<TabId>("client");

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex w-fit gap-1 rounded-2xl border border-neutral-200 bg-white p-1 shadow-sm">
        {PROJECT_TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={[
                "flex min-w-[140px] flex-col items-center justify-center rounded-xl px-6 py-3 text-center transition sm:min-w-[160px]",
                isActive
                  ? "bg-brand-navy text-white shadow"
                  : "text-brand-navy hover:bg-neutral-50",
              ].join(" ")}
            >
              <span lang="km" className="text-[18px] font-bold leading-tight">
                {tab.label}
              </span>
              <span
                lang="km"
                className={[
                  "mt-0.5 text-[13px] leading-tight",
                  isActive ? "text-white/80" : "text-stone-500",
                ].join(" ")}
              >
                {tab.sublabel}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
