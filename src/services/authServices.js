import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js";

async function singup(body) {
  const hasPassord = bcrypt.hashSync(body.password, 10);

  const userExists = await authRepository.findByEmail(body.email);
  if (userExists) throw new Error("User already existis!");

  return await authRepository.create({ ...body, password: hasPassord });
}

async function singin(body) {
  const userExists = await authRepository.findByEmail(body.email);
  if (!userExists) throw new Error("email or password incorrect!");

  const password = bcrypt.compareSync(body.password, userExists.password);
  if (!password) throw new Error("email or password incorrect!");

  return authRepository.generateToken(userExists._id);
}

async function userLogged(id) {
  const user = await authRepository.findById(id);
  if (!user) throw new Error("User not found");
  return user;
}

export default { singup, singin, userLogged };
