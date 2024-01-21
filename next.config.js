/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        unoptimized: true,
    },
}

const withFonts = require("next-fonts");

module.exports = withFonts({
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
            use: {
                loader: "url-loader",
                options: {
                    limit: 100000,
                    name: "[name].[hash].[ext]",
                    outputPath: "public/fonts/",
                    publicPath: "public/fonts",
                    esModule: false,
                },
            },
        });
        return config;
    },
    output: 'export',
});