# Teste Front-End Jr. | Econverse

Página em **React + TypeScript + Sass (SCSS)** com a vitrine "Produtos relacionados" consumindo o JSON do teste e modal de produto, sem nenhuma biblioteca de UI, de carrossel ou de modal.

## Como rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check (tsc) + build de produção em /dist
npm run preview  # serve o build
```

Requer Node 18+.

## O que foi implementado

- Topo da página estático conforme o layout: barra de benefícios, header com busca, menu de categorias, banner e cards de categoria.
- **Vitrine** "Produtos relacionados" com abas e **carrossel manual** (4 cards por vez no desktop, setas funcionais).
- **Modal do produto** ao clicar no card (ou no botão COMPRAR) com nome, preço, descrição e foto do produto clicado, seletor de quantidade (mínimo 1) e link de detalhes.
- Dados vindos de `produtos.json` via `fetch`, com estados de **loading** e **erro**.

## Decisões técnicas

| Tema | Decisão |
| --- | --- |
| Preço antigo (riscado) | O JSON não traz esse valor. Ele é calculado como `price × 1,07`, arredondado em centavos (`getOldPrice`). |
| Parcelamento | "ou 2x de R$ X sem juros", com `X = price / 2` (`getInstallment`). |
| Categorias e abas | O JSON não possui categoria, então ela é deduzida por palavras-chave no nome (`utils/productCategory.ts`). Todos os itens do JSON são iPhones (tecnologia/celular): aparecem em "Tecnologia" > "Celular" e "Ver todos". As demais abas e as outras categorias principais (Supermercado, Bebidas...) mostram "Nenhum produto disponível"; nelas as abas de tecnologia ficam ocultas. |
| Valores do JSON | Tratados como reais (ex.: `15000` → `R$ 15.000,00`), formatados com `Intl.NumberFormat('pt-BR')`. |
| Cores | Centralizadas em `src/styles/_variables.scss`. Azul-índigo `#3442b5` (medido na página Home do Figma) nos botões, título e destaques; amarelo no modal e no banner. |
| Ícones | Os PNGs de ícones exportados do Figma vieram vazios (transparentes), então os ícones foram redesenhados como SVG em `Icons.tsx`. Para ficar idêntico ao Figma, basta trocar por SVGs exportados de lá. |
| Fundo do banner | A foto de fundo (Black Friday/neon) não veio como arquivo, então foi reproduzida com gradientes CSS. |
| Botão COMPRAR do modal | Sem ação de compra (o teste não pede carrinho); apenas visual. |
| Responsividade | Em 1834 px de largura a vitrine usa as medidas exatas do layout (card 349 px, espaçamento 80 px); abaixo disso ela escala e reduz a quantidade de cards visíveis. |

## Estrutura

```
src/
  components/   Componentes (um por arquivo, props tipadas)
  hooks/        useProducts, useCarousel, useVisibleItems, useModal
  services/     productService (fetch do JSON)
  types/        Interfaces TypeScript (Product, ProductsResponse)
  utils/        formatCurrency, getOldPrice, getInstallment
  styles/       _variables, _mixins, _reset, global + components/*.scss (um por componente)
  assets/       logo
```

## SEO e acessibilidade

- HTML semântico: `header`, `nav`, `main`, `section`, `article` (cada card), `h1` único (banner), `h2`/`h3` em ordem.
- `lang="pt-BR"`, `title`, `meta description`, Open Graph e `viewport` no `index.html`.
- `alt` descritivo nas imagens; ícones decorativos com `aria-hidden`.
- Modal com `role="dialog"`, `aria-modal`, `aria-labelledby`, foco movido ao abrir e devolvido ao fechar, Tab preso dentro do modal, fechamento por X, clique no overlay e ESC, e scroll do body bloqueado.
- Carrossel com `role="region"` e cards fora da janela visível marcados como `aria-hidden`/`inert`.
- CSS com BEM e respeito a `prefers-reduced-motion`.
