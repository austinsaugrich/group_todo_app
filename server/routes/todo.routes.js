import { getAllTasks, createTask, deleteOneTask, updateOneTask, findOneTask } from "../controllers/todo.controller";
import Router from "express"





const router = Router();


router.route("/tasks")
    .get(getAllTasks)
    .post(createTask)


router.route("/task/:id")
    .get(findOneTask)
    .put(updateOneTask)
    .delete(deleteOneTask)

export default router;