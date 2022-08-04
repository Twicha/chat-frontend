import { apiInstance } from "../../base";

import { AddContactsParams } from "./types";

export const fetchAddContact = async (query: AddContactsParams) => {
  const response = await apiInstance.put("/account/contacts", query);

  return response;
};
