import { StyledLogo } from "./Logo.styles";
const Logo = ({ src, alt }: { src: string; alt: string }) => {
  return <StyledLogo src={src} alt={alt} />;
};
export default Logo;
