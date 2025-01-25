const renderError = require("../utils/renderError");
const {clerkClient} = require("@clerk/express")
exports.authCheck =async (req, res, next) => {
  try {
const userId = req.auth.userId;
if (!userId) {
  return renderError(401,'unauthorize!!')
}
next()
const user = await clerkClient.users.getUser(userId)
  } catch (error) {
    next(error)
  }
};
