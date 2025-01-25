exports.listProfiles = (req, res) => {
  try {
    res.send("List profiles controller");
    console.log("List profiles controller");
  } catch (error) {
    console.log("Server error");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.readProfile = (req, res) => {
  try {
    res.send("Read profile controller");
    console.log("Read profile controller");
  } catch (error) {
    console.log("Server error");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.createProfile = (req, res,next) => {
  try {
    const { firstname, lastname} = req.body;
    res.json({ firstname, lastname});
    console.log("Profile created with:", { firstname, lastname,clerkid });
  } catch (error) {
    console.log("Server error");
    res.status(500).json({ message: "Internal Server Error" });
    next(error)
  }
};

exports.editProfile = (req, res) => {
  try {
    const { name, age } = req.body;
    res.send("Edit profile");
    console.log("Profile ID to edit:", req.params.id, "New data:", { name, age });
  } catch (error) {
    console.log("Server error");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.removeProfile = (req, res) => {
  try {
    res.send("Delete profile");
    console.log("Profile ID to delete:", req.params.id);
  } catch (error) {
    console.log("Server error");
    res.status(500).json({ message: "Internal Server Error" });
  }
};
