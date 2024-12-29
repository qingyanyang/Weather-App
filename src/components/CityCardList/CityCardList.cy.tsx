// import "cypress";
import { CityCardList } from "./CityCardList";

describe("<CityCardList />", () => {
  it("renders city cards with weather data and handles clicks correctly", () => {
    // Mock city list data
    const mockCityList = [
      {
        cityName: "Sydney",
        cityTempRange: "23 ~ 25°",
        weatherIconCode: "cloudyIcon",
      },
      {
        cityName: "Shanghai",
        cityTempRange: "23 ~ 25°",
        weatherIconCode: "drizzleIcon",
      },
      {
        cityName: "New York",
        cityTempRange: "23 ~ 25°",
        weatherIconCode: "cloudyIcon",
      },
      {
        cityName: "London",
        cityTempRange: "23 ~ 25°",
        weatherIconCode: "thunderIcon",
      },
    ];

    // Spy on the getClickedCity function
    const setClickedCitySpy = cy.spy().as("setClickedCitySpy");

    // Mount the CityCardList component
    cy.mount(
      <CityCardList
        getClickedCity={setClickedCitySpy}
        cityList={mockCityList}
      />
    );

    // Verify that each city card is rendered with the correct data
    cy.contains("Sydney").should("be.visible");
    cy.contains("Shanghai").should("be.visible");
    cy.contains("New York").should("be.visible");
    cy.contains("London").should("be.visible");

    // check chilren length
    cy.get('[data-testid="city-cards"] >').should("have.length", 4);

    // click child component should get index of each
    cy.get('[data-testid="city-cards"] >').eq(0).click();
    cy.get("@setClickedCitySpy").should("have.been.calledOnceWith", 0);
    cy.get('[data-testid="city-cards"] >').eq(1).click();
    cy.get("@setClickedCitySpy").should("have.been.calledWith", 1);
    cy.get('[data-testid="city-cards"] >').eq(2).click();
    cy.get("@setClickedCitySpy").should("have.been.calledWith", 2);
    cy.get('[data-testid="city-cards"] >').eq(3).click();
    cy.get("@setClickedCitySpy").should("have.been.calledWith", 3);
  });
});
