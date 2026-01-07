const express = require("express");
const cors = require("cors"); // import cors
const app = express();

app.use(cors()); // allow all origins
app.use(express.json());

let users = [];

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/users", (req, res) => {
  const { name, email } = req.body;
  users.push({ name, email });

  res.json({
    message: "User added",
    users: users
  });
});

app.listen(4000, () => {
  console.log("API running on http://localhost:4000");
});
