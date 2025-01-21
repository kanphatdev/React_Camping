const handleError = (err, req, res, next) => {
    res
      .status(err.StatusCode || 500)
      .json({ message: err.message || "Something wrong" });
  }
module.exports = handleError

