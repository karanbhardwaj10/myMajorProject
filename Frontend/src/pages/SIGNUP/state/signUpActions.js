import axios from "axios";

export const getSignedUpUser = async (userVal) => {
    try {
      const response = await axios.post('http://localhost:4000/signUp', userVal);
      return response;
    } catch (error) {
      console.error(error);
    }
  };