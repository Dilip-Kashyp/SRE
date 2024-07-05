const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5600;

app.use(express.json());

const studentRoute = require("./routes/studentRoute.js");
app.use("/api/v1/student", studentRoute);
// app.use("/api/v1/auth", studentauth);

app.listen(port, () => {
  const message = `    ------------------------------------------
        server running on http://localhost:${port}/
    ------------------------------------------`;
  console.log(message);
});
