import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  outline: none;
  color: grey;
  border: none;
  background-color: transparent;
  font-size: 0.9rem;
`;
export const SearchBar = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #5a4ed6;
  color: #fff;
  padding: 0.7rem 1.2rem;
  &:hover {
    background-color: #6e64d4;
    cursor: pointer;
  }
  &:active {
    background-color: #5a4ed6;
  }
`;
