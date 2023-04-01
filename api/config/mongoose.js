import mongoose from 'mongoose'
import dotenv from 'dotenv'

// MongoDB URI building
dotenv.config()


const mongoDBURI = process.env.DATABASE_URI || 'mongodb+srv://calat:'+ process.env.DB_PASSWORD +'@cluster0.i1yihyt.mongodb.net/librarydb?retryWrites=true&w=majority'
const mongoDBOptions = {
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const initMongoDBConnection = async () => {
    // mongoose.set('debug', true); //util para ver detalle de las operaciones que se realizan contra mongodb
    // Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
    // by default, you need to set it to false.
    // mongoose.connect(mongoDBURI)
    console.log(mongoDBOptions)
    await mongoose.connect(mongoDBURI, mongoDBOptions)
}


export default initMongoDBConnection
