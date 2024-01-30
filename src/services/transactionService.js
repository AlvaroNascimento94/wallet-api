import transactionRepository from "../repositories/transactionRepository.js"

async function create(body, id){
    if(!id) throw new Error("user id required")
    return await transactionRepository.create({...body, userId:id})
}

async function findAllByUser(id){
    if(!id) throw new Error("user id required")
    return await transactionRepository.findAllByUser(id)
}

async function findAndUpdate(id, {value,description,type}){
    if(!id) throw new Error("Id not found")
    await transactionRepository.findAndUpdate(id,value,description,type)
return ("Change successfully")
}

async function findAndDelete(id){
    if(!id) throw new Error("Id not found")
    await transactionRepository.findAndDelete(id)
    return ("Delete Successfully")

}

export default {create, findAllByUser,findAndUpdate, findAndDelete}