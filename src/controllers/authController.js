import authServices from "../services/authServices.js";

async function singup(req, res) {
  const body = req.body;
  try {
    const resService = await authServices.singup(body);
    res.status(201).send(resService);
  } catch (err) {
    res.status(409).send(err.message);
  }
}

async function singin(req, res) {
  const body = req.body;
  try {
    const token = await authServices.singin(body);
    return res.send(token);
  } catch (err) {
    res.status(401).send(err.message);
  }
}

async function userLogged(req, res) {
  const { _id: id } = res.locals.user;
  try {
    const user = await authServices.userLogged(id)
    return res.send(user)
    
  } catch (error) {
    return res.status(404).send(error.message)
  }

}
export default { singup, singin, userLogged };
