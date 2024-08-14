import { userSignup, userLogin } from "../controller/index.js";
import { userSignUpConfig } from "../config/userConfig.js";
import { validationHandler } from "../middleware/errorHandler.js";
import { authenticateJwt } from "../middleware/authenticateJWT.js";

const router = (app) => {
  app.post(
    "/signUp",
    validationHandler(userSignUpConfig),
    authenticateJwt,
    userSignup
  );
  app.get("/signIn", authenticateJwt, userLogin);
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
