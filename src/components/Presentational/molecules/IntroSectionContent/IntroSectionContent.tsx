import { IntroSectionContentContainer } from "./IntroSectionContent.styles";
import { BlackButton } from "../../atoms/Button/Button";

const IntroSectionContent = () => {
  return (
    <IntroSectionContentContainer>
      <div className="content-left">
        <h1>Hello, my name is Bao</h1>
        <h3>
          I'm an coding enthusiast, and I enjoy bulding website and learning
          algorithms.
        </h3>
        <p>
          I am currently a 3rd year uni student. I love to try new thing.
          Especially, new programming concepts.
        </p>
        <br></br>
        <BlackButton>
          <span>More about me</span>
        </BlackButton>
      </div>
    </IntroSectionContentContainer>
  );
};

export default IntroSectionContent;
