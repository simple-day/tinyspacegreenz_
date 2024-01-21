/** @type {import('next').NextConfig} */
const withImage = require('next-images');
const withFonts = require('next-fonts');

module.exports = withFonts(
  withImage({
    images: {
      unoptimized: true,
    },
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: '[name].[hash].[ext]',
            outputPath: 'public/fonts/',
            publicPath: 'public/fonts',
            esModule: false,
          },
        },
      });
      return config;
    },
    output: 'export',
  })
);