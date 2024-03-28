export const ConvertCelsius = (temp: number) => {
  return (temp - 273.15).toFixed(0) + "°c";
};
