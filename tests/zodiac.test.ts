import request from "supertest";
import app from "../src/index";
import { ERRORS } from "../src/constants/errors";

describe("GET /zodiac", () => {
  it("should return zodiac sign if birthdate is valid", async () => {
    const response = await request(app).get("/zodiac?birthdate=1996-03-07");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("zodiacSign");
    expect(response.body.zodiacSign).toBe("Pisces");
  });

  it("should return error 400 if birthdate is missing", async () => {
    const response = await request(app).get("/zodiac");
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe(ERRORS.MISSING_BIRTHDATE);
  });

  it("should return error 400 if birthdate format is incorrect", async () => {
    const response = await request(app).get("/zodiac?birthdate=1996/03/07");
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe(ERRORS.INVALID_FORMAT);
  });

  it("should return error 400 if birthdate is invalid", async () => {
    const response = await request(app).get("/zodiac?birthdate=1996-07-32");
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe(ERRORS.INVALID_DATE);
  });

  it("should return error 400 if birthdate format is incorrect", async () => {
    const response = await request(app).get("/zodiac?birthdate=1992-13-07");
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe(ERRORS.INVALID_DATE);
  });

  it("should return error 400 if birthdate format is incorrect", async () => {
    const response = await request(app).get("/zodiac?birthdate=2002-10-00");
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe(ERRORS.INVALID_DATE);
  });
});

describe("Edge cases for /zodiac", () => {
  it("should return 200 for a valid leap day (29th February of a leap year)", async () => {
    const response = await request(app).get("/zodiac?birthdate=2024-02-29");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("zodiacSign");
    expect(response.body.zodiacSign).toBe("Pisces");
  });

  it("should return 400 for an invalid leap day (29th February of a non-leap year)", async () => {
    const response = await request(app).get("/zodiac?birthdate=2023-02-29");
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe(ERRORS.INVALID_DATE);
  });
});
