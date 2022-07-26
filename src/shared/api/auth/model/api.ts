import { apiInstance } from "../../base";

import { FetchLoginPayload, FetchRegistrationPayload } from "./types";

export const fetchLogin = async (params: FetchLoginPayload) => {
  const response = await apiInstance.post("/auth/login", params);

  return response;
};

export const fetchRegistration = async (params: FetchRegistrationPayload) => {
  const response = await apiInstance.post("/auth/registration", params);

  return response;
};
