import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authReducer, appAccessReducer } from "src/shared/modules";

const rootReducer = combineReducers({
  appAccess: appAccessReducer,
  auth: authReducer,
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
