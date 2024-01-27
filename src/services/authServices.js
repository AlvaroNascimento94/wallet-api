import bcrypt from "bcrypt"
import authRepository from "../repositories/authRepository.js"

async function singup(body) {
  const hasPassord = bcrypt.hashSync(body.password,10)

  const userExists = await authRepository.findByEmail(body.email)
  if(userExists) throw new Error("User already existis!")

  return await authRepository.create({...body, password:hasPassord})
  
}

export default { singup };
