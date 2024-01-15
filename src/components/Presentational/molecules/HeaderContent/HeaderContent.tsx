import { HeaderContentContainer } from "./HeaderContent.styles";
import Logo from "../../atoms/Logo/Logo";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

const HeaderContent = () => {
  return (
    <HeaderContentContainer>
      <Logo />
      <NavigationMenu />
    </HeaderContentContainer>
  );
};
export default HeaderContent;
