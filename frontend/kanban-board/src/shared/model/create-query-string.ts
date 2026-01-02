export const objectToQueryString = (filters?: Record<string, any>): string => {
  const queryString = Object.keys(filters ?? {})
    .map((key: string) => {
      const value = filters?.[key];
      if (value === null || value === undefined || value === "") return "";
      return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
    })
    .join("&");
  return queryString ? `?${queryString}` : "";
};
