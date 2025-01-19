const express = require("express"); // Import Express module
const router = express.Router(); // Create an instance of an Express application
const {
  listCamping,
  readCamping,
  createCamping,
  editCamping,
  removeCamping,
} = require("../controllers/camping");
// @ENDPOINT http://localhost:5000/api/camping
// @METHOD GET [list camping]
// @ACCESS Public
router.get("/camping", listCamping);

// @ENDPOINT http://localhost:5000/api/camping/1
// @METHOD GET [read camping]
// @ACCESS Public
router.get("/camping/:id", readCamping);
// @ENDPOINT http://localhost:5000/api/camping
// @METHOD POST [create camping]
// @ACCESS Private
router.post("/camping", createCamping);
// @ENDPOINT http://localhost:5000/api/camping/1
// @METHOD PUT [edit camping]
// @ACCESS Private
router.put("/camping/:id", editCamping);
// @ENDPOINT http://localhost:5000/api/camping/1
// @METHOD DELETE [delete camping]
// @ACCESS Private
router.delete("/camping/:id", removeCamping);
module.exports = router;
