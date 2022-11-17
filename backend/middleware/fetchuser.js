const jwt = require('jsonwebtoken');

const fetchuser = (req, res, next) =>{
    const token = req.header('authToken');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://notastic.web.app/');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    if(!token){
        res.status(401).send({error: "Invalid token"})
    }
    try {
        const data = jwt.verify(token, "lewpewmew");
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error: "invalid token"})
    }
}

module.exports = fetchuser;