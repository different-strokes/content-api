module.exports = {
  settings: {
    runtime: {
      port: 3000,
      koa: {
        lowercase: {
          enabled: false,
        },
        normalize: {
          enabled: false,
        },
        trailingSlashes: {
          enabled: false,
        },
      },
    },
    build: {
      // path: '/custom-path',
      koaMiddlewares: 'src/server/koa-middlewares/index.js',
      input: { node: 'src/server.js' },
      output: { node: 'build/server' },
      targets: ['node'],
      disableProgressbar: true,
    },
  },
};
