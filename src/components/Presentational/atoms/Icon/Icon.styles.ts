import styled from "styled-components";
import { device } from "../../../../styles/Breakpoint";

interface Props {
  isOpen: boolean;
}

export const StyledIcon = styled.div``;

export const HamburgerIcon = styled.div<Props>`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    width: 20px;
    height: 3px;
    background-color: #191919;
    margin: 4px 0;
  }

  ${(Props) =>
    Props.isOpen
      ? `&::before {
      transform: rotate(31deg);
    }

    &::after {
      transform: rotate(-31deg);
    }
  `
      : ""}
`;

export const MenuToggle = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }
`;
