import axios from "axios";
import {
  onRejectInterceptor,
  onResolveAuth,
  onResolveInterceptor,
} from "@shared/lib/interceptors.ts";

export const baseApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
});

baseApi.interceptors.response.use(onResolveInterceptor, onRejectInterceptor);
baseApi.interceptors.request.use(onResolveAuth);
