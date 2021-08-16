// https://storybook.js.org/docs/react/configure/webpack

const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['#'] = path.resolve(__dirname, '../src')
    config.resolve.alias['~components'] = path.resolve(__dirname, '../src/components')
    config.resolve.alias['~images'] = path.resolve(__dirname, '../assets/images')

    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "webpack5"
  }
}
