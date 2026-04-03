import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Share2, CheckCircle, Download, Files, ArrowUpRight, RotateCcw } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const FOREST_IMAGE =
  'https://images.unsplash.com/photo-1771292861005-c6d22476a2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

interface FinalCTASectionProps {
  onRestart: () => void;
  onReferences: () => void;
  onDownloadPdf: () => void;
}

export function FinalCTASection({
  onRestart,
  onReferences,
  onDownloadPdf,
}: FinalCTASectionProps) {
  const [shareState, setShareState] = useState<'idle' | 'copied' | 'shared'>('idle');

  const flashShareState = (state: 'copied' | 'shared') => {
    setShareState(state);
    window.setTimeout(() => setShareState('idle'), 2200);
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'EcoSacola Manaus',
          text: 'Aprendi sobre o impacto das sacolas plásticas em Manaus. Você também deveria conhecer essa cartilha! 🌿',
          url: window.location.href,
        });
        flashShareState('shared');
        return;
      }

      await navigator.clipboard.writeText(window.location.href);
      flashShareState('copied');
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return;
      }
    }
  };

  return (
    <section
      id="section-6"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20"
    >
      <div className="absolute inset-0">
        <ImageWithFallback
          src={FOREST_IMAGE}
          alt="Floresta Amazônica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#021A08]/90 via-[#021A08]/85 to-[#021A08]/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="flex justify-center mb-8"
        >
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-emerald-500/40"
            style={{ background: 'rgba(74,222,128,0.1)', backdropFilter: 'blur(10px)' }}
          >
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span
              className="text-emerald-400 text-sm"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Cartilha completa — 7/7 seções
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-10"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-white mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 900 }}
          >
            Faça esta{' '}
            <span
              className="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #4ADE80, #22D3EE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              cartilha circular
            </span>
          </h2>
          <p
            className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            A leitura termina aqui, mas o movimento começa agora. Compartilhe a cartilha, abra as
            fontes e leve as referências com você para continuar essa conversa fora daqui.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.95fr] gap-4 sm:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-[2rem] border border-white/10 p-6 sm:p-8 text-left"
            style={{
              background:
                'linear-gradient(135deg, rgba(22,163,74,0.18) 0%, rgba(8,145,178,0.12) 55%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 24px 80px rgba(2, 26, 8, 0.35)',
            }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-emerald-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <Share2 className="h-3.5 w-3.5" />
              Ação principal
            </span>

            <h3
              className="mt-4 text-2xl sm:text-3xl text-white leading-tight max-w-xl"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
            >
              Compartilhe esta cartilha e faça a conversa chegar mais longe.
            </h3>
            <p
              className="mt-3 text-sm sm:text-base text-white/72 leading-relaxed max-w-xl"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Quando a cartilha circula, ela deixa de ser só leitura e vira repertório para casa,
              escola, comércio e sala de aula.
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleShare}
              className="mt-7 inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-7 py-4 text-white cursor-pointer"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #16A34A, #0891B2)',
                boxShadow: '0 0 40px rgba(22, 163, 74, 0.35)',
              }}
            >
              <span className="inline-flex items-center gap-2">
                {shareState === 'copied'
                  ? 'Link copiado'
                  : shareState === 'shared'
                    ? 'Compartilhada'
                    : 'Compartilhar'}
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            <motion.button
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.38 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onReferences}
              className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 text-left cursor-pointer transition-colors hover:bg-white/8"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="w-11 h-11 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center text-cyan-300">
                  <Files className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/35" />
              </div>
              <h3
                className="mt-5 text-xl text-white"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
              >
                Ver página de referências
              </h3>
              <p
                className="mt-2 text-sm text-white/65 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Navegue pelas fontes organizadas por tema, abra os links originais e use a página
                como apoio para leitura, aula ou apresentação.
              </p>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.46 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onDownloadPdf}
              className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 text-left cursor-pointer transition-colors hover:bg-white/8"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="w-11 h-11 rounded-2xl border border-amber-400/20 bg-amber-400/10 flex items-center justify-center text-amber-300">
                  <Download className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/35" />
              </div>
              <h3
                className="mt-5 text-xl text-white"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
              >
                Baixar arquivo de referências
              </h3>
              <p
                className="mt-2 text-sm text-white/65 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Gere um PDF em formato ABNT para consultar offline, anexar em trabalho ou guardar
                como material de apoio.
              </p>
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex justify-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onRestart}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white/65 transition-all hover:border-white/25 hover:text-white cursor-pointer"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <RotateCcw className="w-4 h-4" />
            Voltar ao topo da cartilha
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p
            className="text-white/30 text-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            EcoSacola Manaus — Cartilha Digital Educativa · 2026
          </p>
          <p
            className="text-white/20 text-xs mt-1"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Feita com 💚 para proteger o Amazonas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
