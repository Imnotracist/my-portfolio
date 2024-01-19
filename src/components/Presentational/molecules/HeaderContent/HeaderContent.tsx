import { HeaderContentContainer } from "./HeaderContent.styles";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import { StyledTitle } from "../../atoms/Title/Title.styles";
import { HamburgerIcon, MenuToggle } from "../../atoms/Icon/Icon.styles";

import { useState } from "react";

const HeaderContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <HeaderContentContainer>
      <StyledTitle>
        <span>HNGB1112</span>
      </StyledTitle>
      <MenuToggle onClick={toggleMenu}>
        <HamburgerIcon isOpen={isOpen} />
      </MenuToggle>
      <NavigationMenu isOpen={isOpen} />
    </HeaderContentContainer>
  );
};
export default HeaderContent;
