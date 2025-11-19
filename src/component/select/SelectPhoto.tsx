import styled from "@emotion/styled";

import StepHeader from "./StepHeader";
import { SELECT_PHOTO } from "../../constants/Select";

const _testArr = ["1", "2", "3", "4", "5"];

export default function SelectPhoto() {
  return (
    <Container>
      <StepHeader
        step={SELECT_PHOTO.step}
        title={SELECT_PHOTO.title}
        description={SELECT_PHOTO.description}
      />
      <PhotoWrapper>
        {_testArr.map((elem, idx) => (
          <ElementSelect key={idx}>{elem}</ElementSelect>
        ))}
      </PhotoWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PhotoWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  column-gap: 20px; /* 좌우 간격 */
  row-gap: 20px; /* 상하 간격 */
  justify-content: center;
  align-items: center;

  background-color: #908484;

  & > div:nth-of-type(1) {
    grid-column: 1;
    grid-row: 1;
  }
  & > div:nth-of-type(2) {
    grid-column: 2;
    grid-row: 1;
  }
  & > div:nth-of-type(3) {
    grid-column: 1;
    grid-row: 2;
  }
  & > div:nth-of-type(4) {
    grid-column: 2;
    grid-row: 2;
  }
  & > div:nth-of-type(5) {
    grid-column: 1;
    grid-row: 3;
  }
`;

const ElementSelect = styled.div`
  width: 120px;
  height: 160px;
  background-color: #d9d9d9;
  border-radius: 4px;

  :hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;
