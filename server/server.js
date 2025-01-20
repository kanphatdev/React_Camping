const express = require("express"); // Import Express module
const cors = require("cors"); // Import Cors module
const app = express(); // Create an instance of an Express application
const campingRoute = require("./routes/camping");
const morgan = require("morgan");
// middleware
app.use(cors());
app.use(express.json());
app.use( morgan("dev"))
const port = 5000;

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start the server and listen on port 5000
app.listen(5000, () => {
  console.log(`Server is running on port ${port}`);
});
