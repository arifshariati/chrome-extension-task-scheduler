const path = require('path');

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            return {
                ...webpackConfig,
                entry: {
                    main: [env === 'development' &&
                        require.resolve('react-dev-utils/webpackHotDevClient'),
                    paths.appIndexJs].filter(Boolean),
                    content: path.resolve(__dirname, 'src/chrome/content.ts'),
                    background: path.resolve(__dirname, 'src/chrome/background.ts'),
                },
                output: {
                    ...webpackConfig.output,
                    filename: (chunkData) => { return chunkData.chunk.name === 'background' ? '[name].js' : 'static/js/[name].js' },
                },
                optimization: {
                    ...webpackConfig.optimization,
                    runtimeChunk: false,
                },
            }
        }
    },

}
