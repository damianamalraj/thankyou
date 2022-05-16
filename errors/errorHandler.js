module.exports = {
    errorHandler(error, req, res, next) {
    res.status(500).json({
        error: 'Something went wrong, please contact your system admin',
      })
    }
}