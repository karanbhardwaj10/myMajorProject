import { addressModelSchema, userModelSchema } from "../db/index.js";
import { hashPassword, verifyPassword } from "../utils/passWordUtils.js";
import * as fs from "fs";
import * as path from "path";

import mongoose from "mongoose";

import jwt, { decode } from "jsonwebtoken";

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
    const existingUser = await userModelSchema.findOne({ userName });
    if (existingUser) {
      return res.status(403).json({ error: "User already exists" }); // 409 Conflict status code for existing user
    }

    // Hash the password
    const hashedPassword = await hashPassword(passWord);
    // Create a new user inquiry
    const newUser = new userModelSchema({
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
        .json({ message: "Username and password are required", res });
    }

    const user = await userModelSchema.findOne({ userName });
    console.log(user, "user");

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
      // console.log(res);

      res.status(200).json({ message: "Login successful", token, user });
    }
  } catch (error) {
    console.error("Login error:", error.response);
    res.status(500).json({ message: "An unexpected error occurred" });
  }
};

export const getAddress = async (req, res) => {
  try {
    const userToken = req.headers.authorization.split(" ")[1];
    console.log(userToken, "user token from controller");
    const decodeduserName = jwt.decode(userToken).username;
    console.log(decodeduserName, "decoded token");
    if (decodeduserName) {
      console.log("inside if get address");

      const user = await userModelSchema.findOne({ userName: decodeduserName });
      if (user) {
        console.log("user found", user);

        const userAddresses = await user.populate("addresses");
        console.log("user address populate after populate");
        if (userAddresses) {
          try {
            res.status(200).json({ data: userAddresses.addresses });
          } catch (error) {
            res
              .status(500)
              .json({ message: `error getting address :${error}` });
          }
        }
      }
    }
  } catch (error) {
    throw new Error(`Error in Get Address service${error}`);
  }
};

export const userAddress = async (req, res) => {
  try {
    const {
      fullName,
      email,
      contactInfo,
      city,
      pincode,
      address,
      addressType,
    } = req.body;
    const newAddress = new addressModelSchema({
      fullName,
      email,
      contactInfo,
      city,
      pincode,
      address,
      addressType,
    });
    const userToken = req.headers.authorization.split(" ")[1];
    console.log(userToken, "user token from controller");
    const decodeduserName = jwt.decode(userToken).username;
    console.log(decodeduserName, "decoded token");
    if (decodeduserName) {
      const user = await userModelSchema.findOne({ userName: decodeduserName });
      if (user) {
        try {
          user.addresses.push(newAddress);
          await user.save();
          //res.status(200).json({ message: "Address added successfully" });
        } catch (error) {
          res.status(500).json({ message: `error save address :${error}` });
        }
      }
    }
    await newAddress.save();
    res.status(200).json({ message: "Address Saved", newAddress });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      // Handle Mongoose validation errors
      const errors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ error: `${errors.join(", ")}` });
    } else {
      // Handle other errors
      res.status(500).json({ error: `Error saving address: ${error.message}` });
    }
  }
};

export const updateAddress = async (req, res) => {
  try {
    const userAddress = await addressModelSchema.findByIdAndUpdate(
      req.params.addressId,
      req.body,
      { new: true }
    );
    if (userAddress) {
      res.json({ message: "userAddress updated successfully" });
    } else {
      res.status(404).json({ message: "userAddress not found" });
    }
  } catch (error) {
    throw new Error("error occured ", error);
  }
};
export const deleteUserAddress = async (req, res) => {
  try {
    const deletedUserAddress = await addressModelSchema.deleteOne({
      _id: req.params.addressId,
    });
    if (deletedUserAddress.acknowledged === true) {
      res.json({ message: "userAddress deleted successfully" });
    } else {
      res.status(404).json({ message: "userAddress not found" });
    }
  } catch (error) {
    res.status(404).json({ message: `userAddress not found ${error}` });
  }
};
export const getFemaleProducts = async (req, res) => {
  const page = parseInt(req.query.page); // Parse page as an integer, defaulting to 1
  console.log(page, "from service");

  const limit = parseInt(req.query.limit, 10) || 15; // Parse limit as an integer, defaulting to 10
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const filePath = path.join(
    "D:",
    "Test",
    "flipkart_com-ecommerce_sample.json"
  );

  // Read the JSON file asynchronously
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error reading the file", error: err });
    }

    // Parse and send the JSON data
    try {
      const jsonData = JSON.parse(data);
      const womenClothingProduct = [];

      jsonData.forEach((product) => {
        const categoryTreeStr = product["product_category_tree"];

        // Ensure category tree exists and is a string
        if (categoryTreeStr && typeof categoryTreeStr === "string") {
          try {
            const categoryTree = JSON.parse(categoryTreeStr); // Parse the stringified array

            if (categoryTree.length > 0) {
              // Check if the second item in the category chain is "Women's Clothing"
              const categoryPath = categoryTree[0].split(">>");
              const secondCategory =
                categoryPath.length > 1 ? categoryPath[1].trim() : null;

              if (secondCategory === "Women's Clothing") {
                womenClothingProduct.push(product);
              }
            }
          } catch (categoryParseError) {
            // Log the error but continue processing
            console.error("Error parsing category tree:", categoryParseError);
          }
        }
      });

      res.status(200).json({
        data: womenClothingProduct.slice(startIndex, endIndex),
        totalProducts: womenClothingProduct.length,
      });
    } catch (parseErr) {
      res
        .status(500)
        .json({ message: "Error parsing the JSON file", error: parseErr });
    }
  });
};

// export const getFemaleProducts = async (req, res) => {
//   const filePath = path.join("D:", "Test", "flipkart_com-ecommerce_sample.json");

//   // Read the JSON file asynchronously
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       return res
//         .status(500)
//         .json({ message: "Error reading the file", error: err });
//     }
//     // Parse and send the JSON data
//     try {
//       const jsonData = JSON.parse(data);
//       const womenClothingProducts=[];
//       jsonData.forEach(productCatagory => {
//         for (let value in productCatagory) {
//             //console.log(`${productCatagory['product_category_tree'].split(">>")[1]}`)
//             if(productCatagory['product_category_tree'].split(">>")[1].replace(/\s/g, '') === "Women'sClothing"){
//               //console.log('yes',productCatagory);
//               womenClothingProducts.push(productCatagory)
//             }
//           }
//         })
//         res.status(200).json(womenClothingProducts);
//       //res.json(womenClothingProducts);
//     } catch (parseErr) {
//       res
//         .status(500)
//         .json({ message: "Error parsing the JSON file", error: parseErr });
//     }
//   });
// };
export const getMaleProducts = async (req, res) => {
  const page = parseInt(req.query.page); // Parse page as an integer, defaulting to 1
  console.log(page, "from service");

  const limit = parseInt(req.query.limit, 10) || 15; // Parse limit as an integer, defaulting to 10
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const filePath = path.join(
    "D:",
    "Test",
    "flipkart_com-ecommerce_sample.json"
  );

  // Read the JSON file asynchronously
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error reading the file", error: err });
    }

    // Parse and send the JSON data
    try {
      const jsonData = JSON.parse(data);
      const menClothingProduct = [];

      jsonData.forEach((product) => {
        const categoryTreeStr = product["product_category_tree"];

        // Ensure category tree exists and is a string
        if (categoryTreeStr && typeof categoryTreeStr === "string") {
          try {
            const categoryTree = JSON.parse(categoryTreeStr); // Parse the stringified array

            if (categoryTree.length > 0) {
              // Check if the second item in the category chain is "Women's Clothing"
              const categoryPath = categoryTree[0].split(">>");
              const secondCategory =
                categoryPath.length > 1 ? categoryPath[1].trim() : null;

              if (secondCategory === "Men's Clothing") {
                menClothingProduct.push(product);
              }
            }
          } catch (categoryParseError) {
            // Log the error but continue processing
            console.error("Error parsing category tree:", categoryParseError);
          }
        }
      });

      res.status(200).json({
        data: menClothingProduct.slice(startIndex, endIndex),
        totalProducts: 100,
      });
    } catch (parseErr) {
      res
        .status(500)
        .json({ message: "Error parsing the JSON file", error: parseErr });
    }
  });
};

export const getSingleMaleProduct = async (req, res) => {
  const maleProductId = req.query.productId;
  const filePath = path.join(
    "D:",
    "Test",
    "flipkart_com-ecommerce_sample.json"
  );

  // Read the JSON file asynchronously
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error reading the file", error: err });
    }

    // Parse and send the JSON data
    try {
      const jsonData = JSON.parse(data);
      const menClothingProduct = [];

      jsonData.forEach((product) => {
        const categoryTreeStr = product["product_category_tree"];
        // Ensure category tree exists and is a string
        if (categoryTreeStr && typeof categoryTreeStr === "string") {
          try {
            const categoryTree = JSON.parse(categoryTreeStr); // Parse the stringified array

            if (categoryTree.length > 0) {
              // Check if the second item in the category chain is "Women's Clothing"
              const categoryPath = categoryTree[0].split(">>");
              const secondCategory =
                categoryPath.length > 1 ? categoryPath[1].trim() : null;

              if (secondCategory === "Men's Clothing") {
                menClothingProduct.push(product);
              }
            }
          } catch (categoryParseError) {
            // Log the error but continue processing
            console.error("Error parsing category tree:", categoryParseError);
          }
        }
      });

      const getSingleMaleProduct = menClothingProduct.find(
        (product) => product.id === maleProductId
      );
      getSingleMaleProduct
        ? res.status(200).json(getSingleMaleProduct)
        : res
            .status(404)
            .json({ message: "Product not available or wrong productid" });
    } catch (parseErr) {
      res
        .status(500)
        .json({ message: "Error parsing the JSON file", error: parseErr });
    }
  });
};
export const getSingleFemaleProduct = async (req, res) => {
  const femaleProductId = req.query.productId;
  const filePath = path.join(
    "D:",
    "Test",
    "flipkart_com-ecommerce_sample.json"
  );

  // Read the JSON file asynchronously
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error reading the file", error: err });
    }

    // Parse and send the JSON data
    try {
      const jsonData = JSON.parse(data);
      const womenClothingProduct = [];

      jsonData.forEach((product) => {
        const categoryTreeStr = product["product_category_tree"];
        // Ensure category tree exists and is a string
        if (categoryTreeStr && typeof categoryTreeStr === "string") {
          try {
            const categoryTree = JSON.parse(categoryTreeStr); // Parse the stringified array

            if (categoryTree.length > 0) {
              // Check if the second item in the category chain is "Women's Clothing"
              const categoryPath = categoryTree[0].split(">>");
              const secondCategory =
                categoryPath.length > 1 ? categoryPath[1].trim() : null;

              if (secondCategory === "Women's Clothing") {
                womenClothingProduct.push(product);
              }
            }
          } catch (categoryParseError) {
            // Log the error but continue processing
            console.error("Error parsing category tree:", categoryParseError);
          }
        }
      });

      const getSingleFemaleProduct = womenClothingProduct.find(
        (product) => product.id === femaleProductId
      );
      getSingleFemaleProduct
        ? res.status(200).json(getSingleFemaleProduct)
        : res
            .status(404)
            .json({ message: "Product not available or wrong productid" });
    } catch (parseErr) {
      res
        .status(500)
        .json({ message: "Error parsing the JSON file", error: parseErr });
    }
  });
};
// export const getSingleFemaleProduct = async (req, res) => {
//   const femaleProductId = req.query.productId;

//   const limit = parseInt(req.query.limit, 10) || 15; // Parse limit as an integer, defaulting to 10
//   const filePath = path.join(
//     "D:",
//     "Test",
//     "flipkart_com-ecommerce_sample.json"
//   );

//   // Read the JSON file asynchronously
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       return res
//         .status(500)
//         .json({ message: "Error reading the file", error: err });
//     }

//     // Parse and send the JSON data
//     try {
//       const jsonData = JSON.parse(data);
//       const womenClothingProducts = [];

//       jsonData.forEach((product) => {
//         const categoryTreeStr = product["product_category_tree"];

//         // Ensure category tree exists and is a string
//         if (categoryTreeStr && typeof categoryTreeStr === "string") {
//           try {
//             const categoryTree = JSON.parse(categoryTreeStr); // Parse the stringified array

//             if (categoryTree.length > 0) {
//               // Check if the second item in the category chain is "Women's Clothing"
//               const categoryPath = categoryTree[0].split(">>");
//               const secondCategory =
//                 categoryPath.length > 1 ? categoryPath[1].trim() : null;

//               if (secondCategory === "Women's Clothing") {
//                 womenClothingProducts.push(product);
//               }
//             }
//           } catch (categoryParseError) {
//             // Log the error but continue processing
//             console.error("Error parsing category tree:", categoryParseError);
//           }
//         }
//       });
//       const getSingleFemaleProduct = womenClothingProducts.find(
//         (product) => product.id === femaleProductId
//       );
//       getSingleFemaleProduct
//         ? res.status(200).json({
//             data: getSingleFemaleProduct,
//           })
//         : res
//             .status(404)
//             .json({ message: "Product not available or wrong productid" });
//       // if (getSingleFemaleProduct) {
//       //   res.status(200).json(getSingleFemaleProduct);
//       // } else {
//       //   res
//       //     .status(404)
//       //     .json({ message: "Product not available or wrong productid" });
//       // }
//     } catch (parseErr) {
//       res
//         .status(500)
//         .json({ message: "Error parsing the JSON file", error: parseErr });
//     }
//   });
// };
