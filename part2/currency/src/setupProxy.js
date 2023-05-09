const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

    app.use(
        '/data/2.5/weather', //this is your api
        createProxyMiddleware({
            target:'https://samples.openweathermap.org', //this is your whole endpoint link
            https: true,
            secure: true ,
            ws: false,
            changeOrigin: true,
            headers: {
                "Host": 'samples.openweathermap.org',
                "Origin": 'samples.openweathermap.org',
                "Connection": "keep-alive",
                'Access-Control-Allow-Origin': '*'
            },
        })
    );

};