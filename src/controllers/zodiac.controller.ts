import { Request, Response } from "express";
import { ZodiacService } from "@services/zodiac.service";
import { ERRORS } from "@constants/errors";
import { ValidationError } from "@errors/validation-error";

const zodiacService = new ZodiacService();

export class ZodiacController {
  static async getZodiacSign(req: Request, res: Response) {
    try {
      const birthdate = req.query.birthdate as string;
      if (!birthdate) {
        throw new ValidationError(ERRORS.MISSING_BIRTHDATE);
      }

      const zodiacSign = zodiacService.getZodiacSign(birthdate);
      res.json({ zodiacSign });
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(400).json({ error: error.message });
      } else if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
}
