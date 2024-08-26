import { inquiryModelSchema } from "../db/index.js";
import { hashPassword, verifyPassword } from "../utils/passWordUtils.js";
import jwt from "jsonwebtoken";

// Use Postman to Test

const SecretKey = "SECr3t";

export const userSignup = async (req, res) => {
  const {
    firstName,
    lastName,
    // age,
    occupation,
    gender,
    Email,
    userName,
    passWord,
  } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await inquiryModelSchema.findOne({ userName });
    if (existingUser) {
      return res.status(403).json({ error: "User already exists" }); // 409 Conflict status code for existing user
    }

    // Hash the password
    const hashedPassword = await hashPassword(passWord);
    // Create a new user inquiry
    const newUser = new inquiryModelSchema({
      firstName,
      lastName,
      // age,
      occupation,
      gender,
      Email,
      userName,
      passWord: hashedPassword,
    });

    // Save the new user inquiry
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ userName }, SecretKey, { expiresIn: "1h" });
    console.log(token, "signup token");

    // Respond with the new user and token
    res.status(201).json({ newUser, token });
  } catch (error) {
    console.error("Error saving inquiry:", error);
    res.status(500).json({ error: "Error saving inquiry" });
  }
};

export const userLogin = async (req, res) => {
  // console.log(jwt);

  try {
    const { userName, passWord } = req.body;

    if (!userName || !passWord) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    const user = await inquiryModelSchema.findOne({ userName });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.passWord) {
      return res
        .status(500)
        .json({ message: "User password data is corrupted" });
    }
    // console.log(token,'token from signin');

    const isPasswordValid = await verifyPassword(passWord, user.passWord);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ username: user.userName }, SecretKey, {
      expiresIn: "1h",
    });
    console.log(token, "token from signin");

    // Proceed with login (e.g., generate a token)
    if (userName && passWord) {
      res.status(200).json({ message: "Login successful", token });
    }
  } catch (error) {
    console.error("Login error:", error.response);
    res.status(500).json({ message: "An unexpected error occurred" });
  }
};
