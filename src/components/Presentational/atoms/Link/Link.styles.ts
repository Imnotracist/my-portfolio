import styled from "styled-components";

export const StyledLink = styled.a`
  color: #191919;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #191919;
  }

  &::before {
    color: #191919;
    position: absolute;
    display: block;
    height: 2px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #191919;
    transform: scaleX(0);
    transition: transform 0.4s ease;
    content: "";
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;
