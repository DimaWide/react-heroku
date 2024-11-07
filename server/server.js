const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const PORT = process.env.PORT || 5000;


// Используем стандартные middleware (например, для логирования)
server.use(middlewares)

// API с данными из db.json
server.use(router)


// Запускаем сервер на порту 3000
server.listen(PORT, () => {
  console.log('JSON Server is running on http://localhost:5000')
})
