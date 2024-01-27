import UserShema from "../shemas/User.js";

async function create(data) {
  return await UserShema.create(data) ;
}

async function findByEmail(email) {
  const user = await UserShema.findOne({ email: email });
  return user;
}
export default { create, findByEmail };
