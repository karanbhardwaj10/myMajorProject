import { api } from "../../../Shared/serviceAdapters/serviceAdapters";



const signInServices={
async getSignedInUser (userVal) {
        try {
          const response = await api.post('http://localhost:4000/signIn', userVal);
          return response;
        } catch (error) {
            throw new Error("UserLogin Failed",error);
        }
      }
}
export default signInServices;