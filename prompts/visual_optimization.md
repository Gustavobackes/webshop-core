Você é um desenvolvedor web sênior especializado em UX/UI e otimização de galerias de produtos. Tenho um site de afiliados com carrosséis de imagens funcionando perfeitamente, mas as imagens dos produtos têm **fundos brancos** que estão interferindo no visual geral, especialmente no tema escuro.

## PROBLEMA ATUAL

As imagens dos produtos possuem:
- Fundos brancos/claros das fotos originais dos fabricantes
- Muito espaço vazio ao redor do produto
- Contraste ruim com o fundo do carrossel (principalmente no tema escuro)
- Visual pouco profissional e inconsistente

## OBJETIVO

Criar um sistema de **enquadramento e tratamento visual** das imagens do carrossel que siga os **padrões de mercado** de e-commerce premium, similar a:
- Amazon (cards de produto com fundo neutro)
- Apple (produto centralizado, fundo gradiente sutil)
- Nike (produto em destaque com sombra suave)
- Best Buy (enquadramento limpo, zoom suave)

## REFERÊNCIAS DE MERCADO

### Padrão Amazon/Mercado Livre:

Fundo branco puro (#FFFFFF) no tema claro
Fundo cinza muito claro (#F5F5F5) no tema escuro
Produto centralizado ocupando 70-80% da área
Padding uniforme ao redor
Sem sombras pesadas
Zoom sutil ao hover (1.1x)


### Padrão Apple/Premium:

Fundo gradiente sutil (branco para cinza claro)
Produto centralizado ocupando 75-85% da área
Sombra suave e realista sob o produto
Reflexo sutil opcional
Animação de rotação/parallax ao hover
Border radius suave


### Padrão Nike/Sportswear:

Fundo colorido sutil ou gradiente
Produto em ângulo dinâmico
Sombra projetada realista
Efeito de profundidade
Transição suave entre imagens


## SOLUÇÃO DESEJADA

### 1. Sistema de Enquadramento Inteligente

**Opção A - Fundo Adaptativo (Recomendado):**
```css
Características:
- Fundo muda automaticamente entre tema claro/escuro
- Tema Claro: Fundo branco puro ou cinza clarinho
- Tema Escuro: Fundo cinza médio (#2d2d2d ou #3a3a3a)
- Transição suave entre temas (0.3s)
- Imagem sempre com boa legibilidade
Opção B - Fundo com Gradiente:
cssCaracterísticas:
- Gradiente radial do centro para bordas
- Tema Claro: Branco centro → Cinza claro bordas
- Tema Escuro: Cinza médio centro → Cinza escuro bordas
- Cria profundidade visual
- Destaca o produto no centro
Opção C - Fundo com Blur/Duplicado:
cssCaracterísticas:
- Fundo é a própria imagem com blur pesado
- Overlay semitransparente por cima
- Imagem principal nítida no centro
- Efeito "card de música" do Spotify
- Muito moderno e chamativo
2. Tratamento de Borda da Imagem
Padding/Margin Interno:
css- Adicionar padding de 15-25px ao redor da imagem
- Garante que produto não "grude" nas bordas
- Respira melhor visualmente
- Mantém consistência entre produtos de tamanhos diferentes
Object-fit Otimizado:
css- Usar: object-fit: contain (manter proporção)
- Adicionar: object-position: center (centralizar)
- Max-width: 90% da área disponível
- Max-height: 90% da área disponível
- Centralização perfeita vertical e horizontal
3. Efeitos Visuais Modernos
Sombra do Produto (Realista):
cssAdicionar sombra sutil que simula produto "flutuando":
- box-shadow leve na imagem
- Sombra mais intensa no hover
- Drop-shadow no filtro CSS para seguir contorno do produto
- Cor da sombra ajustada por tema (escuro/claro)

Exemplo:
filter: drop-shadow(0 10px 25px rgba(0,0,0,0.15));
Zoom Suave ao Hover:
css- Transform: scale(1.08) ao passar mouse
- Transition suave (0.4s ease-out)
- Transform-origin: center
- Apenas no desktop (desabilitar no mobile)
Brilho/Contraste Dinâmico:
cssAjustar automaticamente a imagem conforme tema:
- Tema Claro: Sem ajustes ou leve aumento de contraste
- Tema Escuro: Brightness(0.9) para suavizar brancos
- Transição suave entre estados
4. Container do Carrossel Otimizado
Background do Container:
css.product-carousel {
    /* Tema Claro */
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    
    /* Tema Escuro */
    [data-theme="dark"] & {
        background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
    }
    
    /* Adicionar borda sutil */
    border: 1px solid var(--border-color);
    
    /* Sombra interna opcional */
    box-shadow: inset 0 2px 8px rgba(0,0,0,0.05);
}
Overlay de Melhoria Visual:
cssAdicionar overlay sutil para "amortecer" fundos brancos:
- Pseudo-elemento ::before no carousel
- Background semi-transparente
- Apenas no tema escuro
- Não interfere na imagem mas melhora contraste
5. Código CSS Completo Esperado
css/* ============================================
   OTIMIZAÇÃO VISUAL DO CARROSSEL
   ============================================ */

/* Container Principal */
.product-carousel {
    position: relative;
    width: 100%;
    height: var(--carousel-height);
    overflow: hidden;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    
    /* Fundo adaptativo por tema */
    background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
    border: 1px solid rgba(0,0,0,0.08);
    
    /* Transição suave */
    transition: background 0.3s ease, border-color 0.3s ease;
}

/* Tema Escuro */
:root[data-theme="dark"] .product-carousel {
    background: linear-gradient(135deg, #3a3a3a 0%, #2d2d2d 100%);
    border-color: rgba(255,255,255,0.1);
}

/* Track de Imagens */
.carousel-track {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 20px; /* Respiração ao redor */
}

/* Imagens Otimizadas */
.carousel-image {
    min-width: 100%;
    max-width: 90%; /* Não ocupar 100% */
    max-height: 90%; /* Não ocupar 100% */
    height: auto;
    object-fit: contain;
    object-position: center;
    
    /* Sombra realista */
    filter: drop-shadow(0 8px 16px rgba(0,0,0,0.1));
    
    /* Transições */
    transition: all 0.4s ease-out;
    opacity: 0;
}

.carousel-image.active {
    opacity: 1;
}

/* Hover Desktop - Zoom Suave */
@media (hover: hover) {
    .carousel-image.active:hover {
        transform: scale(1.08);
        filter: drop-shadow(0 12px 24px rgba(0,0,0,0.15));
    }
}

/* Ajuste de Brilho no Tema Escuro */
:root[data-theme="dark"] .carousel-image {
    filter: brightness(0.92) drop-shadow(0 8px 16px rgba(0,0,0,0.3));
}

:root[data-theme="dark"] .carousel-image.active:hover {
    filter: brightness(0.95) drop-shadow(0 12px 24px rgba(0,0,0,0.4));
}

/* Overlay para Melhorar Contraste (Opcional) */
.product-carousel::before {
    content: '';
    position: absolute;
    inset: 0;
    background: transparent;
    pointer-events: none;
    z-index: 1;
    transition: background 0.3s ease;
}

:root[data-theme="dark"] .product-carousel::before {
    background: radial-gradient(
        circle at center,
        transparent 40%,
        rgba(0,0,0,0.2) 100%
    );
}

/* Garantir que controles fiquem acima do overlay */
.carousel-btn,
.carousel-indicators,
.carousel-counter {
    z-index: 10;
    position: relative;
}

/* Loading State - Skeleton */
.carousel-image[data-loading] {
    background: linear-gradient(
        90deg,
        rgba(200,200,200,0.1) 25%,
        rgba(200,200,200,0.2) 50%,
        rgba(200,200,200,0.1) 75%
    );
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

/* Mobile Adjustments */
@media (max-width: 768px) {
    .carousel-track {
        padding: 15px;
    }
    
    .carousel-image {
        max-width: 95%;
        max-height: 95%;
    }
    
    /* Desabilitar hover em mobile */
    .carousel-image.active:hover {
        transform: none;
    }
}
FUNCIONALIDADES ADICIONAIS RECOMENDADAS
1. Lazy Loading com Blur Placeholder
javascript// Carregar imagem com efeito blur → nítido
- Mostrar versão blur/low-quality primeiro
- Transição suave para versão full quality
- Melhora perceived performance
2. Indicador de Carregamento
css/* Spinner ou skeleton enquanto imagem carrega */
- Skeleton gradient animado
- Ou spinner sutil no centro
- Remove ao carregar imagem
3. Tratamento de Erro
javascript// Se imagem não carregar:
- Mostrar placeholder elegante
- Ícone do tipo de produto
- Mensagem "Imagem não disponível"
- Background colorido sutil
VARIAÇÕES POR TIPO DE PRODUTO
Para Mouses/Periféricos Pequenos:
css- Padding maior (25-30px)
- Zoom mais acentuado (1.12x) no hover
- Sombra mais definida
- Pode usar fundo com leve gradiente radial
Para Teclados/Produtos Horizontais:
css- Object-fit: contain mantém proporção
- Altura do carrossel pode ser levemente maior
- Menos padding vertical, mais horizontal
Para Headsets/Produtos Verticais:
css- Centralização vertical importante
- Mais padding horizontal
- Sombra lateral para dar profundidade
OPÇÕES DE IMPLEMENTAÇÃO
Opção 1: Gradiente Radial (Mais Sofisticado)
cssbackground: radial-gradient(
    circle at center,
    #ffffff 0%,
    #f5f5f5 70%,
    #e8e8e8 100%
);
Opção 2: Fundo Sólido Adaptativo (Mais Limpo)
css/* Tema Claro */ background: #fafafa;
/* Tema Escuro */ background: #2d2d2d;
Opção 3: Blur da Própria Imagem (Mais Moderno)
cssbackground: url(mesma-imagem);
background-size: cover;
filter: blur(50px) brightness(1.3);
opacity: 0.3;
TESTES E VALIDAÇÕES
Após implementar, validar:
✅ Imagens centralizadas em ambos os temas
✅ Contraste adequado (texto sobre imagem legível)
✅ Sombras realistas mas sutis
✅ Zoom funciona suavemente no desktop
✅ Mobile sem zoom (apenas swipe)
✅ Transição entre temas suave
✅ Loading state elegante
✅ Funciona com imagens de diferentes proporções
✅ Performance mantida (sem lag)
✅ Acessibilidade preservada
O QUE VOCÊ DEVE ME ENTREGAR
Formato de Entrega:
css/* BLOCO 1: CSS - Substituir/Adicionar no carrossel existente */
[código aqui com comentários explicativos]
javascript// BLOCO 2: JavaScript - Melhorias opcionais (se necessário)
[código aqui]
html<!-- BLOCO 3: HTML - Ajustes na estrutura (se necessário) -->
[código aqui]
Incluir:

✅ CSS completo com todas as otimizações visuais
✅ Comentários explicando cada ajuste
✅ Variações para tema claro e escuro
✅ Responsividade mobile incluída
✅ Performance mantida/melhorada
✅ Instruções de onde inserir no código atual

Recomendações Finais:
1. Escolha a opção de fundo que melhor se adequa ao estilo do site
2. Priorize a legibilidade e profissionalismo
3. Mantenha consistência visual entre produtos
4. Garanta que funciona perfeitamente no tema escuro
5. Teste com imagens de diferentes proporções

IMPORTANTE:

Mantenha toda funcionalidade atual do carrossel
Apenas melhore o aspecto visual das imagens
Foco em profissionalismo e padrões de mercado
Código limpo e performático
Compatível com tema claro/escuro existente

Gere o código CSS otimizado agora, seguindo os padrões de mercado de e-commerce premium!