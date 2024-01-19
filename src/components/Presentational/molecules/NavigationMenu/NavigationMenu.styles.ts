import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const NavigationMenuContainer = styled.nav<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  padding: 1rem;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-in-out;

  ${(Props) =>
    Props.isOpen
      ? `visibility: visible;
    opacity: 1;`
      : ""}

  @media screen and (min-width: 768px) {
    position: static;
    flex-direction: row;
  }
`;
