import mongoose from "mongoose"

const Schema = mongoose.Schema

const ItemSchema = new Schema({
    // ↓追加
    title: String,
    image: String,
    price: String,
    description: String,
    email: String,
    // ↑追加
})

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

export const ItemModel = mongoose.models.Item || mongoose.model("Item", ItemSchema)
// ↓追加
export const UserModel = mongoose.models.User || mongoose.model("User", UserSchema)