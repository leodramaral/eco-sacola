import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefCitation } from './RefCitation';

const items = [
  {
    id: 0,
    emoji: '🛍️',
    name: 'Sacola Plástica',
    years: '100 – 400',
    label: 'anos',
    color: '#EF4444',
    bgColor: 'from-red-950 to-rose-900',
    barColor: '#EF4444',
    barWidth: '100%',
    usageTime: 'Usada por ~25 minutos',
    context:
      'Uma sacola plástica dura centenas de anos no meio ambiente, liberando microplásticos durante todo esse período. Em Manaus, milhares são descartadas nos igarapés diariamente.',
    fact: 'Uma sacola pode matar animais marinhos mesmo 400 anos após ser descartada.',
    refIds: [5],
  },
  {
    id: 1,
    emoji: '🍶',
    name: 'Garrafa Plástica',
    years: 'até 450',
    label: 'anos',
    color: '#F97316',
    bgColor: 'from-orange-950 to-amber-900',
    barColor: '#F97316',
    barWidth: '96%',
    usageTime: 'Usada por ~3 dias',
    context:
      'Uma garrafa PET demora mais de 4 séculos para se decompor. O Rio Negro já apresenta contaminação por fragmentos de PET em análises recentes.',
    fact: 'Apenas 1,28% das garrafas PET no Brasil são efetivamente recicladas.',
    refIds: [5, 7],
  },
  {
    id: 2,
    emoji: '☕',
    name: 'Copo Plástico',
    years: '~50',
    label: 'anos',
    color: '#EAB308',
    bgColor: 'from-yellow-950 to-amber-900',
    barColor: '#EAB308',
    barWidth: '40%',
    usageTime: 'Usado por ~15 minutos',
    context:
      'Copos descartáveis de plástico não são aceitos nos programas de reciclagem. A maioria vai para aterros ou rios. Em Manaus, são muito usados em mercados e feiras.',
    fact: 'O Brasil usa 40 bilhões de copos descartáveis por ano.',
    refIds: [6],
  },
];

export function DecompositionSection() {
  const [active, setActive] = useState(0);
  const activeItem = items[active];

  return (
    <section
      id="section-2"
      className="relative py-20 px-4 min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #071810 0%, #0D2B1A 50%, #071810 100%)' }}
    >
      {/* Decorative rings */}
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

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm text-amber-400 border border-amber-500/30 bg-amber-950/30 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            ⏱️ Linha do Tempo
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
          >
            Tempo de{' '}
            <span
              className="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #FBBF24, #F97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Decomposição
            </span>
          </h2>
          <p
            className="text-2xl sm:text-3xl text-white/80 italic"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          >
            "Usado por minutos,
            <br />
            <span className="text-amber-400">impacta por séculos"</span>
          </p>
        </motion.div>

        {/* Item selector tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-3 justify-center mb-8 flex-wrap"
        >
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                active === i
                  ? 'bg-white/15 border-white/30 scale-105'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span className="text-xl">{item.emoji}</span>
              <span className="text-white text-sm hidden sm:block">{item.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Main card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className={`rounded-3xl overflow-hidden border border-white/10 mb-8`}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className={`bg-gradient-to-br ${activeItem.bgColor} p-8 sm:p-10`}>
              {/* Item header */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl">{activeItem.emoji}</span>
                <div>
                  <h3
                    className="text-2xl text-white"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                  >
                    {activeItem.name}
                  </h3>
                  <span
                    className="text-sm px-3 py-1 rounded-full"
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

              {/* Big number */}
              <div className="flex items-baseline gap-3 mb-6">
                <span
                  className="text-7xl sm:text-8xl"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 900,
                    color: activeItem.color,
                    lineHeight: 1,
                  }}
                >
                  {activeItem.years}
                </span>
                <span
                  className="text-3xl text-white/60"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                >
                  {activeItem.label}
                </span>
              </div>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: activeItem.barWidth }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                    className="h-full rounded-full"
                    style={{ background: activeItem.color }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-white/40" style={{ fontFamily: 'var(--font-body)' }}>
                    Hoje
                  </span>
                  <span className="text-xs text-white/40" style={{ fontFamily: 'var(--font-body)' }}>
                    500 anos
                  </span>
                </div>
              </div>

              {/* Context */}
              <p
                className="text-white/80 leading-relaxed text-sm sm:text-base mb-4"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {activeItem.context}
              </p>

              {/* Fact box */}
              <div
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{ background: `${activeItem.color}15`, border: `1px solid ${activeItem.color}30` }}
              >
                <span className="text-xl flex-shrink-0">💡</span>
                <p
                  className="text-sm"
                  style={{ fontFamily: 'var(--font-body)', color: activeItem.color }}
                >
                  {activeItem.fact}
                  <RefCitation ids={activeItem.refIds} />
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Comparison mini-timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6"
        >
          <h4
            className="text-white/80 text-sm mb-4 text-center"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Comparação de Decomposição
          </h4>
          <div className="space-y-4">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xl w-8 text-center">{item.emoji}</span>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span
                      className="text-xs text-white/60"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {item.name}
                    </span>
                    <span
                      className="text-xs"
                      style={{ fontFamily: 'var(--font-body)', color: item.color }}
                    >
                      {item.years} {item.label}
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: item.barWidth }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className="h-full rounded-full"
                      style={{ background: item.color }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}