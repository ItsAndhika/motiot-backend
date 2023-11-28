import { Schema } from "mongoose";
import { db } from "../utils/database";

const logSchema = new Schema({
	status: String,
	lightValue: Number,
});

export const Log = db.model("log", logSchema);
