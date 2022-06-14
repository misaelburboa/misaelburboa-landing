module.exports = {
  extends: [
    // https://www.npmjs.com/package/stylelint-config-standard
    'stylelint-config-standard',

    // https://github.com/prettier/stylelint-config-prettier
    'stylelint-config-prettier',

    // https://www.npmjs.com/package/stylelint-a11y
    'stylelint-a11y/recommended',

    // https://www.npmjs.com/package/stylelint-config-css-modules
    'stylelint-config-css-modules',

    // https://www.npmjs.com/package/stylelint-config-recess-order
    'stylelint-config-recess-order',
  ],
  plugins: [
    // https://www.npmjs.com/package/stylelint-media-use-custom-media
    'stylelint-media-use-custom-media',

    // https://www.npmjs.com/package/stylelint-use-nesting
    'stylelint-use-nesting',
  ],
  rules: {
    'declaration-block-no-duplicate-properties': true,
    // Requires nesting where applicable
    'csstools/use-nesting': 'always',

    // Specify a list of disallowed units
    // https://stylelint.io/user-guide/rules/list/unit-disallowed-list
    'unit-disallowed-list': [
      // https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#absolute_length_units
      ['cm', 'mm', 'Q', 'in', 'pc', 'pt', 'px'],
      {
        ignoreProperties: {
          px: [/^border/, /^box-shadow/, /^outline$/],
        },
      },
    ],
    'at-rule-no-unknown': null,

    //
    // stylelint
    // https://stylelint.io/user-guide/rules/list
    //

    // Specify camel case convention for keyframe names
    // https://stylelint.io/user-guide/rules/list/keyframes-name-pattern
    'keyframes-name-pattern': [
      '^[a-z][a-zA-Z0-9]+$',
      {
        message: 'Expected keyframe name to be in camelCase',
      },
    ],

    // Specify camel case convention for class selectors
    // https://stylelint.io/user-guide/rules/list/selector-class-pattern
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]+$',
      {
        message: 'Expected class selector to be in camelCase',
      },
    ],
  },
}
