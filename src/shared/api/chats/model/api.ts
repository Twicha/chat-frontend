import { apiInstance } from "../../base";

export const fetchGetChats = async () => {
  const response = await apiInstance.get(`/chats`);

  return response;
};
