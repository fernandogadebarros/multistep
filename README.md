<h1 align="center">Clinestetic</h1>

O **Clinestetic** é um sitema web específico para clínicas estéticas. Com este sistema o cliente é capaz de realizar agendamentos de avaliações estéticas e de procedimentos estéticos previamente indicado pelo esteticista.

***O projeto tem como base o framework [NextJS](https://nextjs.org/) e possui as seguintes ferramentas:***

- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

# Requisitos

Para que a aplicação funcione com o padrão de código específicado no projeto será necessário instalar 2 plugins em seu editor (caso não possua).

* [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

**Plugins opcionais**
* [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)
* [styled-components-snippets](https://marketplace.visualstudio.com/items?itemName=jonkwheeler.styled-components-snippets)

## Instalação

Utilize o pacote [yarn](https://classic.yarnpkg.com/en/docs/cli/run) ou  **npm** para instalar as dependências do projeto.

Comando para instalar as dependências
```bash
yarn
# ou 
npm install
```

Para rodar o projeto localmente, digite o comando:
```bash
yarn dev
# ou 
npm run dev
```

# Utilidade

Para agilidade e praticidade, o projeto possui um template pronto para ser utilizado quando for necessário desenvolver um novo componente,
basta digitar o comando em seu terminal:
```bash
yarn generate <nome-do-componente>
````
E os arquivos serão gerados na pasta **src/components**; caso haja necessidade em movê-los para outra pasta fique a vontade para realizar tal ação.

Sobre os arquivos gerados: 
* **.spec**, arquivo para desenvolvimento de testes unitários (libs **Jest** e **Testing Library**)
* **index.tsx**, arquivo do componente em si
* **interfaces.ts**, arquivo para implementar a tipagem de propriedades e métodos dos componentes
* **style.ts**, arquivo de estilização do componente (lib: **Styled Components**)

![generate](https://github.com/Jose-iel/clinestetic-front-end/assets/83285270/d9039bed-5e99-4324-9fdc-85b010da1aff)
![src](https://github.com/Jose-iel/clinestetic-front-end/assets/83285270/c7d474dc-0f18-4497-9589-4c362a679f1e)

# Importante
Quando finalizada uma nova feature e antes de criar um novo PR, é importante se atentar:

1. Em qualquer commit, o framework irá verificar padrões de código e testes desenvolvidos. Caso exista código fora do padrão e/ou testes malsucedidos, os commits não serão executados. Para ajustar padrões de código, digite em seu terminal:
```bash 
  yarn lint:fix
```
 ***Atente-se aos testes, caso não haja necessidade em criá-los por alguma razão, basta excluir o arquivo gerado automaticamente.***
  
2. Seguindo boas práticas de mercado, o projeto possui uma ferramenta utilizada para padronizar commits. Ela ajuda a manter uma estrutura consistente e facilita a compreensão do histórico.

Exemplo: 
```bash
git commit -m "feat: este é um exemplo de commit esperado"
```

3. Tipo: Indica a natureza do commit e deve ser um dos seguintes valores:

- feat: Uma nova funcionalidade adicionada ao projeto.
- fix: Uma correção de bug.
- docs: Alterações na documentação.
- style: Alterações no estilo do código (formatação, indentação, etc.), que não afetam a lógica do código.
- refactor: Mudanças no código que não adicionam uma nova funcionalidade nem corrigem um bug.
- test: Adição ou modificação de testes.
- chore: Tarefas de build, configuração, etc., que não afetam o código principal.
