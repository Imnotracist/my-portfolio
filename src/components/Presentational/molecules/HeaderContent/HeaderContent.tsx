import { HeaderContentContainer } from "./HeaderContent.styles";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import { StyledTitle } from "../../atoms/Title/Title.styles";

const HeaderContent = () => {
  return (
    <HeaderContentContainer>
      <StyledTitle>
        <span>HNGB1112</span>
      </StyledTitle>
      <NavigationMenu />
    </HeaderContentContainer>
  );
};
export default HeaderContent;
