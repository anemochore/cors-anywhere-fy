// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

process.env.CORSANYWHERE_WHITELIST = 'https://www.dropbox.com';  //dev

console.log(process.env.CORSANYWHERE_WHITELIST)
var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    
    originWhitelist: (process.env.CORSANYWHERE_WHITELIST || '').split(','),
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});