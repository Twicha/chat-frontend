export const queryParamsToString = (query?: Record<string, any>) => {
  if (!query) {
    return "";
  }

  const queryKeys: string[] = Object.keys(query);

  if (!queryKeys.length) {
    return "";
  }

  return `?${queryKeys.map((key) => `${key}=${query[key]}`).join("&")}`;
};
