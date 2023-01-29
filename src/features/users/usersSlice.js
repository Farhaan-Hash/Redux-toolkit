import {createSlice} from "@reduxjs/toolkit";

const initialState = [
  {id: "0", name: "JoHn Wicks Dog"},
  {id: "1", name: "Negans BaseballBat"},
  {id: "2", name: "Bryan Wick"},
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
