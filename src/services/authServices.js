import bcrypt from "bcrypt"
import authRepository from "../repositories/authRepository.js"

function singup(body) {
  const hasPassord = bcrypt.hashSync(body.password,10)

  return authRepository.create({...body, password:hasPassord})
  
}

export default { singup };
