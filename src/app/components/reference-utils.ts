import {
  referenceGroups,
  type Reference,
  type ReferenceGroup,
} from '../content/references';

export interface ReferenceContext {
  reference: Reference;
  group: ReferenceGroup;
  groupIndex: number;
  referenceIndex: number;
  globalIndex: number;
}

export function isInstitutionalLink(reference: Reference) {
  const description = reference.description.toLowerCase();
  return (
    description.includes('portal institucional') ||
    description.includes('link institucional') ||
    description.includes('portal oficial') ||
    description.includes('central de conhecimento') ||
    (description.includes('link') && description.includes('página pública específica'))
  );
}

export function getLinkLabel(reference: Reference) {
  return isInstitutionalLink(reference) ? 'Acessar portal da fonte' : 'Acessar referência';
}

export function formatABNT(reference: Reference): string {
  const accessed = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return `${reference.author}. <strong>${reference.title}</strong>. ${reference.year}. Disponível em: &lt;${reference.url}&gt;. Acesso em: ${accessed}.`;
}

export function getReferenceContextById(id: number): ReferenceContext | null {
  let globalIndex = 0;

  for (let groupIndex = 0; groupIndex < referenceGroups.length; groupIndex += 1) {
    const group = referenceGroups[groupIndex];

    for (let referenceIndex = 0; referenceIndex < group.refs.length; referenceIndex += 1) {
      const reference = group.refs[referenceIndex];
      globalIndex += 1;

      if (reference.id === id) {
        return {
          reference,
          group,
          groupIndex,
          referenceIndex,
          globalIndex,
        };
      }
    }
  }

  return null;
}

export function sanitizeReferenceIds(ids: number[]) {
  const uniqueIds = Array.from(new Set(ids.filter((id) => Number.isInteger(id))));
  return uniqueIds.filter((id) => getReferenceContextById(id) !== null);
}

export function parseReferenceIds(search: string) {
  const params = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search);
  const rawIds = params.get('ref');

  if (!rawIds) {
    return [];
  }

  return sanitizeReferenceIds(
    rawIds
      .split(',')
      .map((value) => Number(value.trim()))
      .filter((value) => Number.isInteger(value))
  );
}

export function buildReferencesHash(ids: number[] = []) {
  const params = new URLSearchParams();
  const sanitizedIds = sanitizeReferenceIds(ids);

  if (sanitizedIds.length > 0) {
    params.set('ref', sanitizedIds.join(','));
  }

  const query = params.toString();
  return `#/referencias${query ? `?${query}` : ''}`;
}

export function generateABNTPDF() {
  const now = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  let globalIndex = 0;

  const groupsHTML = referenceGroups
    .map((group) => {
      const refsHTML = group.refs
        .map((reference) => {
          globalIndex += 1;
          return `
          <div class="ref-item">
            <span class="ref-num">${globalIndex}.</span>
            <span class="ref-text">${formatABNT(reference)}</span>
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
    documentos eletrônicos. Quando não há uma página pública estável do material citado, o link
    redireciona para o portal institucional da fonte responsável.
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
