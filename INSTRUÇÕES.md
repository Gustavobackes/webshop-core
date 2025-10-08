# Como Usar os Arquivos Separados

## Estrutura de Arquivos

```
/seu-projeto/
├── index.html          # HTML limpo (apenas estrutura)
├── styles.css          # Todo o CSS organizado
├── script.js           # Todo o JavaScript organizado
└── /images/           # Pasta de imagens (manter como está)
    ├── /logitech-g502-hero/
    ├── /redragon-kumara-k552/
    ├── /hyperx-cloud-ii/
    ├── /monitor-lg-24/
    ├── /logitech-c920s/
    └── /mousepad-rgb/
```

## Como Funciona

1. **index.html** - Contém apenas a estrutura HTML e conteúdo. Não tem CSS ou JavaScript inline.
2. **styles.css** - Todo o CSS organizado em seções com comentários claros.
3. **script.js** - Todo o JavaScript organizado em classes e funções.

## Como Adicionar Novos Produtos

### 1. Adicionar Produto no HTML
```html
<!-- Produto Novo - Nome do Produto -->
<div class="product-card card" data-product-folder="novo-produto">
    <div class="product-badge">Novo</div>

    <div class="product-carousel" data-carousel>
        <div class="carousel-track">
            <!-- Imagens geradas automaticamente -->
        </div>
    </div>

    <h3>Nome do Produto</h3>
    <p class="subtitle">Subtítulo do produto</p>

    <div class="product-specs">
        <div class="spec-item">Especificação 1</div>
        <div class="spec-item">Especificação 2</div>
    </div>

    <p class="product-description">Descrição completa...</p>
    <div class="product-price">A partir de R$ 999,90</div>

    <div class="product-actions">
        <a href="#LINK_AFILIADO" class="btn btn-primary">Comprar</a>
    </div>
</div>
```

### 2. Adicionar Dados no JavaScript
```javascript
// Em script.js - linha ~1552
const productsData = {
    'logitech-g502-hero': { /* dados existentes */ },
    'novo-produto': {
        name: 'Nome do Produto',
        imageCount: 5,
        altTexts: [
            'Imagem 1 descrição',
            'Imagem 2 descrição',
            // etc...
        ]
    }
};
```

### 3. Criar Pasta de Imagens
```
/images/novo-produto/
├── 1.webp (ou 1.jpg)
├── 2.webp (ou 2.jpg)
└── ...
```

## Como Modificar Cores/Temas

### 1. Variáveis CSS (styles.css - linha 20)
```css
:root {
    --primary-color: #3498db;      /* Cor principal */
    --secondary-color: #2c3e50;    /* Cor secundaria */
    --accent-color: #e74c3c;       /* Destaques */
    --success-color: #27ae60;      /* Sucesso */

    /* Backgrounds */
    --bg-primary: #f8f9fa;         /* Fundo principal */
    --bg-secondary: #ffffff;       /* Cards e seções */
    --bg-tertiary: #f8f9ff;        /* Destaques */

    /* Textos */
    --text-primary: #333333;       /* Texto principal */
    --text-secondary: #666666;     /* Texto secundário */

    /* Espaçamentos */
    --spacing-sm: 15px;            /* Espaçamento pequeno */
    --spacing-md: 25px;            /* Espaçamento médio */
    --spacing-lg: 40px;            /* Espaçamento grande */
}
```

### 2. Tema Escuro (styles.css - linha 60)
```css
:root[data-theme="dark"] {
    --bg-primary: #1a1a1a;         /* Fundo escuro */
    --bg-secondary: #2d2d2d;       /* Cards escuros */
    --text-primary: #e0e0e0;       /* Texto claro */
}
```

## Como Adicionar Novas Categorias

### 1. Criar Nova Seção
```html
<!-- ========================================
     NOVA CATEGORIA: Nome da Categoria
     ======================================== -->
<section id="nova-categoria" class="section">
    <h2>🖱️ Título da Nova Categoria</h2>

    <!-- Produto 1 -->
    <div class="product-card card" data-product-folder="produto-1">
        <!-- Conteúdo do produto -->
    </div>

    <!-- Produto 2 -->
    <div class="product-card card" data-product-folder="produto-2">
        <!-- Conteúdo do produto -->
    </div>
</section>
```

### 2. Atualizar Índice Navegável
```html
<div class="toc card">
    <h3>📋 Navegue pelo Guia</h3>
    <ul>
        <li><a href="#categoria-existente">Categoria Existente</a></li>
        <li><a href="#nova-categoria">🆕 Nova Categoria</a></li>
    </ul>
</div>
```

### 3. Adicionar Dados dos Produtos no JavaScript
```javascript
const productsData = {
    'produto-1': {
        name: 'Produto 1',
        imageCount: 4,
        altTexts: [/* descrições */]
    },
    'produto-2': {
        name: 'Produto 2',
        imageCount: 3,
        altTexts: [/* descrições */]
    }
};
```

## Como Testar Alterações

### 1. Verificar no Navegador
1. Abra `index.html` no navegador
2. Abra DevTools (F12)
3. Vá para Console
4. Verifique se aparece:
   ```
   🚀 Inicializando site...
   ✅ X carrossel(is) inicializado(s) com sucesso!
   ✅ Sistema de tema inicializado!
   ✅ Site inicializado com sucesso!
   ```

### 2. Testar Funcionalidades
- [ ] Carrosséis navegando corretamente (← → indicadores)
- [ ] Tema claro/escuro alternando (botão canto superior direito)
- [ ] Swipe touch funcionando no mobile
- [ ] Navegação por teclado (setas esquerda/direita)
- [ ] Links internos scrollando suavemente
- [ ] FAQ expandindo/colapsando

### 3. Validar Responsividade
- [ ] Desktop (1200px+)
- [ ] Tablet (768px - 1024px)
- [ ] Mobile (320px - 767px)

## Manutenção

### Onde Modificar Estilos
- **styles.css** - Todo o CSS está aqui
- **Seções organizadas** com comentários claros
- **Variáveis CSS** para mudanças globais

### Onde Adicionar Funcionalidades JS
- **script.js** - Todo o JavaScript está aqui
- **Classes bem estruturadas** (ProductCarousel, ThemeToggle)
- **Funções utilitárias** organizadas

### Como Debuggar
1. Abra Console (F12)
2. Procure por erros em vermelho
3. Verifique se todos os arquivos carregaram (Network tab)
4. Teste funcionalidades passo a passo

## Performance

### Otimizações Implementadas
- ✅ Lazy loading de imagens
- ✅ Intersection Observer para carrosséis fora da tela
- ✅ CSS transitions otimizadas
- ✅ Touch events com passive listeners
- ✅ Código minificado e organizado

### Melhorias Futuras Recomendadas
- 🔄 Implementar Service Worker para cache
- 🔄 Adicionar WebP com fallback automático
- 🔄 Implementar analytics nos cliques
- 🔄 Adicionar A/B testing nos CTAs

## Troubleshooting

### Problema: Carrossel não funciona
**Causa:** Dados do produto não encontrados
**Solução:**
1. Verifique se `data-product-folder` está correto
2. Verifique se produto existe em `productsData` (script.js)
3. Verifique se imagens existem na pasta `/images/produto/`

### Problema: Tema não alterna
**Causa:** JavaScript não carregou ou erro na inicialização
**Solução:**
1. Verifique se `script.js` carregou (Network tab)
2. Verifique erros no Console
3. Teste se botão de tema existe no HTML

### Problema: Estilos não aplicam
**Causa:** CSS não carregou ou ordem incorreta
**Solução:**
1. Verifique se `styles.css` carregou (Network tab)
2. Verifique se link está correto: `<link rel="stylesheet" href="styles.css">`
3. Certifique-se que CSS está antes de `</head>`

## Próximos Passos

### Para Produção
1. **Otimizar imagens** - Comprimir para WebP
2. **Configurar servidor** - Apache/Nginx com headers corretos
3. **Adicionar analytics** - Google Analytics/Tag Manager
4. **SEO otimizado** - Meta tags, sitemap, robots.txt

### Para Expansão
1. **Sistema de avaliações** - Permitir usuários avaliarem produtos
2. **Busca interna** - Campo de busca por produtos
3. **Filtros avançados** - Por preço, categoria, marca
4. **Comparador de produtos** - Seleção múltipla para comparação

## Suporte

**Estrutura criada:** 3 arquivos independentes (HTML, CSS, JS)
**Funcionalidade:** 100% preservada do arquivo original
**Organização:** Código profissional e bem documentado
**Manutenibilidade:** Fácil de modificar e expandir

---
*Projeto criado com ❤️ para máxima organização e manutenibilidade*
