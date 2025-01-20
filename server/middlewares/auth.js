exports.authCheck = (req,res,next) => {
try {
    console.log("middleware");
    if (true) {
      next()
    }else{
      res.status(401).json({ message: "access denied" });
    }
  
} catch (error) {
  res.status(500).json({ message: "Internal Server Error" });
}

  
}