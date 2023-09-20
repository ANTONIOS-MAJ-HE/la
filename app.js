const express = require ('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)

app.use(express.static('plantillas'));

io.on('connection', (socket) => {   socket.on('chat', (msg) => {
        io.emit('chat', msg)
    })
})


app.get('/', (req, resp) => {
    resp.sendFile(`${__dirname}/plantillas/chat_view.html`)
})

server.listen(3200,() => {
    console.log('Servidor corriendo en http://localhost:3200')
})