import React,{useContext} from "react";

// const [currentUser,setCurrentUser]= useContext(UserContext)



export const loggedInGuestMessage = {
    title:'Logged-in Successfully',
    message:'You are logged in as Guest',
    message2: 'Your works will be saved as Guest , if you want to save under your name please Log in under your Account ',
    titleColor:'green',
    navigate:'/work'

}
//
export const loggedInUserMessage = {
    title:'Logged-in Successfully',
    message:'You are logged in as ',
    message2: 'You can save under your user name, You can find in the Gallery page all your work ',
    navigate:'/work',
    titleColor:'green',

}

export const SignInUserMessage = {
    title:'Sign-Up Successfully',
    message:'You Sign-up as ',
    message2: 'Welcome to Merger ,your Image merging app, We are Happy You Joined, You can Create your own merges , view others works, and download, Have Fun :)  ',
    navigate:'/work',
    titleColor:'green',
}

export const ErrorUserMessage = {
    title: 'Error',
    message: 'failure ',
    message2: 'the operation failed :( ',
    navigate: '/login',
    titleColor: 'red',
}
