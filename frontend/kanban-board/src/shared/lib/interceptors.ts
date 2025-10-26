import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { getAccessToken } from "@shared/lib/auth.ts";

export const onResolveInterceptor = (response: AxiosResponse) =>
  Promise.resolve(response.data);
export const onRejectInterceptor = () => {};

export const onResolveAuth = (config: InternalAxiosRequestConfig) => {
  const token = getAccessToken();
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
};
