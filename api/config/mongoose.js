import mongoose from 'mongoose'
import dotenv from 'dotenv'


dotenv.config()

const mongoDBUser = process.env.DATABASE_USER || 'myUser'
const mongoDBPass = process.env.DATABASE_PASSWORD || 'myUserPassword'
const mongoDBCredentials = (mongoDBUser && mongoDBPass) ? mongoDBUser + ':' + mongoDBPass + '@' : ''

const mongoDBHostname = process.env.DATABASE_HOST || 'localhost'
const mongoDBPort = process.env.DATABASE_PORT || '27017'
const mongoDBName = process.env.DATABASE_NAME || 'librarydb'

const mongoDBURI = process.env.DATABASE_URI || 'mongodb://' + mongoDBCredentials + mongoDBHostname + ':' + mongoDBPort + '/' + mongoDBName

//const mongoDBURI = process.env.DATABASE_URI || 'mongodb+srv://calat:'+ process.env.DB_PASSWORD +'@cluster0.i1yihyt.mongodb.net/librarydb?retryWrites=true&w=majority'
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
    console.log(mongoDBURI)
    await mongoose.connect(mongoDBURI, mongoDBOptions)
}


export default initMongoDBConnection
