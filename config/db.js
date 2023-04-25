import colors from "colors";
import mongoose from "mongoose";

const {bgGreen,bgRed}=colors
//connect mongo db
const connectMongo=async ()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDb connected ${conn.connection.host}`.bgGreen.white)
    } catch (error) {
        console.log(error.bgRed.white)
    }
}
export default connectMongo