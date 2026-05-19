import React from 'react';
import { motion } from 'motion/react';
import { IconChevronDown, IconLeaf, IconExternalLink, IconClipboard } from '@tabler/icons-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { referenceGroups } from '../content/references';

const ECOBAG = `${import.meta.env.BASE_URL}images/pexels-sarah-chai-7263019.jpg`;

interface HeroSectionProps {
  onExplore: () => void;
  onFeedback: () => void;
}

export function HeroSection({ onExplore, onFeedback }: HeroSectionProps) {
  const totalReferences = referenceGroups.reduce((sum, group) => sum + group.refs.length, 0);

  return (
    <section
      id="section-0"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={ECOBAG}
          alt="Floresta Amazônica"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'var(--eco-hero-overlay)' }} />
        {/* Color wash */}
        <div className="absolute inset-0" style={{ background: 'var(--eco-hero-wash)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto pt-20 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 leading-none tracking-tight font-extrabold"
          >
            Eco
            <span className="eco-text-gradient text-transparent">
              Sacola
            </span>
            <br />
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Manaus</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg sm:text-xl md:text-2xl text-white/88 mb-6 max-w-2xl leading-relaxed"
        >
          Cartilha educativa sobre sacolas plásticas, sustentabilidade e impactos ambientais na
          capital do Amazonas
        </motion.p>

        {/* Research invitation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mb-8 rounded-2xl border border-emerald-500/40 p-4 sm:p-5 max-w-2xl mx-auto"
          style={{
            background: 'rgba(74,222,128,0.1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <p className="font-body text-white/90 text-sm sm:text-base leading-relaxed mb-2">
            <span className="font-bold text-emerald-400 inline-flex items-center gap-2">
              <IconClipboard className="eco-icon w-5 h-5" aria-hidden="true" />
              Participe da nossa pesquisa!
            </span>
          </p>
          <p className="font-body text-white/70 text-xs sm:text-sm leading-relaxed mb-3">
            Sua opinião é fundamental para este trabalho acadêmico. Ao final da cartilha, você encontrará um formulário rápido para nos contar sua experiência. Sua participação ajuda a avaliar o impacto deste projeto.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onFeedback}
            className="font-body inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-xs sm:text-sm transition-colors cursor-pointer"
          >
            Ou participe agora
            <IconExternalLink className="eco-icon w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
          </motion.button>
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-24 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mb-10 rounded-full"
        />

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-12 text-center"
        >
          {[
            { value: 'até 20', label: 'Anos de permanência estimada de uma sacola', unit: '' },
            { value: String(referenceGroups.length), label: 'Eixos temáticos de referência', unit: '' },
            { value: String(totalReferences), label: 'Fontes curadas no site', unit: '' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span
                className="font-heading text-3xl md:text-4xl text-emerald-400 font-extrabold"
              >
                {stat.value}
              </span>
              <span
                className="font-body text-xs text-white/68 max-w-[100px] leading-tight"
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onExplore}
          className="font-heading eco-button-gradient relative group px-10 py-4 rounded-full text-white overflow-hidden cursor-pointer text-[1.1rem] font-bold"
        >
          <span className="relative z-10 flex items-center gap-2">
            Explorar
            <IconLeaf className="eco-icon eco-icon-md" aria-hidden="true" />
          </span>
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={onExplore}
      >
        <span
          className="font-body text-xs text-white/50 tracking-widest uppercase"
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <IconChevronDown className="eco-icon w-6 h-6 text-white/50" aria-hidden="true" />
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 40 C360 80 720 0 1080 40 C1260 60 1380 50 1440 40 L1440 80 L0 80 Z"
            fill="#071810"
          />
        </svg>
      </div>
    </section>
  );
}
