import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { AppInput, AppText } from "../../components";
import LongLogo from "../../assets/icons/logoLong.svg";
import { navigate, Props } from "./types";
import { styles } from "./index.style";
import Api from "../../Api";
import axios from "axios";

const Home = (props: Props) => {
  const { navigation } = props;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any[]>([]);

  const dummyData = [
    {
      id: 1,
      name: "Ankara",
      country: "TR",
    },
    {
      id: 2,
      name: "İstanbul",
      country: "TR",
    },
    {
      id: 3,
      name: "İzmir",
      country: "TR",
    },
    {
      id: 4,
      name: "Antalya",
      country: "TR",
    },
    {
      id: 5,
      name: "Adana",
      country: "TR",
    },
    {
      id: 6,
      name: "İzmit",
      country: "TR",
    },
    {
      id: 7,
      name: "Bursa",
      country: "TR",
    },
    {
      id: 8,
      name: "İznik",
      country: "TR",
    },
    {
      id: 9,
      name: "İskoçya",
      country: "UK",
    },
    {
      id: 10,
      name: "Zonguldak",
      country: "TR",
    },
    {
      id: 11,
      name: "Samsun",
      country: "TR",
    },
    {
      id: 12,
      name: "Trabzon",
      country: "TR",
    },
    {
      id: 13,
      name: "Rize",
      country: "TR",
    },
    {
      id: 14,
      name: "Artvin",
      country: "TR",
    },
    {
      id: 15,
      name: "Giresun",
      country: "TR",
    },
    {
      id: 16,
      name: "Ordu",
      country: "TR",
    },
    {
      id: 17,
      name: "Sinop",
      country: "TR",
    },
    {
      id: 18,
      name: "Çorum",
      country: "TR",
    },
    {
      id: 19,
      name: "Sivas",
      country: "TR",
    },
    {
      id: 20,
      name: "Erzurum",
      country: "TR",
    },
    {
      id: 21,
      name: "Kars",
      country: "TR",
    },
    {
      id: 22,
      name: "Ardahan",
      country: "TR",
    },
    {
      id: 23,
      name: "Iğdır",
      country: "TR",
    },
    {
      id: 24,
      name: "Ağrı",
      country: "TR",
    },
    {
      id: 25,
      name: "Van",
      country: "TR",
    },
    {
      id: 26,
      name: "Hakkari",
      country: "TR",
    },
    {
      id: 27,
      name: "Şırnak",
      country: "TR",
    },
    {
      id: 28,
      name: "Batman",
      country: "TR",
    },
    {
      id: 29,
      name: "Siirt",
      country: "TR",
    },
    {
      id: 30,
      name: "Mardin",
      country: "TR",
    },
    {
      id: 31,
      name: "Muş",
      country: "TR",
    },
  ];

  useEffect(() => {
    setFilteredData(dummyData);
  }, []);

  const handleSearch = (text: string) => {
    const searchTerm =
      text.toLocaleLowerCase("tr-TR") || text.toLocaleLowerCase("en-US");

    setSearchQuery(searchTerm);
    let filtered: any[] = [];
    if (searchTerm === "") {
      filtered = dummyData;
    } else {
      filtered = dummyData.filter((item) => {
        let name = item.name.toLocaleLowerCase("tr-TR");
        for (let i = 0; i < searchTerm.length; i++) {
          if (name[i] !== searchTerm[i]) {
            return false;
          }
        }
        return true;
      });
    }
    setFilteredData(filtered);
  };

  const fetchWeather = async (city: string) => {
    try {
      const response = await Api.GET(city, {
        APPID: process.env.API_KEY,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
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
              filterData={filteredData}
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
