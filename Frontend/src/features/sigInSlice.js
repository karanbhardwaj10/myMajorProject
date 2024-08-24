import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSignedInUser } from "../pages/SIGNIN/state/signInActions";

const initialSignInVal = {
  loading: false,
  user: {
    userName: "",
    passWord: "",
  },
  status: "",
  allData: {},
};
export const getUser = createAsyncThunk(
  "getUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await getSignedInUser(data);
      console.log(response, "response after request");
      if (response.errStatusCode) {
        return {
          userName: data.userName,
          status: response.errStatusCode,
        };
      }
      return {
        userName: data.userName,
        status: response.status,
        allData: response.status === 200 ? response.data.message : response,
        // Any other relevant data
      };
    } catch (error) {
      console.log(error, "async thunk error");
      return rejectWithValue(error.message);
    }
  }
);

export const signinSlice = createSlice({
  name: "signInVal",
  initialState: initialSignInVal,
  reducers: {
    resetStatus: (state) => {
      state.status = ""; 
      console.log(state.status,"after reset state val");
      // Reset status to an empty string
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log("inside fullfilled");
        state.user.userName = action.payload.userName;
        state.status = action.payload.status; // Assuming you want to store the status code
        // state.allData = action.payload.allData;
        // console.log(state.allData, "state.alldata");
        // console.log(action.payload.allData, "all data of response");
        console.log(state.status, "status value from state ");
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.status = action.payload.status;
      });
  },
});

export default signinSlice.reducer;
export const { resetStatus } = signinSlice.actions; // Export the action

// export const signinSlice = createSlice({
//   name: "signinSlice",
//   initialState: initialSignInVal,
//   reducers: {
//     userSignInReducer: (state, action) => {
//       state.user.userName = action.payload.userName;
//       state.user.passWord = action.payload.passWord;
//       console.log(
//         state,
//         "values from inside the slice"
//       );
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getUser.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getUser.fulfilled, (state, action) => {
//         state.loading = false;
//         console.log(state.user.userName,"action payload fullfilled");

//         // state.user.userName = action.payload.userName;
//         // state.user.passWord = action.payload.passWord;
//         // Handle successful sign-in, if needed
//       })
//       .addCase(getUser.rejected, (state, action) => {
//         state.loading = false;
//         // Handle sign-in failure, if needed
//       });
//   },
// });
