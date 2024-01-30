import transactionService from "../services/transactionService.js";

async function create(req, res) {
  const body = req.body;
  const { _id: id } = res.locals.user;
  try {
    const transactions = await transactionService.create(body, id);
    return res.status(201).send(transactions);
  } catch (err) {
    res.status(409).send(err.message);
  }
}

async function findAllByUser(req, res) {
  const { _id: id } = res.locals.user;

  try {
    const transactions = await transactionService.findAllByUser(id);
    return res.status(201).send(transactions);
  } catch (err) {
    res.status(404).send(err.message);
  }
}

async function findAndUpdate(req, res) {
  const id = req.params.id
  const body = req.body

  try {
    const result = await transactionService.findAndUpdate(id,body)
    res.status(200).send(result)
  } catch (error) {
    res.status(404).send(error.message)
  }

}
async function findAndDelete(req, res) {
  const id = req.params.id
  try {
    const result = await transactionService.findAndDelete(id)
    res.status(200).send(result)
  } catch (error) {
    res. status(404).send(error.message)
  }
}

export default { create, findAllByUser, findAndUpdate, findAndDelete };
