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
  addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: "UserAddress" }],
});

const addressSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  contactInfo: {
    type: Number,
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v.toString()); // Ensure it's exactly 10 digits
      },
      message: (props) => `${props.value} contact info must have 10 digits!`,
    },
  },
  city: String,
  pincode: {
    type: Number,
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{6}$/.test(v.toString()); // Ensure it's exactly 10 digits
      },
      message: (props) => `${props.value} pincode must have 6 digits!`,
    },
  },
  address: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export const addressModelSchema = mongoose.model("userAddress", addressSchema);

export const userModelSchema = mongoose.model("userData", userSignUpSchema); // Create and export a Mongoose model
