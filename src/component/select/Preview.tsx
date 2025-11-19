import styled from "@emotion/styled";

import StepHeader from "./StepHeader";
import Photo from "../result/Photo";

import { PREVIEW } from "../../constants/Select";

export default function Preview() {
  return (
    <Container>
      <StepHeader
        step={PREVIEW.step}
        title={PREVIEW.title}
        description={PREVIEW.description}
      />
      <Photo />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
