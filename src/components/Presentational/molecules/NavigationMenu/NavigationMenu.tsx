import { NavigationMenuContainer } from "./NavigationMenu.styles";
import StyledLink from "../../atoms/Link/Link";
import StyledList from "../../atoms/List/List";

type myType = {
  isOpen: boolean;
};

const NavigationMenu = (props: myType) => {
  return (
    <NavigationMenuContainer isOpen={props.isOpen}>
      <StyledList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/about">About Me</StyledLink>
        </li>
        <li>
          <StyledLink to="/projects">Projects</StyledLink>
        </li>
        <li>
          <StyledLink to="/contact">Contact</StyledLink>
        </li>
      </StyledList>
    </NavigationMenuContainer>
  );
};
export default NavigationMenu;
