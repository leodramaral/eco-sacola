import React from 'react';
import { motion } from 'motion/react';
import { IconArrowLeft, IconExternalLink, IconHeart } from '@tabler/icons-react';

interface FeedbackFormPageProps {
  onBack: () => void;
}

export function FeedbackFormPage({ onBack }: FeedbackFormPageProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20">

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-[2rem] border border-white/10 p-8 sm:p-12"
          style={{
            background: 'rgba(10, 36, 24, 0.85)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 24px 80px rgba(2, 26, 8, 0.45)',
          }}
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
            className="mt-8 pt-8 border-t border-white/10 text-center"
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