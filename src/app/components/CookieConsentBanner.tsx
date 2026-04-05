import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

const CONSENT_STORAGE_KEY = 'ecosacola-lgpd-consent-v1';

type ConsentChoice = 'accepted' | 'rejected';

function readStoredConsent(): ConsentChoice | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (value === 'accepted' || value === 'rejected') {
    return value;
  }

  return null;
}

interface CookieConsentBannerProps {
  onDecision?: (choice: ConsentChoice) => void;
}

export function CookieConsentBanner({ onDecision }: CookieConsentBannerProps) {
  const [consent, setConsent] = useState<ConsentChoice | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setConsent(readStoredConsent());
    setIsReady(true);
  }, []);

  const handleChoice = (choice: ConsentChoice) => {
    setConsent(choice);
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    onDecision?.(choice);
  };

  if (!isReady || consent !== null) {
    return null;
  }

  return (
    <aside
      role="dialog"
      aria-live="polite"
      aria-label="Consentimento de cookies"
      className="fixed inset-x-3 bottom-3 z-[80] sm:inset-x-6 sm:bottom-6"
    >
      <div
        className="mx-auto w-full max-w-3xl rounded-2xl border border-white/15 px-4 py-4 text-white shadow-2xl sm:px-5"
        style={{
          background:
            'linear-gradient(135deg, rgba(7,24,16,0.95) 0%, rgba(3,20,12,0.94) 55%, rgba(9,46,29,0.92) 100%)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <p className="font-heading text-base font-bold text-white sm:text-lg">Privacidade e cookies</p>
        <p className="font-body mt-2 text-sm leading-relaxed text-white/80">
          Usamos cookies para melhorar sua experiencia e entender como a cartilha e utilizada.
          Voce pode aceitar ou recusar cookies não essenciais.
        </p>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => handleChoice('rejected')}
            className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            Recusar
          </Button>
          <Button
            type="button"
            onClick={() => handleChoice('accepted')}
            className="eco-button-gradient border-0 text-white hover:opacity-90"
          >
            Aceitar
          </Button>
        </div>
      </div>
    </aside>
  );
}

export { CONSENT_STORAGE_KEY, type ConsentChoice };
