import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ChevronDown, BookOpen, ArrowUp, Download } from 'lucide-react';

interface Reference {
  id: number;
  title: string;
  author: string;
  year: string;
  url: string;
  type: 'relatorio' | 'lei' | 'estudo' | 'artigo' | 'institucional';
}

interface ReferenceGroup {
  section: string;
  emoji: string;
  color: string;
  borderColor: string;
  bgColor: string;
  refs: Reference[];
}

export const referenceGroups: ReferenceGroup[] = [
  {
    section: 'Impactos do Plástico',
    emoji: '🌊',
    color: '#22D3EE',
    borderColor: 'rgba(34,211,238,0.25)',
    bgColor: 'rgba(34,211,238,0.06)',
    refs: [
      {
        id: 1,
        title: 'Contaminação por microplásticos em igarapés urbanos de Manaus',
        author: 'INPA — Instituto Nacional de Pesquisas da Amazônia',
        year: '2022',
        url: 'https://www.inpa.gov.br',
        type: 'estudo',
      },
      {
        id: 2,
        title: 'Panorama dos Resíduos Sólidos no Brasil 2023',
        author: 'ABRELPE — Associação Brasileira de Empresas de Limpeza Pública e Resíduos Especiais',
        year: '2023',
        url: 'https://abrelpe.org.br/panorama',
        type: 'relatorio',
      },
      {
        id: 3,
        title: 'Plástico e Fauna Selvagem: impactos documentados na Amazônia',
        author: 'WWF-Brasil',
        year: '2021',
        url: 'https://www.wwf.org.br',
        type: 'relatorio',
      },
      {
        id: 4,
        title: 'Diagnóstico de Resíduos Sólidos Urbanos — Manaus',
        author: 'SEMMAS — Secretaria Municipal de Meio Ambiente e Sustentabilidade de Manaus',
        year: '2023',
        url: 'https://semmas.manaus.am.gov.br',
        type: 'institucional',
      },
    ],
  },
  {
    section: 'Tempo de Decomposição',
    emoji: '⏱️',
    color: '#FBBF24',
    borderColor: 'rgba(251,191,36,0.25)',
    bgColor: 'rgba(251,191,36,0.06)',
    refs: [
      {
        id: 5,
        title: 'Plastics — the Facts 2023: An analysis of European plastics production, demand and waste data',
        author: 'PlasticsEurope',
        year: '2023',
        url: 'https://plasticseurope.org/knowledge-hub/plastics-the-facts-2023',
        type: 'relatorio',
      },
      {
        id: 6,
        title: 'Perfil 2023 da Indústria Brasileira de Transformação e Reciclagem de Material Plástico',
        author: 'ABIPLAST — Associação Brasileira da Indústria do Plástico',
        year: '2023',
        url: 'https://abiplast.org.br',
        type: 'relatorio',
      },
      {
        id: 7,
        title: 'Relatório de Sustentabilidade e Reciclagem PET no Brasil',
        author: 'ABRAPEX — Associação Brasileira de Embalagens Plásticas Recicláveis',
        year: '2023',
        url: 'https://www.abrapex.com.br',
        type: 'relatorio',
      },
    ],
  },
  {
    section: 'Lei de Manaus',
    emoji: '⚖️',
    color: '#F97316',
    borderColor: 'rgba(249,115,22,0.25)',
    bgColor: 'rgba(249,115,22,0.06)',
    refs: [
      {
        id: 8,
        title: 'Lei Municipal n.º 1.674/2011 — Proibição de Sacolas Plásticas em Manaus',
        author: 'Câmara Municipal de Manaus',
        year: '2011',
        url: 'https://www.cmm.am.gov.br',
        type: 'lei',
      },
      {
        id: 9,
        title: 'Política Nacional de Resíduos Sólidos — Lei n.º 12.305/2010',
        author: 'Presidência da República / MMA — Ministério do Meio Ambiente',
        year: '2010',
        url: 'https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm',
        type: 'lei',
      },
      {
        id: 10,
        title: 'Relatório de Fiscalização Ambiental e Conformidade — Manaus',
        author: 'SEMMAS — Secretaria Municipal de Meio Ambiente e Sustentabilidade',
        year: '2022',
        url: 'https://semmas.manaus.am.gov.br',
        type: 'relatorio',
      },
    ],
  },
  {
    section: 'Casos de Sucesso no Brasil',
    emoji: '🏆',
    color: '#4ADE80',
    borderColor: 'rgba(74,222,128,0.25)',
    bgColor: 'rgba(74,222,128,0.06)',
    refs: [
      {
        id: 11,
        title: 'Lei Municipal n.º 15.374/2011 — Proibição de Sacolas Plásticas em São Paulo',
        author: 'Câmara Municipal de São Paulo',
        year: '2011',
        url: 'https://www.camara.sp.gov.br',
        type: 'lei',
      },
      {
        id: 12,
        title: 'Impactos da Proibição de Sacolas Plásticas em São Paulo: 10 anos de resultados',
        author: 'SOS Mata Atlântica / SVMA-SP',
        year: '2022',
        url: 'https://www.sosma.org.br',
        type: 'relatorio',
      },
      {
        id: 13,
        title: 'Programa Lixo Zero Rio: resultados e desafios',
        author: 'Secretaria Municipal de Meio Ambiente do Rio de Janeiro',
        year: '2021',
        url: 'https://sma.rio.rj.gov.br',
        type: 'relatorio',
      },
      {
        id: 14,
        title: 'Sacolas Plásticas no Brasil: panorama legislativo estadual e municipal',
        author: 'CEMPRE — Compromisso Empresarial para Reciclagem',
        year: '2022',
        url: 'https://cempre.org.br',
        type: 'artigo',
      },
    ],
  },
  {
    section: 'Curiosidades e Dados Globais',
    emoji: '💡',
    color: '#A78BFA',
    borderColor: 'rgba(167,139,250,0.25)',
    bgColor: 'rgba(167,139,250,0.06)',
    refs: [
      {
        id: 15,
        title: 'No Plastic in Nature: Assessing Plastic Ingestion from Nature to People',
        author: 'WWF — World Wildlife Fund',
        year: '2019',
        url: 'https://www.wwf.org.br/natureza_brasileira/reducao_de_impactos2/clima/relatorio-no-plastic-in-nature',
        type: 'estudo',
      },
      {
        id: 16,
        title: 'Microplásticos em peixes de água doce do Rio Amazonas',
        author: 'INPA — Instituto Nacional de Pesquisas da Amazônia',
        year: '2021',
        url: 'https://www.inpa.gov.br',
        type: 'estudo',
      },
      {
        id: 17,
        title: 'Production, use, and fate of all plastics ever made',
        author: 'Roland Geyer et al. — Science Advances',
        year: '2017',
        url: 'https://www.science.org/doi/10.1126/sciadv.1700782',
        type: 'artigo',
      },
      {
        id: 18,
        title: 'Plásticos nos Oceanos: 8 milhões de toneladas por ano',
        author: 'PNUMA — Programa das Nações Unidas para o Meio Ambiente',
        year: '2021',
        url: 'https://www.unep.org/resources/report/beating-plastic-pollution',
        type: 'relatorio',
      },
      {
        id: 19,
        title: 'Taxa de reciclagem de plásticos no Brasil: desafios e perspectivas',
        author: 'IPEA — Instituto de Pesquisa Econômica Aplicada',
        year: '2022',
        url: 'https://www.ipea.gov.br',
        type: 'relatorio',
      },
    ],
  },
  {
    section: 'Iniciativas em Manaus',
    emoji: '📍',
    color: '#34D399',
    borderColor: 'rgba(52,211,153,0.25)',
    bgColor: 'rgba(52,211,153,0.06)',
    refs: [
      {
        id: 20,
        title: 'Programa de Coleta Seletiva de Manaus — Relatório Anual',
        author: 'SEMULSP — Secretaria Municipal de Limpeza Urbana',
        year: '2023',
        url: 'https://semulsp.manaus.am.gov.br',
        type: 'institucional',
      },
      {
        id: 21,
        title: 'Cooperativas de Reciclagem no Amazonas: COOPEMA e CORESO',
        author: 'Fundação Estadual do Meio Ambiente do Amazonas — FVS/AM',
        year: '2022',
        url: 'https://www.fvs.am.gov.br',
        type: 'institucional',
      },
      {
        id: 22,
        title: 'EcoPoints Manaus: pontos de entrega voluntária em estabelecimentos',
        author: 'SEMMAS — Secretaria Municipal de Meio Ambiente e Sustentabilidade',
        year: '2023',
        url: 'https://semmas.manaus.am.gov.br',
        type: 'institucional',
      },
      {
        id: 23,
        title: 'Projeto Igarapé Vivo — recuperação de igarapés urbanos em Manaus',
        author: 'Prefeitura de Manaus / UGPI',
        year: '2023',
        url: 'https://www.manaus.am.gov.br',
        type: 'institucional',
      },
    ],
  },
];

// Build a lookup: refId → groupIndex
const refIdToGroup: Record<number, number> = {};
referenceGroups.forEach((group, gi) => {
  group.refs.forEach((ref) => {
    refIdToGroup[ref.id] = gi;
  });
});

const typeLabels: Record<Reference['type'], { label: string; color: string }> = {
  relatorio: { label: 'Relatório', color: '#22D3EE' },
  lei: { label: 'Legislação', color: '#F97316' },
  estudo: { label: 'Estudo Científico', color: '#A78BFA' },
  artigo: { label: 'Artigo', color: '#FBBF24' },
  institucional: { label: 'Fonte Institucional', color: '#4ADE80' },
};

// ─── ABNT PDF generator ──────────────────────────────────────────────────────
function formatABNT(ref: Reference): string {
  // ABNT NBR 6023:2018 — Internet document format:
  // AUTHOR. Title. Publisher, year. Available at: URL. Accessed: DD mon. YYYY.
  const accessed = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
  return `${ref.author}. <strong>${ref.title}</strong>. ${ref.year}. Disponível em: &lt;${ref.url}&gt;. Acesso em: ${accessed}.`;
}

function generateABNTPDF() {
  const now = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  let globalIdx = 0;

  const groupsHTML = referenceGroups
    .map((group) => {
      const refsHTML = group.refs
        .map((ref) => {
          globalIdx++;
          return `
          <div class="ref-item">
            <span class="ref-num">${globalIdx}.</span>
            <span class="ref-text">${formatABNT(ref)}</span>
          </div>`;
        })
        .join('');

      return `
      <div class="group">
        <h2 class="group-title">${group.emoji} ${group.section}</h2>
        ${refsHTML}
      </div>`;
    })
    .join('');

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>EcoSacola Manaus — Referências ABNT</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', Arial, sans-serif;
      font-size: 11pt;
      color: #1a1a1a;
      background: #fff;
      padding: 2.5cm 2cm;
      max-width: 21cm;
      margin: 0 auto;
    }
    .cover {
      text-align: center;
      margin-bottom: 2.5rem;
      padding-bottom: 1.5rem;
      border-bottom: 2px solid #16a34a;
    }
    .cover-title {
      font-size: 22pt;
      font-weight: 700;
      color: #16a34a;
      margin-bottom: 0.5rem;
    }
    .cover-subtitle {
      font-size: 13pt;
      color: #444;
      margin-bottom: 0.5rem;
    }
    .cover-meta {
      font-size: 9pt;
      color: #888;
    }
    .abnt-note {
      background: #f0fdf4;
      border-left: 4px solid #16a34a;
      padding: 0.75rem 1rem;
      font-size: 9pt;
      color: #555;
      margin-bottom: 2rem;
      border-radius: 4px;
    }
    .group {
      margin-bottom: 2rem;
      page-break-inside: avoid;
    }
    .group-title {
      font-size: 12pt;
      font-weight: 700;
      color: #16a34a;
      margin-bottom: 0.75rem;
      padding-bottom: 0.4rem;
      border-bottom: 1px solid #d1fae5;
    }
    .ref-item {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 0.8rem;
      text-align: justify;
      line-height: 1.6;
    }
    .ref-num {
      font-weight: 700;
      color: #16a34a;
      min-width: 1.5rem;
      flex-shrink: 0;
      font-size: 10pt;
    }
    .ref-text {
      font-size: 10pt;
      color: #222;
    }
    .ref-text strong {
      font-weight: 700;
    }
    .footer {
      margin-top: 2.5rem;
      padding-top: 1rem;
      border-top: 1px solid #ddd;
      text-align: center;
      font-size: 8pt;
      color: #aaa;
    }
    @media print {
      body { padding: 1.5cm; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="cover">
    <div class="cover-title">EcoSacola Manaus</div>
    <div class="cover-subtitle">Referências Bibliográficas</div>
    <div class="cover-subtitle" style="font-size:11pt;color:#555;">Cartilha Digital Educativa · 2025</div>
    <div class="cover-meta">Gerado em ${now} · Norma ABNT NBR 6023:2018</div>
  </div>

  <div class="abnt-note">
    📋 <strong>Nota:</strong> As referências abaixo seguem a norma ABNT NBR 6023:2018 para 
    documentos eletrônicos e fontes de internet. Links externos redirecionam para os sites das 
    instituições responsáveis pelas publicações.
  </div>

  ${groupsHTML}

  <div class="footer">
    EcoSacola Manaus — Feita com 💚 para proteger o Amazonas · ${now}
  </div>

  <script>
    window.onload = function() { window.print(); }
  </script>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, '_blank');
  if (win) {
    win.focus();
  }
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}

// ─── Group card component ─────────────────────────────────────────────────────
function ReferenceGroupCard({
  group,
  globalOffset,
  isForceOpen,
  highlightedRefIds,
}: {
  group: ReferenceGroup;
  globalOffset: number;
  isForceOpen: boolean;
  highlightedRefIds: Set<number>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);

  // When forced open by citation click
  useEffect(() => {
    if (isForceOpen && !isOpen) {
      setIsOpen(true);
    }
  }, [isForceOpen]);

  // Scroll to highlighted ref inside this group
  useEffect(() => {
    if (isForceOpen && isOpen && highlightedRefIds.size > 0) {
      const firstHighlighted = group.refs.find((r) => highlightedRefIds.has(r.id));
      if (firstHighlighted) {
        setTimeout(() => {
          const el = document.getElementById(`ref-item-${firstHighlighted.id}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 400);
      }
    }
  }, [isForceOpen, isOpen, highlightedRefIds]);

  return (
    <motion.div
      ref={groupRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl overflow-hidden border transition-all duration-300"
      style={{
        borderColor: isForceOpen ? group.color + '50' : group.borderColor,
        background: group.bgColor,
        boxShadow: isForceOpen ? `0 0 24px ${group.color}18` : 'none',
      }}
    >
      {/* Group header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 p-5 cursor-pointer text-left"
      >
        <span className="text-2xl flex-shrink-0">{group.emoji}</span>
        <div className="flex-1">
          <span
            className="text-base text-white"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: group.color }}
          >
            {group.section}
          </span>
          <p className="text-white/40 text-xs mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>
            {group.refs.length} referência{group.refs.length > 1 ? 's' : ''}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </button>

      {/* Refs list */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-3 border-t border-white/8 pt-4">
              {group.refs.map((ref, i) => {
                const typeInfo = typeLabels[ref.type];
                const isHighlighted = highlightedRefIds.has(ref.id);
                return (
                  <motion.div
                    id={`ref-item-${ref.id}`}
                    key={ref.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 p-4 rounded-xl border transition-all duration-500"
                    style={{
                      borderColor: isHighlighted ? `${group.color}60` : 'rgba(255,255,255,0.06)',
                      background: isHighlighted
                        ? `${group.color}14`
                        : 'rgba(255,255,255,0.03)',
                      boxShadow: isHighlighted ? `0 0 20px ${group.color}18` : 'none',
                    }}
                  >
                    {/* Ref number */}
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        background: isHighlighted ? `${group.color}35` : `${group.color}20`,
                        color: group.color,
                      }}
                    >
                      {globalOffset + i + 1}
                    </span>

                    <div className="flex-1 min-w-0">
                      {/* Type tag */}
                      <span
                        className="inline-block px-2 py-0.5 rounded-full text-xs mb-1.5"
                        style={{
                          fontFamily: 'var(--font-body)',
                          color: typeInfo.color,
                          background: `${typeInfo.color}15`,
                          border: `1px solid ${typeInfo.color}30`,
                        }}
                      >
                        {typeInfo.label}
                      </span>

                      {/* Title */}
                      <p
                        className="text-white/90 text-sm leading-snug mb-1"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {ref.title}
                      </p>

                      {/* Author + year */}
                      <p
                        className="text-white/40 text-xs"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {ref.author} · {ref.year}
                      </p>
                    </div>

                    {/* External link */}
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{ background: `${group.color}18`, color: group.color }}
                      title="Acessar fonte"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
interface ReferencesSectionProps {
  onBackToTop: () => void;
}

export function ReferencesSection({ onBackToTop }: ReferencesSectionProps) {
  const [highlightedRefIds, setHighlightedRefIds] = useState<Set<number>>(new Set());
  const [forceOpenGroups, setForceOpenGroups] = useState<Set<number>>(new Set());
  const [isDownloading, setIsDownloading] = useState(false);
  const highlightTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<{ refIds: number[] }>;
      const { refIds } = custom.detail;

      // Find which groups to open
      const groupsToOpen = new Set<number>();
      refIds.forEach((id) => {
        const gi = refIdToGroup[id];
        if (gi !== undefined) groupsToOpen.add(gi);
      });

      setForceOpenGroups(groupsToOpen);
      setHighlightedRefIds(new Set(refIds));

      // Clear highlight after 4s
      if (highlightTimer.current) clearTimeout(highlightTimer.current);
      highlightTimer.current = setTimeout(() => {
        setHighlightedRefIds(new Set());
        setForceOpenGroups(new Set());
      }, 4000);
    };

    document.addEventListener('ecosacola-highlight-ref', handler);
    return () => {
      document.removeEventListener('ecosacola-highlight-ref', handler);
      if (highlightTimer.current) clearTimeout(highlightTimer.current);
    };
  }, []);

  const handleDownload = useCallback(() => {
    setIsDownloading(true);
    setTimeout(() => {
      generateABNTPDF();
      setIsDownloading(false);
    }, 300);
  }, []);

  // Pre-calculate global offsets
  const offsets: number[] = [];
  let count = 0;
  for (const group of referenceGroups) {
    offsets.push(count);
    count += group.refs.length;
  }
  const totalRefs = count;

  return (
    <section
      id="section-references"
      className="relative py-20 px-4 min-h-screen flex flex-col justify-center"
      style={{ background: 'linear-gradient(180deg, #050A10 0%, #071015 50%, #030810 100%)' }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(74,222,128,1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-5">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.25)' }}
            >
              <BookOpen className="w-8 h-8 text-emerald-400" />
            </div>
          </div>

          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm text-emerald-400 border border-emerald-500/30 bg-emerald-950/30 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            📚 Fontes e Referências
          </span>

          <h2
            className="text-4xl sm:text-5xl text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
          >
            Base{' '}
            <span
              className="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #4ADE80, #22D3EE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Científica
            </span>
          </h2>

          <p
            className="text-white/55 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Todos os dados apresentados nesta cartilha são embasados em fontes acadêmicas,
            institucionais e legislativas. Clique em qualquer{' '}
            <span style={{ color: '#4ADE80', fontWeight: 600 }}>[número]</span> no texto para ir
            diretamente à referência correspondente.
          </p>

          {/* Stats bar */}
          <div className="flex justify-center gap-6 mt-6">
            <div className="text-center">
              <span
                className="block text-2xl text-emerald-400"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
              >
                {totalRefs}
              </span>
              <span className="text-xs text-white/40" style={{ fontFamily: 'var(--font-body)' }}>
                referências
              </span>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <span
                className="block text-2xl text-cyan-400"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
              >
                {referenceGroups.length}
              </span>
              <span className="text-xs text-white/40" style={{ fontFamily: 'var(--font-body)' }}>
                seções
              </span>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <span
                className="block text-2xl text-amber-400"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
              >
                5
              </span>
              <span className="text-xs text-white/40" style={{ fontFamily: 'var(--font-body)' }}>
                tipos de fonte
              </span>
            </div>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {Object.entries(typeLabels).map(([key, info]) => (
            <span
              key={key}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
              style={{
                fontFamily: 'var(--font-body)',
                color: info.color,
                background: `${info.color}12`,
                border: `1px solid ${info.color}25`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: info.color }}
              />
              {info.label}
            </span>
          ))}
        </motion.div>

        {/* Reference groups */}
        <div className="space-y-4 mb-10">
          {referenceGroups.map((group, i) => (
            <ReferenceGroupCard
              key={group.section}
              group={group}
              globalOffset={offsets[i]}
              isForceOpen={forceOpenGroups.has(i)}
              highlightedRefIds={highlightedRefIds}
            />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-5 rounded-2xl border border-white/8 bg-white/3 mb-8 text-center"
        >
          <p className="text-white/40 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            ⚠️ Os links externos redirecionam para os sites das instituições. Alguns dados foram
            adaptados ou estimados com base nos relatórios mais recentes disponíveis à época da
            produção desta cartilha (2025). Consulte as fontes originais para informações atualizadas.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          {/* PDF Download */}
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white cursor-pointer transition-all"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              background: isDownloading
                ? 'rgba(22,163,74,0.4)'
                : 'linear-gradient(135deg, #16A34A, #0891B2)',
              boxShadow: isDownloading ? 'none' : '0 0 30px rgba(22,163,74,0.35)',
            }}
          >
            <Download className={`w-4 h-4 ${isDownloading ? 'animate-bounce' : ''}`} />
            {isDownloading ? 'Gerando PDF…' : 'Baixar em PDF (ABNT)'}
          </motion.button>

          {/* Back to top */}
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onBackToTop}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-all cursor-pointer"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
          >
            <ArrowUp className="w-4 h-4" />
            Voltar ao início
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-8 border-t border-white/8 text-center"
        >
          <p className="text-white/25 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
            EcoSacola Manaus — Cartilha Digital Educativa · 2025
          </p>
          <p className="text-white/15 text-xs mt-1" style={{ fontFamily: 'var(--font-body)' }}>
            Feita com 💚 para proteger o Amazonas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
