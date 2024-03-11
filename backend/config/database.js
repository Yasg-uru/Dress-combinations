import mongoose from "mongoose";
const connectDatabase=async function (){
    try {
        const response=await mongoose.connect(`mongodb://127.0.0.1:27017/Dress combinations`)
        console.log(`database is connected with :${response.connection.host}`)
    } catch (error) {
        console.log(`oops! error is occured in mongodb connection :${error}`)
    }
}
export default connectDatabase;