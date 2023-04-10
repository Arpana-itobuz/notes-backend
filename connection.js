import { userData } from "../modules/config.js";
import mongoose from "mongoose";

const url = `mongodb+srv://${userData.username}:${userData.password}@cluster1.e758xka.mongodb.net/${userData.dbName}?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

export default connection;
