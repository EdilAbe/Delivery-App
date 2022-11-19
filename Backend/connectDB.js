import mongoose from 'mongoose'
// import  dotenv from 'dotenv'
// dotenv.config()

const connectDB = async () => {
  try {
const db  = await mongoose.connect(process.env.DATABASE_URL);

//const db = mongoose.connection;

console.log(`MongoDB Connected: ${db.connection.host}`)

    }
  catch(error){
    console.error(`Error: ${error.message}`)
  }}

export default connectDB