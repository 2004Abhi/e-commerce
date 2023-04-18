import  express from "express";
import * as dotenv from 'dotenv';
import morgan from "morgan";
import connectMongo from "./db.js";
import authRouter from './routes/authRouter.js'

//configure dotenv
dotenv.config();

//connect DB
connectMongo();

//rest obj
const app = express()

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRouter)

//rest api
app.get('/', (req,res) => {
    res.send("<h1>ECOM Here i cum</h1>")
})
const PORT=process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is Listening on ${PORT}`)
})