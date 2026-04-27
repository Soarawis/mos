require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// หน้าแรก
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// API ทดสอบ
app.get("/api/test", (req, res) => {
  res.json({ message: "API ใช้งานได้" });
});

// สำคัญสำหรับ Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});