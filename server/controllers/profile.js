exports.createProfile = (req,res) => {
    try {
        console.log("createProfile controllers");
        res.status(200).json({message:'createProfile controllers'})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Server Error'})
    }
}