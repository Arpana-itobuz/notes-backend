import mongoose from "mongoose";
import express, { response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
let port = 5000;
let hostname = "127.0.0.1";

app.listen(port, () => {
  console.log("Listening..");
});

const url = `mongodb+srv://arpana:mongo@cluster1.e758xka.mongodb.net/test`;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

const notesSchema = new mongoose.Schema({
  name: String,
});

const notes = mongoose.model("notes", notesSchema);

app.get("/", async (req, res) => {
  const data = await findData();
  res.send({
    data: data,
    message: "Data has been sent!",
    status: 200,
  });
});

app.post("/", async (req, res) => {
  await add(req.body);
  res.send(req.body);
  console.log(req.body);
});

app.delete("/", (req, res) => {
  console.log(req.body);
  deleteData(req.body);
  res.send({ message: "deleted" });
});

app.put("/", (req, res) => {
  console.log(req.body[0], req.body[1]);
  updateData(req.body[0], req.body[1]);
  res.send({ message: "data updated" });
});

async function findData() {
  console.log(await notes.find({}));
  return await notes.find({});
}

function add(dataList) {
  notes
    .insertMany(dataList)
    .then((value) => {
      console.log("Success");
    })
    .catch((err) => {
      console.log("err");
    });
}

function deleteData(dataList) {
  console.log(dataList);
  notes
    .findByIdAndDelete(dataList.id)
    .then((value) => {
      console.log("Deleted Successfully");
    })
    .catch((err) => {
      console.log("err");
    });
}

function updateData(data1, data2) {
  notes
    .findOneAndUpdate(data1, data2)
    .then((value) => {
      console.log("Updated Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
}
