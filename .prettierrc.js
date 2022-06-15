// INFO: https://prettier.io/docs/en/options.html

module.exports = {
  // Specify the line length that the printer will wrap on
  // INFO: https://prettier.io/docs/en/options.html#print-width
  printWidth: 100,

  // Specify the number of spaces per indentation-level
  // INFO: https://prettier.io/docs/en/options.html#tab-width
  tabWidth: 2,

  // Indent lines with spaces.
  // INFO: https://prettier.io/docs/en/options.html#tabs
  tabs: false,

  // Add a semicolon at the end of every statement
  // INFO: https://prettier.io/docs/en/options.html#semicolons
  semi: false,

  // Use single quotes
  // INFO: https://prettier.io/docs/en/options.html#quotes
  singleQuote: true,

  // Only add quotes around object properties where required
  // INFO: https://prettier.io/docs/en/options.html#quote-props
  quoteProps: 'as-needed',

  // Use double quotes in JSX
  // INFO: https://prettier.io/docs/en/options.html#jsx-quotes
  jsxSingleQuote: false,

  // Trailing commas where valid in ES5 (objects, arrays, etc.). No trailing commas in type parameters in TypeScript
  // INFO: https://prettier.io/docs/en/options.html#trailing-commas
  trailingComma: 'es5',

  // Print spaces between brackets in object literals
  // INFO: https://prettier.io/docs/en/options.html#bracket-spacing
  bracketSpacing: true,

  // Put the `>` of a multi-line HTML element on the next line
  // INFO: https://prettier.io/docs/en/options.html#bracket-line
  bracketSameLine: false,

  // Always include parens
  // INFO: https://prettier.io/docs/en/options.html#arrow-function-parentheses
  arrowParens: 'always',

  // Do not require a special marker to format a file with Prettier
  // INFO: https://prettier.io/docs/en/options.html#require-pragma
  requirePragma: false,

  // Do not insert a special marker when a file has been formatted with Prettier
  // INFO: https://prettier.io/docs/en/options.html#insert-pragma
  insertPragma: false,

  // Wrap prose as-is
  // INFO: https://prettier.io/docs/en/options.html#prose-wrap
  proseWrap: 'preserve',

  // Respect the default value of CSS `display` property. For Handlebars treated same as `strict`
  // INFO: https://prettier.io/docs/en/options.html#html-whitespace-sensitivity
  htmlWhitespaceSensitivity: 'css',

  // Line Feed only (\n), common on Linux and macOS as well as inside git repos
  // INFO: https://prettier.io/docs/en/options.html#end-of-line
  endOfLine: 'lf',

  // Format embedded code if Prettier can automatically identify it
  // INFO: https://prettier.io/docs/en/options.html#embedded-language-formatting
  embeddedLanguageFormatting: 'auto',

  // INFO: https://github.com/trivago/prettier-plugin-sort-imports#importorder
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/hooks/(.*)$', '^@/components/(.*)$', '^[./]'],

  // INFO: https://github.com/trivago/prettier-plugin-sort-imports#importorderseparation
  importOrderSeparation: true,

  // INFO: https://github.com/trivago/prettier-plugin-sort-imports#importordersortspecifiers
  importOrderSortSpecifiers: true,
}
