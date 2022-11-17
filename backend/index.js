const express = require('express')
var cors = require('cors')
const connectToMongo = require('./db')
connectToMongo();

const app = express()
cors: {
        origin: "www.one.com";
    }

app.all('*', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", cors.origin);
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

app.use(express.json())
const port = 5000

// Available Routes 
app.use('/api/', require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes.js'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, '0.0.0.0',() => {
  console.log(`INoteBook's Server listening on port ${port}`)
})