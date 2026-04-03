export type ReferenceType = 'relatorio' | 'lei' | 'estudo' | 'artigo' | 'institucional';

export interface Reference {
  id: number;
  title: string;
  author: string;
  year: string;
  url: string;
  type: ReferenceType;
  description: string;
}

export interface ReferenceGroup {
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
        description:
          'Referência mantida por alta relevância para o contexto ambiental de Manaus. O link leva ao portal institucional do INPA, pois não foi localizada uma página pública específica do material citado.',
      },
      {
        id: 2,
        title: 'Panorama dos Resíduos Sólidos no Brasil 2023',
        author: 'ABRELPE — Associação Brasileira de Empresas de Limpeza Pública e Resíduos Especiais',
        year: '2023',
        url: 'https://abrelpe.org.br/panorama/',
        type: 'relatorio',
        description:
          'Fonte nacional de referência sobre geração, coleta e destinação de resíduos sólidos no Brasil.',
      },
      {
        id: 3,
        title: 'Plástico e Fauna Selvagem: impactos documentados na Amazônia',
        author: 'WWF-Brasil',
        year: '2021',
        url: 'https://www.wwf.org.br',
        type: 'relatorio',
        description:
          'Referência mantida pela relevância temática sobre os impactos do plástico na biodiversidade. O link aponta para o portal institucional do WWF-Brasil, já que não foi localizada a página exata do material.',
      },
      {
        id: 4,
        title: 'Diagnóstico de Resíduos Sólidos Urbanos — Manaus',
        author: 'SEMMAS — Secretaria Municipal de Meio Ambiente e Sustentabilidade de Manaus',
        year: '2023',
        url: 'https://semmas.manaus.am.gov.br',
        type: 'institucional',
        description:
          'Referência importante para contextualização local. O link leva ao portal institucional da SEMMAS, pois não foi encontrada uma página pública específica do diagnóstico citado.',
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
        url: 'https://plasticseurope.org/knowledge-hub/plastics-the-facts-2023/',
        type: 'relatorio',
        description:
          'Relatório internacional útil para contextualizar produção, consumo e descarte de plásticos.',
      },
      {
        id: 6,
        title: 'Perfil 2023 da Indústria Brasileira de Transformação e Reciclagem de Material Plástico',
        author: 'ABIPLAST — Associação Brasileira da Indústria do Plástico',
        year: '2023',
        url: 'https://abiplast.org.br/publicacoes/perfil-2023/',
        type: 'relatorio',
        description:
          'Fonte brasileira relevante para dados sobre o setor plástico, reciclagem e contexto nacional.',
      },
      {
        id: 7,
        title: 'Relatório de Sustentabilidade e Reciclagem PET no Brasil',
        author: 'ABRAPEX — Associação Brasileira de Embalagens Plásticas Recicláveis',
        year: '2023',
        url: 'https://www.abrapex.com.br',
        type: 'relatorio',
        description:
          'Referência mantida pela relação com reciclagem de embalagens plásticas. O link leva ao portal institucional da entidade, pois não foi localizada uma página pública específica do relatório citado.',
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
        description:
          'Referência histórica relevante para o contexto regulatório de Manaus. O link leva ao portal da Câmara Municipal, pois não foi localizada uma URL pública estável para o texto específico citado.',
      },
      {
        id: 9,
        title: 'Política Nacional de Resíduos Sólidos — Lei n.º 12.305/2010',
        author: 'Presidência da República / MMA — Ministério do Meio Ambiente',
        year: '2010',
        url: 'https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm',
        type: 'lei',
        description:
          'Base legal nacional essencial para discutir responsabilidade compartilhada, reciclagem e gestão de resíduos sólidos.',
      },
      {
        id: 10,
        title: 'Relatório de Fiscalização Ambiental e Conformidade — Manaus',
        author: 'SEMMAS — Secretaria Municipal de Meio Ambiente e Sustentabilidade',
        year: '2022',
        url: 'https://semmas.manaus.am.gov.br',
        type: 'relatorio',
        description:
          'Referência mantida pela relevância institucional para o contexto local. O link aponta para o portal oficial da SEMMAS, pois não foi localizada uma página pública específica do relatório.',
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
        description:
          'Referência usada para comparação com outras experiências urbanas no Brasil. O link leva ao portal institucional da Câmara de São Paulo, pois não foi localizada uma URL pública estável para o texto específico citado.',
      },
      {
        id: 12,
        title: 'Impactos da Proibição de Sacolas Plásticas em São Paulo: 10 anos de resultados',
        author: 'SOS Mata Atlântica / SVMA-SP',
        year: '2022',
        url: 'https://www.sosma.org.br',
        type: 'relatorio',
        description:
          'Referência mantida pela relevância temática sobre políticas de redução de plásticos. O link leva ao portal institucional da organização, já que não foi encontrada a página pública exata do material.',
      },
      {
        id: 13,
        title: 'Programa Lixo Zero Rio: resultados e desafios',
        author: 'Secretaria Municipal de Meio Ambiente do Rio de Janeiro',
        year: '2021',
        url: 'https://www.rio.rj.gov.br/web/guest/exibeconteudo?id=4433078',
        type: 'relatorio',
        description:
          'Exemplo brasileiro de política pública urbana voltada para redução de resíduos e educação ambiental.',
      },
      {
        id: 14,
        title: 'Sacolas Plásticas no Brasil: panorama legislativo estadual e municipal',
        author: 'CEMPRE — Compromisso Empresarial para Reciclagem',
        year: '2022',
        url: 'https://cempre.org.br/central-de-conhecimento/',
        type: 'artigo',
        description:
          'Fonte útil para panorama de reciclagem, legislação e educação ambiental. O link leva à central de conhecimento do CEMPRE por não ter sido localizada a página exata do conteúdo citado.',
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
        url: 'https://www.wwf.org.br/natureza_brasileira/reducao_de_impactos2/clima/relatorio-no-plastic-in-nature/',
        type: 'estudo',
        description:
          'Relatório importante para discutir como a poluição plástica afeta ecossistemas e seres humanos.',
      },
      {
        id: 16,
        title: 'Microplásticos em peixes de água doce do Rio Amazonas',
        author: 'INPA — Instituto Nacional de Pesquisas da Amazônia',
        year: '2021',
        url: 'https://www.inpa.gov.br',
        type: 'estudo',
        description:
          'Referência altamente relevante para o contexto amazônico. O link leva ao portal institucional do INPA, pois não foi localizada uma página pública específica e estável para o material citado.',
      },
      {
        id: 17,
        title: 'Production, use, and fate of all plastics ever made',
        author: 'Roland Geyer et al. — Science Advances',
        year: '2017',
        url: 'https://www.science.org/doi/10.1126/sciadv.1700782',
        type: 'artigo',
        description:
          'Artigo científico de referência internacional sobre produção e destino dos plásticos no mundo.',
      },
      {
        id: 18,
        title: 'Plásticos nos Oceanos: 8 milhões de toneladas por ano',
        author: 'PNUMA — Programa das Nações Unidas para o Meio Ambiente',
        year: '2021',
        url: 'https://www.unep.org/resources/report/beating-plastic-pollution',
        type: 'relatorio',
        description:
          'Fonte internacional útil para contextualizar os impactos globais do descarte inadequado de plástico.',
      },
      {
        id: 19,
        title: 'Taxa de reciclagem de plásticos no Brasil: desafios e perspectivas',
        author: 'IPEA — Instituto de Pesquisa Econômica Aplicada',
        year: '2022',
        url: 'https://www.ipea.gov.br',
        type: 'relatorio',
        description:
          'Referência mantida por relevância temática para discutir os limites e desafios da reciclagem no Brasil. O link leva ao portal institucional do IPEA, pois não foi localizada uma página pública específica do conteúdo citado.',
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
        description:
          'Referência central para a realidade local de Manaus. O link leva ao portal institucional da SEMULSP, pois não foi localizada uma página pública específica e estável para o relatório citado.',
      },
      {
        id: 21,
        title: 'Cooperativas de Reciclagem no Amazonas: COOPEMA e CORESO',
        author: 'Fundação Estadual do Meio Ambiente do Amazonas — FVS/AM',
        year: '2022',
        url: 'https://www.fvs.am.gov.br',
        type: 'institucional',
        description:
          'Referência mantida por relevância temática para iniciativas de reciclagem no Amazonas. O link leva ao portal institucional relacionado, pois não foi localizada uma página pública específica do material citado.',
      },
      {
        id: 22,
        title: 'EcoPoints Manaus: pontos de entrega voluntária em estabelecimentos',
        author: 'SEMMAS — Secretaria Municipal de Meio Ambiente e Sustentabilidade',
        year: '2023',
        url: 'https://semmas.manaus.am.gov.br',
        type: 'institucional',
        description:
          'Referência importante para orientar descarte e coleta seletiva em Manaus. O link leva ao portal institucional da SEMMAS, pois não foi localizada uma página pública específica do conteúdo citado.',
      },
      {
        id: 23,
        title: 'Projeto Igarapé Vivo — recuperação de igarapés urbanos em Manaus',
        author: 'Prefeitura de Manaus / UGPI',
        year: '2023',
        url: 'https://www.manaus.am.gov.br',
        type: 'institucional',
        description:
          'Fonte de apoio contextual sobre preservação ambiental urbana em Manaus. O link leva ao portal oficial da Prefeitura, pois não foi localizada uma página pública específica e estável do projeto citado.',
      },
    ],
  },
];

export const refIdToGroup: Record<number, number> = {};
referenceGroups.forEach((group, groupIndex) => {
  group.refs.forEach((reference) => {
    refIdToGroup[reference.id] = groupIndex;
  });
});

export const typeLabels: Record<ReferenceType, { label: string; color: string }> = {
  relatorio: { label: 'Relatório', color: '#22D3EE' },
  lei: { label: 'Legislação', color: '#F97316' },
  estudo: { label: 'Estudo Científico', color: '#A78BFA' },
  artigo: { label: 'Artigo', color: '#FBBF24' },
  institucional: { label: 'Fonte Institucional', color: '#4ADE80' },
};
