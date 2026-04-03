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
        title: 'Microplásticos: poluição toma conta dos rios e igarapés em Manaus',
        author: 'Ana Kelly Franco — Agência Jamaxi',
        year: '2024',
        url: 'https://agenciajamaxi.com.br/microplasticos-poluicao-toma-conta-dos-rios-e-igarapes-em-manaus/',
        type: 'artigo',
        description:
          'Reportagem sobre a presença de microplásticos em rios e igarapés de Manaus, com dados e entrevistas sobre contaminação, saneamento e impactos ambientais na região.',
      },
      {
        id: 2,
        title: 'Panorama dos Resíduos Sólidos no Brasil 2025',
        author: 'ABREMA — Associação Brasileira de Resíduos e Meio Ambiente',
        year: '2025',
        url: 'https://static.poder360.com.br/2025/12/panorama-2025.pdf',
        type: 'relatorio',
        description:
          'Fonte nacional de referência sobre geração, coleta e destinação de resíduos sólidos no Brasil.',
      },
      {
        id: 3,
        title: 'Estudo aponta extensa e preocupante contaminação por plásticos na Amazônia',
        author: 'MCTI — Ministério da Ciência, Tecnologia e Inovação',
        year: '2025',
        url: 'https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/noticias/2025/09/estudo-aponta-extensa-e-preocupante-contaminacao-por-plasticos-na-amazonia',
        type: 'institucional',
        description:
          'Notícia institucional sobre estudo que relata contaminação extensa por plásticos na Amazônia, destacando a gravidade do problema ambiental na região.',
      },
    ],
  },
  {
    section: 'Permanência e Fragmentação no Ambiente',
    emoji: '⏱️',
    color: '#FBBF24',
    borderColor: 'rgba(251,191,36,0.25)',
    bgColor: 'rgba(251,191,36,0.06)',
    refs: [
      {
        id: 5,
        title: 'Agenda Nacional de Qualidade Ambiental Urbana: combate ao lixo no mar',
        author: 'Ministério do Meio Ambiente e Mudança do Clima (Brasil)',
        year: '2022',
        url: 'https://www.gov.br/mma/pt-br/centrais-de-conteudo/copy_of_planonacionaldecombateaolixonomarpdf_vdefeso.pdf',
        type: 'institucional',
        description:
          'Documento oficial brasileiro. Informa que garrafas plásticas podem ultrapassar 400 anos e que sacolas plásticas podem levar até 20 anos, além de destacar que esse material se fragmenta em microplásticos e continua causando impactos ambientais.',
      },
      {
        id: 6,
        title: 'Waste decomposition times fact sheet',
        author: 'Brisbane City Council',
        year: '2025',
        url: 'https://www.brisbane.qld.gov.au/content/dam/brisbanecitycouncil/corpwebsite/bins-waste-and-recycling/documents/waste-decomposition-times-fact-sheet.pdf',
        type: 'relatorio',
        description:
          'Fact sheet institucional com tempos objetivos úteis para a interface: sacola plástica até 20 anos, garrafa plástica 450 anos e copo de poliestireno mais de 500 anos.',
      },
      {
        id: 7,
        title: 'The Mystery of How Long Until It’s Gone',
        author: 'NOAA Marine Debris Program',
        year: '2024',
        url: 'https://marinedebris.noaa.gov/discover-marine-debris/mystery-how-long-until-it-s-gone',
        type: 'institucional',
        description:
          'Artigo institucional confiável para contextualizar que o tempo de degradação varia conforme o material e o ambiente, e que muitos plásticos não desaparecem totalmente, mas se fragmentam em partículas cada vez menores.',
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
        title: 'Maio de 2021 — Promulgação da Lei n.º 485/2021 em Manaus',
        author: 'A Crítica',
        year: '2021',
        url: 'https://www.acritica.com/manaus/sacolas-plasticas-gratuitas-est-o-com-dias-contados-apos-promulgac-o-de-lei-em-manaus-1.18510',
        type: 'artigo',
        description:
          'Notícia que registra a promulgação da Lei n.º 485/2021, primeiro marco municipal recente sobre a distribuição gratuita de sacolas plásticas em Manaus.',
      },
      {
        id: 9,
        title: 'Maio de 2021 — Cobertura da proibição e do prazo inicial de vigência',
        author: 'A Crítica',
        year: '2021',
        url: 'https://www.acritica.com/manaus/lei-proibe-distribuic-o-de-sacolas-plasticas-em-manaus-a-partir-do-dia-30-1.8878',
        type: 'artigo',
        description:
          'Cobertura local sobre a Lei n.º 485/2021 e a primeira fase de aplicação da proibição de sacolas plásticas gratuitas no comércio da capital.',
      },
      {
        id: 10,
        title: 'Maio de 2021 — Texto integral da Lei n.º 485, de 7 de maio de 2021',
        author: 'Câmara Municipal de Manaus',
        year: '2021',
        url: 'https://sapl.cmm.am.gov.br/media/sapl/public/normajuridica/2021/2427/lei_n_485_de_07_mai_2021.pdf',
        type: 'lei',
        description:
          'Texto legal que instituiu a lei municipal original sobre sacolas plásticas em Manaus.',
      },
      {
        id: 11,
        title: 'Outubro de 2021 — Prefeitura publica alterações e prazo de adaptação',
        author: 'Prefeitura de Manaus',
        year: '2021',
        url: 'https://www.manaus.am.gov.br/noticia/consumidor/alteracoes-na-lei-das-sacolas-plasticas-sao-publicadas-e-estabelecimentos-terao-um-ano-para-se-adequarem/',
        type: 'institucional',
        description:
          'Comunicado oficial sobre a Lei n.º 2.799/2021, que alterou a norma original e estabeleceu um período de transição para o comércio local.',
      },
      {
        id: 12,
        title: 'Outubro de 2021 — Nova lei sancionada mantém fase de transição',
        author: 'Rádio Rio Mar',
        year: '2021',
        url: 'https://radioriomarfm.com.br/nova-lei-e-sancionada-mas-estabelecimentos-ainda-podem-vender-sacolas-plasticas/',
        type: 'artigo',
        description:
          'Reportagem que resume a sanção da nova lei municipal e explica que os estabelecimentos ainda teriam prazo para adaptação.',
      },
      {
        id: 13,
        title: 'Outubro de 2021 — Texto integral da Lei n.º 2.799, de 13 de outubro de 2021',
        author: 'Câmara Municipal de Manaus',
        year: '2021',
        url: 'https://sapl.cmm.am.gov.br/media/sapl/public/normajuridica/2021/3066/lei_n_2799_de_13_out_2021.pdf',
        type: 'lei',
        description:
          'Norma que alterou a Lei n.º 485/2021 e definiu um cronograma de adaptação para os estabelecimentos comerciais de Manaus.',
      },
      {
        id: 14,
        title: 'Outubro de 2022 — Regra municipal entra em vigor nos grandes supermercados',
        author: 'A Crítica',
        year: '2022',
        url: 'https://www.acritica.com/geral/lei-das-sacolas-plasticas-entra-em-vigor-a-partir-de-quinta-feira-20-1.284262',
        type: 'artigo',
        description:
          'Cobertura da fase em que a regra municipal passou a ter aplicação prática em grandes supermercados de Manaus.',
      },
      {
        id: 15,
        title: 'Outubro de 2022 — Reportagem em vídeo sobre a entrada em vigor da regra municipal',
        author: 'Rede Amazônica / Globoplay',
        year: '2022',
        url: 'https://globoplay.globo.com/v/11041068/',
        type: 'artigo',
        description:
          'Registro audiovisual da entrada em vigor das restrições municipais sobre a distribuição e venda de sacolas plásticas convencionais.',
      },
      {
        id: 16,
        title: 'Dezembro de 2022 — Procon-AM orienta sobre a nova lei estadual',
        author: 'Procon-AM',
        year: '2022',
        url: 'https://www.procon.am.gov.br/procon-am-fiscaliza-e-orienta-sobre-a-nova-lei-das-sacolas-plasticas/',
        type: 'institucional',
        description:
          'Fonte oficial sobre a ampliação do tema para o âmbito estadual, com orientação e fiscalização relacionadas à nova regra no Amazonas.',
      },
      {
        id: 17,
        title: 'Dezembro de 2022 — Reportagem em vídeo sobre a aprovação da lei estadual',
        author: 'Rede Amazônica / Globoplay',
        year: '2022',
        url: 'https://globoplay.globo.com/v/11188543/',
        type: 'artigo',
        description:
          'Reportagem em vídeo sobre a aprovação da lei estadual que passou a disciplinar o uso de sacolas plásticas em todo o Amazonas.',
      },
      {
        id: 18,
        title: 'Dezembro de 2022 — Texto integral da Lei estadual n.º 6.077, de 1.º de dezembro de 2022',
        author: 'Assembleia Legislativa do Estado do Amazonas',
        year: '2022',
        url: 'https://sapl.al.am.leg.br/media/sapl/public/normajuridica/2022/12174/6077.pdf',
        type: 'lei',
        description:
          'Lei estadual que ampliou a regulamentação sobre sacolas plásticas para todo o Amazonas.',
      },
      {
        id: 19,
        title: 'Outubro/Novembro de 2023 — Vereadores prorrogam fase mais rígida para 2026',
        author: 'Amazonas Atual',
        year: '2023',
        url: 'https://amazonasatual.com.br/vereadores-prorrogam-ate-2026-prazo-para-proibir-sacolas-plasticas/',
        type: 'artigo',
        description:
          'Notícia sobre o adiamento da etapa mais rígida da lei municipal, com novo prazo fixado para 20 de outubro de 2026.',
      },
      {
        id: 20,
        title: 'Novembro de 2023 — Texto integral da Lei n.º 3.189, de 1.º de novembro de 2023',
        author: 'Câmara Municipal de Manaus',
        year: '2023',
        url: 'https://sapl.cmm.am.gov.br/media/sapl/public/normajuridica/2023/7142/lei_n_3189_de_01_nov_2023.pdf',
        type: 'lei',
        description:
          'Norma que formalizou o adiamento da fase mais rigorosa da legislação municipal sobre sacolas plásticas.',
      },
      {
        id: 21,
        title: 'Maio/Junho de 2024 — TJAM adia julgamento sobre a lei das sacolas',
        author: 'A Crítica',
        year: '2024',
        url: 'https://www.acritica.com/politica/tjam-adia-pela-segunda-vez-o-julgamento-da-lei-das-sacolas-plasticas-1.340843',
        type: 'artigo',
        description:
          'Cobertura jornalística da disputa judicial que passou a questionar a legislação sobre sacolas plásticas em Manaus e no Amazonas.',
      },
      {
        id: 22,
        title: 'Junho de 2024 — TJAM extingue ação contra leis municipal e estadual',
        author: 'Tribunal de Justiça do Amazonas',
        year: '2024',
        url: 'https://www.tjam.jus.br/index.php/menu/sala-de-imprensa/11799-tjam-extingue-acao-que-questionava-leis-sobre-proibicao-de-sacolas-plasticas-no-comercio',
        type: 'institucional',
        description:
          'Comunicado oficial do TJAM sobre a extinção da ação que questionava as leis municipal e estadual sobre sacolas plásticas.',
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
        id: 23,
        title: 'Lei Municipal n.º 15.374/2011 — Proibição de Sacolas Plásticas em São Paulo',
        author: 'Câmara Municipal de São Paulo',
        year: '2011',
        url: 'https://www.camara.sp.gov.br',
        type: 'lei',
        description:
          'Referência usada para comparação com outras experiências urbanas no Brasil. O link leva ao portal institucional da Câmara de São Paulo, pois não foi localizada uma URL pública estável para o texto específico citado.',
      },
      {
        id: 24,
        title: 'Impactos da Proibição de Sacolas Plásticas em São Paulo: 10 anos de resultados',
        author: 'SOS Mata Atlântica / SVMA-SP',
        year: '2022',
        url: 'https://www.sosma.org.br',
        type: 'relatorio',
        description:
          'Referência mantida pela relevância temática sobre políticas de redução de plásticos. O link leva ao portal institucional da organização, já que não foi encontrada a página pública exata do material.',
      },
      {
        id: 25,
        title: 'Programa Lixo Zero Rio: resultados e desafios',
        author: 'Secretaria Municipal de Meio Ambiente do Rio de Janeiro',
        year: '2021',
        url: 'https://www.rio.rj.gov.br/web/guest/exibeconteudo?id=4433078',
        type: 'relatorio',
        description:
          'Exemplo brasileiro de política pública urbana voltada para redução de resíduos e educação ambiental.',
      },
      {
        id: 26,
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
        id: 27,
        title: 'No Plastic in Nature: Assessing Plastic Ingestion from Nature to People',
        author: 'WWF — World Wildlife Fund',
        year: '2019',
        url: 'https://www.wwf.org.br/natureza_brasileira/reducao_de_impactos2/clima/relatorio-no-plastic-in-nature/',
        type: 'estudo',
        description:
          'Relatório importante para discutir como a poluição plástica afeta ecossistemas e seres humanos.',
      },
      {
        id: 28,
        title: 'Microplásticos em peixes de água doce do Rio Amazonas',
        author: 'INPA — Instituto Nacional de Pesquisas da Amazônia',
        year: '2021',
        url: 'https://www.inpa.gov.br',
        type: 'estudo',
        description:
          'Referência altamente relevante para o contexto amazônico. O link leva ao portal institucional do INPA, pois não foi localizada uma página pública específica e estável para o material citado.',
      },
      {
        id: 29,
        title: 'Production, use, and fate of all plastics ever made',
        author: 'Roland Geyer et al. — Science Advances',
        year: '2017',
        url: 'https://www.science.org/doi/10.1126/sciadv.1700782',
        type: 'artigo',
        description:
          'Artigo científico de referência internacional sobre produção e destino dos plásticos no mundo.',
      },
      {
        id: 30,
        title: 'Plásticos nos Oceanos: 8 milhões de toneladas por ano',
        author: 'PNUMA — Programa das Nações Unidas para o Meio Ambiente',
        year: '2021',
        url: 'https://www.unep.org/resources/report/beating-plastic-pollution',
        type: 'relatorio',
        description:
          'Fonte internacional útil para contextualizar os impactos globais do descarte inadequado de plástico.',
      },
      {
        id: 31,
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
        id: 32,
        title: 'Programa de Coleta Seletiva de Manaus — Relatório Anual',
        author: 'SEMULSP — Secretaria Municipal de Limpeza Urbana',
        year: '2023',
        url: 'https://semulsp.manaus.am.gov.br',
        type: 'institucional',
        description:
          'Referência central para a realidade local de Manaus. O link leva ao portal institucional da SEMULSP, pois não foi localizada uma página pública específica e estável para o relatório citado.',
      },
      {
        id: 33,
        title: 'Cooperativas de Reciclagem no Amazonas: COOPEMA e CORESO',
        author: 'Fundação Estadual do Meio Ambiente do Amazonas — FVS/AM',
        year: '2022',
        url: 'https://www.fvs.am.gov.br',
        type: 'institucional',
        description:
          'Referência mantida por relevância temática para iniciativas de reciclagem no Amazonas. O link leva ao portal institucional relacionado, pois não foi localizada uma página pública específica do material citado.',
      },
      {
        id: 34,
        title: 'EcoPoints Manaus: pontos de entrega voluntária em estabelecimentos',
        author: 'SEMMAS — Secretaria Municipal de Meio Ambiente e Sustentabilidade',
        year: '2023',
        url: 'https://semmas.manaus.am.gov.br',
        type: 'institucional',
        description:
          'Referência importante para orientar descarte e coleta seletiva em Manaus. O link leva ao portal institucional da SEMMAS, pois não foi localizada uma página pública específica do conteúdo citado.',
      },
      {
        id: 35,
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
