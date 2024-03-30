import React, { useState } from "react";
import { View } from "react-native";
import { AppInput, AppText } from "../../components";
import LongLogo from "../../assets/icons/logoLong.svg";
import { navigate, Props } from "./types";
import { styles } from "./index.style";
import Api from "../../Api";
import { useStore } from "../../store/store";

const Home = (props: Props) => {
  const { navigation } = props;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [city, setCity] = useState<any[] | undefined | unknown>([]);

  const { fetchWeather } = useStore() as { fetchWeather: Function };

  const fetchCityList = async (searchQuery: string) => {
    try {
      const response = await Api.GET(
        `weather?q=${searchQuery}&appid=${process.env.API_KEY}&units=metric`,
        {
          // q: searchQuery,
        }
      );
      return response.data;
    } catch (error) {
      console.error("error", error as string);
    }
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
      console.log("errorSearch", error as string);
    }
  };

  async function Req(name: string) {
    await fetchWeather(name);
  }

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
                Req(city.name);
                navigation.navigate("Detail");
              }}
              showLoading={true}
            />
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }} />
    </>
  );
};

export default Home;
