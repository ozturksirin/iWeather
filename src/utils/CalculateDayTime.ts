import { WeatherData } from "../store";
import { useStore } from "../store/store";

export function CalculateDayTime() {
  const { weatherData } = useStore() as { weatherData: WeatherData };

  const currentHour = new Date(weatherData.list[0].dt_txt).getHours();
  return currentHour > 6 && currentHour < 19;
}
