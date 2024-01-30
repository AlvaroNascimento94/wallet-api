import TransactionSchema from "../shemas/Transaction.js";

async function create(data) {
  return TransactionSchema.create(data);
}

async function findAllByUser(id) {
  return await TransactionSchema.find({ userId: id });
}

async function findAndUpdate(id, value,description,type) {
  return await TransactionSchema.updateOne(
    { _id: id },
    { value, description, type }
  );
}
async function findAndDelete(id){
    return await TransactionSchema.findByIdAndDelete(id)
}

export default { create, findAllByUser, findAndUpdate, findAndDelete };
