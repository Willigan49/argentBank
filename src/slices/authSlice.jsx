import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

export const fetchBearer = createAsyncThunk(
  "auth/fetchBearer",
  async (loginPayload) => {
    const response = await api.post("login", loginPayload);
    return response.data;
  }
);

const authenticationSlice = createSlice({
  name: "auth",
  initialState: {
    status: null,
    accessToken: null,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBearer.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBearer.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.accessToken = action.payload.body.token;
        state.error = null;
      })
      .addCase(fetchBearer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default authenticationSlice.reducer;
