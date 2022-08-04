import { apiInstance } from "../../base";

import { AddContactsParams, DeleteContactsParams } from "./types";

export const fetchAddContact = async (query: AddContactsParams) => {
  const response = await apiInstance.put("/account/contacts/add", query);

  return response;
};

export const fetchDeleteContact = async (query: DeleteContactsParams) => {
  const response = await apiInstance.put("/account/contacts/delete", query);

  return response;
};
