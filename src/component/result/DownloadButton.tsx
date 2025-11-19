import styled from "@emotion/styled";
import { useState } from "react";

export default function DownloadButton() {
  const [isClick, setIsClick] = useState<boolean>(false);
  return <Container>다운로드하기</Container>;
}

const Container = styled.div`
  width: 300px;
  height: 50px;

  outline: none;
  color: var(--gr-100);
  background-color: #b7d91d;
  :hover {
    transition: all 0.2s ease-in-out;
    background-color: #b04d4d;
  }
`;
