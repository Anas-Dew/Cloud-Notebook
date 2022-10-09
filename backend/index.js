const express = require('express')
const connectToMongo = require('./db')
connectToMongo();

const app = express()
app.use(express.json())
const port = 4000

// Available Routes
app.use('/api/create-user', require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes.js'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})