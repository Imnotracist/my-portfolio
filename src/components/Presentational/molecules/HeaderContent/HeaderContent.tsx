import { HeaderContentContainer } from "./HeaderContent.styles";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import { StyledTitle } from "../../atoms/Title/Title.styles";

const HeaderContent = () => {
  return (
    <HeaderContentContainer>
      <StyledTitle>HNGB1112</StyledTitle>
      <NavigationMenu />
    </HeaderContentContainer>
  );
};
export default HeaderContent;
