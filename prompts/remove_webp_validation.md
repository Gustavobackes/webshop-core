Você é um desenvolvedor web sênior. Preciso de uma alteração simples e rápida no meu projeto de site de afiliados.

## CONTEXTO

**Projeto:** Site de Afiliados - Periféricos Essenciais  
**Estrutura:** Arquivos separados (index.html, styles.css, script.js)  
**Funcionalidade Afetada:** Sistema de carrossel de imagens

## PROBLEMA ATUAL

O JavaScript atualmente aceita múltiplos formatos de imagem:
- JPG/JPEG
- PNG
- WebP

## ALTERAÇÃO NECESSÁRIA

**Remover suporte a WebP. Aceitar apenas PNG.**

### Formatos Aceitos (APÓS alteração):
✅ .png  (único formato aceito)
✅ .jpg  (manter)
✅ .jpeg (manter)
❌ .webp (REMOVER)

## LOCALIZAÇÃO NO CÓDIGO

### Arquivo: script.js

Procure por trechos relacionados a:
- Detecção de formato de imagem
- Extensões de arquivo permitidas
- Regex ou validação de tipo de arquivo
- Configurações de formatos aceitos

### Possíveis Localizações:

**Opção 1 - Array de Extensões:**
```javascript
// ANTES (encontrar algo assim):
const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

// DEPOIS (alterar para):
const allowedExtensions = ['.jpg', '.jpeg', '.png'];
Opção 2 - Regex Pattern:
javascript// ANTES:
const imagePattern = /\.(jpg|jpeg|png|webp)$/i;

// DEPOIS:
const imagePattern = /\.(jpg|jpeg|png)$/i;
Opção 3 - Validação de Tipo:
javascript// ANTES:
if (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.webp') {

// DEPOIS:
if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
Opção 4 - Switch/Case:
javascript// ANTES:
switch(extension) {
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'webp':  // REMOVER este case
        return true;
}

// DEPOIS:
switch(extension) {
    case 'jpg':
    case 'jpeg':
    case 'png':
        return true;
}
Opção 5 - Configuração Global:
javascript// ANTES:
const CONFIG = {
    imageFormats: ['jpg', 'jpeg', 'png', 'webp']
};

// DEPOIS:
const CONFIG = {
    imageFormats: ['jpg', 'jpeg', 'png']
};
INSTRUÇÕES PARA A IA

Leia o arquivo script.js completo
Identifique TODAS as ocorrências que validam ou verificam formato de imagem
Remova APENAS a referência a WebP de cada local
Mantenha JPG, JPEG e PNG funcionando
NÃO altere nenhuma outra funcionalidade
Retorne apenas o trecho de código alterado com comentários indicando o que foi mudado

VALIDAÇÃO
Após a alteração, o sistema deve:
✅ Carregar imagens .jpg normalmente
✅ Carregar imagens .jpeg normalmente  
✅ Carregar imagens .png normalmente
❌ NÃO tentar carregar .webp
✅ Carrossel continuar funcionando perfeitamente
✅ Lazy loading funcionando
✅ Todas as outras funcionalidades intactas
FORMATO DE RESPOSTA ESPERADO
javascript// ============================================
// ALTERAÇÃO: Remover suporte a WebP
// ARQUIVO: script.js
// LINHA APROXIMADA: [número]
// ============================================

// ANTES:
const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

// DEPOIS:
const allowedExtensions = ['.jpg', '.jpeg', '.png'];

// ============================================
// FIM DA ALTERAÇÃO
// ============================================
OU, se não houver validação explícita de formato:
RESPOSTA:
O código atual não possui validação explícita de formato de imagem.
O sistema carrega qualquer imagem na pasta numerada (1.jpg, 2.png, etc.).
Nenhuma alteração necessária no JavaScript.

RECOMENDAÇÃO:
Para garantir apenas PNG/JPG:
1. Renomear todas as imagens WebP para PNG
2. Ou adicionar validação se desejar bloquear WebP explicitamente
IMPORTANTE

✅ Alteração cirúrgica (apenas remover WebP)
✅ Não quebrar funcionalidade existente
✅ Código limpo e funcional
✅ Comentário explicando a mudança
❌ NÃO refatorar outras partes do código
❌ NÃO adicionar funcionalidades novas


CRÍTICO: Se o código atual NÃO valida formato de imagem (carrega qualquer arquivo numerado), informe isso claramente e explique que nenhuma alteração é necessária no JavaScript.
Analise o script.js e retorne apenas o(s) trecho(s) de código que precisa(m) ser alterado(s) para remover suporte a WebP.