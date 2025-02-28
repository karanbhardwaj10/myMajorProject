import {
  userSignup,
  userLogin,
  userAddress,
  getFemaleProducts,
  getMaleProducts,
} from "../controller/index.js";
import { userSignUpConfig } from "../config/userConfig.js";
import { validationHandler } from "../middleware/errorHandler.js";
import { authenticateJwt } from "../middleware/authenticateJWT.js";
import { getAddress } from "../controller/index.js";
import { addressConfig } from "../config/addressConfig.js";
import { updateAddress } from "../controller/index.js";
import { deleteUserAddress } from "../controller/index.js";
import { getSingleMaleProduct } from "../controller/index.js";
import { getSingleFemaleProduct } from "../controller/index.js";
import { getAllRequestedProducts } from "../controller/index.js";
const router = (app) => {
  app.post("/signUp", validationHandler(userSignUpConfig), userSignup);
  app.post("/signIn", userLogin);
  app.get("/getAddress", authenticateJwt, getAddress);
  app.post(
    "/addAddress",
    validationHandler(addressConfig),
    authenticateJwt,
    userAddress
  );
  app.put(
    "/updateAddress/:addressId",
    validationHandler(addressConfig),
    authenticateJwt,
    updateAddress
  );
  app.delete(
    "/deleteUserAddress/:addressId",
    authenticateJwt,
    deleteUserAddress
  );
  app.get("/femaleProducts", authenticateJwt, getFemaleProducts);
  app.get("/menProducts", authenticateJwt, getMaleProducts);
  app.get("/singleMaleProduct", authenticateJwt, getSingleMaleProduct);
  app.get("/singleFemaleProduct", authenticateJwt, getSingleFemaleProduct);
  app.post("/getWhislistProducts", getAllRequestedProducts);
};

// const userSignConfig = [
//     {
//         name: "userName",
//         dataType: "string",
//         required: false,
//         from: "body",
//     },
//     {
//         name: "password",
//         dataType: "string",
//         required: true,
//         from: "body",
//     },
// ];

// const names = {
//   nikhil: {
//     dob: "02 nov",
//     address: "ug 2"
//   },
//   karan: {
//     dob: "04 aug",
//     address: "Pune"
//   }
// };

// const dynamic = "karan";

// names[dynamic].dob;
// names.karan.address;

export default router;
