Você é um desenvolvedor web sênior. Preciso simplificar o código JavaScript do meu projeto de site de afiliados.

## CONTEXTO

**Projeto:** Site de Afiliados - Periféricos Essenciais  
**Estrutura:** Arquivos separados (index.html, styles.css, script.js)  
**Funcionalidade Afetada:** Sistema de carrossel de imagens

## SITUAÇÃO ATUAL

O JavaScript atualmente tem código para detectar/validar múltiplos formatos de imagem:
- JPG
- JPEG  
- PNG
- Possivelmente WebP (já removido anteriormente)

**Porém, TODAS as imagens do projeto já são .jpg**

## OBJETIVO

**Simplificar o código JavaScript** removendo toda lógica de detecção/validação de formato de imagem, assumindo que:
- ✅ Todas as imagens são **sempre .jpg**
- ✅ Caminho fixo: `/images/[pasta-produto]/[numero].jpg`
- ✅ Numeração sequencial: 1.jpg, 2.jpg, 3.jpg, 4.jpg, etc.

## ALTERAÇÕES NECESSÁRIAS

### 1. Remover Validação de Formato
```javascript
// ENCONTRAR e REMOVER código como:

// Validação de extensão
const allowedExtensions = ['.jpg', '.jpeg', '.png'];
const imagePattern = /\.(jpg|jpeg|png)$/i;
if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') { ... }

// SUBSTITUIR por código simples que assume .jpg
const imagePath = `/images/${productFolder}/${imageNumber}.jpg`;
```

### 2. Simplificar Geração de Caminhos
```javascript
// ANTES (exemplo):
function getImagePath(folder, index, format) {
    const extension = format || 'jpg';
    return `/images/${folder}/${index}.${extension}`;
}

// DEPOIS (simplificado):
function getImagePath(folder, index) {
    return `/images/${folder}/${index}.jpg`;
}
```

### 3. Remover Configurações de Formato
```javascript
// ENCONTRAR e REMOVER de CONFIG ou constantes:
const CONFIG = {
    imageFormats: ['jpg', 'jpeg', 'png'],  // REMOVER
    defaultFormat: 'jpg',                   // REMOVER
    // ... outras configs ...
};

// Manter apenas:
const CONFIG = {
    carouselTransitionSpeed: 300,
    swipeThreshold: 50,
    // ... outras configs relevantes ...
};
```

### 4. Simplificar Loops de Geração de Imagens
```javascript
// ANTES (complexo):
for (let i = 1; i <= imageCount; i++) {
    const formats = ['jpg', 'jpeg', 'png'];
    formats.forEach(format => {
        // tenta carregar cada formato
    });
}

// DEPOIS (simples):
for (let i = 1; i <= imageCount; i++) {
    const imageSrc = `/images/${productFolder}/${i}.jpg`;
    // usa diretamente
}
```

### 5. Remover Try/Catch de Formato (se houver)
```javascript
// REMOVER código que tenta diferentes formatos:
try {
    img.src = `/images/${folder}/${i}.jpg`;
} catch {
    try {
        img.src = `/images/${folder}/${i}.jpeg`;
    } catch {
        img.src = `/images/${folder}/${i}.png`;
    }
}

// Usar apenas:
img.src = `/images/${folder}/${i}.jpg`;
```

## INSTRUÇÕES PARA A IA

1. **Leia o arquivo script.js completo**
2. **Identifique TODAS as ocorrências** que lidam com formatos de imagem
3. **Simplifique o código** assumindo que tudo é .jpg
4. **Remova código desnecessário** (validações, fallbacks, detecção)
5. **Mantenha a funcionalidade** do carrossel 100% intacta
6. **Torne o código mais limpo e direto**

## ÁREAS PROVÁVEIS DE SIMPLIFICAÇÃO

### No productsData:
```javascript
// ANTES (se houver algo assim):
'logitech-g502-hero': {
    name: 'Mouse Gamer Logitech G502 HERO',
    imageCount: 5,
    imageFormat: 'jpg',  // REMOVER
    altTexts: [...]
}

// DEPOIS (simplificado):
'logitech-g502-hero': {
    name: 'Mouse Gamer Logitech G502 HERO',
    imageCount: 5,
    altTexts: [...]
}
```

### Na Classe ProductCarousel:
```javascript
// ANTES (se houver lógica complexa):
loadImage(index) {
    const formats = ['jpg', 'jpeg', 'png'];
    for (const format of formats) {
        const src = `/images/${this.folder}/${index}.${format}`;
        // tenta carregar...
    }
}

// DEPOIS (direto ao ponto):
loadImage(index) {
    const src = `/images/${this.folder}/${index}.jpg`;
    // carrega diretamente
}
```

### Em Funções de Inicialização:
```javascript
// Simplificar qualquer lógica que detecta ou valida formatos
// Usar sempre: `${numero}.jpg`
```

## VALIDAÇÃO APÓS SIMPLIFICAÇÃO

Após as alterações, o sistema deve:
```
✅ Carregar todas as imagens .jpg corretamente
✅ Carrossel funcionar perfeitamente
✅ Lazy loading funcionando
✅ Navegação por setas/indicadores/swipe OK
✅ Tema claro/escuro aplicado corretamente
✅ Código mais simples e legível
✅ Sem erros no console
✅ Performance mantida ou melhorada
```

## FORMATO DE RESPOSTA ESPERADO

Entregue o código simplificado em blocos:
```javascript
// ============================================
// SIMPLIFICAÇÃO 1: Remover validação de formato
// LOCALIZAÇÃO: Linha aproximada [X]
// ============================================

// ANTES:
[código anterior complexo]

// DEPOIS:
[código simplificado]

// JUSTIFICATIVA:
// Todas as imagens são .jpg, não há necessidade de validar múltiplos formatos


// ============================================
// SIMPLIFICAÇÃO 2: [Descrição]
// LOCALIZAÇÃO: Linha aproximada [X]
// ============================================

[repetir para cada simplificação]
```

**OU, se preferir, entregue:**
- Arquivo script.js completo já simplificado
- Lista de alterações realizadas
- Comparação antes/depois das partes mais importantes

## IMPORTANTE

### O QUE FAZER:
✅ Simplificar código relacionado a formatos de imagem
✅ Remover validações desnecessárias
✅ Assumir sempre .jpg como formato
✅ Tornar código mais limpo e direto
✅ Manter funcionalidade do carrossel intacta
✅ Comentar as simplificações realizadas

### O QUE NÃO FAZER:
❌ Alterar outras funcionalidades (tema, smooth scroll, etc)
❌ Modificar a lógica do carrossel (navegação, swipe)
❌ Mudar a estrutura de classes
❌ Adicionar novas funcionalidades
❌ Refatorar código não relacionado a imagens

## BENEFÍCIOS ESPERADOS
```
✅ Código mais simples e legível
✅ Menos linhas de código
✅ Menos complexidade (sem loops de formatos)
✅ Mais fácil de manter
✅ Performance igual ou melhor
✅ Sem validações desnecessárias
```

---

**CRÍTICO:** 
- Teste mentalmente se as alterações não quebram nada
- Mantenha os comentários no código para futuras manutenções
- Se não houver validação de formato no código atual, informe claramente
- Sempre assuma caminho: `/images/${folder}/${numero}.jpg`

Analise o script.js e simplifique todo o código relacionado a formatos de imagem, assumindo que tudo é .jpg!

✅ PROMPT COMPLETO PARA SIMPLIFICAÇÃO!
Este prompt vai:

✅ Identificar toda lógica de detecção de formato
✅ Remover código desnecessário (validações, loops, fallbacks)
✅ Simplificar para assumir sempre .jpg
✅ Tornar o código mais limpo e direto
✅ Manter toda funcionalidade intacta
✅ Documentar as mudanças realizadas

Resultado esperado:

Código JavaScript mais simples
Menos linhas de código
Mais fácil de entender e manter
Sem perda de funcionalidade