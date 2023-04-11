import mongoose from "mongoose";
import express, { response } from "express";
import cors from "cors";
import connection from "./connection.js";
import nodeRouter from "./node-router.js";

let port = 5000;
let hostname = "127.0.0.1";
export const app = express();
app.use(express.json());
app.use(cors());
app.use("/", nodeRouter);

app.listen(port, () => {
  console.log("Listening..");
});

app.use((req, res, next) => {
  next(new Error("Page not found"));
});

app.use((error, req, res, next) => {
  if (error) {
    res.send({
      data: null,
      message: error.message,
      success: false,
    });
  }
});
