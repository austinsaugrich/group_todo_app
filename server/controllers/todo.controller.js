import Todo from "../models/todo.model";


async function createTask(req, res) {
    try {
        const newTask = await Todo.create(req.body);
        res.json(newTask);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function getAllTasks(req, res) {
    try {
        const allTasks = await Todo.find();
        res.json(allTasks);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function updateOneTask(req, res) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedTask = await Todo.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedTask);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function deleteOneTask(req, res) {
    try {
        const deletedTask = await Todo.findByIdAndDelete(req.params.id);
        res.json(deletedTask);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function findOneTask(req, res) {
    try {
        const task = await Todo.findById(req.params.id)
        res.json(task)
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}








export {
    createTask,
    getAllTasks,
    updateOneTask,
    deleteOneTask,
    findOneTask

}