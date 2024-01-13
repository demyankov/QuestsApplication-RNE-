import { configureStore } from "@reduxjs/toolkit";
import {
  followersReducer,
  followsReducer,
  postsReducer,
  userReducer,
} from "./slices";

export const store = configureStore({
  reducer: {
    user: userReducer,
    followers: followersReducer,
    follows: followsReducer,
    posts: postsReducer,
    
  },
});
