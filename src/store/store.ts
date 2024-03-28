import { create } from "zustand";
import Api from "../Api";

export type Store = {
  weatherData: any;
  fetchWeather: (city: string) => Promise<any>;
};
// `forecast?q=${city}&appid=${API_KEY}`
const API_KEY = process.env.API_KEY;
export const useStore = create((set) => ({
  weatherData: null,

  fetchWeather: async (city: string) => {
    const response = await Api.GET(`forecast?q=${city}&appid=${API_KEY}`, {
      q: city,
      appid: API_KEY,
    });
    set({ weatherData: response.data });
    return response.data;
  },
}));
