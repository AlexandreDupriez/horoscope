import { Router } from "express";
import { ZodiacController } from "@controllers/zodiac.controller";

const router = Router();
router.get("/zodiac", ZodiacController.getZodiacSign);

export default router;
