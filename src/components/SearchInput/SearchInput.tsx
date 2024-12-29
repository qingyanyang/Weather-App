import { Row, Card } from "@/styles";
import { Input, SearchBar } from "./style";
import { useRef, useState } from "react";
import throttle from "lodash/throttle";

export const SearchInput: React.FC<{
  getSearchedCityInput: (value: string) => void;
}> = ({ getSearchedCityInput }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const searchContent = useRef<HTMLInputElement>(null);

  const handleSearch = throttle(() => {
    if (inputValue) {
      getSearchedCityInput(inputValue);
      setInputValue("");
    }
  }, 2000);

  const handleInputTextChange = () => {
    setInputValue(searchContent.current!.value);
  };
  return (
    <Card $width={"55%"} $padding={2} $borderRadius={10}>
      <Row>
        <Input
          value={inputValue}
          placeholder="Search for a city"
          onChange={handleInputTextChange}
          ref={searchContent}
        />
        <SearchBar onClick={handleSearch}>Search</SearchBar>
      </Row>
    </Card>
  );
};
