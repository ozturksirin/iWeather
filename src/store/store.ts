import { create } from "zustand";
import Api from "../Api";
import { WeatherData } from ".";
import Toast from "react-native-toast-message";

const API_KEY = process.env.API_KEY;
export const useStore = create((set) => ({
  weatherData: null as WeatherData | null,

  fetchWeather: async (city: string) => {
    try {
      const response = await Api.GET(`forecast?q=${city}&appid=${API_KEY}`, {
        q: city,
        appid: API_KEY,
      });
      set({ weatherData: response.data });
      return response.data;
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "An error occurred while fetching the weather data.",
      });
    }
  },

  fetchCityList: async (searchQuery: string) => {
    try {
      const response = await Api.GET(
        `weather?q=${searchQuery}&appid=${process.env.API_KEY}&units=metric`,
        {
          q: searchQuery,
          appid: API_KEY,
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "An error occurred while fetching the city list.",
      });
    }
  },
  fetchWeatherByLocation: async (latitude: number, longitude: number) => {
    try {
      const response = await Api.GET(
        `forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}`,
        {
          lat: latitude,
          lon: longitude,
          appid: API_KEY,
        }
      );
      set({ weatherData: response.data });
      return response.data;
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "An error occurred while fetching the weather data.",
      });
    }
  },
}));
