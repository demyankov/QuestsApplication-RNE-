import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  followersReducer,
  followsReducer,
  postsReducer,
  userReducer,
  questDetailsReducer,
} from "./slices";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "user",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const reducers = combineReducers({
  user: persistedReducer,
  followers: followersReducer,
  follows: followsReducer,
  posts: postsReducer,
  questDetails: questDetailsReducer,
});
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
