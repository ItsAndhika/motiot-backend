import { Router } from "express";
import { getLog } from "../controllers/log.controller";
import { updateLog } from "../controllers/log.controller";
export const logRouter: Router = Router();

logRouter.get("/", getLog);
logRouter.post("/", updateLog);
