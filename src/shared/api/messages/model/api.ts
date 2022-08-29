import { apiInstance } from "../../base";

export const fetchGetMessages = async (id: string) => {
  const response = await apiInstance.get(`/messages/${id}?page=1&limit=5`);

  return response;
};

export const test = () => {
  return 0;
};
