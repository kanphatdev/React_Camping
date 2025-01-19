const express = require("express"); // Import Express module
const router = express.Router(); // Create an instance of an Express application
// @ENDPOINT http://localhost:5000/api/camping
// @METHOD GET [list camping]
// @ACCESS Public
router.get("/camping", (req, res) => {
  res.send("read camping");
});

// @ENDPOINT http://localhost:5000/api/camping/1
// @METHOD GET [read camping]
// @ACCESS Public
router.get("/camping/:id", (req, res) => {
    res.send("list camping");
  });
// @ENDPOINT http://localhost:5000/api/camping
// @METHOD POST [create camping]
// @ACCESS Private
router.post("/camping", (req, res) => {
    const {title,price} = req.body
  res.send("create camping");
});
// @ENDPOINT http://localhost:5000/api/camping/1
// @METHOD PUT [edit camping]
// @ACCESS Private
router.put("/camping/:id", (req, res) => {
    const {title,price} = req.body
  res.send("edit camping");
  console.log(req.params);
});
// @ENDPOINT http://localhost:5000/api/camping/1
// @METHOD DELETE [delete camping]
// @ACCESS Private
router.delete("/camping/:id", (req, res) => {
  res.send("delete camping");
  console.log(req.params);
});
module.exports = router;
