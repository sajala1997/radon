const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const commonmw = require("../middleware/middleware")

const createUser = async function (req, res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  try{
  let data = req.body;
  if(Object.keys(data).length !=0){
  let savedData = await userModel.create(data);
  // console.log(abcd.newAtribute);
  res.status(201).send({ msg: savedData });
  }
  else
  res.status(400).send({msg : "Bad Request"})
  }
  catch(error){
  res.status(500).send({msg: "Error", error: error.message})
  }
};

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    // return res.send({
    //   status: false,
    //   msg: "username or the password is not corerct",
    // });
    res.status(400).send({ status: false,msg : "Bad Request"})

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  // res.send({ status: true, token: token });
  res.status(201).send({status: true, token: token});

}
catch(error){
  res.status(500).send({msg: "Error", error: error.message})
  }
}


const getUserData = async function (req, res) {

//   let token = req.headers["x-Auth-token"];
//   if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  // if (!token) return res.send({ status: false, msg: "token must be present" });

//   console.log(token);
  
  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself
//   let decodedToken = jwt.verify(token, "functionup-radon");
//   if (!decodedToken)
//     return res.send({ status: false, msg: "token is invalid" });
try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    // return res.send({ status: false, msg: "No such user exists" });
    return res.status(404).send({status : false, msg : "RESOURCE NOT FOUND"})

  // res.send({ status: true, data: userDetails });
  res.status(201).send({ status: true, data: userDetails });
}
catch(error){
  res.status(500).send({msg: "Error", error: error.message})
}
};

const updateUser = async function (req, res) {
// Do the same steps here:
// Check if the token is present
// Check if the token present is a valid token
// Return a different error message in both these cases

    // let token = req.headers["x-Auth-token"]
    // if(!token)
    // token = req.headers["x-auth-token"]
    // if(!token)
    // res.send({status: false, msg : "header is not present"})

    // let decodedToken= jwt.verify(token, "functionup-radon")
    // if(!decodedToken)
    // res.send({status: false , msg:"invalid token"})
    try{

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    // return res.send("No such user exists");
    res.status(400).send({ status: false,msg : "Bad Request"})
  }

  let userData = req.body;
//   console.log(userData)
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new:true});
  // res.send({ status: updatedUser, data: updatedUser });
  res.status(201).send({ status: updatedUser, data: updatedUser });
}
catch(error){
  res.status(500).send({msg: "Error", error: error.message})
}
};

const deleteUser = async function (req, res) {

    // let token = req.headers["x-Auth-token"]
    // if(!token)
    // token = req.headers["x-auth-token"]
    // if(!token)
    // res.send({status: false, msg : "header is not present"})

    // let decodedToken= jwt.verify(token, "functionup-radon")
    // if(!decodedToken)
    // res.send({status: false , msg:"invalid token"})

  try{

    let userId = req.params.userId;
  let user = await userModel.findById(userId);
  
  if (!user) {
    // return res.send("No such user exists");
    res.status(400).send({ status: false,msg : "Bad Request"})
  }

    const del = await userModel.updateMany({_id : userId},{$set:{isDeleted : true}} , {new: true})
    // res.send({ status: true, data: del });
    res.status(201).send({ status: true, data: del });
}
catch(error){
  res.status(500).send({msg: "Error", error: error.message})
}
}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser=deleteUser;
