import { CITY_LIST, WEATHER_API_KEY, WEATHER_BASE_URL } from "@/constants";
import { mappingWeatherModel } from "@/utils/getMappingdata";
import axios from "axios";

export const fetchWeatherData = async (cityName: string) => {
  const url = `${WEATHER_BASE_URL}?key=${WEATHER_API_KEY}&q=${cityName}&days=5&aqi=yes&alerts=no`;
  const res = await axios.get(url);
  if (res.status === 200) {
    console.log("Fetched data:", res.data);
    return res.data;
  }
  console.warn("Something wrong with code: ", res.status);
  return null;
};

export const fetchDefaultWeatherData = async () => {
  const cityListString = CITY_LIST;
  const cityList = cityListString.split(",");

  const weatherPromise = cityList.map((cityName: string) =>
    fetchWeatherData(cityName)
  );

  const weatherDataList = await Promise.all(weatherPromise);

  const defaultWeatherData = weatherDataList.map((singleData) =>
    mappingWeatherModel(singleData)
  );
  return defaultWeatherData;
};

export const fetchSearchedWeatherData = async (searchedCityName: string) => {
  if (searchedCityName) {
    const searchedWeatherdata = await fetchWeatherData(searchedCityName);

    if (searchedWeatherdata) {
      return mappingWeatherModel(searchedWeatherdata);
    } else {
      return null;
    }
  }
};
