import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { subscribersReducer, themeReducer } from "./slices";
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
  persistCombineReducers,
} from "redux-persist";
import { subscriptionsReducer } from "./slices/subscriptionsSlice";
import { postsReducer } from "./slices/postsSlice";

const persistConfig = {
  key: "theme",
  storage: AsyncStorage,
  whiteList: ["Theme"],
};

const persistedReducer = persistCombineReducers(persistConfig, {
  theme: themeReducer,
  subscribers: subscribersReducer,
  subscriptions: subscriptionsReducer,
  posts: postsReducer,
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
