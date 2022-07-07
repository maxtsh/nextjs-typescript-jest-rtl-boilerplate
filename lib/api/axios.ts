import AxiosPKG, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { GeneralResponse } from "types";

const Axios = AxiosPKG.create({ timeout: 30000 });

async function ApiCall<T>({
  url,
  method,
  data,
  timeout,
  headers,
}: AxiosRequestConfig) {
  try {
    const response: AxiosResponse<GeneralResponse<T>> = await Axios.request({
      url,
      method,
      data,
      timeout,
      headers,
    });
    return {
      data: response?.data?.data,
      status: response.status,
      message: response.statusText,
    };
  } catch (err) {
    if (err instanceof AxiosError) {
      return {
        data: null,
        status: err.response?.status,
        message: err.message,
      };
    } else {
      return {
        data: null,
        status: 500,
        message: "Something went wrong!",
      };
    }
  }
}
export default ApiCall;
