const express = require("express"); // Import Express module
const cors = require("cors"); // Import Cors module
const app = express(); // Create an instance of an Express application
const morgan = require("morgan");
const { readdirSync } = require("fs");
const handleError = require("./utils/error");
const {clerkMiddleware} = require("@clerk/express")

require("dotenv/config")
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(clerkMiddleware())
const port = 5000;

// Dynamically load and use routes
readdirSync("./routes").map((file) =>
  app.use("/api", require(`./routes/${file}`))
);
app.use(handleError);
// Start the server and listen on port 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
