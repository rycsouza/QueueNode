import "dotenv/config";
import express from "express";
import UserController from "./app/controllers/UserController";
import Queue from "./app/lib/Queue";

const app = express();

app.use(express.json());
app.post("/user", UserController.store);

app.listen(process.env.PORT, () => {
  console.log(`Server: http://localhost:${process.env.PORT}`);
});
