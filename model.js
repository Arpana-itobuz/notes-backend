import { notesSchema } from "../modules/schema.js";
import mongoose from "mongoose";

const notes = mongoose.model("notes", notesSchema);

export default notes;
console.log(notes);