/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  useTabs: false,
  trailingComma: 'es5',
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-packagejson',
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: [
    '<TYPES>',
    '',
    '<TYPES>^[.]',
    '',
    '<BUILT_IN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^[./]',
  ],
  overrides: [
    {
      files: ['.*', '*.md', '*.toml', '*.yml', '*.yaml'],
      options: {
        useTabs: false,
      },
    },
    {
      files: ['**/*.astro'],
      options: {
        parser: 'astro',
      },
    },
  ],
};
