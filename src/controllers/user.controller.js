import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  //get user deatils from frontend
  //validation not epmty
  //check if userexists - email,username
  //check for images ,check for avatar
  //upload them to cloudinary,avatar
  //create user object,create entry in db
  //remove password and refresh token field from response
  //check for user creation
  //return res
  const { username, email, fullname, password } = req.body;
  console.log("email", email);

  
});

export default registerUser;
