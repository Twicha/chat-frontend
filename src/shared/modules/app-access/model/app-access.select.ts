import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/app/store";

const selectToken = ({ auth }: RootState) => auth.token;

export const selectHasAccess = createSelector(selectToken, (token) => !!token);
