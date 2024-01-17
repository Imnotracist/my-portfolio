import styled from "styled-components";
import { device } from "../../../../styles/Breakpoint";

export const IntroSectionContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 120px;
  margin-bottom: 120px;
  /* margin-left: 70px;
  margin-right: 70px; */
  padding-left: 70px;
  padding-right: 70px;
  border: 1px solid black;

  & > .content-left {
    text-align: justify;
    text-justify: inter-word;
    flex: 0.5;
  }

  @media ${device.md} {
    & > .content-left {
      flex: 1;
    }
  }

  @media ${device.sm} {
    & > .content-left {
      text-align: center;
    }
  }
`;
