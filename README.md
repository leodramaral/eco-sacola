
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

## Deploy no GitHub Pages

O projeto está configurado para deploy automático via GitHub Actions.

Arquivo de workflow:

- `.github/workflows/deploy-pages.yml`

### Como ativar

1. Suba o repositório para o GitHub.
2. Garanta que a branch de publicação seja a `master`.
3. No GitHub, acesse `Settings > Pages`.
4. Em `Build and deployment`, selecione `Source: GitHub Actions`.
5. Faça push na `master` para disparar o workflow de build e deploy.

### Sobre o caminho base (`base`) no Vite

O `vite.config.ts` foi preparado para calcular o `base` automaticamente em CI:

- Repositório comum (`usuario/nome-repo`): usa `/<nome-repo>/`
- Repositório de usuário (`usuario/usuario.github.io`): usa `/`

Isso evita ajuste manual de URL entre ambientes local e produção.

## Observações

- O projeto utiliza imagens externas em alguns trechos da interface, então é recomendável rodá-lo com acesso à internet para visualizar todos os elementos corretamente.
- O repositório está configurado para usar UTF-8 e finais de linha `LF` por padrão.
- O banner de consentimento de cookies esta ativo e salva a escolha do usuario em localStorage na chave ecosacola-lgpd-consent-v1.
  
