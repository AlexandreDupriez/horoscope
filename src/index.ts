import express from "express";
import zodiacRoutes from "@routes/zodiac.routes";

const app = express();
app.use(express.json());
app.use(zodiacRoutes);

if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Horoscope app listening on port ${PORT}`);
  });
}

export default app;
