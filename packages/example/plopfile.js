module.exports = async (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) => {
  await plop.load('plop-action-eslint')

  plop.setGenerator('Template', {
    description: 'Use Template',
    prompts: [
      {
        type: 'input',
        name: 'name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'lib/{{pascalCase name}}.ts',
        templateFile: 'templates/index.ts',
        skipIfExists: true,
      },
      {
        type: 'modify',
        path: 'lib/{{pascalCase name}}.ts',
        pattern: /REPLACEME/g,
        template: '{{pascalCase name}}',
      },
      {
        // @ts-expect-error TODO: improve typing
        type: 'eslint',
        path: 'lib/{{pascalCase name}}.ts',
      },
    ],
  })
}
