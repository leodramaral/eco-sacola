import React, { useState } from 'react';
import { motion } from 'motion/react';

const curiosities = [
  {
    id: 0,
    front: '🛍️',
    question: 'Quanto tempo leva uma sacola plástica para se decompor?',
    answer: 'Entre 100 e 400 anos! Nesse período, ela se fragmenta em microplásticos que contaminam solo, água e seres vivos.',
    color: '#EF4444',
    bg: 'linear-gradient(135deg, #1A0505, #2D0A0A)',
  },
  {
    id: 1,
    front: '⏱️',
    question: 'Por quanto tempo uma sacola plástica é usada em média?',
    answer: 'Apenas 25 minutos! Uma sacola usada por menos de meia hora pode contaminar o meio ambiente por séculos.',
    color: '#F97316',
    bg: 'linear-gradient(135deg, #1A0D00, #2D1500)',
  },
  {
    id: 2,
    front: '♻️',
    question: 'Qual é a taxa de reciclagem de plástico no Brasil?',
    answer: 'Apenas 2%! O Brasil é o 4º maior gerador de lixo plástico do mundo, mas recicla uma fração mínima.',
    color: '#FBBF24',
    bg: 'linear-gradient(135deg, #1A1400, #2D2000)',
  },
  {
    id: 3,
    front: '🌊',
    question: 'Quanto plástico entra nos oceanos por ano?',
    answer: 'Mais de 8 milhões de toneladas por ano. O equivalente a despejar um caminhão de lixo por minuto nos oceanos.',
    color: '#22D3EE',
    bg: 'linear-gradient(135deg, #001A20, #002D35)',
  },
  {
    id: 4,
    front: '🌿',
    question: 'Quanto uma ecobag de algodão substitui?',
    answer: 'Uma ecobag de algodão pode substituir até 500 sacolas plásticas ao longo de sua vida útil de 3 a 5 anos.',
    color: '#4ADE80',
    bg: 'linear-gradient(135deg, #021A08, #042D10)',
  },
  {
    id: 5,
    front: '🐟',
    question: 'Os peixes do Rio Negro têm plástico no estômago?',
    answer: 'Sim! Estudos confirmaram que peixes do Amazonas já apresentam microplásticos em seus organismos — e chegam à nossa mesa.',
    color: '#60A5FA',
    bg: 'linear-gradient(135deg, #021020, #041830)',
  },
  {
    id: 6,
    front: '🏭',
    question: 'Quantas sacolas plásticas são produzidas por ano no mundo?',
    answer: 'Mais de 5 trilhões de sacolas plásticas são produzidas anualmente no mundo — 160.000 por segundo!',
    color: '#A78BFA',
    bg: 'linear-gradient(135deg, #0D0520, #180A35)',
  },
  {
    id: 7,
    front: '💧',
    question: 'Você consome microplástico?',
    answer: 'Sim! Estudos mostram que os humanos ingerem cerca de 5g de plástico por semana — o equivalente a um cartão de crédito!',
    color: '#F472B6',
    bg: 'linear-gradient(135deg, #200510, #35091A)',
  },
];

function FlipCard({ item }: { item: typeof curiosities[0] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      style={{ perspective: '1000px', height: '200px' }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%' }}
        className="relative"
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-5 border border-white/10"
          style={{
            background: item.bg,
            backfaceVisibility: 'hidden',
          }}
        >
          <motion.span
            className="text-5xl mb-4 block"
            animate={{ scale: flipped ? 1 : [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            {item.front}
          </motion.span>
          <p
            className="text-center text-white/80 text-sm leading-tight"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {item.question}
          </p>
          <span
            className="mt-3 text-xs"
            style={{ fontFamily: 'var(--font-body)', color: item.color }}
          >
            Toque para descobrir ▾
          </span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-5 border"
          style={{
            background: `linear-gradient(135deg, ${item.color}20, ${item.color}08)`,
            borderColor: `${item.color}40`,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <span className="text-3xl mb-3">💡</span>
          <p
            className="text-center text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: item.color }}
          >
            {item.answer}
          </p>
          <span className="mt-3 text-xs text-white/30" style={{ fontFamily: 'var(--font-body)' }}>
            Toque para voltar ↺
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export function CuriositiesSection() {
  return (
    <section
      id="section-7"
      className="relative py-20 px-4 min-h-screen flex flex-col justify-center"
      style={{ background: 'linear-gradient(180deg, #050515 0%, #0A0520 50%, #050515 100%)' }}
    >
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm text-purple-400 border border-purple-500/30 bg-purple-950/30 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            💡 Curiosidades
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
          >
            Você{' '}
            <span
              className="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #EC4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Sabia?
            </span>
          </h2>
          <p
            className="text-white/60 max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Clique nas cartas para descobrir fatos surpreendentes sobre o plástico e o meio
            ambiente.
          </p>
        </motion.div>

        {/* Flip cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {curiosities.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <FlipCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* Fun fact banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 p-6 rounded-2xl text-center overflow-hidden relative"
          style={{
            background: 'linear-gradient(135deg, rgba(167,139,250,0.15), rgba(236,72,153,0.1))',
            border: '1px solid rgba(167,139,250,0.2)',
          }}
        >
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(167,139,250,0.4), transparent 60%)',
                'radial-gradient(circle at 80% 50%, rgba(236,72,153,0.4), transparent 60%)',
                'radial-gradient(circle at 20% 50%, rgba(167,139,250,0.4), transparent 60%)',
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <p
            className="relative z-10 text-xl text-white"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
          >
            🌍 Se cada pessoa de Manaus{' '}
            <span className="text-purple-400">substituísse 1 sacola por dia</span>,
            <br />
            seriam{' '}
            <span className="text-pink-400">720 milhões</span> de sacolas a menos por ano!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
