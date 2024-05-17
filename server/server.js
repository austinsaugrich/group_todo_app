import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/mongoose.config.js";
import router from "./routes/todo.routes.js";

dotenv.config();
const app = express();

app.use(express.json(), cors());
app.use("/api", router);

const PORT = process.env.PORT;

dbConnect();

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
