import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import { TITLE, DESCRIPTION, BUTTON } from "../constants/Description";

export default function Description() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>{TITLE}</Header>
      <Contents>{DESCRIPTION}</Contents>
      <GotoPhoto onClick={() => navigate("/photo")}>{BUTTON}</GotoPhoto>
    </Container>
  );
}

const Container = styled.div`
  cursor: url("/cursor.png"), pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const Header = styled.h1``;

const Contents = styled.span`
  white-space: pre-line;
`;

const GotoPhoto = styled.button`
  cursor: url("/cursor.png"), pointer;
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
