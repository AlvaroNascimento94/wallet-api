import UserShema from "../shemas/User.js";
import jwt from "jsonwebtoken";

async function create(data) {
  return await UserShema.create(data) ;
}

async function findByEmail(email) {
  const user = await UserShema.findOne({ email: email });
  return user;
}

async function generateToken(id){
    return jwt.sign({id}, process.env.SECRET, {expiresIn: 86400});
}
export default { create, findByEmail, generateToken };
