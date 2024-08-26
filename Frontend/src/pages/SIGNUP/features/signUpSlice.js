import { getSignedUpUser } from "../state/signUpActions";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialSignUpVal = {
    loading: false,
    user: {
      userName: "",
      Email:"",
      occupation:"",
      gender:""
    },
    status: "",
    allData: {},
  };

export const newUser = createAsyncThunk(
    "newUser",
    async (data, { rejectWithValue }) => {
      try {
        const response = await getSignedUpUser(data);
        console.log(response, "response after request");
        if (response.errStatusCode) {
            console.log(response,"respose after error");
            
          return {
            // userName: data.userName,
            status: response.errStatusCode,
            allData: response,
          };
        }
        return {
          userName: data.userName,
          status: response.status,
          allData: response.data,
          // Any other relevant data
        };
        // return {
        //   userName: data.userName,
        //   status: response.status,
        //   Email:response.Email,
        //   allData: response,
        //   // Any other relevant data
        // };
      } catch (error) {
        console.log(error, "async thunk error");
        return rejectWithValue(error.message);
      }
    }
  );
  export const signUpSlice = createSlice({
    name: "signUpSliceVal",
    initialState: initialSignUpVal,
    reducers: {
      resetStatus: (state) => {
        state.status = "";
        console.log(state.status, "after reset state val");
        // Reset status to an empty string
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(newUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(newUser.fulfilled, (state, action) => {
          state.loading = false;
          console.log("inside fullfilled");
          state.user.userName = action.payload.userName;
          state.status = action.payload.status; // Assuming you want to store the status code
          state.allData = action.payload;
          console.log(state.status, "status value from state ");
          console.log(state.allData,"state.alldata");
          
        })
        .addCase(newUser.rejected, (state, action) => {
          state.loading = false;
          state.status = action.payload.status;
        });
    },
  });
  
  export default signUpSlice.reducer;
  export const { resetStatus } = signUpSlice.actions;