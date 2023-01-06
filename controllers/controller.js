const model = require('../db/schema')

const CustomTaskNotFoundError = (res,id ) =>{
    res.status(500).send(`Cannot find task with ID: ${id}`)
}

const getTasks = async (req,res)=>{
    try {
        const allResults = await model.find({})
        res.status(200).json({allResults})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const postTask = async (req,res)=>{
    try {
        const createTask = await model.create(req.body)
        res.status(201).json({createTask})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const getTask = async (req,res)=>{
    try {
        const taskID = req.params.id
        if (taskID.match(/^[0-9a-fA-F]{24}$/)) {
            const oneResult = await model.findOne({_id : taskID})
            res.status(200).json({oneResult})
        }
        else
            CustomTaskNotFoundError(res,taskID)
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const patchTask = async (req,res)=>{
    try {
        const taskID = req.params.id
        if (taskID.match(/^[0-9a-fA-F]{24}$/)) {
            const updatedResult = await model.findOneAndUpdate({_id : taskID},req.body,{
                new : true,
                runValidators: true,
            })
            res.status(200).json({updatedResult})
        }
        else{
            CustomTaskNotFoundError(res,taskID)
        }
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const deleteTask = async (req,res) => {
    try {
        const taskID = req.params.id
        if (taskID.match(/^[0-9a-fA-F]{24}$/)) {
            const deletedResult = await model.findOneAndDelete({_id : taskID})
            res.status(200).json({deletedResult})
        }
        else
            CustomTaskNotFoundError(res,taskID)
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

module.exports = {
    getTasks,
    postTask,
    getTask,
    patchTask,
    deleteTask
}