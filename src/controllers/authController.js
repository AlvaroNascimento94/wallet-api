import authServices from "../services/authServices.js";

async function singup(req, res) {
    const body = req.body;

    const resService = await authServices.singup(body)
    
    res.send(resService)
}

export default { singup };
