
const jwt = require("jsonwebtoken");
const authenticate = async function(req,res, next){
    try{

    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) 
    // return res.send({ status: false, msg: "token must be present" });
    return res.status(400).send({ status: false, msg: "token must be present" });

    console.log(token);

    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)
    // return res.send({ status: false, msg: "token is invalid" });
    return res.status(400).send({ status: false, msg: "token must be present" });

    // next();
    }
    catch(error){
        res.status(500).send({msg: "Error", error: error.message})
    }
next();
}

const authorised = async function(req,res,next){

    try{

    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    // if (!token) return res.send({ status: false, msg: "token must be present" });

    // console.log(token);

    let decodedToken = jwt.verify(token, "functionup-radon");
    // if (!decodedToken)
    // return res.send({ status: false, msg: "token is invalid" });

    let userToBeModified = req.params.userId
    //userId for the logged-in user

    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) 
    // return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
    return res.status(401).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

}
    catch(error){
        res.status(500).send({msg: "Error", error: error.message})
    }
    next()
 
}

module.exports.authenticate=authenticate
module.exports.authorised=authorised

