module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}.tsx',
        templateFile: 'layout/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/styles/components/{{lowerCase name}}.scss',
        templateFile: 'layout/style.scss.hbs'
      }
    ]
  });
};
