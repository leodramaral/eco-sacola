import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { RefCitation } from './RefCitation';

const SP_IMAGE = 'https://images.unsplash.com/photo-1662122849254-ee3cb9f6bfa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';
const CITY_IMAGE = 'https://images.unsplash.com/photo-1725287959957-809232e71674?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

const cases = [
  {
    city: 'São Paulo',
    state: 'SP',
    flag: '🏙️',
    color: '#3B82F6',
    gradient: 'from-blue-950 to-indigo-950',
    image: SP_IMAGE,
    year: '2011',
    law: 'Lei Nº 15.374/2011',
    description:
      'São Paulo se tornou uma referência nacional ao combinar legislação, comunicação pública e alternativas reutilizáveis no debate sobre redução de sacolas plásticas.',
    before: {
      bags: 'Uso intenso',
      label: 'dependência do modelo descartável',
      recycling: 'Baixa',
    },
    after: {
      reduction: 'Avanços',
      label: 'na redução e na conscientização',
      ecobags: 'Adoção maior',
      ecobagLabel: 'de alternativas reutilizáveis',
    },
    keys: ['Multas efetivas para descumpridores', 'Campanhas massivas de comunicação', 'Distribuição gratuita de ecobags', 'Engajamento da sociedade civil'],
    refIds: [23, 24],
  },
  {
    city: 'Rio de Janeiro',
    state: 'RJ',
    flag: '🌊',
    color: '#06B6D4',
    gradient: 'from-cyan-950 to-teal-950',
    image: CITY_IMAGE,
    year: '2021',
    law: 'Programa Lixo Zero Rio',
    description:
      'O Rio de Janeiro aparece como exemplo de articulação entre poder público, campanhas de conscientização e iniciativas urbanas voltadas à redução de resíduos.',
    before: {
      bags: 'Descarte visível',
      label: 'em praias, parques e espaços urbanos',
      recycling: 'Desafio',
    },
    after: {
      reduction: 'Mobilização',
      label: 'para educação ambiental e redução de resíduos',
      ecobags: 'Mais pontos',
      ecobagLabel: 'de engajamento e descarte correto',
    },
    keys: ['Parcerias com supermercados', 'Programas nas escolas', 'Pontos de troca de plástico', 'Campanha "Rio sem Plástico"'],
    refIds: [25, 26],
  },
];

export function SuccessCasesSection() {
  const [current, setCurrent] = useState(0);
  const [view, setView] = useState<'after' | 'before'>('after');
  const c = cases[current];

  const prev = () => setCurrent((c) => (c - 1 + cases.length) % cases.length);
  const next = () => setCurrent((c) => (c + 1) % cases.length);

  return (
    <section
      id="section-4"
      className="relative py-20 px-4 min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #020B18 0%, #051422 50%, #020B18 100%)' }}
    >
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
            className="inline-block px-4 py-1.5 rounded-full text-sm text-green-400 border border-green-500/30 bg-green-950/30 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            ✅ Casos de Sucesso
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
          >
            Onde{' '}
            <span
              className="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #22D3EE, #3B82F6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Funcionou
            </span>{' '}
            no Brasil
          </h2>
          <p
            className="text-white/60 max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Outras cidades brasileiras mostraram que é possível mudar. Manaus pode seguir o mesmo
            caminho.
          </p>
        </motion.div>

        {/* Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl overflow-hidden border border-white/10"
          >
            {/* Image header */}
            <div className="relative h-52 sm:h-64">
              <ImageWithFallback
                src={c.image}
                alt={c.city}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-85`}
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{c.flag}</span>
                  <div>
                    <h3
                      className="text-3xl text-white"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
                    >
                      {c.city}
                    </h3>
                    <span
                      className="text-sm px-2 py-0.5 rounded-full text-white/80 bg-white/10"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {c.law} · {c.year}
                    </span>
                  </div>
                </div>
                <p
                  className="text-white/80 text-sm max-w-lg leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {c.description}
                  <RefCitation ids={c.refIds} />
                </p>
              </div>
            </div>

            {/* Stats section */}
            <div style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              {/* Before / After toggle */}
              <div className="flex border-b border-white/10">
                <button
                  onClick={() => setView('before')}
                  className={`flex-1 py-3 text-sm transition-all duration-200 cursor-pointer ${
                    view === 'before'
                      ? 'text-red-400 border-b-2 border-red-400 bg-red-950/20'
                      : 'text-white/50 hover:text-white/70'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Antes da Lei
                </button>
                <button
                  onClick={() => setView('after')}
                  className={`flex-1 py-3 text-sm transition-all duration-200 cursor-pointer ${
                    view === 'after'
                      ? 'text-green-400 border-b-2 border-green-400 bg-green-950/20'
                      : 'text-white/50 hover:text-white/70'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Depois da Lei
                </button>
              </div>

              <AnimatePresence mode="wait">
                {view === 'before' ? (
                  <motion.div
                    key="before"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 grid grid-cols-2 gap-4"
                  >
                    <div className="text-center">
                      <div
                        className="text-3xl text-red-400 mb-1"
                        style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
                      >
                        {c.before.bags}
                      </div>
                      <div
                        className="text-xs text-white/50"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {c.before.label}
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className="text-3xl text-red-400 mb-1"
                        style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
                      >
                        {c.before.recycling}
                      </div>
                      <div
                        className="text-xs text-white/50"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        taxa de reciclagem
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="after"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 grid grid-cols-2 gap-4"
                  >
                    <div className="text-center">
                      <div
                        className="text-3xl text-green-400 mb-1"
                        style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
                      >
                        {c.after.reduction}
                      </div>
                      <div
                        className="text-xs text-white/50"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {c.after.label}
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className="text-3xl text-cyan-400 mb-1"
                        style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
                      >
                        {c.after.ecobags}
                      </div>
                      <div
                        className="text-xs text-white/50"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {c.after.ecobagLabel}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Key factors */}
              <div className="px-6 pb-6">
                <h4
                  className="text-white/60 text-xs mb-3 uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Fatores do Sucesso
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {c.keys.map((k, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span style={{ color: c.color }} className="flex-shrink-0 mt-0.5">✓</span>
                      <span
                        className="text-sm text-white/70"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {k}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === current ? 'w-8 h-2.5 bg-cyan-400' : 'w-2.5 h-2.5 bg-white/30'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Manaus call-to-action insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 p-6 rounded-2xl text-center border border-cyan-500/20 bg-cyan-950/20"
        >
          <p
            className="text-white text-lg"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
          >
            🌿 Manaus tem{' '}
            <span className="text-cyan-400">todo o potencial</span> para ser o próximo caso de
            sucesso.
          </p>
          <p
            className="text-white/60 text-sm mt-2"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            A diferença está na educação, fiscalização e alternativas acessíveis.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
