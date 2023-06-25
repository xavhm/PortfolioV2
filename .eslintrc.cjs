module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
  },
  extends: ['@nuxt/eslint-config-typescript', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  rules: {
    'vue/max-attributes-per-line': 'on',
    'vue/multi-word-component-names': 'on',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 'tab'],
  },
};
