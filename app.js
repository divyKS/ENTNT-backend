require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
var cors = require("cors");

const app = express();

const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const notificationsRouter = require("./routes/notifications");
const calendarRouter = require("./routes/calendar");

connectDB();
const PORT = process.env.PORT || 3500;

app.use(cors({
    origin: ["https://entnt-frontend-divy.vercel.app", "http://localhost:3000"], // Add your local development URL if needed
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/notifications", notificationsRouter);
app.use("/api/calendar", calendarRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
