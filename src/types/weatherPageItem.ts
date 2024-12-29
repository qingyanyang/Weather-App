export type CityWeatherDataType = {
  city: string;
  weeklyWeatherData: WeeklyWeatherDataType[];
};

export interface WeeklyWeatherDataType {
  tempRange: string;
  iconCode: string;
  date: string;
  day: string;
  time: string;
  metaDetails: MetaDetailType | null;
}

export interface TodayWeatherDataType extends WeeklyWeatherDataType {
  cityName: string;
}

export type MetaDetailType = {
  humidity: string;
  pm25: string;
  somatosensoryTemp: string;
  windSpeed: string;
};

export type CityCardType = {
  cityName: string;
  cityTempRange: string;
  weatherIconCode: string;
};

export type LoadingErrorContextType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
};
