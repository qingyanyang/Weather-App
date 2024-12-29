// env constants
export const WEATHER_API_KEY =
  import.meta.env.VITE_REACT_APP_WEATHER_API_KEY || "";
export const WEATHER_BASE_URL = import.meta.env
  .VITE_REACT_APP_WEATHER_API_BASE_URL;

// City list constant
export const CITY_LIST = "Sydney,Shanghai,New York,London";

// Color constants
export const DEFAULT_COLOR_LIGHT = "rgba(153, 178, 239, 1)";
export const DEFAULT_COLOR_DARK = "rgba(26, 110, 234, 0.8)";
export const THUNDERSTORM_COLOR_LIGHT = "rgba(142, 164, 233, 1)";
export const THUNDERSTORM_COLOR_DARK = "rgba(92, 77, 212, 0.8)";
export const RAIN_COLOR_LIGHT = "rgba(137, 151, 233, 1)";
export const RAIN_COLOR_DARK = "rgba(68, 84, 220, 0.8)";
