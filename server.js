import http from 'http'
import fs from 'fs'
import { PORT, CONTENT_META } from './config'

const args = process.argv



http.createServer(function (req, res) {
    res.writeHead(200, CONTENT_META);
    res.end('SERVER STATUS UP');
}).listen(process.env.PORT || PORT)