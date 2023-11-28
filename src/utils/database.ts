import mongoose, { Connection } from "mongoose";

export const db: Connection = mongoose.createConnection(
	process.env.MONGODB_URI as string,
	{
		dbName: "motiot",
	}
);
