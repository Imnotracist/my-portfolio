import { NavigationMenuContainer } from "./NavigationMenu.styles";
import StyledLink from "../../atoms/Link/Link";
import StyledList from "../../atoms/List/List";

const NavigationMenu = () => {
  return (
    <NavigationMenuContainer>
      <StyledList>
        <li>
          <StyledLink href="#">Home</StyledLink>
        </li>
        <li>
          <StyledLink href="#">About Me</StyledLink>
        </li>
        <li>
          <StyledLink href="#">Projects</StyledLink>
        </li>
        <li>
          <StyledLink href="#">Contact</StyledLink>
        </li>
      </StyledList>
    </NavigationMenuContainer>
  );
};
export default NavigationMenu;
