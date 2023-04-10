import notes from "../modules/model.js";

export async function findData() {
  console.log(await notes.find({}));
  return await notes.find({});
}

export async function add(dataList) {
  await notes
    .insertMany(dataList)
    .then((value) => {
      console.log("Success");
    })
    .catch((err) => {
      console.log("err", err);
    });
}

export function deleteData(dataList) {
  console.log(dataList);
  notes
    .findByIdAndDelete(dataList.id)
    .then((value) => {
      console.log("Deleted Successfully");
    })
    .catch((err) => {
      console.log("err", err);
    });
}

export function updateData(data1, data2) {
  notes
    .findOneAndUpdate(data1, data2)
    .then((value) => {
      console.log("Updated Successfully");
    })
    .catch((err) => {
      console.log("err", err);
    });
}
