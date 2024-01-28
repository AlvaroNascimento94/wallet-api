import TransactionSchema from "../shemas/Transaction.js";

async function create(data) {
    return TransactionSchema.create(data)
}

export default {create}