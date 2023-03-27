import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

export const fetchBearer = createAsyncThunk(
  "auth/fetchBearer",
  async (loginPayload, {rejectWithValue}) => {
    try {
      const response = await api.post("login", loginPayload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

const authenticationSlice = createSlice({
  name: "auth",
  initialState: {
    status: "disconnected",
    accessToken: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.error = null;
      state.status = "disconnected";
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBearer.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchBearer.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.accessToken = action.payload.body.token;
        state.error = null;
      })
      .addCase(fetchBearer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      });
  },
});

export const { logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
