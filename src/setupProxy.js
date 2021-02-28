const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    var meh;
    console.log('lalalalalalalalalaalalal');
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://test-volunteer.machetessl.org/api',
      changeOrigin: true,
    })
  );
};