import axios, { AxiosRequestConfig, AxiosError } from "axios";

const BASE_URL = `http://api.openweathermap.org/data/2.5/weather/?q=`;
const FIND_URL = `https://openweathermap.org/find`;

type Response<T> = {
  statusCode: string | null;
  data: T | null;
};

const Config: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
};

async function GET<T>(
  url: string,
  params: Record<string, unknown>
): Promise<Response<T>> {
  try {
    const controller = new AbortController();
    Config.signal = controller.signal;
    Config.params = params;
    const response = await axios.get<T>(`${BASE_URL}${url}`, Config);
    return {
      statusCode: response.status.toString(),
      data: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      return {
        statusCode: axiosError.response?.status.toString() || ("500" as string),
        data: null,
      };
    } else {
      return {
        statusCode: "500" as string,
        data: null,
      };
    }
  }
}

async function POST<T>(
  url: string,
  data: Record<string, unknown>
): Promise<Response<T>> {
  try {
    const controller = new AbortController();
    Config.signal = controller.signal;
    const response = await axios.post<T>(`${BASE_URL}${url}`, data, Config);
    return {
      statusCode: response.status.toString(),
      data: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      return {
        statusCode: axiosError.response?.status.toString() || ("500" as string),
        data: null,
      };
    } else {
      return {
        statusCode: "500" as string,
        data: null,
      };
    }
  }
}

export default { GET, POST };
