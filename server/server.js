const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

console.log(12)

// Используем стандартные middleware (например, для логирования)
server.use(middlewares)

// API с данными из db.json
server.use(router)

// Запускаем сервер на порту 3000
server.listen(5000, () => {
  console.log('JSON Server is running on http://localhost:5000')
})
