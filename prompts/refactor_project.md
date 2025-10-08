Você é um desenvolvedor web sênior especializado em refatoração e organização de código. Tenho um site de afiliados da categoria "PERIFÉRICOS ESSENCIAIS" que está **totalmente funcional** em um único arquivo HTML com CSS e JavaScript inline.

## OBJETIVO

Separar o projeto em **três arquivos independentes** mantendo 100% da funcionalidade:
- index.html  - Estrutura e conteúdo
- styles.css  - Todos os estilos
- script.js  - Toda a lógica JavaScript

## CONTEXTO DO PROJETO ATUAL

O arquivo HTML único contém:
- ✅ HTML semântico completo
- ✅ CSS inline dentro de <style>  tags
- ✅ JavaScript inline dentro de <script>  tags
- ✅ Carrossel de imagens funcionando
- ✅ Sistema de tema claro/escuro
- ✅ Links de afiliado configurados
- ✅ Schema markup JSON-LD
- ✅ Design responsivo

**TUDO JÁ ESTÁ FUNCIONANDO PERFEITAMENTE!**

## REQUISITOS DA SEPARAÇÃO

### 1. Estrutura de Arquivos Final
/seu-projeto/ ├── index.html (HTML limpo, apenas estrutura) ├── styles.css (TODO o CSS) ├── script.js (TODO o JavaScript) └── /images/ (pasta de imagens - manter como está) ├── /logitech-g502-hero/ ├── /redragon-kumara-k552/ ├── /hyperx-cloud-ii/ ├── /monitor-lg-24/ ├── /logitech-c920s/ └── /mousepad-rgb/

### 2. Arquivo: index.html

**O que DEVE conter:**
```html
<!DOCTYPE html>
<html lang="pt-BR" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Melhores Periféricos PC 2025 | Mouse, Teclado, Fone Gamer</title>
    <meta name="description" content="...">
    <meta name="keywords" content="...">
    
    <!-- Schema Markup - MANTER no HTML -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      ...
    }
    </script>
    
    <!-- Link para CSS Externo -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    
    <!-- Todo o conteúdo HTML aqui -->
    <!-- Breadcrumbs, Header, Produtos, FAQ, etc. -->
    
    <!-- Link para JavaScript Externo -->
    <script src="script.js"></script>
</body>
</html>
O que REMOVER do HTML:
html
❌ <style> ... </style> (mover para styles.css)
❌ <script> ... </script> com JavaScript (mover para script.js)
✅ MANTER: Schema markup JSON-LD (pode ficar no HTML)
Organização do HTML:
html
<!-- Adicionar comentários organizacionais -->

<!-- ========================================
     SEÇÃO: HEADER E NAVEGAÇÃO
     ======================================== -->
<nav class="breadcrumbs">...</nav>
<header class="main-header">...</header>

<!-- ========================================
     SEÇÃO: INTRODUÇÃO E ÍNDICE
     ======================================== -->
<section class="intro-section">...</section>
<nav class="table-contents">...</nav>

<!-- ========================================
     SEÇÃO: PRODUTOS - MOUSES GAMER
     ======================================== -->
<section id="mouses-gamer" class="category-section">...</section>

<!-- E assim por diante... -->
3. Arquivo: styles.css
Estrutura e Organização:
css
/* ============================================
   PERIFÉRICOS ESSENCIAIS - STYLESHEET
   Site de Afiliados com Tema Claro/Escuro
   ============================================ */

/* ========================================
   SUMÁRIO:
   1. Variáveis CSS
   2. Reset e Base
   3. Layout Geral
   4. Header e Navegação
   5. Seções de Conteúdo
   6. Cards de Produtos
   7. Carrossel de Imagens
   8. Botões e CTAs
   9. Tabela Comparativa
   10. FAQ
   11. Tema Escuro (Dark Mode)
   12. Responsividade Mobile
   13. Animações e Transições
   ======================================== */

/* ========================================
   1. VARIÁVEIS CSS
   ======================================== */
:root {
    /* Cores - Tema Claro */
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --accent-color: #e74c3c;
    --success-color: #27ae60;
    
    /* Backgrounds */
    --bg-primary: #f8f9fa;
    --bg-secondary: #ffffff;
    --bg-tertiary: #f8f9ff;
    
    /* Textos */
    --text-primary: #333333;
    --text-secondary: #666666;
    --text-muted: #999999;
    
    /* Bordas e Sombras */
    --border-color: #e0e0e0;
    --shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
    --shadow-md: 0 5px 15px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 30px rgba(0,0,0,0.15);
    
    /* Espaçamentos */
    --spacing-xs: 8px;
    --spacing-sm: 15px;
    --spacing-md: 25px;
    --spacing-lg: 40px;
    --spacing-xl: 60px;
    
    /* Border Radius */
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 15px;
    --radius-xl: 20px;
    
    /* Transições */
    --transition-fast: 0.2s ease;
    --transition-base: 0.3s ease;
    --transition-slow: 0.5s ease;
    
    /* Carrossel */
    --carousel-height: 280px;
}

/* Variáveis - Tema Escuro */
:root[data-theme="dark"] {
    /* Backgrounds */
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --bg-tertiary: #3a3a3a;
    
    /* Textos */
    --text-primary: #e0e0e0;
    --text-secondary: #b0b0b0;
    --text-muted: #808080;
    
    /* Bordas e Sombras */
    --border-color: #404040;
    --shadow-sm: 0 2px 8px rgba(0,0,0,0.3);
    --shadow-md: 0 5px 15px rgba(0,0,0,0.4);
    --shadow-lg: 0 10px 30px rgba(0,0,0,0.5);
}

/* ========================================
   2. RESET E BASE
   ======================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background: var(--bg-primary);
    transition: background-color var(--transition-base), 
                color var(--transition-base);
}

/* ... resto do CSS ... */

/* ========================================
   11. TEMA ESCURO (DARK MODE)
   ======================================== */

/* Botão Toggle de Tema */
.theme-toggle-btn {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    /* ... estilos completos ... */
}

/* Ajustes específicos do tema escuro */
:root[data-theme="dark"] .product-card {
    background: var(--bg-secondary);
    border-color: var(--border-color);
}

/* ... mais ajustes de tema escuro ... */

/* ========================================
   12. RESPONSIVIDADE MOBILE
   ======================================== */
@media (max-width: 768px) {
    .container {
        padding: 15px;
    }
    
    .products-grid {
        grid-template-columns: 1fr;
    }
    
    /* ... mais ajustes mobile ... */
}
Organização do CSS:
1. Usar comentários de seção claros
2. Agrupar estilos relacionados
3. Seguir ordem: variáveis → base → componentes → tema → responsive
4. Manter especificidade baixa quando possível
5. Usar variáveis CSS para valores repetidos
6. Comentar seções complexas
4. Arquivo: script.js
Estrutura e Organização:
javascript
/**
 * ============================================
 * PERIFÉRICOS ESSENCIAIS - JAVASCRIPT
 * Site de Afiliados com Carrossel e Dark Mode
 * ============================================
 */

/**
 * SUMÁRIO:
 * 1. Configuração e Constantes
 * 2. Classe ProductCarousel
 * 3. Classe ThemeToggle
 * 4. Funções Utilitárias
 * 5. Inicialização
 */

'use strict';

// ============================================
// 1. CONFIGURAÇÃO E CONSTANTES
// ============================================

const CONFIG = {
    carouselTransitionSpeed: 300,
    swipeThreshold: 50,
    autoplayDelay: 5000,
    lazyLoadOffset: 2
};

const SELECTORS = {
    carousel: '[data-carousel]',
    themeToggle: '#theme-toggle',
    productCard: '.product-card'
};


// ============================================
// 2. CLASSE: ProductCarousel
// ============================================

/**
 * Gerencia carrossel de imagens dos produtos
 * @class ProductCarousel
 */
class ProductCarousel {
    /**
     * @param {HTMLElement} carouselElement - Elemento DOM do carrossel
     */
    constructor(carouselElement) {
        this.carousel = carouselElement;
        this.track = this.carousel.querySelector('.carousel-track');
        this.images = Array.from(this.carousel.querySelectorAll('.carousel-image'));
        this.prevBtn = this.carousel.querySelector('.carousel-btn.prev');
        this.nextBtn = this.carousel.querySelector('.carousel-btn.next');
        this.indicators = Array.from(this.carousel.querySelectorAll('.indicator'));
        
        this.currentSlide = 0;
        this.totalSlides = this.images.length;
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.isDragging = false;
        
        this.init();
    }
    
    /**
     * Inicializa eventos e configurações
     */
    init() {
        this.setupEventListeners();
        this.lazyLoadAdjacentImages();
        this.updateCounter();
    }
    
    /**
     * Configura todos os event listeners
     */
    setupEventListeners() {
        // Navegação por botões
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Indicadores
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Touch events (mobile)
        this.carousel.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
        this.carousel.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: true });
        this.carousel.addEventListener('touchend', () => this.handleTouchEnd());
        
        // Keyboard navigation
        this.carousel.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }
    
    /**
     * Vai para um slide específico
     * @param {number} index - Índice do slide
     */
    goToSlide(index) {
        // Remover classe active do slide atual
        this.images[this.currentSlide]?.classList.remove('active');
        this.indicators[this.currentSlide]?.classList.remove('active');
        
        // Atualizar índice
        this.currentSlide = index;
        
        // Adicionar classe active ao novo slide
        this.images[this.currentSlide]?.classList.add('active');
        this.indicators[this.currentSlide]?.classList.add('active');
        
        // Atualizar contador e lazy load
        this.updateCounter();
        this.lazyLoadAdjacentImages();
    }
    
    /**
     * Avança para o próximo slide
     */
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }
    
    /**
     * Volta para o slide anterior
     */
    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prevIndex);
    }
    
    /**
     * Início do toque (mobile)
     */
    handleTouchStart(e) {
        this.touchStartX = e.changedTouches[0].screenX;
        this.isDragging = true;
    }
    
    /**
     * Movimento do toque (mobile)
     */
    handleTouchMove(e) {
        if (!this.isDragging) return;
        this.touchEndX = e.changedTouches[0].screenX;
    }
    
    /**
     * Fim do toque (mobile)
     */
    handleTouchEnd() {
        if (!this.isDragging) return;
        this.isDragging = false;
        
        const diff = this.touchStartX - this.touchEndX;
        
        if (Math.abs(diff) > CONFIG.swipeThreshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
        
        this.touchStartX = 0;
        this.touchEndX = 0;
    }
    
    /**
     * Navegação por teclado
     */
    handleKeyboard(e) {
        if (e.key === 'ArrowLeft') this.prevSlide();
        if (e.key === 'ArrowRight') this.nextSlide();
    }
    
    /**
     * Atualiza contador visual
     */
    updateCounter() {
        const counter = this.carousel.querySelector('.carousel-counter');
        if (counter) {
            counter.querySelector('.current').textContent = this.currentSlide + 1;
            counter.querySelector('.total').textContent = this.totalSlides;
        }
    }
    
    /**
     * Lazy loading de imagens adjacentes
     */
    lazyLoadAdjacentImages() {
        const toLoad = [
            this.currentSlide,
            (this.currentSlide + 1) % this.totalSlides,
            (this.currentSlide + 2) % this.totalSlides
        ];
        
        toLoad.forEach(index => {
            const img = this.images[index];
            if (img?.dataset.src && !img.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
        });
    }
}


// ============================================
// 3. CLASSE: ThemeToggle
// ============================================

/**
 * Gerencia alternância entre tema claro e escuro
 * @class ThemeToggle
 */
class ThemeToggle {
    constructor() {
        this.html = document.documentElement;
        this.toggle = document.getElementById('theme-toggle');
        this.currentTheme = this.getTheme();
        
        this.init();
    }
    
    /**
     * Inicializa tema e eventos
     */
    init() {
        if (!this.toggle) {
            console.error('Botão de tema não encontrado');
            return;
        }
        
        this.applyTheme(this.currentTheme);
        this.toggle.addEventListener('click', () => this.switchTheme());
        
        // Listener para mudanças na preferência do sistema
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
    
    /**
     * Obtém tema salvo ou preferência do sistema
     */
    getTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    /**
     * Aplica tema
     */
    applyTheme(theme) {
        this.html.setAttribute('data-theme', theme);
        this.updateIcon(theme);
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }
    
    /**
     * Alterna entre temas
     */
    switchTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.toggle.classList.add('switching');
        
        setTimeout(() => {
            this.applyTheme(newTheme);
            this.toggle.classList.remove('switching');
        }, 150);
    }
    
    /**
     * Atualiza ícone do botão
     */
    updateIcon(theme) {
        this.toggle.innerHTML = theme === 'dark' ? '🌙' : '☀️';
        this.toggle.setAttribute('aria-label', 
            Mudar para tema ${theme === 'dark' ? 'claro' : 'escuro'} 
        );
    }
}


// ============================================
// 4. FUNÇÕES UTILITÁRIAS
// ============================================

/**
 * Inicializa todos os carrosséis da página
 */
function initCarousels() {
    const carousels = document.querySelectorAll(SELECTORS.carousel);
    
    if (carousels.length === 0) {
        console.warn('Nenhum carrossel encontrado');
        return;
    }
    
    carousels.forEach(carousel => {
        try {
            new ProductCarousel(carousel);
        } catch (error) {
            console.error('Erro ao inicializar carrossel:', error);
        }
    });
    
    console.log(✅ ${carousels.length} carrossel(is) inicializado(s) com sucesso! );
}

/**
 * Inicializa sistema de tema
 */
function initTheme() {
    try {
        new ThemeToggle();
        console.log('✅ Sistema de tema inicializado!');
    } catch (error) {
        console.error('Erro ao inicializar tema:', error);
    }
}

/**
 * Smooth scroll para âncoras internas
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}


// ============================================
// 5. INICIALIZAÇÃO
// ============================================

/**
 * Inicializa todas as funcionalidades quando DOM estiver pronto
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando site...');
    
    initCarousels();
    initTheme();
    initSmoothScroll();
    
    console.log('✅ Site inicializado com sucesso!');
});

/**
 * Tratamento de erros globais
 */
window.addEventListener('error', function(e) {
    console.error('Erro global capturado:', e.error);
});
5. Checklist de Validação
Após separar os arquivos, validar:
✅ FUNCIONALIDADE:
   [ ] Carrosséis funcionando (navegação, swipe, indicadores)
   [ ] Tema claro/escuro alternando corretamente
   [ ] Tema sendo salvo no localStorage
   [ ] Links de afiliado funcionando
   [ ] Smooth scroll para âncoras
   [ ] Hover effects funcionando
   [ ] Responsividade mobile mantida

✅ ARQUIVOS:
   [ ] index.html sem <style> ou <script> inline
   [ ] styles.css com TODO o CSS
   [ ] script.js com TODO o JavaScript
   [ ] Links relativos corretos (./styles.css, ./script.js)
   [ ] Imagens carregando corretamente

✅ CONSOLE:
   [ ] Sem erros no console do navegador
   [ ] Mensagens de log aparecendo corretamente
   [ ] CSS carregando (verificar em Network)
   [ ] JS carregando (verificar em Network)

✅ ORGANIZAÇÃO:
   [ ] Código comentado e organizado
   [ ] Seções bem definidas
   [ ] Nomes de variáveis/funções descritivos
   [ ] Código formatado consistentemente
O QUE VOCÊ DEVE ME ENTREGAR
Formato de Entrega:
ARQUIVO 1: index.html
html
<!-- Entregar HTML limpo, sem CSS/JS inline -->
ARQUIVO 2: styles.css
css
/* Entregar TODO o CSS organizado em seções */
ARQUIVO 3: script.js
javascript
// Entregar TODO o JavaScript organizado em classes/funções
ARQUIVO 4: INSTRUÇÕES.md
markdown
# Como Usar os Arquivos

## Estrutura:
- Explicar estrutura de pastas
- Como adicionar novos produtos
- Como modificar cores/temas
- Como adicionar novas categorias

## Manutenção:
- Onde modificar estilos
- Onde adicionar funcionalidades JS
- Como testar alterações
Requisitos Críticos:
✅ ZERO quebra de funcionalidade
✅ Código limpo e bem comentado
✅ Organização lógica por seções
✅ Variáveis CSS para fácil customização
✅ Classes JavaScript documentadas (JSDoc)
✅ Nomes descritivos e consistentes
✅ Preparado para expansão futura
✅ Performance mantida ou melhorada

IMPORTANTE:
Mantenha 100% da funcionalidade atual
Organize o código de forma profissional
Use comentários para facilitar manutenção
Siga padrões modernos de JavaScript (ES6+)
CSS mobile-first quando possível
Código pronto para produção
Separe o projeto em 3 arquivos agora, mantendo toda a funcionalidade e melhorando a organização do código!