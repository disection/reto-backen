const jwt = require("jsonwebtoken")
const { JW_SECRET } =process.env
const sign = (payload ={}) => {
    return jwt.sign(payload, JW_SECRET, {expiresIn: "5h"})
}