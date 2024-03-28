import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { AppInput, AppText } from "../../components";
import LongLogo from "../../assets/icons/logoLong.svg";
import { navigate, Props } from "./types";
import { styles } from "./index.style";
import Api from "../../Api";
import axios from "axios";
import { Store, useStore } from "../../store/store";
import AppTheme from "../../thema";

const Home = (props: Props) => {
  const { navigation } = props;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [city, setCity] = useState<any[] | undefined>([]);
  const { fetchWeather } = useStore() as Store;

  const getCityList = async (searchQuery: string) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${process.env.API_KEY}&units=metric`
      );
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSearch = async (text: string) => {
    const searchTerm =
      text
        .trim()
        .toLocaleLowerCase("tr-TR")
        .charAt(0)
        .toLocaleUpperCase("tr-TR") + text.slice(1).toLocaleLowerCase("tr-TR");
    setSearchQuery(searchTerm);

    try {
      if (searchTerm !== "") {
        const city = await getCityList(searchTerm);
        setCity(city);
      } else {
        setCity([]);
      }
    } catch (error) {
      console.log("errorSearch", error);
    }
  };
  return (
    <>
      <View style={{ flex: 1 }}>
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
            <AppInput
              onChange={handleSearch}
              value={searchQuery}
              filterData={city ? city : null}
              navigate={(city: navigate) => {
                fetchWeather(city.name);
                navigation.navigate("Detail", { city });
              }}
            />
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }} />
    </>
  );
};

export default Home;
