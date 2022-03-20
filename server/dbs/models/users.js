import mongoose from 'mongoose'
const Schema = mongoose.Schema
const USerSchema = new Schema({
    username: {
        required: true,
        unique: true,
        type: String
    },
    password: {
        required: true,
        type: String

    },
    email: {
        type: String,
        require: true
    }
})
export default mongoose.model('User', UserSchema)