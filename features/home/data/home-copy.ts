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
  titleEnBefore: "SEREY ",
  titleKm: "(សិរី)",
  titleEnAfter: " Means Luck",
  lines: [
    "We empower your brand to grow,",
    "prosper, and shine like the sun.",
  ],
  cta: "ទាក់ទងពួកយើង",
};
 
/** សេវាកម្ម section */
export const SERVICES_SECTION = {
  title: "សេវាកម្ម",
  subtitle: "ភាក់អារម្មណ៍ដើម្បីជ្រើសរើសណែនាំ សេវាកម្មល្អ ប្រសិទ្ធភាពកន្លែង និងផ្តល់ទំនុកចិត្តដល់អតិថិជន",
};
 
export const SERVICE_CARDS = [
  {
    title: "សេវាកម្មបែបទំនើបកម្ម\nនៃបណ្ដាញសង្គម",
    description: "អត្ថាធិបាយនៃសេវាកម្មដែលយើងមានត្រឹមតែប្រវែងពីជួរតែប៉ុណ្ណោះ",
    image: "/graphic/image 1.jpg",
  },
  {
    title: "សេវាកម្មបែបទំនើបកម្ម\nនៃបណ្ដាញសង្គម",
    description: "អត្ថាធិបាយនៃសេវាកម្មដែលយើងមានត្រឹមតែប្រវែងពីជួរតែប៉ុណ្ណោះ",
    image: "/graphic/image 2.jpg",
  }, 
  {
    title: "សេវាកម្មបែបទំនើបកម្ម\nនៃបណ្ដាញសង្គម",
    description: "អត្ថាធិបាយនៃសេវាកម្មដែលយើងមានត្រឹមតែប្រវែងពីជួរតែប៉ុណ្ណោះ",
    image: "/graphic/image 3.jpg",
  },
  {
    title: "សេវាកម្មបែបទំនើបកម្ម\nនៃបណ្ដាញសង្គម",
    description: "អត្ថាធិបាយនៃសេវាកម្មដែលយើងមានត្រឹមតែប្រវែងពីជួរតែប៉ុណ្ណោះ",
    image: "/graphic/image 4.jpg",
  },
] as const;
 
/** ស្នាដៃ section */
export const WORKS_SECTION = {
  title: "ស្នាដៃ",
  subtitle: "ស្នាដៃ និងអ្នកផ្សព្វផ្សាយដ៏ល្អប្រសើររបស់ក្រុមការងារ អ្វីដែលខ្ញុំ",
};
 
export const PORTFOLIO_ITEMS = [
  { title: "ទូរស័ព្ទ និងកម្មវិធី", tag: "សេវាកម្មទី១", image: "/graphic/work-1.jpg" },
  { title: "ទូរស័ព្ទ និងកម្មវិធី", tag: "សេវាកម្មទី១", image: "/graphic/work-2.jpg" },
  { title: "ទូរស័ព្ទ និងកម្មវិធី", tag: "សេវាកម្មទី១", image: "/graphic/work-3.jpg" },
  { title: "ទូរស័ព្ទ និងកម្មវិធី", tag: "សេវាកម្មទី១", image: "/graphic/work-4.jpg" },
  { title: "ទូរស័ព្ទ និងកម្មវិធី", tag: "សេវាកម្មទី១", image: "/graphic/work-5.jpg" },
  { title: "ទូរស័ព្ទ និងកម្មវិធី", tag: "សេវាកម្មទី១", image: "/graphic/work-6.jpg" },
];
 
/** អ្នកផ្សព្វផ្សាយ section */
export const ADVERTISERS_SECTION = {
  title: "អ្នកផ្សព្វផ្សាយ",
  subtitle: "ភាក់អារម្មណ៍ដើម្បីជ្រើសរើសណែនាំ សេវាកម្មល្អ ប្រសិទ្ធភាពកន្លែង និងផ្តល់ទំនុកចិត្តដល់អតិថិជន",
};
 
export const TESTIMONIALS = Array.from({ length: 8 }, (_, i) => ({
  name: "លោក ខ្មែរ",
  role: "មុខងារ និងមុខតំណែង",
  image: `/graphic/person.jpg`,

}));
 
/** អំពីយើង section */
export const ABOUT_SECTION = {
  title: "អំពីយើង",
  description:
    "ពួកយើងគឺជាក្រុមហ៊ុនដែលស្ថិតក្នុងការជួយជំរុញទីផ្សារអតិថិជន របស់យើងឲ្យមានភាពល្បីល្បាញ ចូលដៃនៃអតិថិជនចម្បង អ្នកបំផុត",
  cta: "អានបន្ថែម",
  stats: [
    { value: "៣៩១", label: "ការងារដែលបានគ្រប់គ្រង" },
    { value: "១២", label: "ចំនួនឆ្នាំនៃបទពិសោធន៍" },
    { value: "២៦", label: "សមាជិកក្រុម" },
    { value: "១៧៤", label: "ដៃគូរសហការ" },
  ],
};
 
/** Footer */
export const FOOTER_QUICK_LINKS_TITLE = "តំណភ្ជាប់";
export const FOOTER_CONTACT_COLUMN_TITLE = "ទាក់ទងមកយើងខ្ញុំ";
 
export const FOOTER_HEADLINE_LINES = [
  "ទាក់ទងយើងឥឡូវនេះដើម្បី",
  "ធ្វើការរួមគ្នាឈានទៅរក",
  "ភាពប្រសើរឡើង",
] as const;
 
export const FOOTER_SOCIAL = {
  facebook: "https://www.facebook.com/profile.php?id=61578485984250",
  tiktok: "https://www.tiktok.com/@sereykhmer.co",
  youtube: "#",
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
 
// Legacy exports (keep for HomeBanner / HomeFooter compatibility)
export const STATS = {
  primary: { value: "៣៩១", label: "ការងារដែលបានគ្រប់គ្រង" },
  aboutTitle: "អំពីយើង",
  aboutLines: [
    "ពួកយើងគឺជាក្រុមហ៊ុនដែលស្ថិតក្នុងការជួយជំរុញទីផ្សារអតិថិជន",
    "របស់យើងឲ្យមានភាពល្បីល្បាញ",
    "ចូលដៃនៃអតិថិជនចម្បង",
    "អ្នកបំផុត",
  ],
  columns: [
    { value: "១២", label: "ចំនួនឆ្នាំនៃបទពិសោធន៍" },
    { value: "២៦", label: "សមាជិកក្រុម" },
    { value: "១៧៤", label: "ដៃគូរសហការ" },
  ],
};
 
export const HERO_CTA = "ទាក់ទងពួកយើង";
export const INTRO_PARAGRAPH = "សេវាកម្មភាពក្នុងទីផ្សារឌីជីថលដែលមានសេវាកម្មល្អ ប្រសិទ្ធភាពខ្ពស់ និងផ្តល់លទ្ធផលល្អជូនដល់អតិថិជន";
export const AD_SECTION_PARAGRAPH = "អ្នកផ្សព្វផ្សាយភាពក្នុងទីផ្សារឌីជីថលដែលមានសេវាកម្មល្អ ប្រសិទ្ធភាពខ្ពស់ និងផ្តល់លទ្ធផលល្អជូនដល់អតិថិជន";
export const WORK_SECTION_TITLE = "ស្នាដៃ និងប្រវត្តិការងាររបស់ក្រុមការងារ សិរីខ្មែរ";