import React from 'react';
import { motion } from 'motion/react';
import { RefCitation } from './RefCitation';

const items = [
  {
    id: 0,
    emoji: '🛍️',
    name: 'Sacola Plástica',
    years: 'até 20',
    label: 'anos',
    color: '#EF4444',
    bgColor: 'from-red-950 to-rose-900',
    usageTime: 'Uso de poucos minutos',
    details:
      'Estimativas institucionais indicam que uma sacola plástica pode permanecer no ambiente por até 20 anos. Ao longo desse período, ela não desaparece necessariamente por completo: pode se fragmentar em partes menores e continuar causando impactos em igarapés, na drenagem urbana e em paisagens naturais.',
    comparisonNote: 'O uso dura poucos minutos, mas o impacto pode continuar por muitos anos depois do descarte.',
    refIds: [5, 6, 7],
  },
];

export function DecompositionSection() {
  const activeItem = items[0];

  return (
    <section
      id="section-2"
      className="relative py-20 px-4 min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #071810 0%, #0D2B1A 50%, #071810 100%)' }}
    >
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-white/5 pointer-events-none"
          style={{
            width: `${(i + 1) * 250}px`,
            height: `${(i + 1) * 250}px`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
          >
            Tempo estimado de{' '}
            <span
              className="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #FBBF24, #F97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Permanência
            </span>
          </h2>
          <p
            className="text-2xl sm:text-3xl text-white/80 italic"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          >
            "Usado por minutos,
            <br />
            <span className="text-amber-400">permanece por muito mais tempo"</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl overflow-hidden border border-white/10 mb-8"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div className={`bg-gradient-to-br ${activeItem.bgColor} p-6 sm:p-8 lg:p-10`}>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-8 lg:items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-5xl sm:text-6xl">{activeItem.emoji}</span>
                  <div>
                    <h3
                      className="text-2xl sm:text-3xl text-white"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                    >
                      {activeItem.name}
                    </h3>
                    <span
                      className="inline-flex text-sm px-3 py-1 rounded-full mt-2"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: activeItem.color,
                        background: `${activeItem.color}20`,
                      }}
                    >
                      {activeItem.usageTime}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-end gap-x-3 gap-y-2 mb-3">
                    <span
                      className="text-7xl sm:text-8xl"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 900,
                        color: activeItem.color,
                        lineHeight: 0.95,
                      }}
                    >
                      {activeItem.years}
                    </span>
                    <span
                      className="text-3xl text-white/60 pb-2"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                    >
                      {activeItem.label}
                    </span>
                  </div>

                  <p
                    className="text-white/70 text-sm sm:text-base max-w-xl"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {activeItem.comparisonNote}
                  </p>
                </div>
              </div>

              <div
                className="rounded-2xl border border-white/10 bg-black/10 p-5 sm:p-6 space-y-5"
              >
                <div>
                  <span
                    className="inline-flex text-xs uppercase tracking-[0.18em] text-white/45 mb-3"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Depois do descarte
                  </span>
                  <p
                    className="text-white/80 leading-relaxed text-sm sm:text-base"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {activeItem.details}
                    <RefCitation ids={activeItem.refIds} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
