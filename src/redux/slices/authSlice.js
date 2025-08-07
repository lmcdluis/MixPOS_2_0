import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/apiClient";

// Async thunk for login
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await apiClient.post(
        "/authenticate",
        credentials,
        false,
      ); // Replace with your actual API endpoint
      console.log("response", response);
      return response; // Return only the serializable data
    } catch (error) {
      return rejectWithValue({
        message:
          error.response?.data?.message || error.message || "Login failed",
        status: error.response?.status,
      });
    }
  },
);

// Async thunk for fetching user data
export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get("/echouser"); // Replace with your actual API endpoint
      console.log("response-user", response.data);
      return response.data; // Assuming your API returns user data
    } catch (error) {
      return rejectWithValue({
        message:
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch user",
        status: error.response?.status,
      });
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Login failed";
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch user";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
