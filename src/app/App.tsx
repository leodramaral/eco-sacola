import React, { useEffect, useState } from 'react';
import { ProgressNav } from './components/ProgressNav';
import { HeroSection } from './components/HeroSection';
import { ImpactsSection } from './components/ImpactsSection';
import { DecompositionSection } from './components/DecompositionSection';
import { LawSection } from './components/LawSection';
import { AlternativesSection } from './components/AlternativesSection';
import { InitiativesSection } from './components/InitiativesSection';
import { FinalCTASection } from './components/FinalCTASection';
import { ReferencesSection } from './components/ReferencesSection';
import { ReferenceModal } from './components/ReferenceModal';
import {
  buildReferencesHash,
  generateABNTPDF,
  parseReferenceIds,
  sanitizeReferenceIds,
} from './components/reference-utils';

const TOTAL_SECTIONS = 7;

type AppRoute =
  | {
      view: 'home';
    }
  | {
      view: 'references';
      refIds: number[];
    };

function getCurrentRoute(): AppRoute {
  if (typeof window === 'undefined') {
    return { view: 'home' };
  }

  const hash = window.location.hash.startsWith('#')
    ? window.location.hash.slice(1)
    : window.location.hash;
  const [path = '/', search = ''] = hash.split('?');

  if (path === '/referencias') {
    return {
      view: 'references',
      refIds: parseReferenceIds(search),
    };
  }

  return { view: 'home' };
}

function navigateWithHash(nextHash: string) {
  if (window.location.hash === nextHash) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    return;
  }

  window.location.hash = nextHash;
  window.setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, 0);
}

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [route, setRoute] = useState<AppRoute>(getCurrentRoute);
  const [isReferenceModalOpen, setIsReferenceModalOpen] = useState(false);
  const [referenceModalIds, setReferenceModalIds] = useState<number[]>([]);

  useEffect(() => {
    if (route.view !== 'home') {
      return;
    }

    const observers: IntersectionObserver[] = [];

    const setup = () => {
      observers.forEach((observer) => observer.disconnect());
      observers.length = 0;

      for (let i = 0; i < TOTAL_SECTIONS; i += 1) {
        const el = document.getElementById(`section-${i}`);
        if (!el) {
          continue;
        }

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

    const timer = window.setTimeout(setup, 100);

    return () => {
      window.clearTimeout(timer);
      observers.forEach((observer) => observer.disconnect());
    };
  }, [route.view]);

  useEffect(() => {
    const syncRoute = () => {
      setRoute(getCurrentRoute());
    };

    syncRoute();
    window.addEventListener('hashchange', syncRoute);

    return () => {
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  useEffect(() => {
    if (route.view === 'references') {
      setIsReferenceModalOpen(false);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [route]);

  useEffect(() => {
    const handleOpenReference = (event: Event) => {
      const customEvent = event as CustomEvent<{ refIds?: number[] }>;
      const nextIds = sanitizeReferenceIds(customEvent.detail?.refIds ?? []);

      if (nextIds.length === 0) {
        return;
      }

      setReferenceModalIds(nextIds);
      setIsReferenceModalOpen(true);
    };

    document.addEventListener('ecosacola-open-ref', handleOpenReference);

    return () => {
      document.removeEventListener('ecosacola-open-ref', handleOpenReference);
    };
  }, []);

  const navigateToSection = (idx: number) => {
    const el = document.getElementById(`section-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navigateToHome = () => {
    navigateWithHash('#/');
  };

  const navigateToReferences = (refIds: number[] = []) => {
    navigateWithHash(buildReferencesHash(refIds));
  };

  if (route.view === 'references') {
    return (
      <ReferencesSection
        onBack={navigateToHome}
        backLabel="Voltar para home"
        highlightedRefIds={route.refIds}
      />
    );
  }

  return (
    <div
      className="relative"
      style={{
        fontFamily: 'var(--font-body)',
        background: '#071810',
      }}
    >
      <ProgressNav activeSection={activeSection} onNavigate={navigateToSection} />

      <HeroSection onExplore={() => navigateToSection(1)} />
      <ImpactsSection />
      <DecompositionSection />
      <LawSection />
      <AlternativesSection />
      <InitiativesSection />
      <FinalCTASection
        onRestart={() => navigateToSection(0)}
        onReferences={() => navigateToReferences()}
        onDownloadPdf={generateABNTPDF}
      />

      <ReferenceModal
        open={isReferenceModalOpen}
        refIds={referenceModalIds}
        onOpenChange={setIsReferenceModalOpen}
        onOpenFullPage={(refIds) => {
          setIsReferenceModalOpen(false);
          navigateToReferences(refIds);
        }}
      />
    </div>
  );
}
