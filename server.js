import http from 'http'
import Controller from './src/controller'
import { PORT, CONTENT_META } from './config'

const args = process.argv[process.argv.length - 1]
const controller = new Controller()


if (args == 'true')
    controller.takeInput()
else {
    controller.processFile(args)
}


http.createServer(function (req, res) {
    res.writeHead(200, CONTENT_META);
    res.end('SERVER STATUS UP');
}).listen(process.env.PORT || PORT)