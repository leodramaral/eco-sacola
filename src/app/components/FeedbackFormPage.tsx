import React from 'react';
import { motion } from 'motion/react';
import { IconArrowLeft, IconExternalLink, IconHeart } from '@tabler/icons-react';

interface FeedbackFormPageProps {
  onBack: () => void;
}

export function FeedbackFormPage({ onBack }: FeedbackFormPageProps) {
  return (
    <section
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

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-all cursor-pointer mb-8"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
        >
          <IconArrowLeft className="eco-icon w-4 h-4" aria-hidden="true" />
          Voltar ao início
        </motion.button>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/6 rounded-2xl p-6 mb-6 border border-white/10"
          >
            <p className="font-body text-white/60 text-sm mb-2 text-center">
              Caso tenha dificuldades para visualizar o formulário abaixo, acesse diretamente:
            </p>
            <a
              href="https://forms.office.com/r/uwCEGT5Aqk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-center w-full justify-center"
            >
              https://forms.office.com/r/uwCEGT5Aqk
              <IconExternalLink className="eco-icon w-4 h-4" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-2xl overflow-hidden border border-white/10"
            style={{ background: 'rgba(255, 255, 255, 0.03)' }}
          >
            <div className="w-full flex justify-center" style={{ minHeight: '480px' }}>
              <iframe
                src="https://forms.office.com/r/uwCEGT5Aqk?embed=true"
                style={{
                  border: 'none',
                  maxWidth: '640px',
                  width: '100%',
                  minHeight: '600px',
                  height: '600px'
                }}
                allowFullScreen
                title="Formulário de Feedback"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="pt-8 border-t border-white/8 text-center"
          >
            <p className="font-body text-white/30 text-sm">
              EcoSacola Manaus — Cartilha Digital Educativa · 2026
            </p>
            <p className="font-body text-white/20 text-xs mt-1">
              Trabalho acadêmico da disciplina Projeto Extensionista I do curso de Análise e Desenvolvimento de Sistemas (ADS) do CIESA, apresentado na Semana de Tecnologia CIESA 2026
            </p>
            <p className="font-body text-white/20 text-xs mt-1">
              <span className="inline-flex items-center gap-1.5">
                Desenvolvido para fins exclusivamente acadêmicos, sem fins lucrativos · Feita com
                <IconHeart className="eco-icon eco-icon-sm text-emerald-300/80" aria-hidden="true" />
                para proteger o Amazonas
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}