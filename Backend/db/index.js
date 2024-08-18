import mongoose from "mongoose";

const userSignUpSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  // age: { type: Number, min: 0, max: 120 },
  occupation: String,
  Email: String,
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  userName: String,
  passWord: { type: String, require: true },
});

export const inquiryModelSchema = mongoose.model("userData", userSignUpSchema); // Create and export a Mongoose model
