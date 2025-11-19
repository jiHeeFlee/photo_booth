import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import Photo from "../component/result/Photo";
import DownloadButton from "../component/result/DownloadButton";

import { TITLE, SUBTITLE, DESCRIPTION, BUTTON } from "../constants/Result";

export default function Result() {
  const navigate = useNavigate();

  return (
    <Container>
      <Photo />
      <Wrapper>
        <StringWrapper>
          <Title>{TITLE}</Title>
          <SubTitle>{SUBTITLE}</SubTitle>
          <Description>{DESCRIPTION}</Description>
        </StringWrapper>
        <DownloadButton />
        <GotoHome onClick={() => navigate("/")}>{BUTTON}</GotoHome>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  cursor: url("/cursor-3.png"), pointer;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  height: inherit;

  background-color: #a44545;

  padding: 100px;
`;

const StringWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.h1`
  color: var(--gr-100);
`;
const SubTitle = styled.h4`
  color: var(--gr-100);
`;
const Description = styled.span``;

const GotoHome = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 360px;
  height: 60px;

  font-size: 32px;
  font-weight: 700;
  color: var(--gr-100);
  background-color: var(--pr-pink);
  outline: none;

  :hover {
    transform: rotate(-2deg);
    transition: all 0.2s ease-in-out;
  }
`;
