const express = require('express')
var cors = require('cors')
const connectToMongo = require('./db')
connectToMongo();

const app = express()
app.use(cors())
app.use(express.json())
const port = 5000

// Available Routes
app.use('/api/', require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes.js'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})