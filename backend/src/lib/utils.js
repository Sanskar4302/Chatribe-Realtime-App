import jwt from "jsonwebtoken"

  // Generating the JWT Token .......................................
export const generateToken = (userId, res)=> {

   const token=jwt.sign({userId }, process.env.JWT_SECRET,{
    expiresIn:"7d",
   });

   // Sending Token to the user....................

   res.cookie("jwt", token,{
    maxAge: 7*24*60*60*1000, //milisecond...........
    httpOnly: true,  // prevent XSS attacks cross-site scripting attacks...........
    sameSite: "strict",  //CSRF attacks cross-site request
    secure: process.env.NODE_ENV !== "development",
   });

   return token;
};