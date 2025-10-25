import type { AxiosResponse } from "axios";

export const onResolveInterceptor = (response: AxiosResponse) =>
  Promise.resolve(response.data);
export const onRejectInterceptor = () => {};
