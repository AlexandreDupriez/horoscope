import { Request, Response } from "express";
import { ZodiacService } from "@services/zodiac.service";
import { ERRORS } from "@constants/errors";

const zodiacService = new ZodiacService();

export class ZodiacController {
  static async getZodiacSign(req: Request, res: Response) {
    try {
      const birthdate = req.query.birthdate as string;
      if (!birthdate) {
        return res.status(400).json({ error: ERRORS.MISSING_BIRTHDATE });
      }

      const zodiacSign = zodiacService.getZodiacSign(birthdate);
      res.json({ zodiacSign });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
