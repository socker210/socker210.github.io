module.exports = {
  '*.{js,ts,tsx}': ['pnpm lint', 'pnpm prettier'],
  '*.{ts,tsx}': [() => 'pnpm type'],
}
