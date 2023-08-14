const express = require("express");
const path = require("path");
const cors = require("cors");

const PORT = 3000;
const app = express();

const FRONT_ORIGIN1 = "http://127.0.0.1:5500";
const SERVER_ORIGIN = `http://localhost:${PORT}`;
const whitelist = [FRONT_ORIGIN1];

app.use(express.static(path.join(__dirname, "public")));

// For all
app.use(
  cors({
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

// Define a sample API endpoint
app.get("/api/data", (req, res) => {
  const data = {
    message: `CORS in action: You successfully fetched data from ${SERVER_ORIGIN}`,
  };
  res.json(data);
});

app.get("/api/products", (req, res, next) => {
  res.json({ message: `This is from CORS whitelist` });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message || `Error` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});