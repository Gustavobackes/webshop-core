Você é um desenvolvedor web sênior. Tenho um site de afiliados da categoria "PERIFÉRICOS ESSENCIAIS" que está funcionando perfeitamente. Preciso que você adicione uma funcionalidade de **alternância de tema claro/escuro** ao site existente.

## CONTEXTO

O site atual está 100% funcional com:
- Carrosséis de imagens funcionando
- Links de afiliado configurados
- Design responsivo completo
- Todas as seções e elementos no lugar

**NÃO QUERO** que você refaça o site. **APENAS** adicione o sistema de tema escuro.

## REQUISITOS DA FUNCIONALIDADE

### 1. Botão de Alternância (Toggle)

**Localização:** Canto superior direito da página (fixed position)

**Design do Botão:**
```css
- Formato: Circular ou pill-shaped
- Tamanho: 50px x 50px (ou 60px x 30px se pill)
- Ícone: Sol ☀️ (tema claro) / Lua 🌙 (tema escuro)
- Background: Suave com backdrop-filter blur
- Posição: Fixed, top: 20px, right: 20px
- Z-index: 9999 (sempre visível)
- Animação suave na transição entre ícones
- Sombra sutil para destacar do fundo
Estados do Botão:
css- Normal: Semi-transparente
- Hover: Aumenta levemente (scale 1.1)
- Active: Efeito de clique (scale 0.95)
- Transição suave em todos os estados (0.3s)
2. Paleta de Cores Tema Escuro
Cores Principais:
css/* TEMA ESCURO */
--dark-bg-primary: #1a1a1a;          /* Fundo principal */
--dark-bg-secondary: #2d2d2d;        /* Fundo cards/seções */
--dark-bg-tertiary: #3a3a3a;         /* Fundo hover/destaque */
--dark-text-primary: #e0e0e0;        /* Texto principal */
--dark-text-secondary: #b0b0b0;      /* Texto secundário */
--dark-border: #404040;              /* Bordas */
--dark-shadow: rgba(0, 0, 0, 0.5);   /* Sombras */

/* Manter as cores de destaque/ação */
--primary-color: #3498db;            /* Manter */
--accent-color: #e74c3c;             /* Manter */
--success-color: #27ae60;            /* Manter */
3. Elementos que Devem Mudar no Tema Escuro
Listagem completa:
✅ Background geral do body
✅ Background dos cards de produtos
✅ Background das seções (header, intro, FAQ, etc.)
✅ Cor dos textos (H1, H2, H3, parágrafos)
✅ Background do breadcrumb
✅ Background da tabela comparativa
✅ Background dos boxes de especificações
✅ Background dos indicadores do carrossel
✅ Bordas dos cards
✅ Sombras dos elementos (mais suaves no escuro)
✅ Background dos botões secundários
✅ Background do índice navegável
✅ Background dos links internos
✅ Background da seção de ofertas (ajustar opacidade)
✅ Cor do texto nos badges
✅ Background dos inputs/forms (se houver)
MANTER INALTERADO:
❌ Botões CTA principais (gradiente vermelho)
❌ Cor verde dos checkmarks
❌ Imagens dos produtos
❌ Logos e ícones (apenas background ao redor)
❌ Links externos (manter azul #3498db)
4. Implementação Técnica
Método Obrigatório: CSS Variables + Data Attribute
html<!-- Adicionar ao <html> -->
<html lang="pt-BR" data-theme="light">
css/* Adicionar ao CSS */
:root[data-theme="light"] {
    --bg-primary: #f8f9fa;
    --bg-secondary: #ffffff;
    --text-primary: #333333;
    --text-secondary: #666666;
    /* ... todas as variáveis do tema claro */
}

:root[data-theme="dark"] {
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --text-primary: #e0e0e0;
    --text-secondary: #b0b0b0;
    /* ... todas as variáveis do tema escuro */
}

/* Aplicar em todos os elementos relevantes */
body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: background-color 0.3s ease, color 0.3s ease;
}

.product-card {
    background: var(--bg-secondary);
    color: var(--text-primary);
    transition: all 0.3s ease;
}

/* E assim por diante para todos os elementos... */
5. JavaScript para Alternância
Funcionalidades obrigatórias:
javascript1. Toggle entre temas ao clicar no botão
2. Salvar preferência no localStorage
3. Carregar tema salvo ao recarregar a página
4. Detectar preferência do sistema (prefers-color-scheme)
5. Transição suave entre temas (0.3s)
6. Trocar ícone do botão (sol/lua) conforme tema
7. Adicionar/remover atributo data-theme="dark"
Código Base Esperado:
javascriptclass ThemeToggle {
    constructor() {
        this.html = document.documentElement;
        this.toggle = document.getElementById('theme-toggle');
        this.currentTheme = this.getTheme();
        
        this.init();
    }
    
    init() {
        // Aplicar tema salvo ou preferência do sistema
        this.applyTheme(this.currentTheme);
        
        // Event listener no botão
        this.toggle.addEventListener('click', () => this.switchTheme());
    }
    
    getTheme() {
        // Verificar localStorage primeiro
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        
        // Verificar preferência do sistema
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        
        return 'light';
    }
    
    applyTheme(theme) {
        this.html.setAttribute('data-theme', theme);
        this.updateIcon(theme);
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }
    
    switchTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
    }
    
    updateIcon(theme) {
        // Trocar ícone do botão
        const icon = theme === 'dark' ? '🌙' : '☀️';
        this.toggle.innerHTML = icon;
    }
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new ThemeToggle();
});
6. HTML do Botão
html<!-- Adicionar logo após a tag <body> -->
<button id="theme-toggle" class="theme-toggle-btn" aria-label="Alternar tema claro/escuro">
    ☀️
</button>
7. CSS Completo do Botão
css/* Adicionar ao CSS existente */
.theme-toggle-btn {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid var(--border-color, #ddd);
    background: var(--bg-secondary);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px var(--shadow-color, rgba(0,0,0,0.1));
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 9999;
    user-select: none;
}

.theme-toggle-btn:hover {
    transform: scale(1.1) rotate(15deg);
    box-shadow: 0 6px 20px var(--shadow-color, rgba(0,0,0,0.15));
}

.theme-toggle-btn:active {
    transform: scale(0.95);
}

/* Animação do ícone ao trocar */
@keyframes iconSwap {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(0.8); }
    100% { transform: rotate(360deg) scale(1); }
}

.theme-toggle-btn.switching {
    animation: iconSwap 0.6s ease;
}

/* Responsivo */
@media (max-width: 768px) {
    .theme-toggle-btn {
        top: 15px;
        right: 15px;
        width: 45px;
        height: 45px;
        font-size: 1.3rem;
    }
}
8. Ajustes Específicos para Elementos Especiais
Carrossel no Tema Escuro:
css:root[data-theme="dark"] .carousel-btn {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
}

:root[data-theme="dark"] .carousel-btn:hover {
    background: rgba(255, 255, 255, 0.25);
}

:root[data-theme="dark"] .product-carousel {
    background: var(--dark-bg-tertiary);
}
Badges no Tema Escuro:
css:root[data-theme="dark"] .featured-badge {
    /* Manter gradiente vermelho mas ajustar opacidade */
    opacity: 0.95;
}
Tabela Comparativa no Tema Escuro:
css:root[data-theme="dark"] .comparison-table th {
    background: var(--dark-bg-tertiary);
    color: var(--dark-text-primary);
}

:root[data-theme="dark"] .comparison-table tr:hover {
    background: var(--dark-bg-tertiary);
}
Seção de Ofertas no Tema Escuro:
css:root[data-theme="dark"] .offers-section {
    /* Manter gradiente mas com overlay escuro */
    position: relative;
}

:root[data-theme="dark"] .offers-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    border-radius: inherit;
}
O QUE VOCÊ DEVE ME ENTREGAR
Opção 1: Código Completo para Adicionar
1. HTML do botão (onde inserir)
2. CSS completo (variáveis + estilos do botão + ajustes dos elementos)
3. JavaScript completo (classe ThemeToggle)
4. Lista de onde inserir cada código no arquivo existente
Opção 2: Instruções Passo a Passo
1. Localizar seções específicas do código atual
2. Adicionar variáveis CSS no :root
3. Substituir cores fixas por variáveis
4. Inserir HTML do botão
5. Adicionar JavaScript no final
6. Testar funcionalidade
REQUISITOS FINAIS
OBRIGATÓRIO:
✅ Funcionar perfeitamente no site atual (sem quebrar nada)
✅ Transições suaves entre temas (0.3s)
✅ Salvar preferência no localStorage
✅ Detectar preferência do sistema na primeira visita
✅ Botão sempre visível (fixed position)
✅ Responsivo (funcionar em mobile)
✅ Acessibilidade (aria-label, navegação por teclado)
✅ Todos os elementos com cores ajustadas
✅ Código limpo e comentado
NÃO FAZER:
❌ Refazer o site inteiro
❌ Mudar estrutura HTML existente (exceto adicionar botão)
❌ Alterar funcionalidades existentes (carrossel, etc.)
❌ Mudar cores dos CTAs principais
❌ Complicar desnecessariamente
FORMATO DE ENTREGA
Entregue o código em blocos separados para eu adicionar no meu arquivo:
html<!-- BLOCO 1: HTML - Adicionar após <body> -->
[código aqui]
css/* BLOCO 2: CSS VARIABLES - Adicionar no :root existente */
[código aqui]
css/* BLOCO 3: CSS DO BOTÃO - Adicionar no final do CSS */
[código aqui]
css/* BLOCO 4: CSS DOS ELEMENTOS NO TEMA ESCURO - Adicionar no final do CSS */
[código aqui]
javascript// BLOCO 5: JAVASCRIPT - Adicionar antes de </body>
[código aqui]

IMPORTANTE:

Mantenha todo o código existente intacto
Adicione apenas o necessário para o tema escuro
Teste mentalmente se não há conflitos
Comente bem o código para eu entender
Use as mesmas convenções de código do site atual