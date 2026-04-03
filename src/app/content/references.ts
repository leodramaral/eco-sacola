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
    section: 'Curiosidades e Dados Globais',
    emoji: '💡',
    color: '#A78BFA',
    borderColor: 'rgba(167,139,250,0.25)',
    bgColor: 'rgba(167,139,250,0.06)',
    refs: [
      {
        id: 27,
        title: 'Dietary and inhalation exposure to nano- and microplastic particles and potential implications for human health',
        author: 'WHO — World Health Organization',
        year: '2022',
        url: 'https://www.who.int/publications/i/item/9789240054608',
        type: 'estudo',
        description:
          'Relatório da OMS sobre exposição humana a nano e microplásticos por alimentação e inalação, útil para discutir como a poluição plástica do ambiente pode alcançar o corpo humano e quais são as possíveis implicações para a saúde.',
      },
      {
        id: 28,
        title: 'Chemicals in Plastics: A Technical Report',
        author: 'UNEP — United Nations Environment Programme',
        year: '2023',
        url: 'https://www.unep.org/resources/report/chemicals-plastics-technical-report',
        type: 'relatorio',
        description:
          'Relatório técnico do PNUMA sobre substâncias químicas presentes nos plásticos, importante para contextualizar riscos ambientais e à saúde e fortalecer a discussão sobre os impactos da poluição plástica.',
      },
      {
        id: 29,
        title: 'Ingestão de microplásticos por espécies de peixes amazônicas com diferentes hábitos alimentares',
        author: 'Maria Tereza Vasconcelos-Souza et al. / INPA',
        year: '2022',
        url: 'https://repositorio.inpa.gov.br/entities/publication/f7ba8da8-f89a-4c3b-a6dc-7080ae95c34a',
        type: 'estudo',
        description:
          'Estudo vinculado ao INPA sobre a presença de microplásticos no trato gastrointestinal de peixes amazônicos de água doce, útil para contextualizar os impactos da poluição plástica sobre a fauna aquática da Amazônia.',
      },
      {
        id: 30,
        title: 'Com apoio do Governo do Amazonas, pesquisa registra a presença de plástico no trato gastrointestinal de peixes',
        author: 'FAPEAM — Fundação de Amparo à Pesquisa do Estado do Amazonas',
        year: '2023',
        url: 'https://www.fapeam.am.gov.br/com-apoio-do-governo-do-amazonas-pesquisa-registra-a-presenca-de-plastico-no-trato-gastrointestinal-de-peixes/',
        type: 'institucional',
        description:
          'Notícia institucional sobre pesquisa apoiada pela Fapeam que registrou plástico no trato gastrointestinal de peixes comercializados em Tefe, reforçando o recorte amazônico sobre contaminação por microplásticos em espécies consumidas pela população.',
      },
      {
        id: 31,
        title: 'Production, use, and fate of all plastics ever made',
        author: 'Roland Geyer et al. — Science Advances',
        year: '2017',
        url: 'https://www.science.org/doi/10.1126/sciadv.1700782',
        type: 'artigo',
        description:
          'Artigo científico de referência internacional sobre produção e destino dos plásticos no mundo.',
      },
      {
        id: 32,
        title: 'Resíduos sólidos, reciclagem e economia circular',
        author: 'IPEA — Instituto de Pesquisa Econômica Aplicada',
        year: '2025',
        url: 'https://repositorio.ipea.gov.br/bitstreams/d52c091f-896a-4087-95d9-5e4cdaf75a9d/download',
        type: 'relatorio',
        description:
          'Texto para Discussão do IPEA que apresenta dados sobre resíduos sólidos no Brasil e analisa reciclagem, economia circular e desafios de implementação das políticas públicas, sendo útil para discutir os limites estruturais da reciclagem no país.',
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
        id: 33,
        title: 'Abril de 2024 — Coleta seletiva porta a porta começa por bairros de Manaus',
        author: 'Prefeitura de Manaus / Semulsp',
        year: '2024',
        url: 'https://www.manaus.am.gov.br/noticia/meio-ambiente/coleta-seletiva/',
        type: 'institucional',
        description:
          'Fonte oficial sobre o lançamento do serviço porta a porta da Semulsp, com coleta semanal de recicláveis em bairros programados e destinação do material para associações de catadores.',
      },
      {
        id: 34,
        title: 'Novembro de 2024 — Listagem de Pontos de Entrega Voluntária (PEVs) de Manaus',
        author: 'SEMULSP — Secretaria Municipal de Limpeza Urbana',
        year: '2024',
        url: 'https://www.manaus.am.gov.br/semulsp/wp-content/uploads/sites/23/2024/11/Listagem-de-Pontos-de-Entrega-Voluntaria-PEVs.pdf',
        type: 'institucional',
        description:
          'Listagem pública oficial dos PEVs de Manaus, com endereços e indicação dos materiais aceitos, incluindo embalagens plásticas e outros recicláveis.',
      },
      {
        id: 35,
        title: 'Março de 2025 — Laboratório de reciclagem de plástico fortalece economia circular em Manaus',
        author: 'FAS — Fundação Amazônia Sustentável',
        year: '2025',
        url: 'https://fas-amazonia.org/em-manaus-laboratorio-para-reciclagem-de-plastico-fortalece-economia-circular/',
        type: 'institucional',
        description:
          'Reportagem institucional sobre o laboratório de reciclagem ligado à ASCARMAN e ao InnPacto Amazônia, com atuação em seis bairros, educação ambiental e geração de renda.',
      },
      {
        id: 36,
        title: 'Novembro de 2019 — ARPA transforma sacolas plásticas em sacos resistentes em Manaus',
        author: 'Portal Amazônia',
        year: '2019',
        url: 'https://portalamazonia.com/meio-ambiente/associacao-de-reciclagem-de-manaus-transforma-sacolas-plasticas-em-sacos-resistentes/',
        type: 'artigo',
        description:
          'Reportagem sobre a ARPA, que recicla parte das sacolas e filmes plásticos coletados em Manaus para produzir novos sacos para lixo.',
      },
      {
        id: 37,
        title: 'EcoForte — sacos para lixo com material totalmente reciclado',
        author: 'EcoForte',
        year: 's.d.',
        url: 'https://ecofortebr.com/',
        type: 'institucional',
        description:
          'Página institucional da empresa que comercializa sacos para lixo produzidos com matéria-prima reciclada coletada em Manaus e região metropolitana.',
      },
      {
        id: 38,
        title: 'Maio de 2025 — Bônus para catadores impede que plásticos poluam rios da Amazônia',
        author: 'Agência Brasil',
        year: '2025',
        url: 'https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2025-05/bonus-para-catadores-impede-que-plasticos-poluam-rios-da-amazonia',
        type: 'artigo',
        description:
          'Reportagem sobre a parceria entre Plastic Bank, Lord e ASCARMAN em Manaus, com bônus por quilo de plástico, meta de evitar milhões de garrafas nos rios e aumento de renda para catadores.',
      },
      {
        id: 39,
        title: 'Maio de 2025 — Plastic Bank, Lord e ASCARMAN iniciam projeto para barrar PET nos rios',
        author: 'A Crítica',
        year: '2025',
        url: 'https://www.acritica.com/amazonia/uni-o-para-impedir-que-garrafas-pet-cheguem-aos-rios-1.373995',
        type: 'artigo',
        description:
          'Cobertura local da operação iniciada em Manaus, destacando a meta de impedir 3 milhões de garrafas plásticas de chegarem aos rios até o fim de 2025.',
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
