import { PageInfo } from './types';

// ═══════════════════════════════════════════════════════════════
// SIDEBAR STRUCTURE TYPES
// ═══════════════════════════════════════════════════════════════
export interface SubjectGroup {
  name: string;
  pages: PageInfo[];
}

export interface SidebarSection {
  name: string;
  subjects: SubjectGroup[];
}

// ═══════════════════════════════════════════════════════════════
// PRE-PRIMARY SECTION
// ═══════════════════════════════════════════════════════════════

const PP_INTRODUCTION: PageInfo[] = [
  { id: 1, title: "Catalogue Pre-Primary", imageUrl: "/pages/page_1.jpg" },
  { id: 2, title: "Vision & Mission", imageUrl: "/pages/page_2.jpg" },
  { id: 3, title: "Office Use Checklist", imageUrl: "/pages/page_3.jpg" },
  { id: 4, title: "Why MS? The Right Choice", imageUrl: "/pages/page_4.jpg" },
];

const PP_NURSERY: PageInfo[] = [
  { id: 5, title: "Nursery Literacy", imageUrl: "/pages/page_5.jpg" },
  { id: 11, title: "Nursery Rhymes", imageUrl: "/pages/page_11.jpg" },
  { id: 13, title: "Nursery Numeracy", imageUrl: "/pages/page_13.jpg" },
  { id: 17, title: "Nursery EVS", imageUrl: "/pages/page_17.jpg" },
  { id: 21, title: "Nursery Art & Craft", imageUrl: "/pages/page_21.jpg" },
  { id: 23, title: "Nursery Deeniyat", imageUrl: "/pages/page_23.jpg" },
];
const PP_PP1: PageInfo[] = [
  { id: 6, title: "PP1 Coursebook Workbook Literacy", imageUrl: "/pages/page_6.jpg" },
  { id: 18, title: "PP1 EVS Coursebook & Workbook", imageUrl: "/pages/page_18.jpg" },
  { id: 14, title: "PP1 Numeracy", imageUrl: "/pages/page_14.jpg" },
];
const PP_PP2: PageInfo[] = [
  { id: 19, title: "PP2 EVS Coursebook & Workbook", imageUrl: "/pages/page_19.jpg" },
  { id: 20, title: "Learning Cards", imageUrl: "/pages/page_20.jpg" },
  { id: 8, title: "PP2 Coursebook Workbook Literacy", imageUrl: "/pages/page_8.jpg" },
  { id: 9, title: "Collaterals Cards", imageUrl: "/pages/page_9.jpg" },
  { id: 10, title: "Collaterals Cards 2", imageUrl: "/pages/page_10.jpg" },
  { id: 25, title: "PP2 Urdu", imageUrl: "/pages/page_25.jpg" },
  { id: 26, title: "PP2 Hindi", imageUrl: "/pages/page_26.jpg" },
  { id: 15, title: "PP2 Numeracy Coursebook & Workbook", imageUrl: "/pages/page_15.jpg" },
  { id: 16, title: "Collaterals Cards 3", imageUrl: "/pages/page_16.jpg" },
];
const PP_PP1_PP2: PageInfo[] = [
  { id: 12, title: "PP1 & PP2 Rhymes", imageUrl: "/pages/page_12.jpg" },
  { id: 7, title: "PP1 & PP2 Writingbook Literacy", imageUrl: "/pages/page_7.jpg" },
  { id: 22, title: "PP1 & PP2 Art & Craft", imageUrl: "/pages/page_22.jpg" },
  { id: 24, title: "PP1 & PP2 Deeniyat", imageUrl: "/pages/page_24.jpg" },
  { id: 27, title: "What Makes MYJO Unique", imageUrl: "/pages/page_27.jpg" },
  { id: 28, title: "Tarbiyah Based Education", imageUrl: "/pages/page_28.jpg" },
];

// ═══════════════════════════════════════════════════════════════
// PRIMARY SECTION
// ═══════════════════════════════════════════════════════════════

const PRI_INTRODUCTION: PageInfo[] = [
  { id: 29, title: "MS Hifz Academy", imageUrl: "/pages/page_29.jpg" },
  { id: 30, title: "Young Innovators", imageUrl: "/pages/page_30.jpg" },
  { id: 31, title: "Drawing & Creative Arts", imageUrl: "/pages/page_31.jpg" },
  { id: 32, title: "Space & Quran Literacy", imageUrl: "/pages/page_32.jpg" },
  { id: 33, title: "Mega Mind Mapping", imageUrl: "/pages/page_33.jpg" },
  { id: 34, title: "Handwriting Laurels", imageUrl: "/pages/page_34.jpg" },
  { id: 35, title: "Fee Structure", imageUrl: "/pages/page_35.jpg" },
  { id: 36, title: "Guidance is Key", imageUrl: "/pages/page_36.jpg" },
  { id: 37, title: "Intermediate Results", imageUrl: "/pages/page_37.jpg" },
  { id: 38, title: "National Footprint - IITs", imageUrl: "/pages/page_38.jpg" },
];

const PRI_DEENIYATH: PageInfo[] = [
  { id: 39, title: "Class 1 Deeniyat", imageUrl: "/pages/page_39.jpg" },
  { id: 40, title: "Class 1 Deeniyat 2", imageUrl: "/pages/page_40.jpg" },
  { id: 41, title: "Class 2 Deeniyat", imageUrl: "/pages/page_41.jpg" },
  { id: 42, title: "Class 2 Deeniyat 2", imageUrl: "/pages/page_42.jpg" },
];

const PRI_ENGLISH: PageInfo[] = [
  { id: 43, title: "Class 1 English", imageUrl: "/pages/page_43.jpg" },
  { id: 44, title: "Class 1 English 2", imageUrl: "/pages/page_44.jpg" },
  { id: 45, title: "Class 1 English 3", imageUrl: "/pages/page_45.jpg" },
  { id: 46, title: "Class 2 English", imageUrl: "/pages/page_46.jpg" },
  { id: 47, title: "Class 2 English 2", imageUrl: "/pages/page_47.jpg" },
  { id: 48, title: "Class 2 English 3", imageUrl: "/pages/page_48.jpg" },
  { id: 49, title: "Class 3 English", imageUrl: "/pages/page_49.jpg" },
  { id: 50, title: "Class 3 English 2", imageUrl: "/pages/page_50.jpg" },
  { id: 51, title: "Class 4 English", imageUrl: "/pages/page_51.jpg" },
  { id: 52, title: "Class 4 English 2", imageUrl: "/pages/page_52.jpg" },
  { id: 53, title: "Class 5 English", imageUrl: "/pages/page_53.jpg" },
  { id: 54, title: "Class 5 English 2", imageUrl: "/pages/page_54.jpg" },
];

const PRI_HINDI: PageInfo[] = [
  { id: 55, title: "Class 1 Hindi", imageUrl: "/pages/page_55.jpg" },
  { id: 56, title: "Class 1 Hindi 2", imageUrl: "/pages/page_56.jpg" },
  { id: 57, title: "Class 1 Hindi 3", imageUrl: "/pages/page_57.jpg" },
  { id: 58, title: "Class 2 Hindi", imageUrl: "/pages/page_58.jpg" },
  { id: 59, title: "Class 2 Hindi 2", imageUrl: "/pages/page_59.jpg" },
  { id: 60, title: "Class 2 Hindi 3", imageUrl: "/pages/page_60.jpg" },
  { id: 61, title: "Class 3 Hindi", imageUrl: "/pages/page_61.jpg" },
  { id: 62, title: "Class 3 Hindi 2", imageUrl: "/pages/page_62.jpg" },
  { id: 63, title: "Class 4 Hindi", imageUrl: "/pages/page_63.jpg" },
  { id: 64, title: "Class 4 Hindi 2", imageUrl: "/pages/page_64.jpg" },
  { id: 65, title: "Class 5 Hindi", imageUrl: "/pages/page_65.jpg" },
  { id: 66, title: "Class 5 Hindi 2", imageUrl: "/pages/page_66.jpg" },
];

const PRI_MATHS: PageInfo[] = [
  { id: 67, title: "Class 1 Maths", imageUrl: "/pages/page_67.jpg" },
  { id: 68, title: "Class 1 Maths 2", imageUrl: "/pages/page_68.jpg" },
  { id: 69, title: "Class 1 Maths 3", imageUrl: "/pages/page_69.jpg" },
  { id: 70, title: "Class 2 Maths", imageUrl: "/pages/page_70.jpg" },
  { id: 71, title: "Class 2 Maths 2", imageUrl: "/pages/page_71.jpg" },
  { id: 72, title: "Class 2 Maths 3", imageUrl: "/pages/page_72.jpg" },
  { id: 73, title: "Class 3 Maths", imageUrl: "/pages/page_73.jpg" },
  { id: 74, title: "Class 3 Maths 2", imageUrl: "/pages/page_74.jpg" },
  { id: 75, title: "Class 4 Maths", imageUrl: "/pages/page_75.jpg" },
  { id: 76, title: "Class 4 Maths 2", imageUrl: "/pages/page_76.jpg" },
  { id: 77, title: "Class 5 Maths", imageUrl: "/pages/page_77.jpg" },
  { id: 78, title: "Class 5 Maths 2", imageUrl: "/pages/page_78.jpg" },
];

const PRI_EVS: PageInfo[] = [
  { id: 79, title: "Class 1 EVS", imageUrl: "/pages/page_79.jpg" },
  { id: 80, title: "Class 1 EVS 2", imageUrl: "/pages/page_80.jpg" },
  { id: 81, title: "Class 1 EVS 3", imageUrl: "/pages/page_81.jpg" },
  { id: 82, title: "Class 2 EVS", imageUrl: "/pages/page_82.jpg" },
  { id: 83, title: "Class 2 EVS 2", imageUrl: "/pages/page_83.jpg" },
  { id: 84, title: "Class 1 EVS 4", imageUrl: "/pages/page_84.jpg" },
  { id: 85, title: "Class 3 EVS", imageUrl: "/pages/page_85.jpg" },
  { id: 86, title: "Class 3 EVS 2", imageUrl: "/pages/page_86.jpg" },
  { id: 87, title: "Class 4 EVS", imageUrl: "/pages/page_87.jpg" },
  { id: 88, title: "Class 4 EVS 2", imageUrl: "/pages/page_88.jpg" },
  { id: 89, title: "Class 5 EVS", imageUrl: "/pages/page_89.jpg" },
  { id: 90, title: "Class 5 EVS 2", imageUrl: "/pages/page_90.jpg" },
];

const PRI_SOCIAL: PageInfo[] = [
  { id: 91, title: "Class 3 Social", imageUrl: "/pages/page_91.jpg" },
  { id: 92, title: "Class 3 Social 2", imageUrl: "/pages/page_92.jpg" },
  { id: 93, title: "Class 3 Social 3", imageUrl: "/pages/page_93.jpg" },
  { id: 94, title: "Class 4 Social", imageUrl: "/pages/page_94.jpg" },
  { id: 95, title: "Class 4 Social 2", imageUrl: "/pages/page_95.jpg" },
  { id: 96, title: "Class 4 Social 3", imageUrl: "/pages/page_96.jpg" },
  { id: 97, title: "Class 5 Social", imageUrl: "/pages/page_97.jpg" },
  { id: 98, title: "Class 5 Social 2", imageUrl: "/pages/page_98.jpg" },
  { id: 99, title: "Class 5 Social 3", imageUrl: "/pages/page_99.jpg" },
];

const PRI_TELUGU: PageInfo[] = [
  { id: 100, title: "Class 1 Telugu", imageUrl: "/pages/page_100.jpg" },
  { id: 101, title: "Class 2 Telugu", imageUrl: "/pages/page_101.jpg" },
];

const PRI_URDU: PageInfo[] = [
  { id: 102, title: "Class 1 Urdu", imageUrl: "/pages/page_102.jpg" },
  { id: 103, title: "Class 1 Urdu 2", imageUrl: "/pages/page_103.jpg" },
  { id: 104, title: "Class 1 Urdu 3", imageUrl: "/pages/page_104.jpg" },
  { id: 105, title: "Class 2 Urdu", imageUrl: "/pages/page_105.jpg" },
  { id: 106, title: "Class 2 Urdu 2", imageUrl: "/pages/page_106.jpg" },
  { id: 107, title: "Class 2 Urdu 3", imageUrl: "/pages/page_107.jpg" },
  { id: 108, title: "Class 3 Urdu", imageUrl: "/pages/page_108.jpg" },
  { id: 109, title: "Class 3 Urdu 2", imageUrl: "/pages/page_109.jpg" },
  { id: 110, title: "Class 4 Urdu", imageUrl: "/pages/page_110.jpg" },
  { id: 111, title: "Class 4 Urdu 2", imageUrl: "/pages/page_111.jpg" },
  { id: 112, title: "Class 5 Urdu", imageUrl: "/pages/page_112.jpg" },
  { id: 113, title: "Class 5 Urdu 2", imageUrl: "/pages/page_113.jpg" },
  { id: 114, title: "Learning with Values Growing with Purpose", imageUrl: "/pages/page_114.jpg" },
];

// ═══════════════════════════════════════════════════════════════
// SIDEBAR SECTIONS STRUCTURE
// ═══════════════════════════════════════════════════════════════

export const SIDEBAR_SECTIONS: SidebarSection[] = [
  {
    name: "Pre-Primary",
    subjects: [
      { name: "Introduction", pages: PP_INTRODUCTION },
      { name: "Nursery", pages: PP_NURSERY },
      { name: "PP1", pages: PP_PP1},
      { name: "PP2", pages: PP_PP2 },
      { name: "PP1 & PP2", pages: PP_PP1_PP2 },
    ],
  },
  {
    name: "Primary",
    subjects: [
      { name: "Introduction", pages: PRI_INTRODUCTION },
      { name: "Deeniyath", pages: PRI_DEENIYATH },
      { name: "English", pages: PRI_ENGLISH },
      { name: "Hindi", pages: PRI_HINDI },
      { name: "Maths", pages: PRI_MATHS },
      { name: "EVS", pages: PRI_EVS },
      { name: "Social", pages: PRI_SOCIAL },
      { name: "Telugu", pages: PRI_TELUGU },
      { name: "Urdu", pages: PRI_URDU },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// FLAT LIST — used by App.tsx for prev/next navigation
// ═══════════════════════════════════════════════════════════════

export const BROCHURE_PAGES: PageInfo[] = SIDEBAR_SECTIONS.flatMap((section) =>
  section.subjects.flatMap((subject) => subject.pages)
);