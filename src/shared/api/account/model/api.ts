import { apiInstance } from "../../base";

import { FetchUpdateAccountPayload } from "./types";

export const fetchGetAccount = async () => {
  const response = await apiInstance.get("/account");

  return response;
};

export const fetchUpdateAccount = async (params: FetchUpdateAccountPayload) => {
  const response = await apiInstance.put("/account", params);

  return response;
};
