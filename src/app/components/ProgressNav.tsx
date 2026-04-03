import React from 'react';

const sections = [
  { label: 'Início', emoji: '🌿' },
  { label: 'Impactos', emoji: '⚠️' },
  { label: 'Decomposição', emoji: '⏱️' },
  { label: 'Lei', emoji: '⚖️' },
  { label: 'Sucesso', emoji: '✅' },
  { label: 'Alternativas', emoji: '♻️' },
  { label: 'Iniciativas', emoji: '🤝' },
  { label: 'Ação', emoji: '🌱' },
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
        {sections.map((s, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            title={s.label}
            className="group flex items-center gap-2 justify-end"
            aria-label={s.label}
          >
            <span
              className="text-xs text-white bg-black/40 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 border-2 border-white/80 shadow-lg ${
                activeSection === i
                  ? 'w-4 h-4 bg-white scale-110'
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          </button>
        ))}
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
          {sections.map((s, i) => (
            <button
              key={i}
              onClick={() => onNavigate(i)}
              className={`text-xs transition-all duration-200 ${
                activeSection === i ? 'opacity-100 scale-110' : 'opacity-40'
              }`}
              aria-label={s.label}
            >
              {s.emoji}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
