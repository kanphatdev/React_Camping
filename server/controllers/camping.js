exports.listCamping = (req, res) => {
  try {
    res.send(" list camping controller");
    console.log("list camping controller");
  } catch (error) {
    console.log("server error");
    res.status(500).json({ message: "Internal Server Error" });
  }
};
exports.readCamping = (req, res) => {
  try {
    res.send(" read camping controller");
    console.log("read camping controller");
  } catch (error) {
    console.log("server error");
    res.status(500).json({ message: "Internal Server Error" });
  }
};
exports.createCamping = (req, res) => {
  try {
    const { title, price } = req.body;
    res.send("create camping");
  } catch (error) {
    console.log("server error");
    res.status(500).json({ message: "Internal Server Error" });
  }
};
exports.editCamping = (req, res) => {
  try {
    const { title, price } = req.body;
    res.send("edit camping");
    console.log(req.params);
  } catch (error) {
    console.log("server error");
    res.status(500).json({ message: "Internal Server Error" });
  }
};
exports.removeCamping = (req, res) => {
  try {
    res.send("delete camping");
    console.log(req.params);
  } catch (error) {
    console.log("server error");
    res.status(500).json({ message: "Internal Server Error" });
  }
};
