import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    authenticateUser: (state) => {
      state.users.length > 0 ? true : false;
    },
  },
});

export const { addUser, authenticateUser } = userSlice.actions;
export default userSlice.reducer;
