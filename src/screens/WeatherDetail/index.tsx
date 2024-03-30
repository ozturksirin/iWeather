import React from "react";
import { View, ImageBackground } from "react-native";
import { styles } from "./index.style";
import { AppText, WeatherDetail, WeeklyInfo } from "../../components";
import { DailyWeatherData, InnerDay, Props, WeatherDetailT } from "./types";

import { useStore } from "../../store/store";
import { WeatherData } from "../../store/index";
import utils from "../../utils";

import Thermometer from "../../assets/icons/Type=thermometer-simple-light.svg";
import Rain from "../../assets/icons/Type=cloud-rain-light.svg";
import Wind from "../../assets/icons/Type=wind-light.svg";
import Drop from "../../assets/icons/Type=drop-light.svg";
import Sun from "../../assets/icons/Type=sun-dim-light.svg";
// --- icons ---
import ClearDay from "../../assets/icons/WeatherIcons/Weather=Clear, Moment=Day.svg";
import ClearNight from "../../assets/icons/WeatherIcons/Weather=Clear, Moment=Night.svg";
import CloudyDay from "../../assets/icons/WeatherIcons/Weather=Cloudy, Moment=Day.svg";
import CloudyNight from "../../assets/icons/WeatherIcons/Weather=Cloudy, Moment=Night.svg";
import FewCloudsDay from "../../assets/icons/WeatherIcons/Weather=Few clouds, Moment=Day.svg";
import FewCloudsNight from "../../assets/icons/WeatherIcons/Weather=Few clouds, Moment=Night.svg";
import RainDay from "../../assets/icons/WeatherIcons/Weather=Rain, Moment=Day.svg";
import RainNight from "../../assets/icons/WeatherIcons/Weather=Rain, Moment=Night.svg";
import StormDay from "../../assets/icons/WeatherIcons/Weather=Storm, Moment=Day.svg";
import StormNight from "../../assets/icons/WeatherIcons/Weather=Storm, Moment=Night.svg";

const Detail = (props: Props) => {
  const {} = props;
  const { ConvertCelsius } = utils;
  const { weatherData } = useStore() as { weatherData: WeatherData };

  const WeeklyWeather = () => {
    const dailyWeatherData: DailyWeatherData[] = [];
    // daily data
    for (let i = 0; i < weatherData?.list.length; i += 8) {
      const dailyData = weatherData.list.slice(i, i + 8); // daily hours data
      let minTemp = Infinity;
      let maxTemp = -Infinity;
      // inner day max and min temp
      dailyData.forEach((item: InnerDay) => {
        if (item.main.temp_min < minTemp) {
          minTemp = item.main.temp_min;
        }
        if (item.main.temp_max > maxTemp) {
          maxTemp = item.main.temp_max;
        }
      });
      // daily data push to dailyWeatherData
      dailyWeatherData.push({
        date: new Date(dailyData[0].dt * 1000), // daily date
        minTemp: minTemp,
        maxTemp: maxTemp,
      });
    }

    return dailyWeatherData.map((dailyData, index) => (
      <WeeklyInfo
        key={index}
        day={dailyData.date.toDateString().slice(0, 3)}
        minDegree={ConvertCelsius(dailyData.minTemp)}
        maxDegree={ConvertCelsius(dailyData.maxTemp)}
        svg={
          getWeatherIcon(
            weatherData?.list[index * 8].weather[0].main
              .charAt(0)
              .toUpperCase() +
              weatherData?.list[index * 8].weather[0].main.slice(1),
            66
          ) as React.ReactElement
        }
      />
    ));
  };

  const getWeatherIcon = (weather: string, size?: number) => {
    const currentHour = new Date(weatherData?.list[0].dt * 1000).getHours();
    const isDayTime = currentHour > 6 && currentHour < 18;

    if (isDayTime) {
      switch (weather) {
        case "Clear":
          return <ClearDay width={size} height={size} />;
        case "Clouds":
          return <CloudyDay width={size} height={size} />;
        case "Rain":
          return <RainDay width={size} height={size} />;
        case "Storm":
          return <StormDay width={size} height={size} />;
        default:
          return <FewCloudsDay width={size} height={size} />;
      }
    } else {
      switch (weather) {
        case "Clear":
          return <ClearNight width={size} height={size} />;
        case "Clouds":
          return <CloudyNight width={size} height={size} />;
        case "Rain":
          return <RainNight width={size} height={size} />;
        case "Storm":
          return <StormNight width={size} height={size} />;
        default:
          return <FewCloudsNight width={size} height={size} />;
      }
    }
  };
  const ClearDayBG = require("../../assets/images/WeatherBackground/Weather=Clear, Moment=Day.png");
  const ClearNightBG = require("../../assets/images/WeatherBackground/Weather=Clear, Moment=Night.png");
  const CloudyDayBG = require("../../assets/images/WeatherBackground/Weather=Cloudy, Moment=Day.png");
  const CloudyNightBG = require("../../assets/images/WeatherBackground/Weather=Cloudy, Moment=Night.png");

  // const FewCloudsDayBG = require("../../assets/images/WeatherBackground/Weather=Few clouds, Moment=Day.png");
  // const FewCloudsNightBG = require("../../assets/images/WeatherBackground/Weather=Few clouds, Moment=Night.png");

  const RainDayBG = require("../../assets/images/WeatherBackground/Weather=Rain, Moment=Day.png");
  const RainNightBG = require("../../assets/images/WeatherBackground/Weather=Rain, Moment=Night.png");
  const StormDayBG = require("../../assets/images/WeatherBackground/Weather=Storm, Moment=Day.png");
  const StormNightBG = require("../../assets/images/WeatherBackground/Weather=Storm, Moment=Night.png");

  const getBackgroundImage = () => {
    const currentHour = new Date(weatherData?.list[0].dt * 1000).getHours();
    const isDayTime = currentHour > 6 && currentHour < 18;

    if (isDayTime) {
      switch (weatherData?.list[0].weather[0].main) {
        case "Clear":
          return ClearDayBG;
        case "Clouds":
          return CloudyDayBG;
        case "Rain":
          return RainDayBG;
        case "Storm":
          return StormDayBG;
        default:
          return ClearDayBG;
      }
    } else {
      switch (weatherData?.list[0].weather[0].main) {
        case "Clear":
          return ClearNightBG;
        case "Clouds":
          return CloudyNightBG;
        case "Rain":
          return RainNightBG;
        case "Storm":
          return StormNightBG;
        default:
          return ClearNightBG;
      }
    }
  };
  return (
    <>
      <View style={styles.bgArea}>
        <View style={styles.bigState}>
          <ImageBackground source={getBackgroundImage()} style={styles.bgState}>
            <View style={styles.infoArea}>
              <View>
                <AppText
                  text={
                    weatherData?.city.name + ", " + weatherData?.city.country
                  }
                  size="text_md"
                  type="bold"
                  color="#FAFAFA"
                  vAlign="center"
                />
                <AppText
                  text={new Date(weatherData?.list[0].dt * 1000).toDateString()}
                  size="text_xs"
                  type="regular"
                  color="#FAFAFA"
                  vAlign="center"
                />
              </View>
              <View style={styles.infoHead}>
                <View style={styles.dailyDegreeArea}>
                  <AppText
                    text={ConvertCelsius(weatherData?.list[0].main.temp)}
                    type="xBold"
                    size="heading_xl"
                  />
                  <AppText
                    text={
                      ConvertCelsius(weatherData?.list[0].main.temp_min) +
                      " / " +
                      ConvertCelsius(weatherData?.list[4].main.temp_max)
                    }
                    type={"bold"}
                    size="text_md"
                  />
                  <AppText
                    text={
                      weatherData?.list[0].weather[0].description
                        .charAt(0)
                        .toUpperCase() +
                      weatherData?.list[0].weather[0].description.slice(1)
                    }
                    type="regular"
                    size="text_sm"
                  />
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  {
                    getWeatherIcon(
                      weatherData?.list[0].weather[0].main
                        .charAt(0)
                        .toUpperCase() +
                        weatherData?.list[0].weather[0].main.slice(1),
                      200
                    ) as React.ReactElement
                  }
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.infoMiddle}>
        {[
          {
            title: "Thermal sensation",
            value: ConvertCelsius(weatherData?.list[0].main.feels_like),
            svg: <Thermometer width={24} height={24} />,
          },
          {
            title: "Probability of rain",
            value: weatherData?.list[0].pop * 100 + " %",
            svg: <Rain width={24} height={24} />,
          },
          {
            title: "Wind speed",
            value: weatherData?.list[0].wind.speed + " km/h",
            svg: <Wind width={24} height={24} />,
          },
          {
            title: "Air humidity",
            value: weatherData?.list[0].main.humidity + " %",
            svg: <Drop width={24} height={24} />,
          },
          {
            title: "UV Index",
            value: weatherData?.list[0].visibility / 1000 + " ",
            svg: <Sun width={24} height={24} />,
          },
        ].map((detail: WeatherDetailT, index: number) => (
          <WeatherDetail
            key={index}
            title={detail.title}
            value={detail.value}
            svg={detail.svg}
          />
        ))}
      </View>
      <View style={styles.weekly}>{WeeklyWeather()}</View>
    </>
  );
};

export default Detail;
