import { Request, Response } from "express";
import { Log } from "../models/Log";

export const getLog = async (req: Request, res: Response) => {
	const result = await Log.find().sort({ _id: -1 });
	res.status(200).json(result);
};

export const updateLog = async (req: Request, res: Response) => {
	const { status, lightValue } = req.body;
	await Log.insertMany([{ status, lightValue }]);
	res.status(200).json({ message: "Successfuly update the log" });
};
