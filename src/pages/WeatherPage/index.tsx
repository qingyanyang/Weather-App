import { PreviewCard } from "@/components/PreviewCard";
import { CardsContainer } from "./style";
import { Column, Expanded, Float, SizedBox } from "@/styles";
import { FutureWeathers } from "@/components/FutureWeathers";
import { SearchInput } from "@/components/SearchInput";
import { CityCardList } from "@/components/CityCardList";
import { useEffect, useState } from "react";
import { CityWeatherDataType } from "@/types";
import {
  getCityListdata,
  getForcastData,
  getTodayData,
} from "@/utils/getFormattedData";
import {
  fetchDefaultWeatherData,
  fetchSearchedWeatherData,
} from "@/service/httpClient";
import { useLoadingError } from "@/context/useLoadingError";
import { FadeLoader } from "react-spinners";

const WeatherPage = () => {
  const { loading, setLoading, setError } = useLoadingError();
  const [defaultWeatherInfo, setDefaultWeatherInfo] = useState<
    CityWeatherDataType[]
  >([]);
  const [searchedCityName, setSearchedCityName] = useState<string>("");
  const [searchedCityWeatherData, setSearchedCityWeatherData] =
    useState<CityWeatherDataType | null>(null);
  const [selectedCityIndex, setSelectedCityIndex] = useState<number>(0);

  // handle events
  const getSearchedCityInput = (input: string) => {
    setSearchedCityName(input);
  };

  const getClickedCity = (index: number) => {
    setSelectedCityIndex(index);
    setSearchedCityWeatherData(null);
  };

  // fetch default city value
  useEffect(() => {
    (async () => {
      try {
        setError(null);
        setLoading(true);
        const defaultWeatherData = await fetchDefaultWeatherData();
        setDefaultWeatherInfo(defaultWeatherData);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch weather data.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  // searched content change
  useEffect(() => {
    if (searchedCityName) {
      (async () => {
        try {
          setError(null);
          setLoading(true);
          const newWeatherInfo = await fetchSearchedWeatherData(
            searchedCityName
          );
          if (newWeatherInfo) {
            setSearchedCityWeatherData(newWeatherInfo);
          }
        } catch (err) {
          console.error(err);
          setError("Cannot find the city, \nPlease check your spelling.");
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [searchedCityName]);

  return (
    <>
      <CardsContainer $borderRadius={40} $padding={20}>
        {loading && (
          <Float>
            <FadeLoader />
          </Float>
        )}
        {defaultWeatherInfo.length > 0 && (
          <>
            <PreviewCard
              {...getTodayData(
                searchedCityWeatherData
                  ? searchedCityWeatherData
                  : defaultWeatherInfo[selectedCityIndex]
              )}
            />
            <Expanded>
              <Column
                $alignItems={"top"}
                $justifyContent="space-between"
                $height="100%"
              >
                <FutureWeathers
                  {...getForcastData(
                    searchedCityWeatherData
                      ? searchedCityWeatherData
                      : defaultWeatherInfo[selectedCityIndex]
                  )}
                />
                <SearchInput getSearchedCityInput={getSearchedCityInput} />
                <SizedBox $height={50} />
                <CityCardList
                  cityList={getCityListdata(defaultWeatherInfo)}
                  getClickedCity={getClickedCity}
                />
              </Column>
            </Expanded>
          </>
        )}
      </CardsContainer>
    </>
  );
};
export default WeatherPage;
