import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { RefCitation } from './RefCitation';

const ECOBAG_IMAGE = 'https://images.unsplash.com/photo-1763634708808-c56bf88021fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

type Choice = 'plastic' | 'ecobag' | 'box' | null;

export function AlternativesSection() {
  const [toggle, setToggle] = useState<'plastic' | 'eco'>('eco');
  const [bagCount, setBagCount] = useState(0);
  const [choice, setChoice] = useState<Choice>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Animate bag counter
  useEffect(() => {
    if (bagCount < 365) {
      const timer = setTimeout(() => setBagCount((c) => Math.min(c + 7, 365)), 20);
      return () => clearTimeout(timer);
    }
  }, [bagCount]);

  const handleChoice = (c: Choice) => {
    setChoice(c);
    if (c === 'ecobag' || c === 'box') {
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 3000);
    }
  };

  return (
    <section
      id="section-5"
      className="relative py-20 px-4 min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #021A08 0%, #042D10 50%, #021A08 100%)' }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 left-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #4ADE80, transparent)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-20 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #22D3EE, transparent)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Header */}
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
            Simples de{' '}
            <span
              className="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #4ADE80, #22D3EE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Mudar
            </span>
          </h2>
          <p
            className="text-white/70 text-lg italic"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          >
            "Pequenas escolhas repetidas podem reduzir muito o descarte"
          </p>
        </motion.div>

        {/* Toggle: Sacola Plástica vs Ecobag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <div className="rounded-3xl overflow-hidden border border-white/10">
            {/* Toggle bar */}
            <div className="flex border-b border-white/10" style={{ background: 'rgba(0,0,0,0.4)' }}>
              <button
                onClick={() => setToggle('plastic')}
                className={`flex-1 py-4 text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                  toggle === 'plastic'
                    ? 'bg-red-950/50 text-red-400 border-b-2 border-red-500'
                    : 'text-white/50 hover:text-white/70'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                🛍️ Sacola Plástica
              </button>
              <button
                onClick={() => setToggle('eco')}
                className={`flex-1 py-4 text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                  toggle === 'eco'
                    ? 'bg-green-950/50 text-green-400 border-b-2 border-green-500'
                    : 'text-white/50 hover:text-white/70'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                🌿 Ecobag
              </button>
            </div>

            <AnimatePresence mode="wait">
              {toggle === 'plastic' ? (
                <motion.div
                  key="plastic"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 sm:p-8"
                  style={{ background: 'linear-gradient(135deg, #1A0505, #1A0A0A)' }}
                >
                  <div className="flex flex-col sm:flex-row gap-8 items-center">
                    <div className="text-center">
                      <span className="text-8xl block mb-3">🛍️</span>
                      <span
                        className="text-2xl text-red-400"
                        style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                      >
                        Sacola Plástica
                      </span>
                    </div>
                    <div className="flex-1 space-y-3">
                      {[
                        { icon: '❌', text: 'Uso geralmente curto no dia a dia' },
                        { icon: '❌', text: 'Pode permanecer no ambiente por décadas ou séculos' },
                        { icon: '❌', text: 'Pode alcançar rios, igarapés e solos' },
                        { icon: '❌', text: 'Afeta fauna, paisagem urbana e drenagem' },
                        { icon: '❌', text: 'A reciclagem ainda enfrenta limites no Brasil' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span>{item.icon}</span>
                          <span
                            className="text-sm text-white/70"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="eco"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 sm:p-8"
                  style={{ background: 'linear-gradient(135deg, #041A08, #061A10)' }}
                >
                  <div className="flex flex-col sm:flex-row gap-8 items-center">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3">
                        <ImageWithFallback
                          src={ECOBAG_IMAGE}
                          alt="Ecobag"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span
                        className="text-2xl text-green-400"
                        style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                      >
                        Ecobag
                      </span>
                    </div>
                    <div className="flex-1 space-y-3">
                      {[
                        { icon: '✅', text: 'Reutilizável em diferentes compras' },
                        { icon: '✅', text: 'Pode substituir muitas sacolas ao longo do tempo' },
                        { icon: '✅', text: 'Reduz poluição de rios e igarapés' },
                        { icon: '✅', text: 'Incentiva planejamento e consumo mais consciente' },
                        { icon: '✅', text: 'Há modelos duráveis e acessíveis' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span>{item.icon}</span>
                          <span
                            className="text-sm text-white/70"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bag counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-10 rounded-2xl p-6 sm:p-8 border border-emerald-500/20 bg-emerald-950/20 text-center"
        >
          <p
            className="text-white/60 text-sm mb-2"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Em um hábito diário de reutilização, você pode evitar:
          </p>
          <div className="flex items-baseline justify-center gap-3 mb-2">
            <span
              className="text-7xl sm:text-8xl text-emerald-400"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 900 }}
            >
              {bagCount}
            </span>
            <span
              className="text-2xl text-white/60"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
            >
              sacolas descartáveis em 1 ano
            </span>
          </div>
          <div className="flex justify-center gap-1 flex-wrap mt-3">
            {Array.from({ length: Math.min(bagCount, 50) }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.01 }}
                className="text-sm"
              >
                🛍️
              </motion.span>
            ))}
            {bagCount > 50 && (
              <span
                className="text-sm text-white/40"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                +{bagCount - 50} mais
              </span>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-10 rounded-2xl border p-5 sm:p-6"
          style={{
            background: 'rgba(251,191,36,0.08)',
            borderColor: 'rgba(251,191,36,0.2)',
          }}
        >
          <span
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-amber-300 mb-3"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span>💡</span> Antes de depender da reciclagem
          </span>
          <p
            className="text-sm sm:text-base text-white/80 leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            A reciclagem do plastico no Brasil ainda enfrenta limites de coleta, triagem e
            reaproveitamento. Por isso, reduzir o uso e reutilizar no dia a dia costuma ser mais
            eficaz do que contar apenas com o descarte correto.
            <RefCitation ids={[31]} />
          </p>
        </motion.div>

        {/* Interactive choice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3
            className="text-center text-white mb-6 text-xl"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
          >
            O que você usaria hoje?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                id: 'plastic' as Choice,
                emoji: '🛍️',
                label: 'Sacola Plástica',
                sublabel: 'Hábito antigo',
                color: '#EF4444',
                bg: 'rgba(239,68,68,0.1)',
                border: 'rgba(239,68,68,0.3)',
              },
              {
                id: 'ecobag' as Choice,
                emoji: '🌿',
                label: 'Ecobag',
                sublabel: 'Sustentável',
                color: '#4ADE80',
                bg: 'rgba(74,222,128,0.1)',
                border: 'rgba(74,222,128,0.3)',
              },
              {
                id: 'box' as Choice,
                emoji: '📦',
                label: 'Caixa de Papelão',
                sublabel: 'Reutilizável',
                color: '#FBBF24',
                bg: 'rgba(251,191,36,0.1)',
                border: 'rgba(251,191,36,0.3)',
              },
            ].map((opt) => (
              <motion.button
                key={opt.id}
                onClick={() => handleChoice(opt.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative flex flex-col items-center p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden"
                style={{
                  borderColor: choice === opt.id ? opt.color : 'rgba(255,255,255,0.1)',
                  background: choice === opt.id ? opt.bg : 'rgba(255,255,255,0.04)',
                }}
              >
                {choice === opt.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: opt.color }}
                  >
                    <span className="text-xs text-white">✓</span>
                  </motion.div>
                )}
                <span className="text-4xl mb-3">{opt.emoji}</span>
                <span
                  className="text-white text-sm"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
                >
                  {opt.label}
                </span>
                <span
                  className="text-xs mt-1"
                  style={{ fontFamily: 'var(--font-body)', color: opt.color }}
                >
                  {opt.sublabel}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Feedback message */}
          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="mt-6 p-4 rounded-2xl text-center border border-emerald-500/30 bg-emerald-950/30"
              >
                <p
                  className="text-emerald-400 text-lg"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                >
                  🎉 Excelente escolha!
                </p>
                <p
                  className="text-white/70 text-sm mt-1"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Você está ajudando a proteger os rios e a floresta amazônica!
                </p>
              </motion.div>
            )}
            {choice === 'plastic' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="mt-6 p-4 rounded-2xl text-center border border-orange-500/30 bg-orange-950/20"
              >
                <p
                  className="text-orange-400 text-base"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                >
                  💭 Que tal reconsiderar?
                </p>
                <p
                  className="text-white/70 text-sm mt-1"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Esse descarte pode permanecer no ambiente por muito tempo. Experimente a ecobag!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
