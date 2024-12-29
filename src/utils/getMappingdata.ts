import {
  DEFAULT_COLOR_DARK,
  DEFAULT_COLOR_LIGHT,
  RAIN_COLOR_DARK,
  RAIN_COLOR_LIGHT,
  THUNDERSTORM_COLOR_DARK,
  THUNDERSTORM_COLOR_LIGHT,
} from "@/constants";
import { CityWeatherDataType } from "@/types";
import dayjs from "dayjs";
/**
 * 
 * 
 * {
    city: "Shanghai",
    weeklyWeatherData: [
      {
        tempRange: "28 ~ 32°",
        iconCode: "01d",
        date: "23 July",
        day: "Sunday",
        time: "12:00",
        metaDetails: {
          humidity: "85%",
          pm25: "75µg",
          somatosensoryTemp: "26°",
          windSpeed: "9km/h",
        },
      },
      {
        tempRange: "28 ~ 32°",
        iconCode: "10d",
        date: "24 July",
        day: "Monday",
        time: "12:00",
        metaDetails: {
          humidity: "85%",
          pm25: "75µg",
          somatosensoryTemp: "26°",
          windSpeed: "9km/h",
        },
      },
      {
        tempRange: "28 ~ 32°",
        iconCode: "09d",
        date: "25 July",
        day: "Tuesday",
        time: "12:00",
        metaDetails: {
          humidity: "85%",
          pm25: "75µg",
          somatosensoryTemp: "26°",
          windSpeed: "9km/h",
        },
      },
      {
        tempRange: "28 ~ 32°",
        iconCode: "09d",
        date: "26 July",
        day: "Wednesday",
        time: "12:00",
        metaDetails: {
          humidity: "85%",
          pm25: "75µg",
          somatosensoryTemp: "26°",
          windSpeed: "9km/h",
        },
      },
      {
        tempRange: "28 ~ 32°",
        iconCode: "09d",
        date: "27 July",
        day: "Thursday",
        time: "12:00",
        metaDetails: {
          humidity: "85%",
          pm25: "75µg",
          somatosensoryTemp: "26°",
          windSpeed: "9km/h",
        },
      },
    ],
  },
 * 
 */
/* eslint-disable */
export const mappingWeatherModel = (data: any): CityWeatherDataType => {
  const city = data.location.name;
  const weeklyWeatherData: any[] = [];
  // get current metaDetails
  const currentData = data.current;
  const metaDetailsCurrent = {
    humidity: `${currentData.humidity}%`,
    pm25: `${Math.round(currentData.air_quality.pm2_5)}µg`,
    somatosensoryTemp: `${Math.round(currentData.feelslike_c)}°`,
    windSpeed: `${Math.round(currentData.wind_kph)}km/h`,
  };

  data.forecast.forecastday.forEach((singleDayData: any, index: number) => {
    const unixTimestamp = singleDayData.date_epoch;
    const dayjsObj = dayjs.unix(unixTimestamp);
    const date = dayjsObj.date();
    const month = dayjsObj.format("MMMM");
    const day = dayjsObj.format("dddd");
    const time = dayjsObj.format("HH:mm");

    const singleData = singleDayData.day;
    const tempRange = `${Math.round(singleData.mintemp_c)} ~ ${Math.round(
      singleData.maxtemp_c
    )}°`;
    const iconCode = getIconCode(singleData.condition.text);
    const metaDetails = index === 0 ? metaDetailsCurrent : null;
    const dayWeatherData = {
      tempRange: tempRange,
      iconCode: iconCode,
      date: `${date} ${month}`,
      day: day,
      time: time,
      metaDetails: metaDetails,
    };
    weeklyWeatherData.push(dayWeatherData);
  });

  return {
    city: city,
    weeklyWeatherData: weeklyWeatherData,
  };
};

/**
 * let iconText
 * iconText.contains('sunny') -> return 'sunnyIcon'
 * iconText.contains('clear') -> return 'sunnyNightIcon'
 * iconText.contains('cloudy') -> return 'cloudyIcon'
 * iconText.contains('partly cloudy') -> return 'partialCloudyIcon'
 * iconText.contains('overcast') -> return 'overcastIcon'
 * iconText.contains('mist') -> return 'rainIcon'
 * iconText.contains('rain') -> return 'rainIcon'
 * iconText.contains('drizzle') -> return 'drizzleIcon'
 * iconText.contains('snow') -> return 'snowIcon'
 * iconText.contains('sleet') -> return 'snowIcon'
 * iconText.contains('ice') -> return 'snowIcon'
 * iconText.contains('blizzard') -> return 'snowIcon'
 * iconText.contains('thunder') -> return 'thunderIcon'
 * iconText.contains('fog') -> return 'fogIcon'
 * default: "drizzleIcon"
 */
const getIconCode = (iconText: string) => {
  iconText = iconText.toLocaleLowerCase();
  if (iconText.includes("sunny")) {
    return "sunnyIcon";
  } else if (iconText.includes("clear")) {
    return "sunnyNightIcon";
  } else if (iconText.includes("cloudy")) {
    return "cloudyIcon";
  } else if (iconText.includes("mist") || iconText.includes("rain")) {
    return "rainIcon";
  } else if (iconText.includes("overcast")) {
    return "overcastIcon";
  } else if (
    iconText.includes("snow") ||
    iconText.includes("sleet") ||
    iconText.includes("ice") ||
    iconText.includes("blizzard")
  ) {
    return "snowIcon";
  } else if (iconText.includes("drizzle")) {
    return "drizzleIcon";
  } else if (iconText.includes("partly cloudy")) {
    return "partialCloudyIcon";
  } else if (iconText.includes("thunder")) {
    return "thunderIcon";
  } else if (iconText.includes("fog")) {
    return "fogIcon";
  } else {
    return "drizzleIcon"; // default value
  }
};

/**
 *
 *includes('thunderIcon|snowIcon')-> thunder color
 *includes('rainIcon|drizzleIcon')-> rain color
 */
export const getCityBgColorString = (weatherIconCode: string) => {
  const { colorLight, colorDark } = getPreviewBgColorString(weatherIconCode);
  const bgString = `linear-gradient(to bottom right,${colorLight} 10%,${colorDark})`;
  return bgString;
};

export const getPreviewBgColorString = (weatherIconCode: string) => {
  let colorLight = DEFAULT_COLOR_LIGHT;
  let colorDark = DEFAULT_COLOR_DARK;

  if (
    weatherIconCode.includes("thunderIcon") ||
    weatherIconCode.includes("snowIcon")
  ) {
    colorLight = THUNDERSTORM_COLOR_LIGHT;
    colorDark = THUNDERSTORM_COLOR_DARK;
  } else if (
    weatherIconCode.includes("rainIcon") ||
    weatherIconCode.includes("drizzleIcon")
  ) {
    colorLight = RAIN_COLOR_LIGHT;
    colorDark = RAIN_COLOR_DARK;
  }
  return { colorLight, colorDark };
};

/**
 *
 *includes('sunnyIcon|sunnyNightIcon')->'sunnyBg'
 *includes('snowIcon')->'snowBg'
 *includes('rainIcon|drizzleIcon')->'rainBg'
 */
export function getPreviewBg(weatherIconCode: string): string {
  let name = "cloudyBg";

  if (
    weatherIconCode.includes("sunnyIcon") ||
    weatherIconCode.includes("sunnyNightIcon")
  ) {
    name = "sunnyBg";
  } else if (weatherIconCode.includes("snowIcon")) {
    name = "snowBg";
  } else if (
    weatherIconCode.includes("rainIcon") ||
    weatherIconCode.includes("drizzleIcon")
  ) {
    name = "rainBg";
  }

  return name;
}
