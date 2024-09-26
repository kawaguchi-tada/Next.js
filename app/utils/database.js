import mongoose from "mongoose"

const connectDB = async () => {  //追加
    try {
        // ↓追加
        await mongoose.connect("mongodb+srv://kawaguchi_tada:3tenitiyon@cluster0.abuxi.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MongoDB")
    } catch {
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}
export default connectDB