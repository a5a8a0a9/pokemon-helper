export default {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['@vue/prettier', 'plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: '2021'
  },
  rules: {
    // "allowEmptyCatch": 0,
    'no-async-promise-executor': 'off',
    'no-self-assign': ['error', { props: false }],
    'no-empty': 'off',
    'no-prototype-builtins': 'off',
    'vue/no-unused-vars': 'off',
    'vue/valid-template-root': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-reserved-keys': 'off',
    'no-irregular-whitespace': 'off',
    'prettier/prettier': 'off',
    'comma-dangle': [
      'warn',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral']
      }
    ],
    quotes: [
      'warn',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true }
    ],
    semi: ['error', 'never'],
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1 }],
    'no-mixed-operators': 0,
    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-unreachable': 'warn',
    'no-case-declarations': 'off',
    'no-reserved-keys': 'off',
    'no-unused-vars': [
      'warn',
      {
        args: 'none'
      }
    ],
    'constructor-super': 'warn',
    'valid-typeof': 'warn',
    'space-before-function-paren': 'warn',
    'prefer-promise-reject-errors': 'off',
    'no-console': process.env.ENV_MODE === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.ENV_MODE === 'production' ? 'warn' : 'off',
    'max-len': [
      'warn',
      {
        code: 140,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'vue/max-len': [
      'warn',
      {
        code: 140,
        template: 200,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreHTMLAttributeValues: true,
        ignoreHTMLTextContents: true
      }
    ],
    'vue/no-mutating-props': ['off'],
    'vue/attributes-order': [
      'warn',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: false
      }
    ],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    // 'vue/no-lone-template': [
    //   'warn',
    //   {
    //     ignoreAccessible: false
    //   }
    // ],
    'vue/html-closing-bracket-newline': [
      'warn',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/html-closing-bracket-spacing': [
      'warn',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'never'
      }
    ],
    'vue/html-indent': [
      'warn',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/html-quotes': ['warn', 'double', { avoidEscape: false }],
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'any',
          normal: 'any',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ]
  }
}
