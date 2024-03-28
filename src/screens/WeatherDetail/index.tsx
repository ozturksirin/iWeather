import React from "react";
import { View, ImageBackground } from "react-native";
import { styles } from "./index.style";
import { AppText, WeatherDetail, WeeklyInfo } from "../../components";

import AppTheme from "../../thema";
import { Store, useStore } from "../../store/store";
import utils from "../../utils";

import Night from "../../assets/icons/Weather=Few clouds, Moment=Night.svg";
import Thermometer from "../../assets/icons/Type=thermometer-simple-light.svg";
import Cloud from "../../assets/icons/Weather=Storm, Moment=Day.svg";
import Rain from "../../assets/icons/Type=cloud-rain-light.svg";
import Wind from "../../assets/icons/Type=wind-light.svg";
import Drop from "../../assets/icons/Type=drop-light.svg";
import Sun from "../../assets/icons/Type=sun-dim-light.svg";

type Props = {
  route: any;
};

const Detail = (props: Props) => {
  const { route } = props;
  // console.log("params", route.params);

  const { ConvertCelsius } = utils;

  const { weatherData } = useStore() as Store;

  console.log("weatherData", weatherData.list);

  return (
    <>
      <View style={styles.bgArea}>
        <View style={styles.bigState}>
          <ImageBackground
            source={require("../../assets/images/Weather=Cloudy, Moment=Night.png")}
            style={styles.bgState}>
            <View style={styles.infoArea}>
              <AppText
                text={
                  "weatherData?.city.name" + ", " + "weatherData?.city.country"
                }
                size="text_md"
                type="bold"
                color="#FAFAFA"
                vAlign="center"
              />
              <AppText
                text={"new Date(weatherData?.list[0].dt * 1000).toDateString()"}
                size="text_xs"
                type="regular"
                color="#FAFAFA"
                vAlign="center"
              />
              <View style={styles.infoHead}>
                <View style={styles.dailyDegreeArea}>
                  <AppText
                    text={"ConvertCelsius(weatherData?.list[0].main.temp)"}
                    type="xBold"
                    size="heading_xl"
                  />
                  <AppText
                    text={"weatherData?.list[1].weather[0].main"}
                    type={"bold"}
                    size="text_md"
                  />
                  <AppText
                    text={`weatherData?.list[0].weather[0].description
                        .charAt(0)
                        .toUpperCase() +
                      weatherData?.list[0].weather[0].description.slice(1)`}
                    type="regular"
                    size="text_sm"
                  />
                </View>
                <Cloud
                  width={128}
                  height={128}
                  style={{
                    transform: [{ translateY: 20 }],
                  }}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.infoMiddle}>
        <WeatherDetail
          title="Thermal sensation"
          value={"ConvertCelsius(weatherData?.main.feels_like)"}
          svg={<Thermometer width={24} height={24} />}
        />

        <WeatherDetail
          title="Probability of rain"
          value={"not" + "%"}
          svg={<Rain width={24} height={24} />}
        />
        <WeatherDetail
          title="Wind speed"
          value={"weatherData?.wind.speed" + " km/h"}
          svg={<Wind width={24} height={24} />}
        />
        <WeatherDetail
          title="Air humidity"
          value={"weatherData?.main.humidity" + "%"}
          svg={<Drop width={24} height={24} />}
        />
        <WeatherDetail
          title="UV Index"
          value={"weatherData?.main.humidity" + ""}
          svg={<Sun width={24} height={24} />}
        />
      </View>
      <View style={styles.weekly}>
        <WeeklyInfo
          day="Mon"
          maxDegree="28°c"
          minDegree="26°c"
          svg={<Cloud width={68} height={68} />}
        />
        <WeeklyInfo
          day="Mon"
          maxDegree="28°c"
          minDegree="26°c"
          svg={<Cloud width={68} height={68} />}
        />
        <WeeklyInfo
          day="Mon"
          maxDegree="28°c"
          minDegree="26°c"
          svg={<Cloud width={68} height={68} />}
        />
        <WeeklyInfo
          day="Mon"
          maxDegree="28°c"
          minDegree="26°c"
          svg={<Cloud width={68} height={68} />}
        />
        <WeeklyInfo
          day="Mon"
          maxDegree="28°c"
          minDegree="26°c"
          svg={<Cloud width={68} height={68} />}
        />
      </View>
    </>
  );
};

export default Detail;
