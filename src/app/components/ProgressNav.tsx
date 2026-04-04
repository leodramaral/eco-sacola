import React from 'react';
import {
  IconAlertTriangle,
  IconClockHour3,
  IconHeartHandshake,
  IconLeaf,
  IconRecycle,
  IconScale,
  IconSeedling,
  type TablerIcon,
} from '@tabler/icons-react';

const sections: { label: string; icon: TablerIcon }[] = [
  { label: 'Início', icon: IconLeaf },
  { label: 'Impactos', icon: IconAlertTriangle },
  { label: 'Decomposição', icon: IconClockHour3 },
  { label: 'Lei', icon: IconScale },
  { label: 'Alternativas', icon: IconRecycle },
  { label: 'Iniciativas', icon: IconHeartHandshake },
  { label: 'Ação', icon: IconSeedling },
];

interface ProgressNavProps {
  activeSection: number;
  onNavigate: (idx: number) => void;
}

export function ProgressNav({ activeSection, onNavigate }: ProgressNavProps) {
  return (
    <>
      {/* Desktop: vertical dots on right */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {sections.map((section, i) => {
          const Icon = section.icon;

          return (
            <button
              key={section.label}
              onClick={() => onNavigate(i)}
              title={section.label}
              className="group flex items-center gap-2 justify-end"
              aria-label={section.label}
            >
              <span
                className="text-xs text-white bg-black/40 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {section.label}
              </span>
              <span
                className={`flex items-center justify-center rounded-full border transition-all duration-300 shadow-lg ${
                  activeSection === i
                    ? 'w-10 h-10 bg-white text-[#071810] border-white scale-110'
                    : 'w-9 h-9 bg-black/25 text-white/65 border-white/25 hover:bg-white/10 hover:text-white/85 hover:border-white/45'
                }`}
              >
                <Icon className="eco-icon eco-icon-md" aria-hidden="true" />
              </span>
            </button>
          );
        })}
      </nav>

      {/* Mobile: top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="h-1 bg-white/20">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"
            style={{ width: `${((activeSection + 1) / sections.length) * 100}%` }}
          />
        </div>
        <div className="flex justify-between px-4 py-2 bg-black/30 backdrop-blur-sm">
          {sections.map((section, i) => {
            const Icon = section.icon;

            return (
              <button
                key={section.label}
                onClick={() => onNavigate(i)}
                className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200 ${
                  activeSection === i
                    ? 'opacity-100 scale-110 border-white/70 bg-white/12 text-white'
                    : 'opacity-55 border-transparent text-white/70'
              }`}
                aria-label={section.label}
              >
                <Icon className="eco-icon eco-icon-md" aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
