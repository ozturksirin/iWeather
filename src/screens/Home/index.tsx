import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SearchInput, AppText } from "../../components";
import LongLogo from "../../assets/icons/logoLong.svg";
import { City, navigate, Props } from "./types";
import { styles } from "./index.style";
import { useStore } from "../../store/store";
import Toast from "react-native-toast-message";
import { flexStyles } from "../../thema";
import * as Location from "expo-location";

const Home = (props: Props) => {
  const { navigation } = props;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [city, setCity] = useState<City[] | undefined | unknown | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { fetchWeather, fetchCityList, fetchWeatherByLocation } =
    useStore() as {
      fetchWeather: Function;
      fetchCityList: Function;
      fetchWeatherByLocation: Function;
    };

  const handleSearch = async (text: string) => {
    const searchTerm: string =
      text
        .trim()
        .toLocaleLowerCase("tr-TR")
        .charAt(0)
        .toLocaleUpperCase("tr-TR") + text.slice(1).toLocaleLowerCase("tr-TR");
    setSearchQuery(searchTerm);

    try {
      if (searchTerm !== "") {
        const city = await fetchCityList(searchTerm);
        setCity(city);
      } else {
        setCity([]);
      }
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "something went wrong.",
      });
    }
  };

  const Req = async (name: string) => {
    setIsLoading(true);
    await fetchWeather(name);
    navigation.navigate("Detail");
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const getLocation = async () => {
    try {
      setIsLoading(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Permission to access location was denied",
        });
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      await fetchWeatherByLocation(
        location.coords.latitude,
        location.coords.longitude
      );
      navigation.navigate("Detail");
      setIsLoading(false);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Location not found.",
      });
    }
  };

  return (
    <>
      <View style={flexStyles(1)}>
        <LongLogo style={styles.logo} width={186} height={32} />
        <View style={styles.searchBody}>
          <View>
            <AppText
              text="Welcome to "
              size="text_lg"
              type="bold"
              hAlign="center"
              multiText={{
                text: "TypeWeather",
                type: "bold",
                size: "text_xl",
              }}
            />
            <AppText
              text="Choose a location to see the weather forecast"
              size="text_sm"
              type="regular"
              hAlign="center"
              newStyle={{ marginBottom: 20 }}
            />
            <SearchInput
              onChange={handleSearch}
              value={searchQuery}
              filterData={city ? city : null}
              navigate={(city: navigate) => {
                Req(city.name);
              }}
              // showLoading={isLoading}
              showLoading={true}
            />
            <AppText
              text="Use your current"
              multiText={{
                text: " Location",
                type: "bold",
                size: "text_xl",
              }}
              size="text_lg"
              type="regular"
              hAlign="center"
              onPress={() => getLocation()}
              newStyle={{ marginTop: 20 }}
            />
          </View>
        </View>
      </View>
      <View style={flexStyles(1)} />
    </>
  );
};

export default Home;
