import React from 'react';
import { motion } from 'motion/react';
import { RefCitation } from './RefCitation';

const practicalCards = [
  {
    emoji: '🧺',
    title: 'Saia com uma alternativa pronta',
    text:
      'Antes de ir ao mercado, feira, farmácia ou comércio de bairro, leve ecobag, mochila, caixa de papelão ou carrinho de feira. Deixar uma bolsa dobrável na mochila, no carro ou perto da porta já ajuda a cortar o uso automático da sacola.',
  },
  {
    emoji: '✋',
    title: 'Recuse quando a compra couber na mão',
    text:
      'Para poucos itens, uma única embalagem ou algo que você já vai consumir em seguida, vale perguntar se realmente precisa da sacola. Em compras pequenas, pedir só o necessário já evita excesso sem complicar a rotina.',
  },
  {
    emoji: '📦',
    title: 'Evite o excesso na hora de organizar a compra',
    text:
      'Juntar itens em menos volumes, aproveitar caixas já disponíveis e reduzir descartáveis quando houver opção ajuda a diminuir o número de sacolas e embalagens no caminho até casa. Se a compra for maior, organizar os produtos por peso e uso costuma funcionar melhor do que aceitar várias sacolas leves.',
  },
  {
    emoji: '🔁',
    title: 'Reutilize, mas sem perder a prioridade',
    text:
      'Se você já tem sacolas em casa, reaproveitar é melhor do que descartar logo, inclusive em usos específicos como lixo doméstico ou transporte pontual. Ainda assim, o objetivo principal continua sendo pegar menos sacolas novas a cada compra.',
    refIds: [32],
  },
  {
    emoji: '♻️',
    title: 'Separe recicláveis de forma simples',
    text:
      'Plástico, papel, metal e vidro ficam mais fáceis de aproveitar quando são separados do lixo orgânico e encaminhados de forma adequada. Manter os recicláveis limpos, secos e agrupados melhora a triagem e fortalece o trabalho de associações e catadores.',
    refIds: [33, 35],
  },
  {
    emoji: '📍',
    title: 'Use os serviços que Manaus já oferece',
    text:
      'A cidade já conta com coleta seletiva em bairros programados e com PEVs para entrega voluntária de recicláveis. Quando o descarte não pode ser evitado, essa estrutura ajuda a encaminhar melhor o material, inclusive quando sua rua ainda não está na rota da coleta seletiva.',
    refIds: [33, 34],
  },
];

export function AlternativesSection() {
  return (
    <section
      id="section-4"
      className="relative py-20 px-4 min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #021A08 0%, #042D10 50%, #021A08 100%)' }}
    >
      <div
        className="absolute top-20 left-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #4ADE80, transparent)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-20 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #22D3EE, transparent)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
          >
            Menos sacolas no{' '}
            <span
              className="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #4ADE80, #22D3EE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              dia a dia
            </span>
          </h2>
          <p
            className="text-white/65 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Hábitos simples já ajudam a reduzir o uso automático de sacolas e a aproveitar melhor
            os serviços de descarte em Manaus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {practicalCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="h-full rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-[2px]"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-2xl flex-shrink-0">
                  {card.emoji}
                </div>
                <h3
                  className="text-white text-lg leading-tight"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                >
                  {card.title}
                </h3>
              </div>

              <p
                className="text-sm text-white/72 leading-relaxed mb-4"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {card.text}
                {card.refIds ? <RefCitation ids={card.refIds} /> : null}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
