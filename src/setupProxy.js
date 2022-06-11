const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/v2',
    createProxyMiddleware({
      target: 'https://newsapi.org/',
      changeOrigin: true,
    })
  );
  app.use(
    '/openapi',
    createProxyMiddleware({
      target: 'http://openapi.forest.go.kr/',
      changeOrigin: true,
    })
  );
};