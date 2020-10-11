const mongoose = require('mongoose');

// const MONGO_URI = 'mongodb://localhost:27071/test/'
const MONGO_URI = 'mongodb://127.0.0.1:27071/test'
const MONGO_OPTS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}

mongoose.connect(MONGO_URI, MONGO_OPTS, (err)=> {
    if (err) console.log("Error Connecting to database", err);
})

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

const User = mongoose.model('User', userSchema);

const user1 = new User({
    firstName: "Desmond",
    lastName: "Brown",
    email: "browndesmond30@yahoo.com",
    password: "HACKER"
})
user1.save()

const user2 = new User({
    firstName: "Kali",
    lastName: "Junior",
    email: "kalijunior@gmail.com",
    password: "SCIENTIST"
})

user2.save()

console.log("Everything was successful");

