import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Eye, Brain, Lightbulb, TrendingDown } from 'lucide-react';
import { RefCitation } from './RefCitation';

const reasons = [
  {
    id: 0,
    icon: Eye,
    emoji: '👁️',
    title: 'Falta de Fiscalização',
    color: '#F97316',
    description:
      'A lei não foi acompanhada de uma estrutura eficaz de fiscalização. Comércios continuaram distribuindo sacolas plásticas sem penalidades reais. Em Manaus, a fiscalização ambiental é limitada e focada em outras prioridades.',
    impact: 'Alto',
    detail: 'Sem acompanhamento institucional contínuo, a norma perdeu força na prática cotidiana do comércio.',
  },
  {
    id: 1,
    icon: Brain,
    emoji: '🧠',
    title: 'Baixa Conscientização',
    color: '#A78BFA',
    description:
      'A população não foi adequadamente informada sobre os impactos das sacolas plásticas nem sobre as alternativas disponíveis. Campanhas educativas foram insuficientes e de curto prazo.',
    impact: 'Alto',
    detail: 'Sem campanhas permanentes, a mudança de hábito tende a ser lenta e desigual.',
  },
  {
    id: 2,
    icon: TrendingDown,
    emoji: '🔄',
    title: 'Cultura de Uso Forte',
    color: '#22D3EE',
    description:
      'O hábito de usar sacolas plásticas está profundamente enraizado na cultura de compras em Manaus. Feiras, mercados e supermercados sempre as oferecem gratuitamente, tornando a mudança de comportamento difícil.',
    impact: 'Médio',
    detail: 'Quando o descartável segue disponível como padrão, a transição para alternativas reutilizáveis encontra mais resistência.',
  },
  {
    id: 3,
    icon: Lightbulb,
    emoji: '💰',
    title: 'Falta de Alternativas Acessíveis',
    color: '#4ADE80',
    description:
      'Ecobags e alternativas sustentáveis têm custo mais alto e não estavam amplamente disponíveis. Para populações de baixa renda, o custo extra é uma barreira real à mudança de comportamento.',
    impact: 'Médio',
    detail: 'Sem oferta acessível e incentivo prático, alternativas sustentáveis demoram mais para ganhar escala.',
  },
];

export function LawSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="section-3"
      className="relative py-20 px-4 min-h-screen flex flex-col justify-center"
      style={{ background: 'linear-gradient(180deg, #1A0E00 0%, #2D1800 50%, #1A0A00 100%)' }}
    >
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.03) 10px,
            rgba(255,255,255,0.03) 11px
          )`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm text-orange-400 border border-orange-500/30 bg-orange-950/30 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            ⚖️ Legislação Local
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
          >
            A Lei de{' '}
            <span
              className="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #F97316, #FBBF24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Manaus
            </span>
          </h2>
        </motion.div>

        {/* Law summary card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl p-6 mb-10 border border-orange-500/20 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #2D1A00, #1A1000)' }}
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-orange-500 to-amber-600 rounded-l-2xl" />
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(249, 115, 22, 0.2)' }}
            >
              <ShieldAlert className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h3
                className="text-white text-lg mb-2"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
              >
                Lei Municipal de Manaus — Redução de Sacolas Plásticas
              </h3>
              <p
                className="text-white/70 text-sm leading-relaxed mb-3"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Manaus aprovou uma referência legal importante para reduzir o uso de sacolas
                plásticas em estabelecimentos comerciais, em diálogo com a Política Nacional de
                Resíduos Sólidos. Ainda assim, a transformação prática dependeu de fiscalização,
                comunicação e alternativas acessíveis.
                <RefCitation ids={[8, 9]} />
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span
                  className="text-red-400 text-sm"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Desafio ainda presente na implementação local
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reasons heading */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-white/80 mb-6 text-xl"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
        >
          Por que não funcionou?
        </motion.h3>

        {/* Reason cards */}
        <div className="space-y-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            const isOpen = expanded === i;
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer"
                style={{
                  borderColor: isOpen ? `${reason.color}40` : 'rgba(255,255,255,0.08)',
                  background: isOpen
                    ? `linear-gradient(135deg, ${reason.color}10, rgba(255,255,255,0.03))`
                    : 'rgba(255,255,255,0.04)',
                }}
                onClick={() => setExpanded(isOpen ? null : i)}
              >
                {/* Card header */}
                <div className="flex items-center gap-4 p-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background: isOpen ? `${reason.color}25` : 'rgba(255,255,255,0.07)',
                    }}
                  >
                    <span className="text-xl">{reason.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <h4
                      className="text-white transition-all duration-300"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 600,
                        color: isOpen ? reason.color : 'white',
                      }}
                    >
                      {reason.title}
                    </h4>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: reason.color,
                        background: `${reason.color}15`,
                      }}
                    >
                      Impacto: {reason.impact}
                    </span>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white/40 text-lg flex-shrink-0"
                  >
                    ▾
                  </motion.span>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-white/5">
                        <p
                          className="text-white/75 text-sm leading-relaxed mb-3"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {reason.description}
                        </p>
                        <div
                          className="flex items-start gap-2 p-3 rounded-xl"
                          style={{ background: `${reason.color}12` }}
                        >
                          <span className="text-base flex-shrink-0">📊</span>
                          <p
                            className="text-sm italic"
                            style={{ fontFamily: 'var(--font-body)', color: reason.color }}
                          >
                            {reason.detail}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Infographic summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { icon: '📋', label: 'Marco municipal', value: '2011' },
            { icon: '♻️', label: 'Base nacional', value: 'PNRS 2010' },
            { icon: '🔍', label: 'Desafio central', value: 'Fiscalização' },
            { icon: '🧭', label: 'Caminho necessário', value: 'Educação' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-4 rounded-xl border border-white/8 bg-white/4"
            >
              <span className="text-2xl mb-2">{item.icon}</span>
              <span
                className="text-xl text-amber-400 mb-1"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
              >
                {item.value}
              </span>
              <span
                className="text-xs text-white/50"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
        <div className="mt-3 text-right">
          <RefCitation ids={[10]} />
          <span className="text-white/30 text-xs ml-1" style={{ fontFamily: 'var(--font-body)' }}>
            Contexto institucional local
          </span>
        </div>
      </div>
    </section>
  );
}
