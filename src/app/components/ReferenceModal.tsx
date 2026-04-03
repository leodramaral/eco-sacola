import React from 'react';
import { ExternalLink, Files, Hash, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { typeLabels } from '../content/references';
import {
  getLinkLabel,
  getReferenceContextById,
  isInstitutionalLink,
  sanitizeReferenceIds,
} from './reference-utils';

interface ReferenceModalProps {
  open: boolean;
  refIds: number[];
  onOpenChange: (open: boolean) => void;
  onOpenFullPage: (refIds: number[]) => void;
}

export function ReferenceModal({
  open,
  refIds,
  onOpenChange,
  onOpenFullPage,
}: ReferenceModalProps) {
  const references = sanitizeReferenceIds(refIds)
    .map((id) => getReferenceContextById(id))
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl border-white/10 bg-[#05130C] p-0 text-white shadow-2xl">
        <div className="border-b border-white/8 bg-[radial-gradient(circle_at_top,rgba(74,222,128,0.16),transparent_55%)] px-6 py-6">
          <DialogHeader className="text-left">
            <span
              className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs text-emerald-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Referência{references.length > 1 ? 's' : ''} da cartilha
            </span>
            <DialogTitle
              className="mt-3 text-2xl text-white"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
            >
              {references.length > 1
                ? `Fontes [${references.map((item) => item.reference.id).join(', ')}]`
                : `Fonte [${references[0]?.reference.id ?? ''}]`}
            </DialogTitle>
            <DialogDescription
              className="text-sm leading-relaxed text-white/60"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Aqui você vê o conteúdo resumido da referência sem sair da leitura. Se quiser, pode
              abrir a página completa de referências em seguida.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="max-h-[65vh] space-y-4 overflow-y-auto px-6 py-6">
          {references.map(({ reference, group, globalIndex }) => {
            const typeInfo = typeLabels[reference.type];
            const institutionalLink = isInstitutionalLink(reference);

            return (
              <article
                key={reference.id}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-5"
              >
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: group.color,
                      background: `${group.color}18`,
                      border: `1px solid ${group.color}30`,
                    }}
                  >
                    <Hash className="h-3 w-3" />
                    {globalIndex}
                  </span>
                  <span
                    className="inline-flex rounded-full px-3 py-1 text-xs"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: typeInfo.color,
                      background: `${typeInfo.color}16`,
                      border: `1px solid ${typeInfo.color}28`,
                    }}
                  >
                    {typeInfo.label}
                  </span>
                  <span
                    className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {group.emoji} {group.section}
                  </span>
                  {institutionalLink && (
                    <span
                      className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Link institucional
                    </span>
                  )}
                </div>

                <h3
                  className="text-lg leading-snug text-white"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                >
                  {reference.title}
                </h3>

                <p
                  className="mt-2 text-sm text-white/45"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {reference.author} · {reference.year}
                </p>

                <p
                  className="mt-4 text-sm leading-relaxed text-white/75"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {reference.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-transform duration-200 hover:scale-[1.02]"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      background: `${group.color}18`,
                      color: group.color,
                      border: `1px solid ${group.color}30`,
                    }}
                  >
                    {getLinkLabel(reference)}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 border-t border-white/8 bg-white/[0.02] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p
            className="text-xs leading-relaxed text-white/45"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            A página completa reúne todas as fontes da cartilha e mantém o destaque destas
            referências.
          </p>
          <button
            onClick={() => onOpenFullPage(refIds)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 transition-all hover:bg-emerald-500/15"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
          >
            <Files className="h-4 w-4" />
            Abrir página de referências
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
