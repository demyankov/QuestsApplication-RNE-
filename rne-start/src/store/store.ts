import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  userReducer,
  questDetailsReducer,
  scheduleReducer,
  favoriteQuestsReducer,
  visitedQuestsReducer,
  questsReducer,
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

const persistFavoriteConfig = {
  key: "favorite",
  storage: AsyncStorage,
};

const persistVisitedConfig = {
  key: "visited",
  storage: AsyncStorage,
};
const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedFavoriteReducer = persistReducer(
  persistFavoriteConfig,
  favoriteQuestsReducer
);
const persistedVisitedReducer = persistReducer(
  persistVisitedConfig,
  visitedQuestsReducer
);

const reducers = combineReducers({
  user: persistedUserReducer,
  questDetails: questDetailsReducer,
  quests: questsReducer,
  schedule: scheduleReducer,
  favorites: persistedFavoriteReducer,
  visited: persistedVisitedReducer,
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
