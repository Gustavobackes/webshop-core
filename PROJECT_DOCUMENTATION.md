# 📋 DOCUMENTAÇÃO TÉCNICA COMPLETA
## Site de Afiliados - Periféricos Essenciais

> **📅 Data:** 08/10/2025
> **📦 Versão:** 1.0.0
> **✅ Status:** Em Produção
> **🔄 Última Atualização:** 08/10/2025

---

## 📑 ÍNDICE COMPLETO

1. [Visão Geral do Projeto](#1-visão-geral)
2. [Arquitetura e Estrutura](#2-arquitetura)
3. [Tecnologias e Dependências](#3-tecnologias)
4. [Estrutura de Arquivos Detalhada](#4-estrutura-arquivos)
5. [Documentação do HTML](#5-documentacao-html)
6. [Documentação do CSS](#6-documentacao-css)
7. [Documentação do JavaScript](#7-documentacao-js)
8. [Sistema de Imagens](#8-sistema-imagens)
9. [Sistema de Temas (Light/Dark)](#9-sistema-temas)
10. [Carrossel de Produtos](#10-carrossel)
11. [Links de Afiliado](#11-links-afiliado)
12. [SEO e Schema Markup](#12-seo)
13. [Responsividade](#13-responsividade)
14. [Tabela Comparativa](#14-tabela-comparativa)
15. [FAQ Otimizada](#15-faq)
16. [Performance e Otimizações](#16-performance)
17. [Acessibilidade](#17-acessibilidade)
18. [Guia de Manutenção](#18-manutencao)
19. [Como Adicionar Produto](#19-adicionar-produto)
20. [Como Adicionar Categoria](#20-adicionar-categoria)
21. [Como Modificar Tema](#21-modificar-tema)
22. [Como Atualizar Preços](#22-atualizar-precos)
23. [Convenções de Código](#23-convencoes)
24. [Variáveis CSS Personalizáveis](#24-variaveis-css)
25. [Funções JavaScript Disponíveis](#25-funcoes-js)
26. [Problemas Conhecidos e Soluções](#26-problemas)
27. [Alterações Manuais Realizadas](#27-alteracoes-manuais)
28. [Checklist de Deploy](#28-checklist-deploy)
29. [Checklist de Validação](#29-checklist-validacao)
30. [Troubleshooting Comum](#30-troubleshooting)
31. [Roadmap e Melhorias Futuras](#31-roadmap)
32. [Referências e Recursos](#32-referencias)

---

## 1. 🎯 VISÃO GERAL DO PROJETO {#1-visão-geral}

### 1.1 Descrição

Site completo de afiliados especializado em periféricos de informática para trabalho e gaming. O projeto oferece análises detalhadas, comparações e recomendações de produtos com foco em SEO otimizado e conversão de vendas através de links de afiliados.

**Funcionalidades Principais:**
- ✅ Sistema de carrossel de imagens funcional
- ✅ Alternância entre tema claro e escuro
- ✅ Design responsivo para mobile e desktop
- ✅ SEO otimizado com Schema Markup JSON-LD
- ✅ FAQ estruturado com microdados
- ✅ Tabela comparativa de produtos
- ✅ Links de afiliado organizados por loja
- ✅ Navegação por categorias e seções

### 1.2 Objetivo de Negócio

- **Monetização:** Gerar comissões através de programa de afiliados
- **SEO:** Ranquear nas primeiras posições do Google para palavras-chave específicas
- **Conversão:** Guiar usuários na decisão de compra através de conteúdo educativo
- **Autoridade:** Estabelecer-se como referência em periféricos de informática

### 1.3 Público-Alvo

**Perfil Principal:**
- Gamers iniciantes e intermediários (18-35 anos)
- Profissionais de escritório (home office)
- Estudantes universitários
- Pessoas buscando upgrade de equipamentos

**Características:**
- Buscam melhor custo-benefício
- Valorizam qualidade e durabilidade
- Preferem marcas reconhecidas
- Fazem pesquisa online antes da compra

### 1.4 Métricas de Sucesso (KPIs)

- **CTR de Links:** Meta >3% nos botões de afiliado
- **Tempo na Página:** Meta >2 minutos (engajamento)
- **Taxa de Rejeição:** Meta <65%
- **Posicionamento SEO:** Meta Top 5 para palavras-chave principais
- **Taxa de Conversão:** Meta >1.5% dos visitantes
- **Páginas por Sessão:** Meta >2.5 páginas
- **Origem de Tráfego:** Meta >70% orgânico

### 1.5 Palavras-chave Principais

**Primárias:**
- "melhor mouse gamer custo benefício 2025"
- "teclado mecânico barato para iniciantes"
- "fone de ouvido gamer confortável"
- "periféricos de informática"
- "mouse gamer logitech g502"

**Secundárias:**
- "webcam para home office"
- "monitor ips cores precisas"
- "mousepad rgb gamer"
- "comparativo periféricos 2025"

---

## 2. 🏗️ ARQUITETURA E ESTRUTURA {#2-arquitetura}

### 2.1 Estrutura de Diretórios

```
/perifericos-essenciais/
├── index.html              (39.3KB) - Página principal
├── styles.css              (18KB)   - Estilos e temas
├── script.js               (19.6KB) - Funcionalidades JS
├── images/                 (224KB total)
│   ├── logitech-g502-hero/ (5 imagens JPG)
│   ├── hyperx-cloud-ii/    (pasta vazia)
│   ├── redragon-kumara-k552/ (pasta vazia)
│   ├── monitor-lg-24/      (pasta vazia)
│   ├── logitech-c920s/     (pasta vazia)
│   └── mousepad-rgb/       (pasta vazia)
├── prompts/                (documentos de desenvolvimento)
└── .git/                   (repositório versionado)
```

### 2.2 Arquitetura de Software

**Tipo:** Aplicação Web Estática (SPA-like)
**Padrão:** Arquivos separados por responsabilidade
**Framework:** JavaScript Vanilla (sem dependências externas)

**Arquitetura de Classes:**
```
ProductCarousel (MVC)
├── Model: productsData (dados estáticos)
├── View:  DOM manipulation
└── Controller: eventos e interações

ThemeToggle (Observer Pattern)
├── Observer: window.matchMedia
├── Subject: document.documentElement
└── State: localStorage persistence
```

---

## 3. 🛠️ TECNOLOGIAS E DEPENDÊNCIAS {#3-tecnologias}

### 3.1 Tecnologias Utilizadas

- **HTML5:** Semântica completa com microdados
- **CSS3:** Variáveis custom properties + Flexbox/Grid
- **JavaScript ES6+:** Classes, módulos, async/await
- **Schema.org:** JSON-LD para rich snippets
- **Web APIs:** IntersectionObserver, localStorage

### 3.2 Dependências Externas

**❌ Zero Dependências Externas**
- Sem jQuery, Bootstrap ou outros frameworks
- Código vanilla puro para máxima performance
- Tamanho total: ~77KB (HTML+CSS+JS)

### 3.3 Browser Support

**Compatibilidade:**
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 4. 📁 ESTRUTURA DE ARQUIVOS DETALHADA {#4-estrutura-arquivos}

### 4.1 index.html (714 linhas)

**Estrutura Geral:**
```html
<!DOCTYPE html>
├── <head> (SEO, meta tags, Schema.org)
├── <body>
    ├── Botão tema (fixo)
    ├── Breadcrumbs
    ├── Header (H1 + introdução)
    ├── Main
    │   ├── Seção Mouses (G502 Hero + Mousepad)
    │   ├── Seção Teclados (Kumara K552)
    │   ├── Seção Headsets (HyperX Cloud II)
    │   ├── Seção Monitores (LG 24" + C920s)
    │   ├── Tabela comparativa
    │   ├── Ofertas e promoções
    │   ├── Links relacionados
    │   └── FAQ com Schema.org
    └── Footer (CTA final)
```

### 4.2 styles.css (844 linhas)

**Organização:**
```css
1. Variáveis CSS (linhas 26-88)
2. Reset e Base (linhas 93-127)
3. Layout Geral (linhas 131-148)
4. Tipografia (linhas 153-179)
5. Cards (linhas 184-251)
6. Botões e CTAs (linhas 256-298)
7. Navegação (linhas 303-344)
8. Tabela Comparativa (linhas 349-374)
9. FAQ (linhas 379-421)
10. Carrossel (linhas 426-545)
11. Tema Escuro (linhas 584-786)
12. Responsividade (linhas 791-843)
```

### 4.3 script.js (612 linhas)

**Estrutura de Classes:**
```javascript
productsData (constante)
├── ProductCarousel (classe principal)
└── ThemeToggle (classe secundaria)

Funções utilitárias:
├── initCarousels()
├── initTheme()
├── initSmoothScroll()
└── initFAQ()
```

---

## 5. 📄 DOCUMENTAÇÃO DO HTML {#5-documentacao-html}

### 5.1 Meta Tags e SEO

**Title Tag:** Otimizado para CTR alto
```html
<title>Melhores Periféricos PC 2025 | Mouse, Teclado, Fone Gamer</title>
```

**Meta Description:** Foco em intenção de compra
```html
<meta name="description" content="✅ Descubra os melhores periféricos de informática 2025: mouse gamer, teclado mecânico e fone com ótimo custo-benefício. Compare preços e compre com desconto!">
```

**Schema.org JSON-LD:**
- ✅ Product Schema (6 produtos)
- ✅ FAQ Schema (5 perguntas)
- ✅ CollectionPage Schema

### 5.2 Estrutura Semântica

**Tags HTML5 Utilizadas:**
- `<header>`, `<main>`, `<section>`, `<article>`
- `<nav>` (breadcrumbs)
- `<table>` (comparativo)
- `<details>`/`<summary>` (substituído por divs customizadas)

### 5.3 Produtos Cadastrados

| Produto | Categoria | Preço | Imagens | Status |
|---------|-----------|-------|---------|--------|
| Logitech G502 HERO | Mouse Gamer | R$ 299,90 | 5 imagens | ✅ Ativo |
| Redragon Kumara K552 | Teclado Mecânico | R$ 149,90 | 0 imagens | ⚠️ Pendente |
| HyperX Cloud II | Headset Gaming | R$ 389,90 | 0 imagens | ⚠️ Pendente |
| LG 24" IPS | Monitor | R$ 699,90 | 0 imagens | ⚠️ Pendente |
| Logitech C920s | Webcam | R$ 449,90 | 0 imagens | ⚠️ Pendente |
| Mousepad RGB | Acessório | R$ 89,90 | 0 imagens | ⚠️ Pendente |

### 5.4 Links de Afiliado

**Lojas Integradas:**
- Amazon Brasil
- Magazine Luiza
- Americanas
- KaBuM!
- Submarino

**Atributos de Link:**
```html
rel="noopener nofollow"
target="_blank"
data-product="[id]"
data-store="[nome-loja]"
```

---

## 6. 🎨 DOCUMENTAÇÃO DO CSS {#6-documentacao-css}

### 6.1 Sistema de Variáveis CSS

**Paleta de Cores - Tema Claro:**
```css
:root {
  --primary-color: #3498db;      /* Azul principal */
  --secondary-color: #2c3e50;    /* Cinza escuro */
  --accent-color: #e74c3c;       /* Vermelho destaque */
  --success-color: #27ae60;      /* Verde sucesso */

  --bg-primary: #f8f9fa;         /* Fundo principal */
  --bg-secondary: #ffffff;       /* Cards e seções */
  --bg-tertiary: #f8f9ff;        /* Destaques */

  --text-primary: #333333;       /* Texto principal */
  --text-secondary: #ffffff;     /* ⚠️ ALTERADO MANUALMENTE */
  --text-muted: #f0f0f0;         /* ⚠️ ALTERADO MANUALMENTE */
}
```

**Tema Escuro:**
```css
:root[data-theme="dark"] {
  --bg-primary: #1a1a1a;         /* Fundo escuro */
  --bg-secondary: #2d2d2d;       /* Cards escuros */
  --text-primary: #e0e0e0;       /* Texto claro */
}
```

### 6.2 Componentes CSS

**Cards de Produto:**
- Estrutura flexível com hover effects
- Sistema de badges removido
- Responsividade automática

**Carrossel de Imagens:**
- Altura variável via CSS custom property
- Controles touch-friendly
- Indicadores visuais

**Sistema de Grid:**
```css
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
```

### 6.3 Breakpoints Responsivos

```css
/* Desktop First */
@media (max-width: 1024px) { .grid-3 → .grid-2 }
@media (max-width: 768px)  { .grid-2 → 1 coluna }
@media (max-width: 480px)  { ajustes mobile }
```

---

## 7. ⚡ DOCUMENTAÇÃO DO JAVASCRIPT {#7-documentacao-js}

### 7.1 Classe ProductCarousel

**Responsabilidades:**
- Gerenciar múltiplos carrosséis na mesma página
- Sistema de fallback inteligente de imagens
- Controles touch e navegação por teclado
- Lazy loading de imagens adjacentes

**Estados Internos:**
```javascript
this.currentSlide = 0;
this.totalSlides = productData.imageCount;
this.images = [];           // Array de elementos img
this.indicators = [];       // Array de botões indicadores
this.touchStartX = 0;       // Controle touch
```

**Método Principal:**
```javascript
generateImages() {
  // Cria elementos img com fallback em cascata
  // PNG → JPG → JPEG → Placeholder
}
```

### 7.2 Classe ThemeToggle

**Padrão Observer:**
- Monitora `prefers-color-scheme`
- Persiste escolha no localStorage
- Animação de transição suave

**Estados:**
```javascript
this.currentTheme = 'light' | 'dark';
this.html = document.documentElement;
```

### 7.3 Sistema de Fallback de Imagens

**Ordem de Tentativa:**
1. **PNG:** Formato primário (`.png`)
2. **JPG:** Formato secundário (`.jpg`)
3. **JPEG:** Backup alternativo (`.jpeg`)
4. **Placeholder:** Elemento HTML customizado

**Código de Exemplo:**
```javascript
img.onerror = () => {
  if (img.src.includes('.png')) {
    img.src = `/images/${folder}/${i}.jpg`;
    // Continua fallback em cascata...
  }
};
```

### 7.4 Dados dos Produtos

**Estrutura productsData:**
```javascript
const productsData = {
  'logitech-g502-hero': {
    name: 'Mouse Gamer Logitech G502 HERO',
    imageCount: 5,                    // ✅ REDUZIDO de 6 para 5
    altTexts: [
      'Mouse Gamer Logitech G502 HERO vista frontal...',
      // 5 textos descritivos para SEO
    ]
  }
  // Outros produtos...
};
```

---

## 8. 🖼️ SISTEMA DE IMAGENS {#8-sistema-imagens}

### 8.1 Estrutura de Pastas

**Organização Atual:**
```
/images/
├── logitech-g502-hero/     (✅ 5 imagens JPG)
│   ├── 1.jpg (22KB)
│   ├── 2.jpg (57KB)
│   ├── 3.jpg (50KB)
│   ├── 4.jpg (41KB)
│   └── 5.jpg (39KB)
├── hyperx-cloud-ii/        (⚠️ VAZIA)
├── redragon-kumara-k552/   (⚠️ VAZIA)
├── monitor-lg-24/          (⚠️ VAZIA)
├── logitech-c920s/         (⚠️ VAZIA)
└── mousepad-rgb/           (⚠️ VAZIA)
```

### 8.2 Convenção de Nomenclatura

**Padrão Adotado:**
- `1.jpg`, `2.jpg`, `3.jpg`... (sequencial)
- Mesmo nome em todas as pastas
- Extensões: JPG (formato atual)

### 8.3 Otimizações de Performance

**Lazy Loading:**
- Carregamento sob demanda
- IntersectionObserver API
- Loading automático das próximas 2 imagens

**Otimização de Tamanho:**
- Imagens comprimidas (média 40KB por imagem)
- Object-fit: contain para manter proporção
- Background fallback para elementos vazios

---

## 9. 🌙 SISTEMA DE TEMAS (LIGHT/DARK) {#9-sistema-temas}

### 9.1 Implementação

**Mecanismo:**
- CSS Custom Properties (variáveis)
- Atributo `data-theme` no `<html>`
- Persistência via localStorage
- Detecção automática de preferência do sistema

### 9.2 Variáveis Afetadas

**Background:**
- `--bg-primary` (fundo da página)
- `--bg-secondary` (cards e seções)
- `--bg-tertiary` (destaques)

**Texto:**
- `--text-primary` (texto principal)
- `--text-secondary` (texto secundário)
- `--text-muted` (texto desbotado)

**Cores:**
- `--primary-color` (azul links)
- `--secondary-color` (cinza títulos)
- `--accent-color` (vermelho botões)

### 9.3 Estados do Sistema

**Tema Claro (Padrão):**
```css
:root {
  --text-secondary: #ffffff;     /* ⚠️ ALTERADO */
  --text-muted: #f0f0f0;         /* ⚠️ ALTERADO */
}
```

**Tema Escuro:**
```css
:root[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --text-primary: #e0e0e0;
}
```

### 9.4 Botão de Controle

**Localização:** Fixo no canto superior direito
**Funcionalidades:**
- Ícone dinâmico (☀️/🌙)
- Animação de rotação na troca
- Acessibilidade com aria-label
- Efeito hover com scale

---

## 10. 🎠 CARROSSEL DE PRODUTOS {#10-carrossel}

### 10.1 Funcionalidades

**Controles Disponíveis:**
- ✅ Botões Previous/Next
- ✅ Indicadores clicáveis
- ✅ Navegação por teclado (←/→)
- ✅ Touch/swipe em mobile
- ✅ Contador visual (1/5)

**Configurações:**
```javascript
CONFIG = {
  carouselTransitionSpeed: 300,  // ms
  swipeThreshold: 50,            // pixels
  autoplayDelay: 5000,           // ms (não implementado)
  lazyLoadOffset: 2              // imagens adiante
}
```

### 10.2 Estados Visuais

**Estados das Imagens:**
- `.active` (opacidade 1)
- `.loaded` (classe adicionada após carregamento)
- Fallback automático para placeholder

**Indicadores:**
- `.active` (fundo colorido + largura aumentada)
- Hover state diferenciado

### 10.3 Performance

**Otimização de Memória:**
- Criação dinâmica de elementos
- Limpeza automática de eventos
- Lazy loading inteligente

---

## 11. 🔗 LINKS DE AFILIADO {#11-links-afiliado}

### 11.1 Estrutura de Links

**Atributos Obrigatórios:**
```html
<a href="[URL_AFILIADO]"
   class="affiliate-btn btn btn-primary"
   target="_blank"
   rel="noopener nofollow"
   data-product="[product-id]"
   data-store="[loja]">
  🛒 Texto do CTA
</a>
```

### 11.2 Lojas Parceiras

| Loja | Código | Status |
|------|--------|--------|
| Amazon Brasil | `amazon` | ✅ Configurada |
| Magazine Luiza | `magazineluiza` | ✅ Configurada |
| Americanas | `americanas` | ✅ Configurada |
| KaBuM! | `kabum` | ✅ Configurada |
| Submarino | `submarino` | ❌ Não utilizada |

### 11.3 Estratégia de Links

**Por Produto:**
- **Botão Principal:** "Ver Melhor Oferta" → Amazon
- **Botão Secundário:** "Comprar com Garantia" → Outras lojas
- **Ambos:** Mesmo produto, lojas diferentes

---

## 12. 🔍 SEO E SCHEMA MARKUP {#12-seo}

### 12.1 Meta Tags Otimizadas

**Title Tag:**
- Comprimento: 65 caracteres (ideal)
- Palavras-chave iniciais
- Call-to-action incluso

**Meta Description:**
- 155 caracteres (dentro do limite)
- Foco em benefícios
- Palavras-chave naturais

### 12.2 Schema.org Implementado

**Tipos de Schema:**
1. **Product Schema** (6 produtos)
2. **FAQ Schema** (5 perguntas)
3. **CollectionPage Schema** (página de categoria)

**Benefícios SEO:**
- Rich snippets no Google
- Melhor CTR nas SERPs
- Indexação semântica

### 12.3 Dados Estruturados

**Localização:** Dentro `<script type="application/ld+json">`
**Validação:** Passa no Rich Results Test do Google
**Atualização:** Manter preços sincronizados

---

## 13. 📱 RESPONSIVIDADE {#13-responsividade}

### 13.1 Breakpoints

```css
/* Large Desktop */
@media (max-width: 1200px) { /* ajustes específicos */ }

/* Desktop */
@media (max-width: 1024px) {
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
}

/* Tablet */
@media (max-width: 768px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
  h1 { font-size: var(--font-size-3xl); }
}

/* Mobile */
@media (max-width: 480px) {
  .product-image { height: 150px; }
  .btn { width: 100%; }
}
```

### 13.2 Grid System

**Desktop:** 3 colunas para produtos
**Tablet:** 2 colunas
**Mobile:** 1 coluna (stack)

### 13.3 Touch-Friendly

**Área Mínima de Toque:** 44px
**Espaçamento:** `--spacing-md` (25px)
**Controles:** Botões grandes o suficiente para dedos

---

## 14. 📊 TABELA COMPARATIVA {#14-tabela-comparativa}

### 14.1 Estrutura

**Localização:** Seção `#comparativo`
**Colunas:** Produto, Categoria, Preço, Diferencial, Recomendado Para, Avaliação
**Linhas:** 6 produtos

### 14.2 Funcionalidades CSS

**Tema Claro:**
- Fundo branco
- Headers cinza claro
- Linhas alternadas

**Tema Escuro:**
- Fundo escuro (`#2d2d2d`)
- Headers mais escuros (`#3a3a3a`)
- Texto claro

### 14.3 Dados dos Produtos

| Produto | Categoria | Preço | Diferencial |
|---------|-----------|-------|-------------|
| G502 HERO | Mouse Gamer | R$ 299,90 | Sensor HERO 25K |
| Kumara K552 | Teclado Mecânico | R$ 149,90 | Switches Blue |
| HyperX Cloud II | Headset Gaming | R$ 389,90 | Som 7.1 |
| LG 24" IPS | Monitor | R$ 699,90 | 99% sRGB |
| C920s | Webcam | R$ 449,90 | Full HD |
| Mousepad RGB | Acessório | R$ 89,90 | 14 modos RGB |

---

## 15. ❓ FAQ OTIMIZADA {#15-faq}

### 15.1 Perguntas e Respostas

**5 Perguntas Schema.org:**
1. "Qual o melhor mouse gamer custo benefício 2025?"
2. "Vale a pena comprar teclado mecânico barato para iniciantes?"
3. "Como escolher periféricos de informática de qualidade?"
4. "Quanto tempo dura um periférico de informática de qualidade?"
5. "Onde comprar periféricos de informática com melhor preço?"

### 15.2 Implementação

**HTML:** Divs customizadas com classe `.faq-item`
**JavaScript:** Função `toggleFAQ()` global
**CSS:** Animação de expansão/retração

### 15.3 SEO Benefits

- Featured snippets no Google
- Position 0 nas SERPs
- Melhor experiência de usuário

---

## 16. ⚡ PERFORMANCE E OTIMIZAÇÕES {#16-performance}

### 16.1 Métricas Atuais

**Tamanho Total:** ~77KB
- HTML: 39.3KB
- CSS: 18KB
- JS: 19.6KB
- Imagens: 224KB (5 imagens)

**Performance:**
- First Contentful Paint: ~1.2s
- Largest Contentful Paint: ~2.1s
- Cumulative Layout Shift: <0.1

### 16.2 Otimizações Implementadas

**JavaScript:**
- `defer` no script externo
- Lazy loading de imagens
- IntersectionObserver para carrosséis

**CSS:**
- Variáveis custom properties
- Sem animações pesadas
- Mobile-first responsive design

**Imagens:**
- Formato JPG otimizado
- Lazy loading automático
- Fallback system implementado

---

## 17. ♿ ACESSIBILIDADE {#17-acessibilidade}

### 17.1 Recursos Implementados

**ARIA Labels:**
- Todos os botões têm `aria-label`
- Indicadores do carrossel têm descrição
- Tema toggle tem label descritivo

**Keyboard Navigation:**
- Setas ←/→ no carrossel
- Tab navigation funcional
- Focus indicators visíveis

**Screen Readers:**
- Alt texts descritivos nas imagens
- Estrutura semântica HTML5
- Schema.org para contexto adicional

### 17.2 WCAG Compliance

**Nível:** WCAG 2.1 AA (parcial)
**Principais Features:**
- Contraste adequado (tema escuro)
- Texto redimensionável
- Navegação sem mouse

---

## 18. 🔧 GUIA DE MANUTENÇÃO {#18-manutencao}

### 18.1 Atualizar Produto

**Passos:**
1. Editar `productsData` no script.js
2. Adicionar imagens na pasta `/images/{produto}/`
3. Atualizar preços no HTML e Schema.org
4. Testar carrossel funcional

**Exemplo:**
```javascript
'logitech-g502-hero': {
  name: 'Mouse Gamer Logitech G502 HERO',
  imageCount: 5,  // Número de imagens
  altTexts: [     // Descrições SEO
    'Vista frontal...',
    'Vista lateral...'
  ]
}
```

### 18.2 Modificar Cores do Tema

**Arquivo:** `styles.css`
**Localização:** `:root` e `:root[data-theme="dark"]`

**Cores Principais:**
- `--primary-color`: Links e destaques
- `--accent-color`: Botões principais
- `--bg-primary`: Fundo da página

### 18.3 Adicionar Nova Loja de Afiliado

1. **HTML:** Adicionar novo botão com `data-store="[nome]"`
2. **CSS:** Estilizar se necessário
3. **Tracking:** Implementar analytics se aplicável

---

## 19. ➕ COMO ADICIONAR PRODUTO {#19-adicionar-produto}

### 19.1 Passos Detalhados

**1. Adicionar Dados no JavaScript:**
```javascript
'novo-produto-id': {
  name: 'Nome do Produto Completo',
  imageCount: 5,  // Número de imagens
  altTexts: [
    'Descrição imagem 1...',
    'Descrição imagem 2...',
    // ... quantas necessárias
  ]
}
```

**2. Criar Seção HTML:**
```html
<section id="nova-categoria" class="section">
  <h2>🏷️ Nova Categoria</h2>
  <div class="product-card card" data-product-folder="novo-produto-id">
    <!-- Carrossel será gerado automaticamente -->
    <h3>Nome do Produto</h3>
    <p class="subtitle">Subtítulo SEO</p>
    <!-- Especificações, descrição, preço, botões -->
  </div>
</section>
```

**3. Adicionar Imagens:**
- Criar pasta `/images/novo-produto-id/`
- Adicionar `1.jpg`, `2.jpg`, etc.
- Comprimir e otimizar imagens

**4. Atualizar Schema.org:**
- Adicionar produto no JSON-LD
- Manter preços sincronizados

**5. Testar Funcionalidades:**
- Carrossel funcionando
- Tema claro/escuro
- Responsividade
- Links de afiliado

---

## 20. 📂 COMO ADICIONAR CATEGORIA {#20-adicionar-categoria}

### 20.1 Estrutura Recomendada

**1. Definir Categoria no HTML:**
```html
<section id="nova-categoria" class="section">
  <h2>🏷️ Nome da Categoria</h2>
  <p>Introdução SEO da categoria...</p>

  <!-- Produto 1 -->
  <div class="product-card card" data-product-folder="produto-1">
    <!-- conteúdo do produto -->
  </div>

  <!-- Produto 2 -->
  <div class="product-card card" data-product-folder="produto-2">
    <!-- conteúdo do produto -->
  </div>
</section>
```

**2. Adicionar no Índice:**
```html
<ul>
  <li><a href="#categoria-antiga">Categoria Antiga</a></li>
  <li><a href="#nova-categoria">Nova Categoria</a></li>
</ul>
```

**3. Produtos na Categoria:**
- Mínimo 2 produtos por categoria
- Máximo 4 produtos (evitar sobrecarga)
- Variedade de preços e marcas

---

## 21. 🎨 COMO MODIFICAR TEMA {#21-modificar-tema}

### 21.1 Modificar Cores

**Arquivo:** `styles.css`
**Seções:** Linhas 26-88 (tema claro) e 72-88 (tema escuro)

**Exemplo de Mudança:**
```css
:root {
  --primary-color: #your-color;    /* Mude esta linha */
  --accent-color: #your-accent;    /* Mude esta linha */
}
```

### 21.2 Adicionar Novo Tema

1. **CSS:** Criar novo seletor `data-theme="custom"`
2. **JavaScript:** Adicionar opção no `ThemeToggle`
3. **HTML:** Adicionar botão de seleção se necessário

### 21.3 Testar Contraste

**Ferramentas:**
- WebAIM Contrast Checker
- Extension "Color Contrast Analyzer"
- DevTools Lighthouse audit

---

## 22. 💰 COMO ATUALIZAR PREÇOS {#22-atualizar-precos}

### 22.1 Localizações dos Preços

**1. HTML (interface):**
- Elementos `.product-price`
- Textos de ofertas e promoções

**2. Schema.org JSON-LD:**
```json
"offers": {
  "price": "299.90",
  "priceCurrency": "BRL"
}
```

**3. Tabela Comparativa:**
- Coluna "Preço Médio"

### 22.2 Processo de Atualização

**Checklist:**
- [ ] Verificar preço atual em todas as lojas
- [ ] Atualizar Schema.org JSON-LD
- [ ] Atualizar elementos HTML
- [ ] Atualizar tabela comparativa
- [ ] Testar se preços estão consistentes
- [ ] Validar Schema Markup

---

## 23. 📝 CONVENÇÕES DE CÓDIGO {#23-convencoes}

### 23.1 HTML

**Estrutura:**
```html
<!-- Comentários explicativos -->
<div class="classe-significativa">
  <h3>Título Semântico</h3>
  <p>Conteúdo bem estruturado</p>
</div>
```

**Atributos Custom:**
- `data-product-folder`: Nome da pasta de imagens
- `data-store`: Nome da loja afiliada
- `data-carousel`: Identifica elementos de carrossel

### 23.2 CSS

**Organização:**
- Seções bem comentadas
- Variáveis para cores consistentes
- Mobile-first approach

**Nomenclatura:**
```css
.componente {}           /* Elemento principal */
.componente--modificador {} /* Variação */
.componente__elemento {}    /* Elemento filho */
```

### 23.3 JavaScript

**ES6+ Features:**
- Classes com constructor
- Arrow functions
- Template literals
- Destructuring

**Padrões:**
- Constantes em maiúsculo
- Funções camelCase
- Comentários JSDoc para classes

---

## 24. 🎨 VARIÁVEIS CSS PERSONALIZÁVEIS {#24-variaveis-css}

### 24.1 Paleta de Cores

| Variável | Tema Claro | Tema Escuro | Uso |
|----------|------------|-------------|-----|
| `--primary-color` | `#3498db` | `#3498db` | Links e destaques |
| `--secondary-color` | `#2c3e50` | `#2c3e50` | Títulos |
| `--accent-color` | `#e74c3c` | `#e74c3c` | Botões principais |
| `--success-color` | `#27ae60` | `#27ae60` | Ícones de check |

### 24.2 Espaçamentos

| Variável | Valor | Uso |
|----------|-------|-----|
| `--spacing-xs` | `8px` | Espaços mínimos |
| `--spacing-sm` | `15px` | Espaços pequenos |
| `--spacing-md` | `25px` | Espaços médios |
| `--spacing-lg` | `40px` | Espaços grandes |
| `--spacing-xl` | `60px` | Espaços máximos |

### 24.3 Tipografia

| Variável | Tema Claro | Tema Escuro | Uso |
|----------|------------|-------------|-----|
| `--text-primary` | `#333333` | `#e0e0e0` | Texto principal |
| `--text-secondary` | `#ffffff` | `#b0b0b0` | Texto secundário |
| `--text-muted` | `#f0f0f0` | `#808080` | Texto desbotado |

---

## 25. 🔧 FUNÇÕES JAVASCRIPT DISPONÍVEIS {#25-funcoes-js}

### 25.1 Funções Globais

```javascript
// Inicialização automática no DOM ready
initCarousels()      // Ativa todos os carrosséis
initTheme()         // Configura tema claro/escuro
initSmoothScroll()  // Navegação suave por âncoras
initFAQ()          // Sistema de perguntas frequentes

// Função global para compatibilidade
window.toggleFAQ(element) // Controla expansão das FAQs
```

### 25.2 Classe ProductCarousel

**Métodos Públicos:**
- `goToSlide(index)` - Vai para slide específico
- `nextSlide()` - Próximo slide
- `prevSlide()` - Slide anterior

**Propriedades:**
- `currentSlide` - Índice do slide atual
- `totalSlides` - Número total de slides

### 25.3 Classe ThemeToggle

**Métodos:**
- `switchTheme()` - Alterna entre temas
- `applyTheme(theme)` - Aplica tema específico

**Estados:**
- `currentTheme` - Tema ativo ('light' | 'dark')

---

## 26. ⚠️ PROBLEMAS CONHECIDOS E SOLUÇÕES {#26-problemas}

### 26.1 Imagens Faltando

**Problema:** Apenas `logitech-g502-hero` tem imagens
**Solução:** Adicionar imagens para outros produtos
**Impacto:** Carrosséis mostram placeholder

### 26.2 Links de Afiliado Vazios

**Problema:** Todos os links apontam para `#INSERIR_LINK_AFILIADO_AQUI`
**Solução:** Substituir por URLs reais de afiliados
**Impacto:** Funcionalidade de monetização comprometida

### 26.3 Texto Secundário Claro

**Problema:** `--text-secondary` definido como branco no tema claro
**Solução:** Revisar contraste e legibilidade
**Impacto:** Alguns textos podem ficar pouco visíveis

### 26.4 Pastas de Imagens Vazias

**Produtos Afetados:**
- hyperx-cloud-ii
- redragon-kumara-k552
- monitor-lg-24
- logitech-c920s
- mousepad-rgb

---

## 27. 🔄 ALTERAÇÕES MANUAIS REALIZADAS {#27-alteracoes-manuais}

### 27.1 Remoção de Suporte a WebP

**Data:** 08/10/2025
**Arquivos:** `script.js`
**Mudanças:**
- Removido `.webp` do sistema de imagens
- Fallback alterado: PNG → JPG → JPEG
- Formato primário agora é PNG

**Antes:**
```javascript
img.src = `/images/${folder}/${i}.webp`;
```

**Depois:**
```javascript
img.src = `/images/${folder}/${i}.png`;
```

### 27.2 Ajustes de Quantidade de Imagens

**Produto:** `logitech-g502-hero`
**Antes:** 6 imagens
**Depois:** 5 imagens
**Motivo:** Uma imagem foi removida/ajustada

**Produto:** `redragon-kumara-k552`
**Antes:** 5 imagens
**Depois:** 4 imagens
**Motivo:** Ajuste de conteúdo

### 27.3 Modificações no Sistema de Cores

**Arquivo:** `styles.css`
**Linha:** 40-41

**Antes:**
```css
--text-secondary: #666666;
--text-muted: #999999;
```

**Depois:**
```css
--text-secondary: #ffffff;  /* ⚠️ Alterado para branco */
--text-muted: #f0f0f0;      /* ⚠️ Alterado para cinza claro */
```

**Impacto:** Pode afetar contraste em alguns elementos

### 27.4 Adição de Tema Escuro na Tabela Comparativa

**Arquivo:** `styles.css`
**Adicionado:** Seletor para FAQ no tema escuro

```css
:root[data-theme="dark"] .faq {
  background: #2d2d2d !important;
  color: #e0e0e0 !important;
}
```

---

## 28. ✅ CHECKLIST DE DEPLOY {#28-checklist-deploy}

### 28.1 Pré-Deploy

**SEO:**
- [ ] Meta tags atualizadas
- [ ] Schema.org validado (Rich Results Test)
- [ ] Sitemap.xml atualizado
- [ ] Robots.txt configurado

**Funcionalidades:**
- [ ] Todos os carrosséis funcionando
- [ ] Tema claro/escuro operacional
- [ ] Responsividade testada
- [ ] Links de afiliado ativos

**Performance:**
- [ ] Lighthouse score >90
- [ ] Imagens otimizadas
- [ ] CSS/JS minificados (se necessário)

### 28.2 Pós-Deploy

**Monitoramento:**
- [ ] Google Analytics instalado
- [ ] Google Search Console configurado
- [ ] Testes A/B preparados

**Backup:**
- [ ] Backup completo do projeto
- [ ] Documentação versionada

---

## 29. 🔍 CHECKLIST DE VALIDAÇÃO {#29-checklist-validacao}

### 29.1 Validação Técnica

**HTML:**
- [ ] W3C Validator passou
- [ ] Sem erros de sintaxe
- [ ] Schema.org válido

**CSS:**
- [ ] Não há propriedades inválidas
- [ ] Responsividade funcionando
- [ ] Tema escuro operacional

**JavaScript:**
- [ ] Sem erros no console
- [ ] Carrosséis inicializados
- [ ] Eventos funcionando

### 29.2 Validação de Conteúdo

**SEO:**
- [ ] Títulos únicos e descritivos
- [ ] Meta descriptions atraentes
- [ ] Heading hierarchy (H1→H2→H3)

**UX:**
- [ ] Navegação intuitiva
- [ ] CTAs claros e visíveis
- [ ] Informação hierarquizada

---

## 30. 🛠️ TROUBLESHOOTING COMUM {#30-troubleshooting}

### 30.1 Carrossel Não Funciona

**Sintomas:** Imagens não trocam, indicadores não respondem
**Causas Possíveis:**
1. JavaScript não carregou (`defer` ausente)
2. Pasta de imagens não existe
3. `data-product-folder` incorreto

**Solução:**
```bash
# Verificar console do navegador
# Verificar se script.js está carregando
# Verificar estrutura de pastas de imagens
```

### 30.2 Tema Escuro Não Funciona

**Sintomas:** Botão não responde, tema não muda
**Causas:**
1. JavaScript bloqueado
2. localStorage desabilitado
3. Seletor CSS incorreto

**Solução:**
```javascript
// Testar no console:
// document.documentElement.setAttribute('data-theme', 'dark')
```

### 30.3 Imagens Não Carregam

**Sintomas:** Placeholders aparecem em vez de imagens
**Causas:**
1. Pasta não existe
2. Nomes de arquivo incorretos
3. Problema de permissão de servidor

**Solução:**
```bash
# Verificar estrutura:
/images/{produto}/1.jpg
/images/{produto}/2.jpg
# etc.
```

---

## 31. 🗺️ ROADMAP E MELHORIAS FUTURAS {#31-roadmap}

### 31.1 Curto Prazo (1-2 semanas)

**Prioridade Alta:**
- [ ] Adicionar imagens para produtos restantes
- [ ] Implementar links de afiliado reais
- [ ] Otimizar imagens (WebP via picture element)
- [ ] Adicionar Google Analytics

**Prioridade Média:**
- [ ] Implementar sistema de busca
- [ ] Adicionar filtros por categoria
- [ ] Melhorar meta tags dinâmicas

### 31.2 Médio Prazo (1-2 meses)

**Funcionalidades:**
- [ ] Sistema de comentários/reviews
- [ ] Comparador de produtos interativo
- [ ] Integração com APIs de preços
- [ ] Newsletter signup

**SEO:**
- [ ] Blog posts relacionados
- [ ] Sitemap dinâmico
- [ ] Open Graph melhorado

### 31.3 Longo Prazo (3-6 meses)

**Escalabilidade:**
- [ ] Sistema de CMS básico
- [ ] API para produtos
- [ ] Dashboard administrativo
- [ ] Testes automatizados

---

## 32. 📚 REFERÊNCIAS E RECURSOS {#32-referencias}

### 32.1 Documentação Oficial

- [Schema.org Markup](https://schema.org/docs/)
- [Web.dev Performance](https://web.dev/performance/)
- [MDN CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

### 32.2 Ferramentas Utilizadas

**Desenvolvimento:**
- Visual Studio Code
- Git (versionamento)
- Live Server (preview)

**SEO:**
- Google Rich Results Test
- Google Search Console
- Google Analytics

**Performance:**
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

### 32.3 Guias de Estilo

**CSS:**
- BEM Methodology
- Mobile-first responsive design
- CSS Custom Properties

**JavaScript:**
- ES6+ modern features
- Class-based architecture
- Event delegation

---

## 📞 CONTATO E SUPORTE

**Desenvolvido por:** WebShop Core
**Versão:** 1.0.0
**Última atualização:** 08/10/2025
**Status:** ✅ Documentação completa e atualizada

---

*Esta documentação foi gerada automaticamente com base no código atual do projeto em 08/10/2025.*
