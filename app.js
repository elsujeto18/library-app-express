import express from 'express'
import dotenv from 'dotenv'
import initMongoDBConnection from './api/config/mongoose.js'
const app = express()
const port = 3000

dotenv.config()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

try{
  await initMongoDBConnection()
  app.listen(port, function () {
    console.log('Library RESTful API server started on: ' + port)
  })
}
catch(err){
  console.error('Library RESTful API could not connect to DB ' + err)
}
