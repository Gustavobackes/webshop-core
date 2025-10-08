Você é um desenvolvedor web sênior. Preciso que você corrija DEFINITIVAMENTE o problema de cores na seção da tabela comparativa do meu site.

## PROBLEMA ESPECÍFICO

**Seção Afetada:**
- Título: "📊 Comparativo: Melhores Periféricos de Informática 2025"
- Elemento: Tabela comparativa de produtos

**Comportamento Atual (BUGADO):**
Tema Escuro:

Tabela aparece com fundo BRANCO
Texto aparece CINZA/ilegível
Apenas quando passa o mouse (hover) fica correto (fundo escuro + texto branco)


**Comportamento Desejado:**
TEMA CLARO (Light Mode):

Fundo: BRANCO
Texto: ESCURO/PRETO
Hover: Fundo levemente mais escuro (ex: cinza claríssimo)

TEMA ESCURO (Dark Mode):

Fundo: ESCURO/PRETO (fixo, permanente)
Texto: BRANCO/CLARO (fixo, permanente)
Hover: REMOVER COMPLETAMENTE ou deixar apenas mudança muito sutil


## SOLUÇÃO OBRIGATÓRIA

### 1. REMOVER TODO EFEITO DE HOVER NO TEMA ESCURO
```css
/* Tema Escuro - SEM HOVER */
:root[data-theme="dark"] .comparison-table tbody tr:hover {
    background: transparent; /* OU remover esta regra completamente */
    /* NÃO mudar cor de fundo no hover */
}

/* Alternativa: Hover muito sutil (opcional) */
:root[data-theme="dark"] .comparison-table tbody tr:hover {
    background: rgba(255, 255, 255, 0.02); /* Quase imperceptível */
}
2. FIXAR CORES PERMANENTES NO TEMA ESCURO
css/* ==================================================
   SEÇÃO COMPARATIVO - CORREÇÃO DEFINITIVA
   ================================================== */

/* ========== TEMA CLARO (Light Mode) ========== */

/* Container da seção */
.comparison-section {
    background: #ffffff;
    color: #333333;
}

/* Tabela */
.comparison-table {
    background: #ffffff;
}

/* Cabeçalho (th) */
.comparison-table thead th {
    background: #f8f9fa;
    color: #2c3e50;
    border-bottom: 2px solid #dee2e6;
}

/* Células (td) */
.comparison-table tbody td {
    background: #ffffff;
    color: #333333;
    border-bottom: 1px solid #eee;
}

/* Hover no tema claro - MANTER */
.comparison-table tbody tr:hover {
    background: #f8f9ff; /* Azul clarinho */
}

.comparison-table tbody tr:hover td {
    background: #f8f9ff;
}


/* ========== TEMA ESCURO (Dark Mode) ========== */

/* Container da seção - FUNDO ESCURO FIXO */
:root[data-theme="dark"] .comparison-section {
    background: #2d2d2d !important;
    color: #e0e0e0 !important;
}

/* Tabela - FUNDO ESCURO FIXO */
:root[data-theme="dark"] .comparison-table {
    background: #2d2d2d !important;
    color: #e0e0e0 !important;
}

/* Cabeçalho (th) - FUNDO ESCURO + TEXTO CLARO */
:root[data-theme="dark"] .comparison-table thead th {
    background: #3a3a3a !important;
    color: #ffffff !important;
    border-bottom: 2px solid #404040 !important;
}

/* Células (td) - FUNDO ESCURO + TEXTO CLARO */
:root[data-theme="dark"] .comparison-table tbody td {
    background: #2d2d2d !important;
    color: #e0e0e0 !important;
    border-bottom: 1px solid #404040 !important;
}

/* Linhas (tr) - FUNDO ESCURO FIXO */
:root[data-theme="dark"] .comparison-table tbody tr {
    background: #2d2d2d !important;
    color: #e0e0e0 !important;
}

/* HOVER REMOVIDO - SEM MUDANÇA DE COR */
:root[data-theme="dark"] .comparison-table tbody tr:hover {
    background: #2d2d2d !important; /* Mesma cor, SEM mudança */
}

:root[data-theme="dark"] .comparison-table tbody tr:hover td {
    background: #2d2d2d !important; /* Mesma cor, SEM mudança */
}

/* Texto forte/negrito */
:root[data-theme="dark"] .comparison-table strong {
    color: #ffffff !important;
}

/* Título da seção (H2) */
:root[data-theme="dark"] .comparison-section h2 {
    color: #ffffff !important;
}

/* Caption da tabela (se existir) */
:root[data-theme="dark"] .comparison-table caption {
    color: #e0e0e0 !important;
}
ESTRUTURA HTML ESPERADA
Confirme se sua estrutura é similar a esta:
html<section id="comparativo" class="comparison-section">
    <h2>📊 Comparativo: Melhores Periféricos de Informática 2025</h2>
    
    <table class="comparison-table">
        <thead>
            <tr>
                <th>Produto</th>
                <th>Categoria</th>
                <th>Preço</th>
                <!-- mais colunas -->
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Nome do Produto</strong></td>
                <td>Categoria</td>
                <td>R$ 299</td>
                <!-- mais células -->
            </tr>
            <!-- mais linhas -->
        </tbody>
    </table>
</section>
CHECKLIST DE APLICAÇÃO
Passo 1: Localizar CSS Atual
1. Abra seu arquivo HTML/CSS
2. Procure por: .comparison-section
3. Procure por: .comparison-table
4. Procure por: :root[data-theme="dark"] .comparison
Passo 2: Substituir CSS Completo
1. APAGUE todo CSS relacionado a .comparison-section e .comparison-table
2. COLE o novo CSS fornecido acima
3. SALVE o arquivo
Passo 3: Validar Resultado
✅ Tema Claro:
   - Fundo branco
   - Texto escuro/preto
   - Hover muda para cinza clarinho

✅ Tema Escuro:
   - Fundo escuro/preto PERMANENTE (sem hover)
   - Texto branco/claro PERMANENTE (sem hover)
   - Passar o mouse NÃO muda nada (ou muda imperceptivelmente)
SE O PROBLEMA PERSISTIR
Diagnóstico Adicional:
Teste 1 - Inspecionar Elemento:
1. Abra o navegador (F12)
2. Clique em "Inspecionar"
3. Selecione a tabela no tema escuro
4. Veja quais estilos CSS estão sendo aplicados
5. Procure por regras que estão sobrescrevendo as cores
Teste 2 - Forçar com !important:
css/* Se absolutamente necessário, force TUDO */
:root[data-theme="dark"] .comparison-section * {
    background: #2d2d2d !important;
    color: #e0e0e0 !important;
}

:root[data-theme="dark"] .comparison-table tbody tr:hover,
:root[data-theme="dark"] .comparison-table tbody tr:hover * {
    background: #2d2d2d !important;
    color: #e0e0e0 !important;
}
Teste 3 - Verificar Ordem do CSS:
css/* CSS do tema escuro DEVE vir DEPOIS do tema claro */

/* Errado: */
:root[data-theme="dark"] .comparison-table { ... }
.comparison-table tbody tr:hover { ... } /* Sobrescreve dark */

/* Correto: */
.comparison-table tbody tr:hover { ... }
:root[data-theme="dark"] .comparison-table { ... } /* Vem depois */
CÓDIGO FINAL LIMPO (SEM !important)
Tente primeiro esta versão SEM forçar com !important:
css/* Tema Claro */
.comparison-section {
    background: white;
    color: #333;
}

.comparison-table tbody tr {
    background: white;
}

.comparison-table tbody tr:hover {
    background: #f8f9ff;
}

/* Tema Escuro */
:root[data-theme="dark"] .comparison-section {
    background: #2d2d2d;
    color: #e0e0e0;
}

:root[data-theme="dark"] .comparison-table {
    background: #2d2d2d;
    color: #e0e0e0;
}

:root[data-theme="dark"] .comparison-table thead th {
    background: #3a3a3a;
    color: #fff;
    border-color: #404040;
}

:root[data-theme="dark"] .comparison-table tbody td {
    background: #2d2d2d;
    color: #e0e0e0;
    border-color: #404040;
}

:root[data-theme="dark"] .comparison-table tbody tr {
    background: #2d2d2d;
}

:root[data-theme="dark"] .comparison-table tbody tr:hover {
    background: #2d2d2d; /* SEM mudança no hover */
}

:root[data-theme="dark"] .comparison-table strong {
    color: #fff;
}
INSTRUÇÃO FINAL
Me entregue:

✅ Bloco CSS completo pronto para copiar e colar
✅ Comentários indicando onde inserir no código
✅ Versão COM !important (caso a versão limpa não funcione)
✅ Instruções de onde exatamente substituir no arquivo
✅ Teste visual descrito para eu validar


RESULTADO ESPERADO:
Após aplicar o código:

✅ Tema claro funciona com hover normal
✅ Tema escuro mostra tabela preta com texto branco PERMANENTE
✅ Hover no tema escuro NÃO muda cores (ou muda imperceptivelmente)
✅ Transição entre temas suave
✅ Problema resolvido de vez

CRÍTICO: Use !important APENAS se absolutamente necessário. Tente resolver com especificidade correta primeiro.
Gere o código CSS corrigido agora!