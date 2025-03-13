const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;



app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Sajikan file langsung dari root directory



// Route halaman utama
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Route halaman isa
app.get("/isa", (req, res) => {
  res.sendFile(path.join(__dirname, "isa.html"));
});

// Route halaman al
app.get("/al", (req, res) => {
  res.sendFile(path.join(__dirname, "al.html"));
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
