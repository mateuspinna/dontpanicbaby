import { Router } from "express";
import { createAttempt, attemptList } from "../controllers/attemptController.js";

const router = Router();

router
.route("/api/attempt")
.get(attemptList)
.post(createAttempt);

export { router };