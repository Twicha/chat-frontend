import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { basePopupReducer } from "src/shared/components";

import {
  accountReducer,
  authReducer,
  contactsReducer,
  mainContentReducer,
  usersReducer,
} from "./slices";

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  mainContent: mainContentReducer,
  basePopup: basePopupReducer,
  users: usersReducer,
  contacts: contactsReducer,
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
