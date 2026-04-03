import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { RefCitation } from './RefCitation';

const RECYCLING_IMAGE = 'https://images.unsplash.com/flagged/photo-1574380555089-06f915e8c074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

const initiatives = [
  {
    id: 0,
    emoji: '🚛',
    title: 'Coleta Seletiva Porta a Porta',
    zone: 'Dom Pedro · Flores · bairros programados',
    color: '#4ADE80',
    bg: 'rgba(74,222,128,0.08)',
    border: 'rgba(74,222,128,0.2)',
    description:
      'Lançado pela Semulsp em abril de 2024, o serviço recolhe recicláveis semanalmente nas residências e encaminha o material para associações de catadores.',
    details: [
      'Começou pelos bairros Dom Pedro e Flores',
      'Atende residências avisadas previamente por educadores ambientais',
      'Funciona como complemento aos PEVs já espalhados pela cidade',
    ],
    status: 'Semanal',
    statusColor: '#4ADE80',
    refIds: [33],
  },
  {
    id: 1,
    emoji: '📍',
    title: 'Pontos de Entrega Voluntária (PEVs)',
    zone: 'Supermercados · sedes públicas · várias zonas',
    color: '#22D3EE',
    bg: 'rgba(34,211,238,0.08)',
    border: 'rgba(34,211,238,0.2)',
    description:
      'A rede de PEVs da Semulsp oferece pontos fixos para descarte voluntário de recicláveis, inclusive embalagens plásticas limpas, aproximando a coleta da rotina urbana.',
    details: [
      'A listagem pública reúne dezenas de endereços em Manaus',
      'Há pontos em supermercados e em equipamentos públicos',
      'Recebem plástico, papel, vidro e metais; rejeitos ficam de fora',
    ],
    status: 'Rede ativa',
    statusColor: '#22D3EE',
    refIds: [34],
  },
  {
    id: 2,
    emoji: '♻️',
    title: 'ASCARMAN + InnPacto Amazônia',
    zone: 'Colônia Terra Nova · 6 bairros',
    color: '#A78BFA',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.2)',
    description:
      'O laboratório reinaugurado em 2025 fortalece a ASCARMAN com infraestrutura, educação ambiental e renda complementar para ampliar a reciclagem de plástico em Manaus.',
    details: [
      'O projeto beneficia diretamente 32 pessoas',
      'A ASCARMAN recolhe mais de 60 toneladas por mês',
      'Há foco no reaproveitamento de poliestireno pós-consumo',
    ],
    status: '2025',
    statusColor: '#A78BFA',
    refIds: [35],
  },
  {
    id: 3,
    emoji: '🧵',
    title: 'ARPA + EcoForte',
    zone: 'Manaus · cadeia local de reciclagem',
    color: '#60A5FA',
    bg: 'rgba(96,165,250,0.08)',
    border: 'rgba(96,165,250,0.2)',
    description:
      'A ARPA transforma sacolas e outros filmes plásticos em novos sacos para lixo, depois comercializados em Manaus pela EcoForte, mantendo o material em circulação.',
    details: [
      'A ARPA recicla cerca de 180 toneladas de resíduos por mês',
      'Parte das sacolas vira sacos resistentes para lixo',
      'O produto final volta ao mercado local com matéria-prima reciclada',
    ],
    status: 'Em operação',
    statusColor: '#60A5FA',
    refIds: [36, 37],
  },
  {
    id: 4,
    emoji: '💰',
    title: 'Plastic Bank + Lord + ASCARMAN',
    zone: 'Terra Nova · operação iniciada em maio de 2025',
    color: '#FBBF24',
    bg: 'rgba(251,191,36,0.08)',
    border: 'rgba(251,191,36,0.2)',
    description:
      'A parceria paga bônus por quilo de plástico entregue para reciclagem e busca evitar que garrafas PET cheguem aos rios e igarapés da Amazônia.',
    details: [
      'A meta é impedir 3 milhões de garrafas até o fim de 2025',
      'O bônus pode elevar a renda dos catadores em até 30%',
      'A operação usa rastreabilidade em blockchain',
    ],
    status: 'Novo',
    statusColor: '#FBBF24',
    refIds: [38, 39],
  },
];

export function InitiativesSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      id="section-5"
      className="relative py-20 px-4 min-h-screen flex flex-col justify-center"
      style={{ background: 'linear-gradient(180deg, #021408 0%, #031A0C 50%, #021408 100%)' }}
    >
      <div className="relative z-10 max-w-5xl mx-auto w-full">
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
            O que está sendo{' '}
            <span
              className="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #4ADE80, #22D3EE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              feito
            </span>{' '}
            em Manaus
          </h2>
          <p
            className="text-white/60 max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Da coleta na porta de casa ao retorno do plástico para a indústria, Manaus já tem uma
            rede real de iniciativas em funcionamento.
          </p>
        </motion.div>

        {/* Image banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10 rounded-2xl overflow-hidden relative h-40 sm:h-52"
        >
          <ImageWithFallback
            src={RECYCLING_IMAGE}
            alt="Cooperativa de reciclagem"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 p-6 flex flex-col justify-center">
            <h3
              className="text-white text-2xl mb-1"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
            >
              Coleta, triagem e retorno
            </h3>
            <p
              className="text-white/70 text-sm max-w-sm"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              As iniciativas locais conectam moradores, catadores, PEVs e empresas para tirar
              plástico do descarte comum.
            </p>
          </div>
        </motion.div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(selected === item.id ? null : item.id)}
              className="rounded-2xl border p-5 cursor-pointer transition-all duration-300"
              style={{
                background: selected === item.id ? item.bg : 'rgba(255,255,255,0.04)',
                borderColor: selected === item.id ? item.border.replace('0.2', '0.4') : 'rgba(255,255,255,0.08)',
              }}
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <h4
                      className="text-white text-sm"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-xs text-white/40 mt-0.5"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      📍 {item.zone}
                    </p>
                  </div>
                </div>
                <span
                  className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: item.statusColor,
                    background: `${item.statusColor}15`,
                    border: `1px solid ${item.statusColor}30`,
                  }}
                >
                  {item.status}
                </span>
              </div>

              {/* Expandable content */}
              <AnimatePresence>
                {selected === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <p
                      className="text-white/70 text-xs leading-relaxed mb-3"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {item.description}
                      <RefCitation ids={item.refIds} />
                    </p>
                    <div className="space-y-1.5">
                      {item.details.map((d, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <span style={{ color: item.color }} className="text-xs">●</span>
                          <span
                            className="text-xs text-white/60"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            {d}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Tap hint */}
              <p
                className="text-xs mt-3"
                style={{ fontFamily: 'var(--font-body)', color: item.color, opacity: 0.7 }}
              >
                {selected === item.id ? '▲ Fechar' : '▼ Ver detalhes'}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Network overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 rounded-2xl border border-white/10 overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          <div className="p-4 border-b border-white/10 flex items-center gap-2">
            <span className="text-sm text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
              🔗 Rede das iniciativas — Manaus, AM
            </span>
          </div>
          <div
            className="relative h-48 flex items-center justify-center overflow-hidden"
            style={{
              background: `
                radial-gradient(circle at 30% 40%, rgba(74,222,128,0.2) 0%, transparent 40%),
                radial-gradient(circle at 70% 60%, rgba(34,211,238,0.15) 0%, transparent 40%),
                radial-gradient(circle at 50% 50%, rgba(167,139,250,0.1) 0%, transparent 60%),
                linear-gradient(135deg, #021A08, #031A18)
              `,
            }}
          >
            {/* Illustrative network dots */}
            {initiatives.map((item, i) => {
              const positions = [
                { top: '35%', left: '30%' },
                { top: '55%', left: '60%' },
                { top: '25%', left: '70%' },
                { top: '65%', left: '40%' },
                { top: '45%', left: '80%' },
              ];
              const pos = positions[i];
              return (
                <motion.div
                  key={item.id}
                  className="absolute flex flex-col items-center"
                  style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                >
                  <div
                    className="w-4 h-4 rounded-full border-2 border-white/40 shadow-lg"
                    style={{ background: item.color }}
                  />
                  <span
                    className="text-xs text-white/60 mt-1 hidden sm:block whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem' }}
                  >
                    {item.title.split(' ')[0]}
                  </span>
                </motion.div>
              );
            })}
            <div className="text-center z-10 pointer-events-none">
              <p className="text-white/20 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                Coleta · Triagem · Reciclagem
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
