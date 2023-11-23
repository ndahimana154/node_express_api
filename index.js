import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 3300;

app.use(bodyParser.json());

app.use("/users", usersRoutes);
app.get("/", (req, res) => res.send("Hello buddy"));

app.listen(PORT, () =>
  console.log(`Server running on Port: http://localhost:${PORT}`)
);
