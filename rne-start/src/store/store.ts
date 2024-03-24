import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  followersReducer,
  followsReducer,
  postsReducer,
  userReducer,
  questDetailsReducer,
  scheduleReducer,
  favoriteQuestsReducer,
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

const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedFavoriteReducer = persistReducer(
  persistConfig,
  favoriteQuestsReducer
);

const reducers = combineReducers({
  user: persistedUserReducer,
  followers: followersReducer,
  follows: followsReducer,
  posts: postsReducer,
  questDetails: questDetailsReducer,
  schedule: scheduleReducer,
  favorites: persistedFavoriteReducer,
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
