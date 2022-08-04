import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/shared/store";

const selectToken = ({ auth }: RootState) => auth.token;

export const selectHasAccess = createSelector(selectToken, (token) => !!token);
