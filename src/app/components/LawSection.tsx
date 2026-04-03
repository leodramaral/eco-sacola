import React from 'react';
import { motion } from 'motion/react';
import {
  CalendarRange,
  Clock3,
  Gavel,
  Landmark,
  Scale,
  ScrollText,
} from 'lucide-react';
import { RefCitation } from './RefCitation';

const timelineItems = [
  {
    id: 0,
    period: 'Maio de 2021',
    eyebrow: 'Marco municipal inicial',
    title: 'Nasce a lei municipal original',
    summary:
      'A Lei n.º 485/2021 proibiu a distribuição gratuita de sacolas plásticas nos estabelecimentos comerciais de Manaus e inaugurou o ciclo regulatório mais recente da cidade.',
    detail:
      'O debate saiu do plano político e virou norma local, com foco na redução do descartável e no incentivo a alternativas reutilizáveis.',
    refs: [8, 9, 10],
    icon: ScrollText,
    color: '#F97316',
  },
  {
    id: 1,
    period: 'Outubro de 2021',
    eyebrow: 'Lei alterada',
    title: 'A regra ganha cronograma de adaptação',
    summary:
      'A Lei n.º 2.799/2021 alterou o texto original e organizou uma transição mais gradual para o comércio, com novas regras de adequação.',
    detail:
      'Esse momento foi decisivo porque mostrou que a política pública não seria aplicada de uma só vez, mas em etapas.',
    refs: [11, 12, 13],
    icon: CalendarRange,
    color: '#FB923C',
  },
  {
    id: 2,
    period: 'Outubro de 2022',
    eyebrow: 'Aplicação prática',
    title: 'A regra municipal chega aos grandes supermercados',
    summary:
      'As restrições sobre a distribuição e a venda de sacolas plásticas convencionais começaram a ser percebidas na prática nos grandes supermercados de Manaus.',
    detail:
      'Aqui a legislação sai do papel e entra no cotidiano do consumidor, marcando a passagem da regulamentação para a implementação.',
    refs: [14, 15],
    icon: Scale,
    color: '#FBBF24',
  },
  {
    id: 3,
    period: 'Dezembro de 2022',
    eyebrow: 'Escala estadual',
    title: 'O Amazonas aprova uma lei para todo o estado',
    summary:
      'Com a Lei estadual n.º 6.077/2022, o tema deixou de ser apenas municipal e passou a valer em todo o Amazonas, com disciplina para alternativas biodegradáveis ou biocompostáveis.',
    detail:
      'Esse passo ampliou o alcance da política e reposicionou o debate para além da capital.',
    refs: [16, 17, 18],
    icon: Landmark,
    color: '#22D3EE',
  },
  {
    id: 4,
    period: 'Outubro e novembro de 2023',
    eyebrow: 'Adiamento parcial',
    title: 'A fase mais rígida é empurrada para 20 de outubro de 2026',
    summary:
      'A Lei n.º 3.189/2023 não revogou a política, mas adiou a etapa mais severa da legislação municipal, redesenhando o ritmo da implementação.',
    detail:
      'Esse marco é importante porque muda o calendário de exigência sem apagar a existência da lei.',
    refs: [19, 20],
    icon: Clock3,
    color: '#A78BFA',
  },
  {
    id: 5,
    period: 'Maio e junho de 2024',
    eyebrow: 'Disputa judicial',
    title: 'A discussão chega ao Tribunal de Justiça do Amazonas',
    summary:
      'Uma ação passou a questionar a legislação municipal e estadual sobre sacolas plásticas, mas acabou extinta, mantendo as regras em vigor.',
    detail:
      'O tema deixou de ser apenas legislativo e administrativo, ganhando também uma camada jurídica formal.',
    refs: [21, 22],
    icon: Gavel,
    color: '#F87171',
  },
];

export function LawSection() {
  return (
    <section
      id="section-3"
      className="relative py-20 px-4 min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #160B00 0%, #261300 48%, #120700 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(249,115,22,1) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,1) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div
        className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: 'rgba(249,115,22,0.16)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
          >
            <span
              className="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #F97316, #FBBF24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Lei das Sacolas
            </span>
          </h2>

          <p
            className="text-white/65 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Legislação criada para reduzir a distribuição de sacolas plásticas no comércio de
            Manaus, depois alterada, ampliada para o Amazonas e discutida judicialmente.
          </p>
        </motion.div>

        <div className="relative mb-12">
          <div
            className="absolute left-[19px] sm:left-6 top-3 bottom-3 w-px"
            style={{
              background:
                'linear-gradient(180deg, rgba(249,115,22,0.85) 0%, rgba(251,191,36,0.55) 45%, rgba(248,113,113,0.45) 100%)',
            }}
          />

          <div className="space-y-5">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="relative pl-14 sm:pl-20"
                >
                  <div
                    className="absolute left-0 top-4 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center border"
                    style={{
                      background: `${item.color}1A`,
                      borderColor: `${item.color}40`,
                      boxShadow: `0 0 20px ${item.color}20`,
                    }}
                  >
                    <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" style={{ color: item.color }} />
                  </div>

                  <div
                    className="absolute left-10 sm:left-12 top-9 h-px w-4"
                    style={{ background: `${item.color}55` }}
                  />

                  <div
                    className="rounded-3xl border p-5 sm:p-6"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025))',
                      borderColor: `${item.color}30`,
                    }}
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs"
                            style={{
                              fontFamily: 'var(--font-body)',
                              color: item.color,
                              background: `${item.color}15`,
                              border: `1px solid ${item.color}2E`,
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: item.color }}
                            />
                            {item.period}
                          </span>

                          <span
                            className="inline-block px-3 py-1 rounded-full text-xs text-white/60 border border-white/10 bg-white/4"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            {item.eyebrow}
                          </span>
                        </div>

                        <h3
                          className="text-white text-xl sm:text-2xl mb-2"
                          style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                        >
                          {item.title}
                        </h3>

                        <p
                          className="text-white/78 text-sm sm:text-base leading-relaxed mb-3"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {item.summary}
                          <RefCitation ids={item.refs} />
                        </p>

                        <div
                          className="rounded-2xl p-4 border"
                          style={{
                            background: `${item.color}10`,
                            borderColor: `${item.color}22`,
                          }}
                        >
                          <p
                            className="text-sm leading-relaxed"
                            style={{ fontFamily: 'var(--font-body)', color: item.color }}
                          >
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
