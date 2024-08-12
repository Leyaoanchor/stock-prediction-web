require("dotenv").config(); // Uncomment this line if you're using environment variables

const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express(); // Instantiate app right after requiring express
app.use(cors()); // Use CORS middleware

const port = 5003;

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const runModel = (req, res) => {
  console.log("Server here");
  exec("python3 model.py", (error, stdout, stderr) => {
    if (error) {
      console.error(error.message);
      return res.status(500).send("Failed to execute model");
    }

    // Assuming the Python script outputs the path to the generated image
    const imagePath = stdout.trim(); // trim to remove any surrounding whitespace
    res.status(200).send({
      message: "Successfully ran model",

      imagePath: "/data.jpg",
    });
  });
};

app.get("/run-model", runModel); // Changed to app.get if you intend to trigger via GET request

app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Added template literal to show port number
});
