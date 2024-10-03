import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { secretKey } from "../server.js";
export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) 
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    
    const hash =await bcryptjs.hash(password, 10);
    const newUser = await  User.create({
      name,
      email,
      password: hash,
    });
     newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", newUser, success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) 
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) 
      return res
        .status(400)
        .json({ message: "Invalid password", success: false });
    
    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "365d",
    });
 
    res.status(200).json({
      message: `welcome ${user.name}, You are loggedIn successfully`,
      token,
      success: true,
    });
    console.log(token)

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
