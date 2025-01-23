import express from "express";
import zodiacRoutes from "@routes/zodiac.routes";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 10 * 1000,
  max: 100,
});

app.use(helmet());
app.use(limiter);
app.use(zodiacRoutes);

if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Horoscope app listening on port ${PORT}`);
  });
}

export default app;
