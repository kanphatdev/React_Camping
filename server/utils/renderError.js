const renderError = (code,message) => {
const error = new Error(message)
error.StatusCode = code
throw error
}
module.exports = renderError;