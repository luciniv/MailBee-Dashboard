import express from "express";
import cors from "cors";
import { config } from "dotenv";
import dashboardRoutes from "./routes/dashboard.js";

config();

const allowedOrigins = process.env.CORS_ORIGINS?.split(",") || [];
console.log("Allowed origins:", allowedOrigins);

const app = express();

app.use(cors({
    origin: (origin, callback) => {
      console.log("test")
      console.log("CORS origin header:", origin);
      // Allow requests with no origin (like curl/postman)
      if (!origin) return callback(null, true);
  
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true
  }));

// app.use("/api/dashboard", dashboardRoutes);
// app.use("/api/users", userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});

