const tsReact = {
  files: ['**/*.ts', '**/*.tsx'],
  parserOptions: {
    project: 'tsconfig.json',
  },
  extends: 'forme/typescript-react',
  rules: {
    'react/prop-types': 'off',
  },
}

module.exports = {
  extends: ['forme'],
  overrides: [tsReact],
}
