import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import SelectPhoto from "../component/select/SelectPhoto";
import SelectColor from "../component/select/SelectColor";
import Preview from "../component/select/Preview";

export default function Select() {
  const navigate = useNavigate();

  return (
    <Container>
      <SelectWrapper>
        <SelectPhoto />
        <SelectColor />
        <Preview />
      </SelectWrapper>
      <GotoResult onClick={() => navigate("/result")}>다운로드하기</GotoResult>
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

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 2.8125rem;

  width: inherit;
`;

const GotoResult = styled.button`
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
