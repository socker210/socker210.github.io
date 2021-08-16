const tsReact = {
  files: ['**/*.ts', '**/*.tsx'],
  parserOptions: {
    project: 'tsconfig.json',
  },
  extends: 'forme/typescript-react',
  rules: {
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}

module.exports = {
  extends: ['forme'],
  overrides: [tsReact],
}
