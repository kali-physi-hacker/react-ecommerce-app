require('dotenv').config();

const SECRET = process.env.SECRET;
const PORT = process.env.PORT;
let MONGODB_URI = ''
const MONGODB_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}

switch (process.env.NODE_ENV){
    case "development":
        MONGODB_URI = process.env.MONGO_DEV_CONN_URI
        break;
    case "production":
        MONGODB_URI = process.env.MONGO_PROD_CONN_URI
        break;
    default:
        MONGODB_URI = process.env.MONGO_DEV_CONN_URI;
}


module.exports = {
    MONGODB_URI,
    MONGODB_OPTIONS,
    PORT,
    SECRET
}