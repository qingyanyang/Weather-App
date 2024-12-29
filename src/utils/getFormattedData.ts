import {
  CityCardType,
  CityWeatherDataType,
  TodayWeatherDataType,
  WeeklyWeatherDataType,
} from "@/types";

export const getCityListdata = (
  weatherInfo: CityWeatherDataType[]
): CityCardType[] => {
  const cityListdata = weatherInfo.map((singleCityWeatherData) => {
    const cityName: string = singleCityWeatherData.city;

    // get (first index data)today'temperature range and icon code of the week
    const cityTempRange: string =
      singleCityWeatherData.weeklyWeatherData[0].tempRange;
    const weatherIconCode: string =
      singleCityWeatherData.weeklyWeatherData[0].iconCode;

    return {
      cityName,
      cityTempRange,
      weatherIconCode,
    };
  });
  return cityListdata;
};

export const getForcastData = (
  weatherInfo: CityWeatherDataType
): WeeklyWeatherDataType[] => {
  const weeklyData = [...weatherInfo.weeklyWeatherData];
  // remove today
  weeklyData.shift();
  return weeklyData;
};

export const getTodayData = (
  weatherInfo: CityWeatherDataType
): TodayWeatherDataType => {
  return {
    cityName: weatherInfo.city || "",
    ...weatherInfo.weeklyWeatherData[0],
  };
};
