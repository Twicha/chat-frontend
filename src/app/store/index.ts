import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authReducer, accountReducer } from "src/shared/modules";

import { basePopupReducer } from "src/shared/components";

import { mainContentReducer } from "src/entities/main-content";

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  mainContent: mainContentReducer,
  basePopup: basePopupReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore["dispatch"];
