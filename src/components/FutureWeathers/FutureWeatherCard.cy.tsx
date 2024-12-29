// import "cypress";
import { FutureWeatherCard } from "./FutureWeatherCard";

describe("<FutureWeatherCard />", () => {
  it("renders", () => {
    /**
     * 
     *  tempRange: "28 ~ 32°",
        iconCode: "09d",
        date: "27 July",
        day: "Thursday",
     */
    const mockFutureWeatherData = {
      tempRange: "23 ~ 25°",
      iconCode: "cloudyIcon",
      date: "27 July",
      day: "Thursday",
      time: "12:00am",
      metaDetails: null,
    };

    cy.mount(<FutureWeatherCard {...mockFutureWeatherData} />);
  });
});
