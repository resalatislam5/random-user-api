module.exports.errorHandler = (err, req, res, next) =>{
    res.send(err.massage)
}
