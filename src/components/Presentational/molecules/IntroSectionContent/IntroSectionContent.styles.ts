import styled from "styled-components";

export const IntroSectionContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 120px;
  margin-left: 70px;
  margin-right: 70px;

  & > .content-left {
    text-align: justify;
    text-justify: inter-word;
    flex: 1;
  }

  & > .content-right {
    flex: 1;
    font-size: small;
    padding-top: 16px;
  }
`;
