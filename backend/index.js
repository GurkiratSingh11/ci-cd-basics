const express = require("express");
const cors = require("cors");


const app = express();
const PORT = 3000;

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:8080"],
}));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});