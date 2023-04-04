import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import {authorRoutes} from './api/routes/AuthorRoutes.js'
import {bookRoutes} from './api/routes/BookRoutes.js'
import initMongoDBConnection from './api/config/mongoose.js'
const app = express()
const port = 3000

dotenv.config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.get('/', function (req, res) {
  res.send('Welcome to Library RESTful API')
})

app.use('/authors',authorRoutes)
app.use('/books',bookRoutes)

try{
  await initMongoDBConnection()
  app.listen(port, function () {
    console.log('Library RESTful API server started on: ' + port)
  })
}
catch(err){
  console.error('Library RESTful API could not connect to DB ' + err)
}
