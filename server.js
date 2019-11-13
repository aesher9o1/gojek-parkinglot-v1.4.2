const http = require('http')
const Controller = require('./src/controller').default
const config = require('./config')
require('events').EventEmitter.defaultMaxListeners = 0


const args = process.argv[process.argv.length - 1]
const server = http.createServer(function (req, res) {
    res.writeHead(200, config.CONTENT_META);
    res.end('SERVER STATUS UP');
})
const controller = new Controller(server)

if (args == 'interactive')
    controller.takeInput(true)
else {
    controller.processFile(args)
}

server.listen(process.env.PORT || config.PORT)