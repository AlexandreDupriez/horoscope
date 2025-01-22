import { parse, isValid } from "date-fns";
import { ERRORS } from "@constants/errors";
const horoscope = require("horoscope");

export class ZodiacService {
  getZodiacSign(birthdate: string): string {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(birthdate)) {
      throw new Error(ERRORS.INVALID_FORMAT);
    }

    const parsedDate = parse(birthdate, "yyyy-MM-dd", new Date());
    if (!isValid(parsedDate)) {
      throw new Error(ERRORS.INVALID_DATE);
    }

    const month = parsedDate.getMonth() + 1;
    const day = parsedDate.getDate();

    return horoscope.getSign({ month, day });
  }
}
