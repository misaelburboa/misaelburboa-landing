module.exports = {
  plugins: {
    // https://tailwindcss.com/docs/using-with-preprocessors#nesting
    'tailwindcss/nesting': {},

    tailwindcss: {},
    autoprefixer: {},

    // https://github.com/postcss/postcss-import
    'postcss-import': {},

    // https://github.com/csstools/postcss-advanced-variables
    'postcss-advanced-variables': {},

    // https://github.com/luisrudge/postcss-flexbugs-fixes
    'postcss-flexbugs-fixes': {},

    // https://github.com/csstools/postcss-preset-env
    'postcss-preset-env': {
      // Based on Next.js' PostCSS configuration
      // Source: https://github.com/vercel/next.js/blob/canary/packages/next/build/webpack/config/blocks/css/plugins.ts#L93-L111

      // https://github.com/postcss/autoprefixer#options
      autoprefixer: {
        // disable legacy flexbox support
        flexbox: 'no-2009',
      },

      // https://github.com/csstools/postcss-preset-env#features
      features: {
        // Enable Custom Media Queries (Stage 1)
        // https://preset-env.cssdb.org/features#custom-media-queries
        'custom-media-queries': true,

        // Disable transpilation for Custom Properties
        // https://preset-env.cssdb.org/features#custom-properties
        'custom-properties': false,

        // Enable nesting rules (Stage 1)
        // https://preset-env.cssdb.org/features#nesting-rules
        'nesting-rules': true,
      },

      stage: 3,
    },
  },
}
