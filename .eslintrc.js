module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 'latest'
  },
  'globals': {
    'define': 'readonly',
    'describe': 'readonly',
    'it': 'readonly',
    'afterEach': 'readonly',
    'beforeEach': 'readonly',
    'jasmine': 'readonly',
    'expect': 'readonly',
    'buzz': 'writable'
  },
  'rules': {
  }
}
