import mongoose from "mongoose";
import http from "http";

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
  note1: String,
  note2: String,
  note3: String,
  note4: String,
  note5: String,
  note6: String,
});

const notes = mongoose.model("notes", notesSchema);

const notesList = [
  {
    note1: "This is note 1",
  },
  {
    note2: "This is note 2",
  },
  {
    note3: "This is note 3",
  },
  {
    note4: "This is note 4",
  },
  {
    note5: "This is note 5",
  },
  {
    note6: "This is note 6",
  },
];

// console.log(notesList);

// async function name() {
//   await notes
//     .insertMany(notesList)
//     .then((value) => {
//       console.log("Saved Successfully");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// name();

async function note1Data() {
  const data1 = await notes.findById("642c0b8eb7fe885a7dd9ebdf").then((d) => {
    // console.log(d);
  });
  return data1;
}

note1Data();

async function note2Data() {
  const data1 = await notes.findById("642c0b8eb7fe885a7dd9ebe0").then((d) => {
    // console.log(d);
  });
  return data1;
}

note2Data();

async function note3Data() {
  const data1 = await notes.findById("642c0b8eb7fe885a7dd9ebe1").then((d) => {
    // console.log(d);
  });
  return data1;
}

note3Data();

async function note4Data() {
  const data1 = await notes.findById("642c0b8eb7fe885a7dd9ebe2").then((d) => {
    // console.log(d);
  });
  return data1;
}

note4Data();

async function note5Data() {
  const data1 = await notes.findById("642c0b8eb7fe885a7dd9ebe3").then((d) => {
    // console.log(d);
  });
  return data1;
}

note5Data();

let totalData = [];
const server = http.createServer((request, response) => {
  try {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");

    request.on("data", () => {
      console.log("data");
    });
    if (url === "/") {
      async function note6Data() {
        const data1 = await notes
          .findById("642c0b8eb7fe885a7dd9ebe4")
          .then((d) => {});
        totalData.push(Buffer.concat(data1).toString());
        console.log(totalData);
        return totalData;
      }
      response.end(note6Data());
    }
  } catch (e) {
    console.log(e);
  }
});

server.listen(5000, () => {
  console.log("Listening..");
});
