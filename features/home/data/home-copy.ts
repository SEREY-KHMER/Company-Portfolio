/** Copy sourced from Home.pdf — Khmer follows extraction as provided. */

/** Header nav (contact is separate CTA button). */
export const HEADER_NAV_ITEMS = [
  { id: "top", label: "ទំព័រដើម" },
  { id: "services", label: "សេវាកម្ម" },
  { id: "works", label: "ស្នាដៃ" },
  { id: "advertisers", label: "អ្នកផ្សព្វផ្សាយ" },
  { id: "about", label: "អំពីយើង" },
] as const;

export const HEADER_CONTACT_CTA = "ទំនាក់ទំនង";

export const HERO = {
  /** Mixed headline — split for Khmer (Kantumruy) vs English (Inter) */
  title: "SEREY (សិរី) Means Luck",
  titleEnBefore: "SEREY ",
  titleKm: "(សិរី)",
  titleEnAfter: " Means Luck",
  lines: [
    "We empower your brand to grow,",
    "prosper, and shine like the sun.",
  ],
  cta: "ទាក់ទងពួកយើង",
};

export const CONTACT_STRIP = "ទាកទងពកង";

export const INTRO_PARAGRAPH =
  "សេវ 	កមភក ងរទផ្ស 	រឌជថលដែលម 	ន 	សេវកមល	 ប្រ	 	សទ 	ភពខស 	នងផលទនកចតដលអតថជន";

const SERVICE_BLOCK = [
  "សេវ 	កម 	បែបទបកម",
  "នៃបណញសងម",
  "អតធបយនៃ 	សេវកម ដែល 	ងមនត្រម 	តែប្រ 	វែង",
  "ពជរ តែបះ",
] as const;

export const SERVICE_CARDS = [
  [...SERVICE_BLOCK],
  [...SERVICE_BLOCK],
  [...SERVICE_BLOCK],
  [...SERVICE_BLOCK],
];

export const WORK_SECTION_TITLE =
  "ស 	ដែសដៃ 	នងប្រវតករងររបសក្រមករងរ 	សររ";

export const PORTFOLIO_ITEMS = [
  { title: "ទរសពរ នងកមវធ", tag: "សេវកមទ១" },
  { title: "ទរសពរ នងកមវធ", tag: "សេវកមទ១" },
  { title: "ទរសពរ នងកមវធ", tag: "សេវកមទ១" },
  { title: "ទរសពរ នងកមវធ", tag: "សេវកមទ១" },
  { title: "ទរសពរ នងកមវធ", tag: "សេវកមទ១" },
  { title: "ទរសពរ នងកមវធ", tag: "សេវកមទ១" },
];

export const AD_SECTION_PARAGRAPH =
  "អកផ្ស 	ពផ្សយភក ងរទផ្ស 	រឌជថលដែលម 	ន 	សេវកមល	 ប្រ	 	សទ 	ភពខស 	នងផលទនកចតដលអតថជន";

export const TESTIMONIALS = Array.from({ length: 8 }, () => ({
  quote: "ះ តរ",
  author: "មខងរ នងមខត ណែង",
}));

export const STATS = {
  primary: { value: "៣៩១", label: "ងដែលបនគជយ" },
  aboutTitle: "អពង",
  aboutLines: [
    "ពកងរតយងសខន កងករជយជរញទផ្សរអតថជន",
    "របសងយមនភពល្បល្បញ",
    "ចលដៃនៃអតថជនចម្បង",
    "អនបម",
  ],
  columns: [
    { value: "១២", label: "ចននឆនៃបទពធន" },
    { value: "២១", label: "សមជកក្រម" },
    { value: "១២៤", label: "ដៃគរសហករ" },
  ],
};

export const CONTACT_SECTION = {
  lines: [
    "ទក ទងពកង",
    "ទក ទងងឥឡវនេះម្ប",
    "កររមគឈនរកភ",
    "ពប្ររង",
    "ទក ទងពកង",
    "ដណរភប",
  ],
};

/** Footer quick links use the same anchors as the header (`#top`, `#services`, …). */
export const FOOTER_QUICK_LINKS_TITLE = "តំណភ្ជាប់";

export const FOOTER_CONTACT_COLUMN_TITLE = "ទាក់ទងមកយើងខ្ញុំ";

/** Left column — bold Khmer headline (three lines). */
export const FOOTER_HEADLINE_LINES = [
  "ទាក់ទងយើងឥឡូវនេះដើម្បី",
  "ធ្វើការរួមគ្នាឈានទៅរក",
  "ភាពប្រសើរឡើង",
] as const;

export const FOOTER_SOCIAL = {
  facebook: "https://www.facebook.com/profile.php?id=61578485984250",
  tiktok: "https://www.tiktok.com/@sereykhmer.co",
  /** Replace with your channel when ready */
  youtube: "#",
  /** Replace with your Telegram when ready */
  telegram: "#",
} as const;

export const FOOTER_CONTACT = {
  email: "sereykhmer.kh@gmail.com",
  phone: "+855 12 345 678",
  addressLines: [
    "ផ្លូវលេខ១២៣ ភូមិទឹកកក ឃុំទឹកឃ្មុំ សង្កាត់ស្រះត្រី រាជធានីភ្នំពេញ",
  ],
  copyright: "Copyright 2026, SEREY KHMER All Right Reserved.",
};
