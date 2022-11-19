import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './connectDB.js'
import errorHandler from './middleware/errorHandler.js'
import authMiddleware from './middleware/authMiddleware.js'
import auth from "./routes/auth.js"
import menuRoutes from "./routes/menuRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import bodyParser from "body-parser"

dotenv.config();
connectDB()
const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(auth);
app.use("/auth", auth);
app.use("/order", orderRoutes);
app.use("/menu", menuRoutes);
// app.use(authMiddleware.requireAuth)
// app.use(authMiddleware.requireAdmin)

app.get('/', (req, res) => {
    res.json('Server running')
})




//app.use(notFound)
//app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT}`
  )
)