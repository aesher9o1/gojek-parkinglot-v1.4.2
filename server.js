import http from 'http'
import Controller from './src/controller'
import { PORT, CONTENT_META } from './config'
require('events').EventEmitter.defaultMaxListeners = 0


const args = process.argv[process.argv.length - 1]
const server = http.createServer(function (req, res) {
    res.writeHead(200, CONTENT_META);
    res.end('SERVER STATUS UP');
})
const controller = new Controller(server)



if (args == 'interactive')
    controller.takeInput()
else {
    controller.processFile(args)
}


server.listen(process.env.PORT || PORT)