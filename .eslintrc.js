const tsReact = {
  files: ['**/*.ts', '**/*.tsx'],
  parserOptions: {
    project: 'tsconfig.json',
  },
  extends: 'forme/typescript-react',
}

module.exports = {
  extends: ['forme'],
  overrides: [tsReact],
}
