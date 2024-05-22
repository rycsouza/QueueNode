import express from "express";

import UserController from "./app/controllers/UserController";

import "dotenv/config";

const app = express();

app.use(express.json());
app.post("/user", UserController.store);

app.listen(process.env.PORT, () => {
  console.log(`Server: http://localhost:${process.env.PORT}`);
});
