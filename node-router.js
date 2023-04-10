import { Router } from "express";
import { add, deleteData, updateData, findData } from "../modules/functions.js";

const nodeRouter = Router();

nodeRouter.get("/", async (req, res) => {
  try {
    const data = await findData();
    res.send({
      data: data,
      message: "Data has been sent!",
      status: 200,
    });
  } catch (err) {
    res.send({
      data: null,
      message: "Failed to fetch notes",
      status: 404,
    });
  }
});

nodeRouter.post("/", async (req, res) => {
  await add(req.body);
  res.send(req.body);
});

nodeRouter.delete("/", (req, res) => {
  deleteData(req.body);
  res.send({ message: "deleted" });
});

nodeRouter.put("/", (req, res) => {
  updateData(req.body[0], req.body[1]);
  res.send({ message: "data updated" });
});

nodeRouter.use((req, res, next) => {
  next(new Error("Page not found"));
});

nodeRouter.use((error, req, res, next) => {
  if (error) {
    res.send({
      data: null,
      message: error.message,
      success: false,
    });
  }
});
