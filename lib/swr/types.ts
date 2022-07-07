import { AxiosRequestConfig } from "axios";
import { SWRConfiguration } from "swr/dist/types";

export interface UseSwrProperties {
  key: string;
  noFetch?: boolean;
  config: AxiosRequestConfig;
  options?: SWRConfiguration;
}
