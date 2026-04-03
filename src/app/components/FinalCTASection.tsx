import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Share2, CheckCircle, Download, Files } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
// @ts-ignore
import confetti from 'canvas-confetti';

const FOREST_IMAGE = 'https://images.unsplash.com/photo-1771292861005-c6d22476a2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

const commitments = [
  'Usar ecobag nas compras',
  'Recusar sacolas plásticas',
  'Levar sacolas de casa',
  'Reutilizar embalagens',
];

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
  const [checked, setChecked] = useState<number[]>([]);
  const [shared, setShared] = useState(false);

  const toggleCommitment = (i: number) => {
    setChecked((prev) => {
      const newChecked = prev.includes(i) ? prev.filter((c) => c !== i) : [...prev, i];
      if (newChecked.length === commitments.length) {
        // All checked — celebrate!
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#4ADE80', '#22D3EE', '#FBBF24', '#A78BFA'],
        });
      }
      return newChecked;
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'EcoSacola Manaus',
        text: 'Aprendi sobre o impacto das sacolas plásticas em Manaus. Você também deveria conhecer essa cartilha! 🌿',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  const allChecked = checked.length === commitments.length;

  return (
    <section
      id="section-7"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={FOREST_IMAGE}
          alt="Floresta Amazônica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#021A08]/90 via-[#021A08]/85 to-[#021A08]/95" />
      </div>

      {/* Floating particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${10 + i * 9}%`,
            bottom: '-10%',
          }}
          animate={{ y: '-120vh', opacity: [0, 0.6, 0] }}
          transition={{
            duration: 6 + i * 0.8,
            repeat: Infinity,
            delay: i * 0.7,
            ease: 'linear',
          }}
        >
          <span style={{ fontSize: 14 + i * 2 }}>🍃</span>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-2xl mx-auto w-full text-center">
        {/* Progress complete badge */}
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
              Cartilha completa — 8/8 seções
            </span>
          </div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #4ADE80, #22D3EE, #A78BFA)' }}
            />
          </div>
          <div className="flex justify-between mt-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="w-2 h-2 rounded-full bg-emerald-400"
              />
            ))}
          </div>
        </motion.div>

        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-white mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 900 }}
          >
            Pequenas{' '}
            <span
              className="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #4ADE80, #22D3EE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              escolhas
            </span>
            <br />
            geram grandes{' '}
            <span
              className="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #FBBF24, #F97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              impactos
            </span>
          </h2>
          <p
            className="text-white/70 text-base sm:text-lg leading-relaxed max-w-lg mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Você chegou até aqui e já deu o primeiro passo. Agora é hora de agir. Manaus precisa de
            você.
          </p>
        </motion.div>

        {/* Commitment checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-10 rounded-2xl p-6 border border-white/10 text-left"
          style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}
        >
          <h3
            className="text-white mb-4 text-center"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
          >
            Meus compromissos 🌿
          </h3>
          <div className="space-y-3">
            {commitments.map((c, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.97 }}
                onClick={() => toggleCommitment(i)}
                className="w-full flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 cursor-pointer text-left"
                style={{
                  borderColor: checked.includes(i) ? 'rgba(74,222,128,0.4)' : 'rgba(255,255,255,0.1)',
                  background: checked.includes(i) ? 'rgba(74,222,128,0.1)' : 'rgba(255,255,255,0.03)',
                }}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    checked.includes(i) ? 'bg-emerald-500 border-emerald-500' : 'border-white/30'
                  }`}
                >
                  {checked.includes(i) && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-white text-xs"
                    >
                      ✓
                    </motion.span>
                  )}
                </div>
                <span
                  className={`text-sm transition-all duration-300 ${
                    checked.includes(i) ? 'text-emerald-400' : 'text-white/70'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {c}
                </span>
              </motion.button>
            ))}
          </div>
          {allChecked && (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center text-emerald-400 mt-4"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
            >
              🎉 Parabéns! Você é um Eco-Herói de Manaus!
            </motion.p>
          )}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={onRestart}
            className="px-8 py-4 rounded-full text-white cursor-pointer"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #16A34A, #0891B2)',
              boxShadow: '0 0 40px rgba(22, 163, 74, 0.4)',
            }}
          >
            🌱 Começar Hoje
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleShare}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all cursor-pointer"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
          >
            <Share2 className="w-4 h-4" />
            {shared ? 'Link copiado! ✓' : 'Compartilhar'}
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 pt-8 border-t border-white/10"
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
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={onReferences}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white/40 transition-all hover:border-white/30 hover:text-white/70 cursor-pointer"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <Files className="h-3.5 w-3.5" />
              Ver referências e fontes
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={onDownloadPdf}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/8 px-4 py-2 text-xs text-emerald-300 transition-all hover:border-emerald-500/35 hover:bg-emerald-500/12 cursor-pointer"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <Download className="h-3.5 w-3.5" />
              Baixar referências em PDF
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
