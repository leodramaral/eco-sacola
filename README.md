
# EcoSacola Manaus

Aplicação web educativa e interativa sobre os impactos do uso de sacolas plásticas em Manaus e no Amazonas. O projeto apresenta dados e referências sobre poluição por plásticos, tempo de decomposição, legislação local, alternativas mais sustentáveis e iniciativas relacionadas ao tema.

A interface foi construída como uma single-page application com seções visuais, navegação por rolagem e uma página dedicada às referências utilizadas no conteúdo.

O layout original foi concebido no Figma:
https://www.figma.com/design/ddedSb0XLgwkgtRcBY1wgI/Design-EcoSacola-Manaus

## Stack utilizada

- React 18
- TypeScript
- Vite 6
- Tailwind CSS 4
- Motion para animações
- Radix UI e utilitários de interface
- Lucide React para ícones

## Pré-requisitos

Antes de rodar o projeto localmente, garanta que o ambiente tenha:

- Node.js 18 ou superior
- npm 9 ou superior

## Como rodar localmente

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Abra o endereço exibido no terminal, normalmente:

   ```text
   http://localhost:5173
   ```

## Build de produção

Para gerar a versão de produção do projeto:

```bash
npm run build
```

## Observações

- O projeto utiliza imagens externas em alguns trechos da interface, então é recomendável rodá-lo com acesso à internet para visualizar todos os elementos corretamente.
- O repositório está configurado para usar UTF-8 e finais de linha `LF` por padrão.
  
