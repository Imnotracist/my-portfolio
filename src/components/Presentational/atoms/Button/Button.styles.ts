import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #04aa6d; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  font-family: Cartograph CF;
`;

export const BlackButton = styled(StyledButton)`
  border-radius: 4px;
  background-color: #191919;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 16px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;

  & > span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  & > span::after {
    content: "\\00bb";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  &:hover > span {
    padding-right: 25px;
  }

  &:hover > span::after {
    opacity: 1;
    right: 0;
  }
`;
