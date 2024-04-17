import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  userReducer,
  questDetailsReducer,
  scheduleReducer,
  favoritesReducer,
  visitedReducer,
  questsReducer,
  reviewsReducer,
  bookingReducer,
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

const reducers = combineReducers({
  user: persistedUserReducer,
  booking: bookingReducer,
  questDetails: questDetailsReducer,
  quests: questsReducer,
  schedule: scheduleReducer,
  favorites: favoritesReducer,
  visited: visitedReducer,
  reviews: reviewsReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
