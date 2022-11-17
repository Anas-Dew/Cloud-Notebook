const express = require('express')
var cors = require('cors')
const connectToMongo = require('./db')
connectToMongo();

const app = express()
const allowedOrigins = ['notastic.web.app'];
app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }

}));
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