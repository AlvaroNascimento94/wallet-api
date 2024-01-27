import authServices from "../services/authServices.js";

function singup(req, res) {
    const body = req.body;
    const resService = authServices.singup(body)
    res.send(resService)
}

export default { singup };
