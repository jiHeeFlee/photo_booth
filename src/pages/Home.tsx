import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import { PAGE_NAME, BUTTON } from "../constants/Home";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      {PAGE_NAME}
      <GotoDescription onClick={() => navigate("/description")}>
        {BUTTON}
      </GotoDescription>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const GotoDescription = styled.button`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 360px;
  height: 60px;

  font-size: 32px;
  color: var(--gr-100);
  background-color: var(--pr-pink);
  outline: none;

  :hover {
    transform: rotate(-2deg);
    transition: all 0.2s ease-in-out;
  }
`;
