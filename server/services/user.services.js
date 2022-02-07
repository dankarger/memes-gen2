const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const auth = require('../middlewares/auth')



const getUsers = async ()=> {
    console.log('getUsers')
    const data =  await User.find();
    console.log('data',data)
    return (data)
    // console.log('get users')
    // return('users')
}


const findUser = async (email) => {
    const user = await User.findOne({email:email}).lean()

    return(user)
}

  const checkIfUserExist = async (email) => {
  return  await User.exists({email:email})

}

const addUser = async (req, res) => {
        await checkIfUserExist(req.body.email)
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const userObject = {
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword,
        }
    const user = await User.create(userObject)
    return (user)
}

const loginUser = async (req,res)=> {
    const {email, password} = req.body
    // await checkIfUserExist(email)
    if(await checkIfUserExist(email)===false){
        throw new Error('Cannot find user ')
    }
    const user = await findUser(email);
    console.log('uuussususs', user)
    if(!user) {
       throw new Error('Cannot find user ')
    }
     if(await bcrypt.compare(password, user.password)) {
            const accessToken = auth.createToken(user)
         return({accessToken: accessToken})
        }else {
            throw new Error('password incorrect ')
            }
}
//
// const createToken= (user) => {
//     const username = user.name;
//     const userToken = {name:username}
//     return jwt.sign(userToken, process.env.ACCESS_TOKEN_SECRET)
//
// }
//
//  const authenticateToken =(req, res , nex) => {
//
// }


module.exports={
    getUsers,
    addUser,
    findUser,
    loginUser,
    // createToken,
    // authenticateToken

}