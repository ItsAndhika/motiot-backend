import express, { Application, Request, Response } from "express";
import "dotenv/config";
import { logRouter } from "./routes/log.route";

const app: Application = express();
const PORT: number = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/log", logRouter);

app.get("/", (req: Request, res: Response) => {
	res.status(200).json({ message: "This is express typescript" });
});

app.listen(PORT, () => {
	console.log(`Running on http://localhost:${PORT}`);
});
