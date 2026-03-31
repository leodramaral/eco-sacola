import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const FOREST_IMAGE = 'https://images.unsplash.com/photo-1771292861005-c6d22476a2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

interface HeroSectionProps {
  onExplore: () => void;
}

export function HeroSection({ onExplore }: HeroSectionProps) {
  const [leafPositions] = useState(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 90 + 5}%`,
      delay: Math.random() * 4,
      duration: 4 + Math.random() * 4,
      size: 12 + Math.random() * 20,
    }))
  );

  return (
    <section
      id="section-0"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={FOREST_IMAGE}
          alt="Floresta Amazônica"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2010]/70 via-[#0D3520]/80 to-[#051A0A]/90" />
        {/* Color wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-transparent to-green-950/60" />
      </div>

      {/* Floating leaves */}
      {leafPositions.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute top-0 pointer-events-none select-none"
          style={{ left: leaf.left }}
          initial={{ y: -40, opacity: 0, rotate: 0 }}
          animate={{ y: '110vh', opacity: [0, 0.7, 0.7, 0], rotate: 360 }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <span style={{ fontSize: leaf.size }}>🍃</span>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto pt-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-emerald-300 border border-emerald-500/40 bg-emerald-950/50 backdrop-blur-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span>🌿</span> Cartilha Digital Educativa · Manaus, AM
          </span>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 leading-none tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
          >
            Eco
            <span
              className="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #4ADE80, #22D3EE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
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
          className="text-lg sm:text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Conscientização sobre o uso de sacolas plásticas na capital do Amazonas
        </motion.p>

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
            { value: '400', label: 'Anos para decomposição', unit: 'anos' },
            { value: '12B', label: 'Sacolas por ano no Brasil', unit: '' },
            { value: '2%', label: 'Taxa de reciclagem', unit: '' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span
                className="text-3xl md:text-4xl text-emerald-400"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs text-white/60 max-w-[100px] leading-tight"
                style={{ fontFamily: 'var(--font-body)' }}
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
          className="relative group px-10 py-4 rounded-full text-white overflow-hidden cursor-pointer"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '1.1rem',
            background: 'linear-gradient(135deg, #16A34A, #0891B2)',
            boxShadow: '0 0 40px rgba(22, 163, 74, 0.5)',
          }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Explorar <span>🌿</span>
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
          className="text-xs text-white/50 tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
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
