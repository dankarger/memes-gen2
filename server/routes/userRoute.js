const express = require('express');
const userRoute = express.Router();
const userController = require('../controller/user.controller')




userRoute.get('/',userController.getUsers)
userRoute.post('/login',userController.loginUser)
userRoute.get('/find',userController.getUser)
userRoute.post('/',userController.addUser)




module.exports = userRoute;
