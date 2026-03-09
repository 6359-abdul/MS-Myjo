import React, { useState } from 'react';
import { PageInfo } from '../types';
import {
  BROCHURE_PAGES,
  SIDEBAR_SECTIONS,
  SidebarSection,
  SubjectGroup,
} from '../constants';

interface SidebarProps {
  currentIndex: number;
  onPageSelect: (index: number) => void;
  isOpen: boolean;
  onToggle: () => void;
}

/* ── Chevron icon component ─────────────────────────────────── */
const ChevronIcon: React.FC<{ isOpen: boolean; className?: string }> = ({
  isOpen,
  className = '',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'
      } ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

/* ── Subject color mapping ──────────────────────────────────── */
const SUBJECT_COLORS: Record<string, string> = {
  Introduction: 'bg-blue-400',
  Nursery: 'bg-pink-400',
  'PP1 & PP2': 'bg-purple-400',
  Deeniyath: 'bg-emerald-400',
  English: 'bg-sky-400',
  Hindi: 'bg-orange-400',
  Maths: 'bg-red-400',
  EVS: 'bg-green-400',
  Social: 'bg-yellow-400',
  Telugu: 'bg-teal-400',
  Urdu: 'bg-indigo-400',
};

const getDotColor = (name: string): string =>
  SUBJECT_COLORS[name] || 'bg-white/40';

const Sidebar: React.FC<SidebarProps> = ({
  currentIndex,
  onPageSelect,
  isOpen,
  onToggle,
}) => {
  // Track expanded sections: { "Pre-Primary": true, "Primary": false }
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({ 'Pre-Primary': true });

  // Track expanded subjects: { "Nursery": true, "Hindi": false, … }
  const [expandedSubjects, setExpandedSubjects] = useState<
    Record<string, boolean>
  >({ Introduction: true });

  // Current page id
  const currentPageId = BROCHURE_PAGES[currentIndex]?.id;

  // Find flat index from page id
  const getPageIndex = (pageId: number): number =>
    BROCHURE_PAGES.findIndex((p) => p.id === pageId);

  // Toggle helpers
  const toggleSection = (name: string) =>
    setExpandedSections((prev) => ({ ...prev, [name]: !prev[name] }));

  const toggleSubject = (sectionName: string, subjectName: string) => {
    const key = `${sectionName}::${subjectName}`;
    setExpandedSubjects((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isSubjectExpanded = (sectionName: string, subjectName: string) =>
    !!expandedSubjects[`${sectionName}::${subjectName}`];

  // Active‑state checks
  const sectionHasActive = (section: SidebarSection): boolean =>
    section.subjects.some((sub) =>
      sub.pages.some((p) => p.id === currentPageId)
    );

  const subjectHasActive = (subject: SubjectGroup): boolean =>
    subject.pages.some((p) => p.id === currentPageId);

  /* ── Render a single page button ───────────────────────── */
  const renderPageButton = (page: PageInfo) => {
    const flatIndex = getPageIndex(page.id);
    const isActive = currentIndex === flatIndex;

    return (
      <li key={page.id}>
        <button
          onClick={() => {
            onPageSelect(flatIndex);
            if (window.innerWidth < 1024) onToggle();
          }}
          className={`
            w-full text-left pl-10 pr-3 py-[6px] text-[11px] leading-tight
            transition-all duration-200 border-l-[3px] flex items-center gap-2
            ${isActive
              ? 'bg-emerald-500/15 text-emerald-400 border-emerald-400 font-semibold'
              : 'text-white/70 border-transparent hover:bg-white/5 hover:text-white'
            }
          `}
        >
          <span className="opacity-40 text-[9px] min-w-[1.2rem] font-mono">
            {page.id < 10 ? `0${page.id}` : page.id}
          </span>
          <span className="truncate">{page.title}</span>
        </button>
      </li>
    );
  };

  /* ── Render a subject (Introduction, Hindi, …) ─────────── */
  const renderSubject = (subject: SubjectGroup, sectionName: string) => {
    const isExpanded = isSubjectExpanded(sectionName, subject.name);
    const hasActive = subjectHasActive(subject);

    return (
      <div key={`${sectionName}-${subject.name}`} className="mb-0.5">
        {/* Subject header */}
        <button
          onClick={() => toggleSubject(sectionName, subject.name)}
          className={`
            w-full flex items-center justify-between pl-6 pr-3 py-2
            text-[11px] font-semibold tracking-wide
            transition-all duration-200
            ${hasActive
              ? 'bg-white/8 text-yellow-300'
              : 'text-white/60 hover:bg-white/5 hover:text-white/90'
            }
          `}
        >
          <span className="flex items-center gap-2">
            <span
              className={`w-[6px] h-[6px] rounded-full ${getDotColor(
                subject.name
              )} ${hasActive ? 'ring-2 ring-yellow-400/50' : ''}`}
            />
            <span>{subject.name}</span>
            <span className="text-[9px] text-white/25 font-normal">
              ({subject.pages.length})
            </span>
          </span>
          <ChevronIcon isOpen={isExpanded} className="text-white/40" />
        </button>

        {/* Subject pages */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <ul className="border-l border-white/10  my-0.5">
            {subject.pages.map(renderPageButton)}
          </ul>
        </div>
      </div>
    );
  };

  /* ── Render a main section (Pre-Primary / Primary) ─────── */
  const renderSection = (section: SidebarSection) => {
    const isExpanded = !!expandedSections[section.name];
    const hasActive = sectionHasActive(section);
    const totalPages = section.subjects.reduce(
      (sum, sub) => sum + sub.pages.length,
      0
    );

    return (
      <div key={section.name} className="mb-1">
        {/* Section header */}
        <button
          onClick={() => toggleSection(section.name)}
          className={`
            w-full flex items-center justify-between px-4 py-3
            text-[13px] font-bold uppercase tracking-wider
            transition-all duration-200
            ${hasActive
              ? 'text-emerald-300'
              : 'text-white/85 hover:text-white'
            }
          `}
          style={{
            background: hasActive
              ? 'linear-gradient(90deg, rgba(16,185,129,0.12) 0%, transparent 100%)'
              : 'rgba(72, 64, 150, 0.3)',
          }}
        >
          <span className="flex items-center gap-2">
            {/* Section icon */}
            {section.name === 'Pre-Primary' ? (
              <svg
                className="w-[18px] h-[18px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                />
              </svg>
            ) : (
              <svg
                className="w-[18px] h-[18px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            )}
            <span>{section.name}</span>
            <span className="text-[9px] font-normal text-white/30 normal-case">
              ({totalPages})
            </span>
          </span>
          <ChevronIcon isOpen={isExpanded} className="text-white/50" />
        </button>

        {/* Expanded subjects */}
        <div
          className={`overflow-hidden transition-all duration-400 ease-in-out ${isExpanded ? 'max-h-[9999px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="py-1">
            {section.subjects.map((sub) => renderSubject(sub, section.name))}
          </div>
        </div>

        {/* Divider */}
        <div className="mx-4 border-b border-white/5" />
      </div>
    );
  };

  /* ═════════════════════════════════════════════════════════════ */
  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-40 w-60 text-white
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0
        border-r border-indigo-900/50 flex flex-col
      `}
    >
      {/* ── Header ────────────────────────────────────────────── */}
      <div
        className="px-4 py-2 border-b border-indigo-800/40 flex items-center justify-between"
        style={{
          background: 'linear-gradient(135deg, #21b158ff 0%, #182d66ff 80%)',
        }}
      >
        <div>
          <h1 className="text-base font-bold tracking-tight text-white mt-0.5">
           MYJO Smart Curriculum
          </h1>
          <p className="text-[10px] text-white/80 mt-0.5 uppercase font-semibold">
            MS Education Academy
          </p>
        </div>
        <button
          onClick={onToggle}
          className="lg:hidden p-1 rounded hover:bg-white/10 transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* ── Scrollable navigation ─────────────────────────────── */}
      <nav
        className="flex-1 overflow-y-auto custom-scrollbar"
        style={{
          background: 'linear-gradient(180deg, #420d6eff 0%, #0f3f17ff 80%)',
        }}
      >
        <div className="py-2">
          {SIDEBAR_SECTIONS.map(renderSection)}
        </div>
      </nav>

      {/* ── Footer ────────────────────────────────────────────── */}
      <div
        className="px-4 py-2.5 text-center border-t border-indigo-800/40"
        style={{
          background: 'linear-gradient(135deg, #0d0a2e 0%, #0a1e38 100%)',
        }}
      >
        <p className="text-[10px] text-white/50">
          Page {currentIndex + 1} of {BROCHURE_PAGES.length}
        </p>
        <p className="text-[9px] text-white/30 mt-0.5">
          &copy; 2026 MS Education Academy
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;