const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');

module.exports = {
  webpack: (config, env) => {
    config.optimization.runtimeChunk = false
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    }

    config.output.filename = 'static/js/[name].js'

    config.plugins[5].options.filename = 'static/css/[name].css'
    config.plugins[5].options.moduleFilename = () => 'static/css/main.css'

    config.plugins.push(new Serve({
      middleware: (app, builtins) =>
        app.use(async (ctx, next) => {
          await next();

          ctx.set('Access-Control-Allow-Origin', '*');
          ctx.set('Access-Control-Allow-Headers', '*');
          ctx.set('Access-Control-Allow-Methods', '*');
        }),
    }))

    return config
  },
}
