import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'




import dotenv from 'dotenv'
import connectDB from './db/index.js'
// Call the connectDB function to establish the connection

dotenv.config({
    path: './.env'
})
// Import the connectDB function from db/index.js
// Ensure that the environment variable is set



connectDB()
.then(() => {
    app.listen(process.env.PORT  || 8000 , () => {
        console.log(`Server is Running on PORT : ${process.env.PORT }`);
        
    })
})
.catch( (error) => {
    console.log('MONGODB CONNECTION FAILED !!!' , error);
    
} )








// import express from 'express'
// const app = express()

// ;( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error" , (error) => {
//             console.log('Error connecting to MongoDB' , error);
//             throw error;
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`app is listening on port ${process.env.PORT}`);    
//       })
//     }
//     catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         throw error   ;
//     }
    
// })();


