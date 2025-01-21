const renderError = require("../utils/renderError");

exports.createProfile = (req,res,next) => {
    try {
        if (true) {
            return renderError(400,"password invalid")
        }
        console.log("createProfile controllers");
        res.status(200).json({message:'createProfile controllers'})
        
    } catch (error) {
        console.log(error.message);
        next(error)
    }
}