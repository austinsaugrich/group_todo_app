import { model, Schema } from 'mongoose';
const ToDoSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Task name is required!"],
            minlength: [2, "The task name must be at least 2 characters long!"],
            maxlength: [50, "The task name must be less than 50 characters long!"]
        },
        date: {
            type: Date,
            required: [true, "Date is required!"],
        },
        details: {
            type: String,
            minlength: [2, "The details of the task must be at least 2 characters long!"],
        },
        isCompleted: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);
const Todo = model("ToDo", ToDoSchema);
export default Todo;