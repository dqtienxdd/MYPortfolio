module.exports = {
    root: true,
    extends: ['next', 'next/core-web-vitals'],
    rules: {
      // Disable specific rules
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'prefer-const': 'off',
      // Add other rules you want to disable
    },
  };