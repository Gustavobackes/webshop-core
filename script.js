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

// ========================================
// DADOS DOS PRODUTOS PARA CARROSSEL
// ========================================
const productsData = {
    'logitech-g502-hero': {
        name: 'Mouse Gamer Logitech G502 HERO',
        imageCount: 5,
        altTexts: [
            'Mouse Gamer Logitech G502 HERO vista frontal com iluminação RGB',
            'Mouse Gamer Logitech G502 HERO vista lateral mostrando botões programáveis',
            'Mouse Gamer Logitech G502 HERO sistema de pesos ajustáveis',
            'Mouse Gamer Logitech G502 HERO sensor HERO 25K detalhe',
            'Mouse Gamer Logitech G502 HERO iluminação RGB completa',
        ]
    },
    'redragon-kumara-k552': {
        name: 'Teclado Mecânico Redragon Kumara K552',
        imageCount: 4,
        altTexts: [
            'Teclado Mecânico Redragon Kumara K552 com iluminação LED vermelha completa',
            'Teclado Mecânico Redragon Kumara K552 switches Blue mecânicos detalhe',
            'Teclado Mecânico Redragon Kumara K552 estrutura em alumínio vista lateral',
            'Teclado Mecânico Redragon Kumara K552 layout compacto TKL',
        ]
    },
    'hyperx-cloud-ii': {
        name: 'Headset HyperX Cloud II Gaming',
        imageCount: 4,
        altTexts: [
            'Headset HyperX Cloud II Gaming com almofadas memory foam vista frontal',
            'Headset HyperX Cloud II Gaming controle USB som surround 7.1',
            'Headset HyperX Cloud II Gaming microfone removível com cancelamento de ruído',
            'Headset HyperX Cloud II Gaming cabo reforçado e compatibilidade universal'
        ]
    },
    'monitor-lg-24': {
        name: 'Monitor LG 24" IPS Full HD',
        imageCount: 4,
        altTexts: [
            'Monitor LG 24 polegadas IPS Full HD bordas ultrafinas vista frontal',
            'Monitor LG 24 IPS sistema de ajuste de altura e inclinação',
            'Monitor LG 24 IPS conexões e tecnologia AMD FreeSync',
            'Monitor LG 24 IPS painel IPS com cores precisas',
        ]
    },
    'logitech-c920s': {
        name: 'Webcam Logitech C920s HD Pro',
        imageCount: 4,
        altTexts: [
            'Webcam Logitech C920s HD Pro gravação Full HD 1080p vista frontal',
            'Webcam Logitech C920s obturador de privacidade fechado segurança',
            'Webcam Logitech C920s clipe universal para monitor notebook',
            'Webcam Logitech C920s qualidade de imagem cristalina'
        ]
    },
    'mousepad-rgb': {
        name: 'Mousepad Gamer RGB 80x30cm',
        imageCount: 4,
        altTexts: [
            'Mousepad Gamer RGB 80x30cm iluminação RGB completa vista superior',
            'Mousepad Gamer RGB base antiderrapante e bordas costuradas reforçadas',
            'Mousepad Gamer RGB superfície otimizada para gaming',
            'Mousepad Gamer RGB tamanho ideal para setup completo'
        ]
    }
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
        this.productFolder = this.carousel.closest('.product-card').dataset.productFolder;
        this.productData = productsData[this.productFolder];

        if (!this.productData) {
            this.showFallback();
            return;
        }

        this.track = this.carousel.querySelector('.carousel-track');
        this.images = [];
        this.indicators = [];
        this.currentSlide = 0;
        this.totalSlides = this.productData.imageCount;

        // Touch/Swipe
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.isDragging = false;

        this.init();
    }

    /**
     * Inicializa eventos e configurações
     */
    init() {
        this.generateImages();
        this.generateIndicators();
        this.generateButtons();

        // Event Listeners
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());

        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Touch Events
        this.carousel.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
        this.carousel.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: true });
        this.carousel.addEventListener('touchend', () => this.handleTouchEnd());

        // Keyboard Navigation
        this.carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });

        // Set first slide as active - versão simples
        if (this.images.length > 0) {
            this.goToSlide(0);
        }

        // Lazy Load próximas imagens
        this.lazyLoadAdjacentImages();
    }

    generateImages() {
        this.track.innerHTML = '';

        for (let i = 1; i <= this.totalSlides; i++) {
            const img = document.createElement('img');
            img.src = `/images/${this.productFolder}/${i}.jpg`;
            img.alt = this.productData.altTexts[i-1] || `${this.productData.name} imagem ${i}`;
            img.className = 'carousel-image';
            img.loading = 'lazy';

            // Sistema simplificado: assume sempre .jpg
            img.onerror = () => {
                // Mostra placeholder diretamente se a imagem .jpg não carregar
                this.createPlaceholderImage(img, i);
            };

            // Se a imagem carregar com sucesso, adiciona classe loaded
            img.onload = () => {
                img.classList.add('loaded');
            };

            this.images.push(img);
            this.track.appendChild(img);
        }
    }

    generateIndicators() {
        const indicatorsContainer = document.createElement('div');
        indicatorsContainer.className = 'carousel-indicators';

        for (let i = 0; i < this.totalSlides; i++) {
            const indicator = document.createElement('button');
            indicator.className = 'indicator';
            indicator.setAttribute('aria-label', `Imagem ${i + 1}`);
            indicator.type = 'button';

            this.indicators.push(indicator);
            indicatorsContainer.appendChild(indicator);
        }

        this.carousel.appendChild(indicatorsContainer);
    }

    generateButtons() {
        // Previous button
        this.prevBtn = document.createElement('button');
        this.prevBtn.className = 'carousel-btn prev';
        this.prevBtn.setAttribute('aria-label', 'Imagem anterior');
        this.prevBtn.type = 'button';
        this.prevBtn.innerHTML = '';

        // Next button
        this.nextBtn = document.createElement('button');
        this.nextBtn.className = 'carousel-btn next';
        this.nextBtn.setAttribute('aria-label', 'Próxima imagem');
        this.nextBtn.type = 'button';
        this.nextBtn.innerHTML = '';

        // Counter
        const counter = document.createElement('div');
        counter.className = 'carousel-counter';
        counter.innerHTML = `<span class="current">1</span>/<span class="total">${this.totalSlides}</span>`;

        this.carousel.appendChild(this.prevBtn);
        this.carousel.appendChild(this.nextBtn);
        this.carousel.appendChild(counter);
    }

    createPlaceholderImage(imgElement, imageNumber) {
        // Cria um div como placeholder simples
        const placeholder = document.createElement('div');
        placeholder.className = 'carousel-placeholder';
        placeholder.innerHTML = `
            <div class="placeholder-content">
                <div class="placeholder-icon">📷</div>
                <div class="placeholder-text">${this.productData.name}</div>
                <small>Imagem não disponível</small>
            </div>
        `;

        // Substitui a imagem pelo placeholder
        imgElement.parentNode.replaceChild(placeholder, imgElement);

        // Adiciona CSS básico para o placeholder se não existir
        if (!document.querySelector('#placeholder-styles')) {
            const style = document.createElement('style');
            style.id = 'placeholder-styles';
            style.textContent = `
                .carousel-placeholder {
                    width: 100%;
                    height: 100%;
                    background: #f5f7fa;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                }
                .placeholder-content {
                    text-align: center;
                    color: #666;
                }
                .placeholder-icon {
                    font-size: 3rem;
                    margin-bottom: 0.5rem;
                }
                .placeholder-text {
                    font-weight: bold;
                    margin-bottom: 0.25rem;
                }
            `;
            document.head.appendChild(style);
        }
    }

    showFallback() {
        this.carousel.innerHTML = `
            <div class="carousel-fallback">
                <div class="placeholder-content">
                    <div class="placeholder-icon">📷</div>
                    <div>${this.productData?.name || 'Produto'}</div>
                    <small>Todas as imagens não encontradas</small>
                </div>
            </div>
        `;
    }

    goToSlide(index) {
        if (index < 0 || index >= this.totalSlides) return;

        // Remove active class from current slide and indicators
        this.images[this.currentSlide]?.classList.remove('active');
        this.indicators[this.currentSlide]?.classList.remove('active');

        // Set new current slide
        this.currentSlide = index;

        // Add active class to new slide and indicators
        this.images[this.currentSlide]?.classList.add('active');
        this.indicators[this.currentSlide]?.classList.add('active');

        // Update transform for smooth transition
        const translateX = -this.currentSlide * 100;
        this.track.style.transform = `translateX(${translateX}%)`;

        this.updateCounter();
        this.lazyLoadAdjacentImages();
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prevIndex);
    }

    handleTouchStart(e) {
        this.touchStartX = e.changedTouches[0].screenX;
        this.isDragging = true;
    }

    handleTouchMove(e) {
        if (!this.isDragging) return;
        this.touchEndX = e.changedTouches[0].screenX;
    }

    handleTouchEnd() {
        if (!this.isDragging) return;
        this.isDragging = false;

        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextSlide(); // Swipe left
            } else {
                this.prevSlide(); // Swipe right
            }
        }

        this.touchStartX = 0;
        this.touchEndX = 0;
    }

    updateCounter() {
        const counter = this.carousel.querySelector('.carousel-counter');
        if (counter) {
            counter.querySelector('.current').textContent = this.currentSlide + 1;
        }
    }

    lazyLoadAdjacentImages() {
        // Carregar imagem atual + próximas 2
        const toLoad = [
            this.currentSlide,
            (this.currentSlide + 1) % this.totalSlides,
            (this.currentSlide + 2) % this.totalSlides
        ];

        toLoad.forEach(index => {
            const img = this.images[index];
            if (img && !img.complete && img.src) {
                img.onload = () => {
                    img.classList.add('loaded');
                };
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
            `Mudar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`
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

    console.log(`✅ ${carousels.length} carrossel(is) inicializado(s) com sucesso!` );
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

/**
 * Inicializa funcionalidades do FAQ
 */
function initFAQ() {
    // Função global para compatibilidade
    window.toggleFAQ = function(element) {
        const faqItem = element.parentElement;
        faqItem.classList.toggle('active');
    };

    console.log('✅ Sistema de FAQ inicializado!');
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
    initFAQ();

    console.log('✅ Site inicializado com sucesso!');
});

/**
 * Tratamento de erros globais
 */
window.addEventListener('error', function(e) {
    console.error('Erro global capturado:', e.error);
});

/**
 * Performance optimization - Intersection Observer
 * para lazy loading de carrosséis fora da viewport
 */
if ('IntersectionObserver' in window) {
    const carouselObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const carousel = entry.target;
                const carouselInstance = carousel._carouselInstance;
                if (carouselInstance) {
                    carouselInstance.lazyLoadAdjacentImages();
                }
                carouselObserver.unobserve(carousel);
            }
        });
    }, { threshold: 0.1 });

    // Observar carrosséis quando DOM estiver pronto
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.product-carousel').forEach(carousel => {
            carouselObserver.observe(carousel);
        });
    });
}
