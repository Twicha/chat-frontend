import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authReducer, accountReducer } from "src/shared/modules";

import { mainContentReducer } from "src/entities/main-content";

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  mainContent: mainContentReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore["dispatch"];
