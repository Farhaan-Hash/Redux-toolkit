import {configureStore} from "@reduxjs/toolkit";
import postsReducer from "../features/post/postSlice";
import usersReducers from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducers,
  },
});
