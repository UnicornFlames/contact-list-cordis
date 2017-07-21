var connect = require('connect')
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + "/www")).listen(8000, function() {
    console.log('server running on 8000');
})