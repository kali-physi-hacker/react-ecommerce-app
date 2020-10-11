require('dotenv').config();
const express = require('express');

const app = express();

const dbPass = "something"
const dbUser = "Desmond"
newUrl = (dbPass, dbUser) => process.env.MONGO_PROD_CONN_URI;
process.env.NODE_ENV = 'production';
// switch (process.argv[2]){
//     case "production":
//         console.log("Kali in production");
//         break;
//     case "development":
//         console.log("Kali in development");
// }

let nums = [1, 'Desmond', 3, 4, 5];
for (let i of nums) {
    console.log(i);
}