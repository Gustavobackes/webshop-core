Você é um desenvolvedor web sênior. Tenho um site de afiliados com alternância de tema claro/escuro funcionando, mas a **seção de tabela comparativa** (id="comparativo") está com um bug visual no tema escuro.

## PROBLEMA IDENTIFICADO

**Seção:** Tabela Comparativa (id="comparativo")

**Comportamento Atual (ERRADO):**
Tema Escuro:

Fundo da seção: BRANCO ❌
Texto: CINZA ❌
Ao passar mouse (hover): Fundo PRETO + Texto BRANCO ✓

Ou seja: só fica com visual correto no hover, mas deveria ser permanente.

**Comportamento Esperado (CORRETO):**
Tema Escuro:

Fundo da seção: PRETO/CINZA ESCURO (permanente) ✓
Texto: BRANCO/CINZA CLARO (permanente) ✓
Hover: Leve mudança de tom para feedback visual ✓


## SOLUÇÃO NECESSÁRIA

### 1. Identificar Seletores CSS Problemáticos

Procure no CSS atual por seletores relacionados a:
```css
/* Possíveis seletores com problema */
#comparativo
.comparison-section
.comparison-table
.comparison-table th
.comparison-table td
.comparison-table tr
.comparison-table tbody tr
2. Corrigir Cores da Seção Principal
css/* CORRETO - Adicionar/Ajustar */

/* Tema Claro (manter como está) */
#comparativo,
.comparison-section {
    background: #ffffff;
    color: #333333;
}

/* Tema Escuro (CORRIGIR) */
:root[data-theme="dark"] #comparativo,
:root[data-theme="dark"] .comparison-section {
    background: #2d2d2d; /* Fundo escuro permanente */
    color: #e0e0e0; /* Texto claro permanente */
}
3. Corrigir Cores da Tabela
css/* Cabeçalho da Tabela */
.comparison-table th {
    background: #f8f9fa;
    color: #2c3e50;
}

:root[data-theme="dark"] .comparison-table th {
    background: #3a3a3a; /* Fundo escuro */
    color: #e0e0e0; /* Texto claro */
}

/* Células da Tabela */
.comparison-table td {
    color: #333333;
    border-bottom: 1px solid #eee;
}

:root[data-theme="dark"] .comparison-table td {
    color: #e0e0e0; /* Texto claro */
    border-bottom: 1px solid #404040; /* Borda escura */
}

/* Linhas da Tabela */
.comparison-table tr {
    background: transparent;
}

:root[data-theme="dark"] .comparison-table tbody tr {
    background: transparent;
    color: #e0e0e0; /* Garantir texto claro */
}
4. Ajustar Efeito Hover (Sutil)
css/* Hover Tema Claro */
.comparison-table tbody tr:hover {
    background: #f8f9ff; /* Azul claríssimo */
}

/* Hover Tema Escuro (CORRIGIR) */
:root[data-theme="dark"] .comparison-table tbody tr:hover {
    background: #3a3a3a; /* Cinza ligeiramente mais claro que o fundo */
    /* NÃO usar preto puro nem branco */
}
5. Garantir Especificidade CSS
Se o problema persistir, aumentar especificidade:
css/* Forçar cores no tema escuro com !important se necessário */
:root[data-theme="dark"] #comparativo {
    background: #2d2d2d !important;
}

:root[data-theme="dark"] .comparison-section {
    background: #2d2d2d !important;
    color: #e0e0e0 !important;
}

:root[data-theme="dark"] .comparison-table td,
:root[data-theme="dark"] .comparison-table th {
    color: #e0e0e0 !important;
}

/* Mas tente resolver SEM !important primeiro */
CHECKLIST DE VERIFICAÇÃO
Após aplicar a correção, validar:
✅ Seção #comparativo com fundo escuro no tema dark (SEM hover)
✅ Texto da tabela legível (branco/cinza claro) no tema dark
✅ Cabeçalho da tabela (th) com cores corretas
✅ Células da tabela (td) com cores corretas
✅ Bordas da tabela visíveis mas sutis no tema dark
✅ Hover funciona com mudança SUTIL de tom
✅ Transição suave entre temas (0.3s)
✅ Tema claro ainda funciona normalmente
✅ Sem uso excessivo de !important
✅ Código limpo e organizado
CÓDIGO COMPLETO ESPERADO
Me entregue o código CSS corrigido em formato de bloco único:
css/* ============================================
   CORREÇÃO: SEÇÃO COMPARATIVO - TEMA ESCURO
   ============================================ */

/* Tema Claro (Base) */
#comparativo,
.comparison-section {
    background: #ffffff;
    color: #333333;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.comparison-table th {
    background: #f8f9fa;
    color: #2c3e50;
}

.comparison-table td {
    color: #333333;
    border-bottom: 1px solid #eee;
}

.comparison-table tbody tr:hover {
    background: #f8f9ff;
}

/* Tema Escuro (CORRIGIDO) */
:root[data-theme="dark"] #comparativo,
:root[data-theme="dark"] .comparison-section {
    background: #2d2d2d; /* Fundo escuro PERMANENTE */
    color: #e0e0e0; /* Texto claro PERMANENTE */
}

:root[data-theme="dark"] .comparison-table {
    color: #e0e0e0; /* Garantir texto claro */
}

:root[data-theme="dark"] .comparison-table th {
    background: #3a3a3a;
    color: #e0e0e0;
    border-bottom: 1px solid #404040;
}

:root[data-theme="dark"] .comparison-table td {
    color: #e0e0e0; /* Texto claro */
    border-bottom: 1px solid #404040;
}

:root[data-theme="dark"] .comparison-table tbody tr {
    background: transparent;
}

:root[data-theme="dark"] .comparison-table tbody tr:hover {
    background: #3a3a3a; /* Hover sutil, não preto puro */
}

/* Ajuste para texto forte/bold */
:root[data-theme="dark"] .comparison-table strong,
:root[data-theme="dark"] .comparison-table th strong {
    color: #ffffff;
}
INSTRUÇÕES DE APLICAÇÃO

Localize no seu CSS atual os seletores relacionados a .comparison-section e .comparison-table
Substitua ou adicione as regras do tema escuro fornecidas acima
Remova qualquer CSS conflitante que force fundo branco no tema escuro
Teste alternando entre tema claro e escuro
Valide que não há uso de !important desnecessário

POSSÍVEIS CAUSAS DO PROBLEMA
1. CSS do tema escuro não tem especificidade suficiente
2. Há um CSS mais específico sobrescrevendo (ex: body[data-theme="dark"])
3. CSS do hover está sendo aplicado como estado padrão
4. Falta o seletor :root[data-theme="dark"] antes do elemento
5. Variáveis CSS não estão sendo aplicadas corretamente
6. Ordem do CSS está errada (tema escuro antes do claro)
DEBUGGING
Se o problema persistir, adicione este código temporariamente para debug:
css/* DEBUG - Remover depois */
:root[data-theme="dark"] #comparativo {
    background: red !important; /* Se ficar vermelho, o seletor funciona */
}
Se ficar vermelho: O seletor funciona, o problema é a cor definida.
Se NÃO ficar vermelho: O seletor não está pegando, aumentar especificidade.

IMPORTANTE:

Mantenha consistência com o resto do site no tema escuro
Use as mesmas variáveis CSS se existirem (--dark-bg-secondary, etc.)
Não quebre o tema claro ao corrigir o escuro
Transições suaves entre estados (0.3s ease)

Me entregue APENAS o bloco CSS corrigido, pronto para copiar e colar no meu arquivo, substituindo ou adicionando ao CSS existente da seção comparativo.