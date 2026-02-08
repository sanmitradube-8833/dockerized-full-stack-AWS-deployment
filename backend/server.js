const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root",
  database: "userdb"
});

db.connect(err => {
  if (err) console.log("DB Error");
  else console.log("DB Connected");
});

app.post("/add", (req, res) => {
  const { name, email } = req.body;
  db.query(
    "INSERT INTO users(name,email) VALUES(?,?)",
    [name, email]
  );
  res.send("User Added Successfully");
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
