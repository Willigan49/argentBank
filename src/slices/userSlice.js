import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (token, { rejectWithValue }) => {
    try {
      const response = await api.post("profile", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    status: null,
    error: null,
    user: {
      email: null,
      firstName: null,
      lastName: null,
      createdAt: null,
      updatedAt: null,
      id: null,
    },
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.status = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.body;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
