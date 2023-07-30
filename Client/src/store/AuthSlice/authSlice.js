import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

//Register New User Freelancer
export const registerNewUser = createAsyncThunk(
  "authSlice/registerNewUser",
  async (data) => {
    try {
      const registeredUser = await axios.post(
        `${import.meta.env.VITE_API_URL}/freelancers/register`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return registeredUser.data;
    } catch (error) {
      await swal({
        title: "faild to register",
        icon: "error",
      });

      const errors = error.response.data.errors;

      const reduceErrors = errors.reduce((acc, prevItem) => {
        acc[prevItem.path] = prevItem.msg;
        return acc;
      }, {});
      return {
        errors: reduceErrors,
      };
    }
  }
);

//Register New User Client
export const registerNewUserClient = createAsyncThunk(
  "authSlice/registerNewUserClient",
  async (data) => {
    try {
      const registeredClient = await axios.post(
        `${import.meta.env.VITE_API_URL}/clients`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return registeredClient.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

//Login To Account
export const loginToAccount = createAsyncThunk(
  "authSlice/loginToAccount",
  async (data) => {
    //freelancer request
    if (data.loginType === "freelancer") {
      try {
        const userData = await axios.post(
          `${import.meta.env.VITE_API_URL}/freelancers/login`,
          JSON.stringify({ email: data.email, password: data.password }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        return userData.data;
      } catch (error) {
        return {
          error: "invalid username or password",
        };
      }
    } else {
      //client request
      try {
        const userData = await axios.post(
          `${import.meta.env.VITE_API_URL}/clients/login`,
          JSON.stringify({ email: data.email, password: data.password }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return userData.data;
      } catch (error) {
        return {
          error: "invalid username or password",
        };
      }
    }
  }
);

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isAuth: false,
    userData: {},
    isLoading: false,
    errors: {},
  },
  reducers: {
    cleanUpRegister(state) {
      (state.isLoading = false), (state.errors = {});
    },
    checkUserToken(state) {
      const getToken = JSON.parse(localStorage.getItem("isAuth"));
      if (getToken) {
        //1) check if the token is valid or no
        if (Date.now() / 1000 < getToken.exp) {
          //valid token
          state.isAuth = true;
          state.userData = getToken;
        } else {
          //not valid
          (state.isAuth = false), (state.userData = {});
          localStorage.removeItem("isAuth");
        }
      }
    },
    logoutHandler(state) {
      state.isAuth = false;
      state.userData = {};
      localStorage.removeItem("isAuth");
      window.location = "/";
    },
  },
  extraReducers: (builder) => {
    //RegisterNewUserFreelancer
    builder.addCase(registerNewUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerNewUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;

      if (payload.errors) {
        state.errors = payload.errors;
      } else {
        swal({
          title: "Success",
          text: payload.message,
          icon: "success",
        }).then((value) => {
          if (value) {
            window.location = "/login";
          }
        });
      }
    });
    builder.addCase(registerNewUser.rejected, (state, { payload }) => {
      state.isLoading = false;
    });

    //RegisterNewAccountClient
    builder.addCase(registerNewUserClient.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerNewUserClient.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload.error) {
        
        state.errors = payload.error;
        swal({
          title: "faild to register",
          text: payload.error,
          icon: "error",
        });
      } else {
        swal({
          text: "success",
          title: "you have been registered account",
          icon: "success",
        }).then((value) => {
          if (value) {
            window.location = "/login";
          }
        });
      }
    });

    //LoginToAccount
    builder.addCase(loginToAccount.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginToAccount.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload.error) {
        swal({
          title: "faild to login",
          text: "invalid username or password",
          icon: "error",
        });
      } else {
        const token = payload.token.split(".")[1];

        //decoded the token
        const decodedToken = JSON.parse(atob(token));

        state.userData = decodedToken;

        //save information to localStorage
        const localStorageData = {
          id: decodedToken.freelancerId || decodedToken.clientId,
          username: decodedToken.username || decodedToken.clientName,
          role: decodedToken.role || "client",
          token: payload.token,
          exp: decodedToken.exp,
        };
        localStorage.setItem("isAuth", JSON.stringify(localStorageData));
        swal({
          title: "Success",
          text: payload.message || "You Have Been Login Successfully",
          icon: "success",
        }).then((value) => {
          if (value) {
            window.location = `/profile/statistics/${localStorageData.id}`;
          }
        });
      }
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
