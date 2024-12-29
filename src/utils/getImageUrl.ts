import { getPreviewBg } from "./getMappingdata";

export function getWeatherIcon1XUrl(name: string): string {
  return new URL(`/src/assets/weatherIcon@1x/${name}.webp`, import.meta.url)
    .href;
}

export function getWeatherIcon2XUrl(name: string): string {
  return new URL(`/src/assets/weatherIcon@2x/${name}.webp`, import.meta.url)
    .href;
}

export function getWeatherBGUrl(weatherIconCode: string): string {
  const name = getPreviewBg(weatherIconCode);

  return new URL(`/src/assets/weatherBackground/${name}.png`, import.meta.url)
    .href;
}

export function getCityBgUrl(name: string): string {
  return new URL(`/src/assets/cityImages/${name}.png`, import.meta.url).href;
}
