const auth = (request,response, next) => {
    console.log("headers", request.headers)
    next()
}

module.exports = auth