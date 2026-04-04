import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  IconAlertTriangle,
  IconArrowUp,
  IconBook,
  IconChevronDown,
  IconDownload,
  IconExternalLink,
  IconHeart,
} from '@tabler/icons-react';
import {
  referenceGroups,
  refIdToGroup,
  typeLabels,
  type ReferenceGroup,
} from '../content/references';
import {
  generateABNTPDF,
  getLinkLabel,
  isInstitutionalLink,
  sanitizeReferenceIds,
} from './reference-utils';

function ReferenceGroupCard({
  group,
  globalOffset,
  isForceOpen,
  highlightedRefIds,
}: {
  group: ReferenceGroup;
  globalOffset: number;
  isForceOpen: boolean;
  highlightedRefIds: Set<number>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isForceOpen) {
      setIsOpen(true);
    }
  }, [isForceOpen]);

  useEffect(() => {
    if (isForceOpen && isOpen && highlightedRefIds.size > 0) {
      const firstHighlighted = group.refs.find((reference) => highlightedRefIds.has(reference.id));
      if (firstHighlighted) {
        setTimeout(() => {
          const el = document.getElementById(`ref-item-${firstHighlighted.id}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 400);
      }
    }
  }, [group.refs, highlightedRefIds, isForceOpen, isOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl overflow-hidden border transition-all duration-300"
      style={{
        borderColor: isForceOpen ? `${group.color}50` : group.borderColor,
        background: group.bgColor,
        boxShadow: isForceOpen ? `0 0 24px ${group.color}18` : 'none',
      }}
    >
      <button
        onClick={() => setIsOpen((open) => !open)}
        className="w-full flex items-center gap-4 p-5 cursor-pointer text-left"
      >
        <div
          className="flex h-11 w-11 items-center justify-center rounded-2xl border flex-shrink-0"
          style={{
            color: group.color,
            background: `${group.color}14`,
            borderColor: `${group.color}30`,
          }}
        >
          <group.icon className="eco-icon eco-icon-xl" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <span
            className="text-base text-white"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: group.color }}
          >
            {group.section}
          </span>
          <p className="text-white/40 text-xs mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>
            {group.refs.length} referência{group.refs.length > 1 ? 's' : ''}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <IconChevronDown className="eco-icon w-5 h-5 text-white/40" aria-hidden="true" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-3 border-t border-white/8 pt-4">
              {group.refs.map((reference, index) => {
                const typeInfo = typeLabels[reference.type];
                const isHighlighted = highlightedRefIds.has(reference.id);
                const institutionalLink = isInstitutionalLink(reference);

                return (
                  <motion.div
                    id={`ref-item-${reference.id}`}
                    key={reference.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    className="p-4 rounded-xl border transition-all duration-500"
                    style={{
                      borderColor: isHighlighted ? `${group.color}60` : 'rgba(255,255,255,0.06)',
                      background: isHighlighted ? `${group.color}14` : 'rgba(255,255,255,0.03)',
                      boxShadow: isHighlighted ? `0 0 20px ${group.color}18` : 'none',
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                          background: isHighlighted ? `${group.color}35` : `${group.color}20`,
                          color: group.color,
                        }}
                      >
                        {globalOffset + index + 1}
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className="inline-block px-2 py-0.5 rounded-full text-xs"
                            style={{
                              fontFamily: 'var(--font-body)',
                              color: typeInfo.color,
                              background: `${typeInfo.color}15`,
                              border: `1px solid ${typeInfo.color}30`,
                            }}
                          >
                            {typeInfo.label}
                          </span>
                          {institutionalLink && (
                            <span
                              className="inline-block px-2 py-0.5 rounded-full text-xs text-white/70"
                              style={{
                                fontFamily: 'var(--font-body)',
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.08)',
                              }}
                            >
                              Link institucional
                            </span>
                          )}
                        </div>

                        <p
                          className="text-white/90 text-sm leading-snug mb-2"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {reference.title}
                        </p>

                        <p
                          className="text-white/45 text-xs mb-2"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {reference.author} · {reference.year}
                        </p>

                        <p
                          className="text-white/70 text-sm leading-relaxed"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {reference.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <a
                        href={reference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 hover:scale-[1.02]"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontWeight: 600,
                          background: `${group.color}18`,
                          color: group.color,
                          border: `1px solid ${group.color}30`,
                        }}
                        title={getLinkLabel(reference)}
                      >
                        {getLinkLabel(reference)}
                        <IconExternalLink className="eco-icon w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface ReferencesSectionProps {
  onBack: () => void;
  backLabel?: string;
  highlightedRefIds?: number[];
}

export function ReferencesSection({
  onBack,
  backLabel = 'Voltar ao início',
  highlightedRefIds = [],
}: ReferencesSectionProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const sanitizedHighlightIds = sanitizeReferenceIds(highlightedRefIds);
  const highlightedIdsSet = new Set(sanitizedHighlightIds);
  const forceOpenGroups = new Set<number>();

  sanitizedHighlightIds.forEach((id) => {
    const groupIndex = refIdToGroup[id];
    if (groupIndex !== undefined) {
      forceOpenGroups.add(groupIndex);
    }
  });

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      generateABNTPDF();
      setIsDownloading(false);
    }, 300);
  };

  const offsets: number[] = [];
  let count = 0;
  for (const group of referenceGroups) {
    offsets.push(count);
    count += group.refs.length;
  }
  const totalRefs = count;

  return (
    <section
      id="section-references"
      className="relative py-20 px-4 min-h-screen flex flex-col justify-center"
      style={{ background: 'linear-gradient(180deg, #050A10 0%, #071015 50%, #030810 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(74,222,128,1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-5">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{
                background: 'rgba(74,222,128,0.12)',
                border: '1px solid rgba(74,222,128,0.25)',
              }}
            >
              <IconBook className="eco-icon w-8 h-8 text-emerald-400" aria-hidden="true" />
            </div>
          </div>

          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm text-emerald-400 border border-emerald-500/30 bg-emerald-950/30 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span className="inline-flex items-center gap-1.5">
              <IconBook className="eco-icon eco-icon-sm" aria-hidden="true" />
              Fontes e Referências
            </span>
          </span>

          <h2
            className="text-4xl sm:text-5xl text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
          >
            Base{' '}
            <span
              className="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #4ADE80, #22D3EE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Curada
            </span>
          </h2>

          <p
            className="text-white/55 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            As referências desta cartilha foram reorganizadas por tema para facilitar a leitura,
            dar mais contexto às fontes e deixar claro quando um link leva ao portal institucional
            da instituição responsável.
          </p>

          <div className="flex justify-center gap-6 mt-6">
            <div className="text-center">
              <span
                className="block text-2xl text-emerald-400"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
              >
                {totalRefs}
              </span>
              <span className="text-xs text-white/40" style={{ fontFamily: 'var(--font-body)' }}>
                referências
              </span>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <span
                className="block text-2xl text-cyan-400"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
              >
                {referenceGroups.length}
              </span>
              <span className="text-xs text-white/40" style={{ fontFamily: 'var(--font-body)' }}>
                seções
              </span>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <span
                className="block text-2xl text-amber-400"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
              >
                5
              </span>
              <span className="text-xs text-white/40" style={{ fontFamily: 'var(--font-body)' }}>
                tipos de fonte
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {Object.entries(typeLabels).map(([key, info]) => (
            <span
              key={key}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
              style={{
                fontFamily: 'var(--font-body)',
                color: info.color,
                background: `${info.color}12`,
                border: `1px solid ${info.color}25`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: info.color }}
              />
              {info.label}
            </span>
          ))}
        </motion.div>

        <div className="space-y-4 mb-10">
          {referenceGroups.map((group, index) => (
            <ReferenceGroupCard
              key={group.section}
              group={group}
              globalOffset={offsets[index]}
              isForceOpen={forceOpenGroups.has(index)}
              highlightedRefIds={highlightedIdsSet}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-5 rounded-2xl border border-white/8 bg-white/3 mb-8 text-center"
        >
          <div className="flex items-start justify-center gap-2 text-left">
            <IconAlertTriangle
              className="eco-icon eco-icon-md text-amber-300 mt-0.5"
              aria-hidden="true"
            />
            <p
              className="text-white/50 text-xs leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Toda referência desta cartilha possui URL de acesso. Quando não há uma página
              pública específica do documento citado, o botão leva ao portal institucional
              relacionado e isso é informado na descrição da fonte.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white cursor-pointer transition-all"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              background: isDownloading
                ? 'rgba(22,163,74,0.4)'
                : 'linear-gradient(135deg, #16A34A, #0891B2)',
              boxShadow: isDownloading ? 'none' : '0 0 30px rgba(22,163,74,0.35)',
            }}
          >
            <IconDownload
              className={`eco-icon w-4 h-4 ${isDownloading ? 'animate-bounce' : ''}`}
              aria-hidden="true"
            />
            {isDownloading ? 'Gerando PDF…' : 'Baixar em PDF (ABNT)'}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onBack}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-all cursor-pointer"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
          >
            <IconArrowUp className="eco-icon w-4 h-4" aria-hidden="true" />
            {backLabel}
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-8 border-t border-white/8 text-center"
        >
          <p className="text-white/25 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
            EcoSacola Manaus — Cartilha Digital Educativa · 2025
          </p>
          <p className="text-white/15 text-xs mt-1" style={{ fontFamily: 'var(--font-body)' }}>
            <span className="inline-flex items-center gap-1.5">
              Feita com
              <IconHeart className="eco-icon eco-icon-sm text-emerald-300/80" aria-hidden="true" />
              para proteger o Amazonas
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
