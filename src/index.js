import dotenv from 'dotenv'
dotenv.config()
import db from "./db/index.js";
import app from './app.js';

db()
.then(function() {
    app.listen(process.env.PORT || 4000,function() {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch(function(err) {
    console.log(`Connection with Mongodb failed ${err}`)
})