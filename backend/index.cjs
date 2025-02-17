const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('hotels.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// Custom search route
server.get('/hotels', (req, res) => {
  const { q } = req.query // Get search query from URL

  const db = router.db.getState() // Get the database
  const filteredHotels = db.hotels.filter(hotel =>
    q
      ? (hotel.name.toLowerCase().includes(q.toLowerCase())
        || hotel.description.toLowerCase().includes(q.toLowerCase()))
      : true)

  res.json(filteredHotels)
})

server.use(router)
server.listen(3000, () => {
  console.warn('JSON Server is running')
})
