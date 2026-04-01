import React, { useState, useEffect, useCallback } from 'react';
import { ProgressNav } from './components/ProgressNav';
import { HeroSection } from './components/HeroSection';
import { ImpactsSection } from './components/ImpactsSection';
import { DecompositionSection } from './components/DecompositionSection';
import { LawSection } from './components/LawSection';
import { SuccessCasesSection } from './components/SuccessCasesSection';
import { AlternativesSection } from './components/AlternativesSection';
import { InitiativesSection } from './components/InitiativesSection';
import { CuriositiesSection } from './components/CuriositiesSection';
import { FinalCTASection } from './components/FinalCTASection';
import { ReferencesSection } from './components/ReferencesSection';

const TOTAL_SECTIONS = 9;

export default function App() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const setup = () => {
      // Clean up existing observers
      observers.forEach((o) => o.disconnect());
      observers.length = 0;

      for (let i = 0; i < TOTAL_SECTIONS; i++) {
        const el = document.getElementById(`section-${i}`);
        if (!el) continue;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(i);
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    };

    // Small timeout to ensure DOM is ready
    const timer = setTimeout(setup, 100);

    return () => {
      clearTimeout(timer);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  const navigateTo = useCallback((idx: number) => {
    const el = document.getElementById(`section-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const navigateToReferences = useCallback(() => {
    const el = document.getElementById('section-references');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div
      className="relative"
      style={{
        fontFamily: 'var(--font-body)',
        background: '#071810',
      }}
    >
      {/* Fixed navigation */}
      <ProgressNav activeSection={activeSection} onNavigate={navigateTo} />

      {/* Sections */}
      <HeroSection onExplore={() => navigateTo(1)} />
      <ImpactsSection />
      <DecompositionSection />
      <LawSection />
      <SuccessCasesSection />
      <AlternativesSection />
      <InitiativesSection />
      <CuriositiesSection />
      <FinalCTASection onRestart={() => navigateTo(0)} onReferences={navigateToReferences} />
      <ReferencesSection onBackToTop={() => navigateTo(0)} />
    </div>
  );
}