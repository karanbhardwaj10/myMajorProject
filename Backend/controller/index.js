import { inquiryModelSchema } from "../db/index.js";
import { hashPassword, verifyPassword } from "../utils/passWordUtils.js";

// Use Postman to Test
export const userSignup = async (req, res) => {
  console.log("5", req.body);
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
  const hashedPassword = await hashPassword(passWord);
  console.log(hashedPassword);
  try {
    const newInquiry = new inquiryModelSchema({
      firstName,
      lastName,
      // age,
      occupation,
      gender,
      Email,
      userName,
      passWord: hashedPassword,
    });
    console.log(newInquiry);
    await newInquiry.save();
    res.status(201).json(newInquiry);
  } catch (error) {
    console.error("Error saving inquiry:", error);
    res.status(500).json({ error: "Error saving inquiry" });
  }
};

export const userLogin = async (req, res) => {

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

    const isPasswordValid = await verifyPassword(passWord, user.passWord);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Proceed with login (e.g., generate a token)
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
};
