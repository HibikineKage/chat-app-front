module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb'],
  parser: 'typescript-eslint-parser',
  plugins: ['typescript'],
  rules: {
    'no-unused-vars': 0,
    'no-undef': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],
  },
};
