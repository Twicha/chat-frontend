import { queryParamsToString } from "src/shared/helpers";

import { apiInstance } from "../../base";

import { GetUsersParams } from "./types";

export const fetchGetUsers = async (query?: GetUsersParams) => {
  const response = await apiInstance.get(`/users${queryParamsToString(query)}`);

  return response;
};
