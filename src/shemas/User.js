import { Schema, model} from "mongoose";

const UserShema = new Schema({
    name:{ type: String, required:true},
    email:{ type: String, unique: true, required: true},
    password:{ type: String, required: true},
    createdAt: {type: Date, default:Date.now()},
})

export default model("Users", UserShema)