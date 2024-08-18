import axios from "axios";

export const getSignedInUser = async (userVal) => {
    try {
      const response = await axios.post('http://localhost:4000/signIn', userVal);
      return response;
    } catch (error) {
      console.error(error);
    }
  };