import React from "react";
import { View, ImageBackground } from "react-native";
import { styles } from "./index.style";
import { AppText, WeatherDetail, WeeklyInfo } from "../../components";
import Night from "../../assets/icons/Weather=Few clouds, Moment=Night.svg";

import Thermometer from "../../assets/icons/Type=thermometer-simple-light.svg";
import Cloud from "../../assets/icons/Weather=Storm, Moment=Day.svg";
import AppTheme from "../../thema";

type Props = {};

const Detail = (props: Props) => {
  return (
    <>
      <View style={styles.bgArea}>
        <View style={styles.bigState}>
          <ImageBackground
            source={require("../../assets/images/Weather=Cloudy, Moment=Night.png")}
            style={styles.bgState}>
            <View style={styles.infoArea}>
              <AppText
                text="İstanbul, TR"
                size="text_md"
                type="bold"
                color="#FAFAFA"
                vAlign="center"
              />
              <AppText
                text="Monday, May 15,2023"
                size="text_xs"
                type="regular"
                color="#FAFAFA"
                vAlign="center"
              />
              <View style={styles.infoHead}>
                <View style={styles.dailyDegreeArea}>
                  <AppText text="28°c" type="xBold" size="heading_xl" />
                  <AppText text="26°c / 32°c" type={"bold"} size="text_md" />
                  <AppText text="Few Clouds" type="regular" size="text_sm" />
                </View>
                <Night width={160} height={160} />
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View
        style={{
          marginTop: 8,
          flex: 1.2,
          paddingHorizontal: 12,
          backgroundColor: "#16161F",
          borderRadius: 12,
        }}>
        <WeatherDetail
          title="Wind"
          value="5 km/h"
          svg={<Thermometer width={24} height={24} />}
        />

        <WeatherDetail
          title="Wind"
          value="5 km/h"
          svg={<Thermometer width={24} height={24} />}
        />
        <WeatherDetail
          title="Wind"
          value="5 km/h"
          svg={<Thermometer width={24} height={24} />}
        />
        <WeatherDetail
          title="Wind"
          value="5 km/h"
          svg={<Thermometer width={24} height={24} />}
        />
        <WeatherDetail
          title="Wind"
          value="5 km/h"
          svg={<Thermometer width={24} height={24} />}
        />
      </View>
      <View style={styles.weekly}>
        <WeeklyInfo />
        <WeeklyInfo />
        <WeeklyInfo />
        <WeeklyInfo />
        <WeeklyInfo />
      </View>
    </>
  );
};

export default Detail;
