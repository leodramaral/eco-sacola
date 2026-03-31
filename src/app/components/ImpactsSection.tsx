import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const POLLUTION_IMAGE = 'https://images.unsplash.com/photo-1759868411143-aec66f57d370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';
const TURTLE_IMAGE = 'https://images.unsplash.com/photo-1638644344507-be07bf38377a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

const impacts = [
  {
    emoji: '🌊',
    title: 'Rios e Igarapés',
    color: 'from-blue-900 to-cyan-900',
    accent: '#22D3EE',
    tag: 'Rio Negro · Igarapés Urbanos',
    description:
      'Sacolas plásticas bloqueiam igarapés de Manaus, causando enchentes e contaminando o Rio Negro com microplásticos que entram na cadeia alimentar.',
    stat: '70%',
    statLabel: 'dos igarapés urbanos contaminados',
    image: POLLUTION_IMAGE,
  },
  {
    emoji: '🐢',
    title: 'Fauna Amazônica',
    color: 'from-red-950 to-orange-950',
    accent: '#FB923C',
    tag: 'Peixes · Tartarugas · Aves',
    description:
      'Animais confundem plásticos com alimento. Peixes do Rio Negro já apresentam fragmentos de plástico em seu estômago.',
    stat: '100K+',
    statLabel: 'animais mortos por plástico/ano',
    image: TURTLE_IMAGE,
  },
  {
    emoji: '🏙️',
    title: 'Lixo Urbano',
    color: 'from-yellow-950 to-amber-950',
    accent: '#FBBF24',
    tag: 'Bairros · Ruas · Mercados',
    description:
      'Manaus gera toneladas de sacolas plásticas por dia. Apenas uma fração é descartada corretamente, o restante vai para rios ou lixões.',
    stat: '1.800t',
    statLabel: 'de lixo gerado por dia em Manaus',
    image: null,
  },
  {
    emoji: '🔬',
    title: 'Microplásticos',
    color: 'from-purple-950 to-indigo-950',
    accent: '#A78BFA',
    tag: 'Invisíveis · Tóxicos · Permanentes',
    description:
      'Microplásticos já foram encontrados em peixes do Amazonas, na água potável e até no ar de Manaus. São invisíveis e impossíveis de remover.',
    stat: '5mm',
    statLabel: 'tamanho máximo de microplástico',
    image: null,
  },
];

export function ImpactsSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="section-1"
      className="relative py-20 px-4 min-h-screen flex flex-col justify-center"
      style={{ background: 'linear-gradient(180deg, #071810 0%, #0A1A2E 50%, #071018 100%)' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #4ADE80 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm text-red-400 border border-red-500/30 bg-red-950/30 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            ⚠️ Impactos Reais
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
          >
            O Impacto do{' '}
            <span
              className="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #F87171, #FB923C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Plástico
            </span>
          </h2>
          <p
            className="text-white/60 max-w-xl mx-auto text-base sm:text-lg"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Manaus, capital do Amazonas, enfrenta uma crise silenciosa de poluição plástica que
            afeta seus rios, fauna e comunidades.
          </p>
        </motion.div>

        {/* Impact cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {impacts.map((impact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 ${
                expanded === i ? 'border-white/20' : 'border-white/5 hover:border-white/15'
              }`}
              style={{ background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${impact.color} opacity-90`}
              />

              {/* Image overlay (for cards with images) */}
              {impact.image && expanded === i && (
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={impact.image}
                    alt={impact.title}
                    className="w-full h-full object-cover opacity-20"
                  />
                </div>
              )}

              <div className="relative z-10 p-6">
                {/* Tag */}
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs mb-3"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: impact.accent,
                    background: `${impact.accent}20`,
                    border: `1px solid ${impact.accent}40`,
                  }}
                >
                  {impact.tag}
                </span>

                {/* Title row */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{impact.emoji}</span>
                  <h3
                    className="text-xl text-white"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                  >
                    {impact.title}
                  </h3>
                </div>

                {/* Stat */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span
                    className="text-4xl"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      color: impact.accent,
                    }}
                  >
                    {impact.stat}
                  </span>
                  <span
                    className="text-xs text-white/50"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {impact.statLabel}
                  </span>
                </div>

                {/* Expandable description */}
                <motion.div
                  initial={false}
                  animate={{ height: expanded === i ? 'auto' : 0, opacity: expanded === i ? 1 : 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <p
                    className="text-white/80 text-sm leading-relaxed pt-2 border-t border-white/10"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {impact.description}
                  </p>
                </motion.div>

                {/* Expand hint */}
                <p
                  className="text-xs mt-3 flex items-center gap-1"
                  style={{ fontFamily: 'var(--font-body)', color: impact.accent }}
                >
                  {expanded === i ? '▲ Fechar' : '▼ Saiba mais'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local focus callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 p-6 rounded-2xl border border-emerald-500/20 bg-emerald-950/30 backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <span className="text-4xl">📍</span>
            <div>
              <h4
                className="text-white mb-1 text-lg"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
              >
                Realidade de Manaus
              </h4>
              <p
                className="text-white/70 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                O Rio Negro e os igarapés urbanos como o Educandos e o Tarumã sofrem com o descarte
                irregular de sacolas plásticas. Em períodos de cheia, o plástico se espalha por toda
                a várzea amazônica.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
