const express = require("express"); // Import Express module
const router = express.Router(); // Create an instance of an Express application
const {
  listProfiles,
  readProfile,
  createProfile,
  editProfile,
  removeProfile,
} = require("../controllers/profile");
const { authCheck } = require("../middlewares/auth");

// @ENDPOINT http://localhost:5000/api/profile
// @METHOD GET [list profiles]
// @ACCESS Public
router.get("/profile", authCheck, listProfiles);

// @ENDPOINT http://localhost:5000/api/profile/:id
// @METHOD GET [read profile]
// @ACCESS Public
router.get("/profile/:id", authCheck, readProfile);

// @ENDPOINT http://localhost:5000/api/profile
// @METHOD POST [create profile]
// @ACCESS Private
router.post("/profile", authCheck, createProfile);

// @ENDPOINT http://localhost:5000/api/profile/:id
// @METHOD PUT [edit profile]
// @ACCESS Private
router.put("/profile/:id", authCheck, editProfile);

// @ENDPOINT http://localhost:5000/api/profile/:id
// @METHOD DELETE [delete profile]
// @ACCESS Private
router.delete("/profile/:id", authCheck, removeProfile);

module.exports = router;
