// import axios from "axios";
import signInServices from "../services/signInServices";

// export const getSignedInUser = async (userVal) => {
//     try {
//       const response = await axios.post('http://localhost:4000/signIn', userVal);
//       return response;
//     } catch (error) {
//       console.error(error);
//     }
//   };
const signInActions = {
  async getSignedInUser(userVal) {
    return await signInServices.getSignedInUser(userVal);
  },
};
export default signInActions;
