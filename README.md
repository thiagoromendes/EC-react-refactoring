# React Refactoring

## Roteiro

### Estrutura inicial:

- React com framework de design (Material UI)
- Componentes criados com classe
- Formulário extenso com diferentes tipos de inputs e níveis de estrutura de dados
- Componentes de input expostos na página de formulário
- Componentes controlados
- Lógica de validação exposta no código de formulário

### Problemas identificados:

- Baixo desempenho
- Dificuldade em alteração e manutenção do código

### Proposta de refatoração

- Mudar componente de classe para componente funcional
- Usar hooks customizados para manipular dados do formulário
- Segmentar componentes da página de formulário
- Usar lib para registrar e validar elementos do formulário
