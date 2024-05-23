import {
  getAllTasks,
  createTask,
  deleteOneTask,
  updateOneTask,
  findOneTask,
  toggleTaskCompletion,
} from "../controllers/todo.controller.js";
import Router from "express";

const router = Router();

router.route("/tasks").get(getAllTasks).post(createTask);

router
  .route("/task/:id")
  .get(findOneTask)
  .put(updateOneTask)
  .delete(deleteOneTask);

// New route for toggling task completion
router.patch("/task/:id/toggleComplete", toggleTaskCompletion);

export default router;