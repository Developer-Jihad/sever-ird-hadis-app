// server.js
const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// Connect to the SQLite database
const db = new sqlite3.Database("./hadith_db.db");

// Define routes

app.get("/", (req, res) => {
  res.send("Welcome to the IRD Hadith Database");
});

app.get("/books", (req, res) => {
  db.all("SELECT * FROM books", (err, rows) => {
    if (err) {
      res.status(500).send("Error fetching books");
    } else {
      res.json(rows);
    }
  });
});

app.get("/chapter", (req, res) => {
  db.all("SELECT * FROM chapter", (err, rows) => {
    if (err) {
      res.status(500).send("Error fetching chapters");
    } else {
      res.json(rows);
    }
  });
});

app.get("/section", (req, res) => {
  db.all("SELECT * FROM section", (err, rows) => {
    if (err) {
      res.status(500).send("Error fetching sections");
    } else {
      res.json(rows);
    }
  });
});

app.get("/hadith", (req, res) => {
  db.all("SELECT * FROM hadith", (err, rows) => {
    if (err) {
      res.status(500).send("Error fetching hadiths");
    } else {
      res.json(rows);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
