import useSWR, { SWRResponse } from "swr";
import ApiCall from "../api";
import type { UseSwrProperties } from "./types";

function useCustomSwr<T>({ key, noFetch, config, options }: UseSwrProperties) {
  const res: SWRResponse<T> = useSWR(
    key,
    noFetch ? null : () => ApiCall<T>(config),
    options
  );
  return {
    isLoading: !res.data && !res.error,
    data: res.data,
    error: res.error,
    ...res,
  };
}
export default useCustomSwr;
