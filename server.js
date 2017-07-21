var connect = require('connect')
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + "/www")).listen(8001, function() {
    console.log('server running on 8000');
})