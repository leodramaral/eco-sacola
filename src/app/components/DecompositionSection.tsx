import React from 'react';
import { motion } from 'motion/react';
import { IconShoppingBag, type TablerIcon } from '@tabler/icons-react';
import { RefCitation } from './RefCitation';

const DECOMPOSITION_IMAGE = '/images/pexels-shvets-production-7512941.jpg';

const items: {
  id: number;
  icon: TablerIcon;
  name: string;
  years: string;
  label: string;
  color: string;
  bgColor: string;
  usageTime: string;
  details: string;
  comparisonNote: string;
  refIds: number[];
}[] = [
  {
    id: 0,
    icon: IconShoppingBag,
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
  const ItemIcon = activeItem.icon;

  return (
    <section
      id="section-2"
      className="relative py-20 px-4 min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: '#071810' }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          style={{
            backgroundImage: `url(${DECOMPOSITION_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            inset: 0,
          }}
        />
        {/* Dark overlay for readability */}
        <div
          style={{
            background: 'linear-gradient(180deg, rgba(7, 24, 16, 0.9) 0%, rgba(13, 43, 26, 0.88) 50%, rgba(7, 24, 16, 0.9) 100%)',
            position: 'absolute',
            inset: 0,
          }}
        />
      </div>

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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl overflow-hidden border border-white/15 mb-8 relative bg-black/30 backdrop-blur-[8px]"
        >
          {/* Content with adjusted colors */}
          <div className="p-6 sm:p-8 lg:p-10 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-8 lg:items-center">
              <div className="space-y-6">
                <div>
                   <div className="flex flex-wrap items-end gap-x-3 gap-y-2 mb-3">
                    <span
                      className="text-7xl sm:text-8xl"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 900,
                        color: activeItem.color,
                        lineHeight: 0.95,
                        textShadow: '0 1px 6px rgba(0,0,0,0.4)',
                      }}
                    >
                      {activeItem.years}
                    </span>
                    <span
                      className="text-3xl text-white/70 pb-2 font-semibold"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}
                    >
                      {activeItem.label}
                    </span>
                  </div>

                  <p
                    className="text-white/95 text-sm sm:text-base max-w-xl leading-relaxed font-semibold"
                    style={{ fontFamily: 'var(--font-body)', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}
                  >
                    {activeItem.comparisonNote}
                  </p>

                  <div
                    className="mt-5 max-w-xl rounded-2xl border p-4 backdrop-blur-sm"
                    style={{
                      background: 'rgba(0,0,0,0.5)',
                      borderColor: `${activeItem.color}40`,
                    }}
                  >
                    <span
                      className="inline-flex text-[11px] uppercase tracking-[0.18em] text-red-300 mb-2 font-bold"
                      style={{ fontFamily: 'var(--font-body)', textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
                    >
                      Voce sabia?
                    </span>
                    <p
                      className="text-sm text-white/95 leading-relaxed font-semibold"
                      style={{ fontFamily: 'var(--font-body)', textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
                    >
                      Mesmo quando deixa de ser visivel, a sacola nao desaparece por completo: ela
                      pode se fragmentar e continuar circulando no ambiente em partes menores.
                      <RefCitation ids={[5, 7]} />
                    </p>
                  </div>
                </div>
              </div>

               <div
                 className="rounded-2xl border border-white/20 bg-black/40 p-5 sm:p-6 space-y-5 backdrop-blur-[6px]"
               >
                 <div>
                   <span
                     className="inline-flex text-xs uppercase tracking-[0.18em] text-white/80 mb-3 font-bold"
                     style={{ fontFamily: 'var(--font-body)', textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
                   >
                     Depois do descarte
                   </span>
                     <p
                       className="text-white/95 leading-relaxed text-sm sm:text-base font-semibold"
                       style={{ fontFamily: 'var(--font-body)', textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
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
