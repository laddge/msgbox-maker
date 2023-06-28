module.exports = {
  printWidth: 100,
  semi: false,
  singleQuote: true,
  plugins: [require.resolve('prettier-plugin-svelte')],
  overrides: [
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
      },
    },
  ],
}
