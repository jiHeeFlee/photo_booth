import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BEFORE_PHOTO, WORKING_PHOTO } from "../constants/Photo";

export default function Photo() {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [take, setTake] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 5) {
      setTake(true);
    }

    if (take) {
      setTimeout(() => {
        navigate("/select");
      }, 1000);
    }
  }, [count, take]);

  const handleClick = () => {
    setIsClick(true);
    console.log(`isClick : `, isClick);
    setCount((count) => count + 1);
  };

  return (
    <Container>
      {take && <h1>곧 이동합니다</h1>}
      {/* {isClick && } */}
      <h1>{count === 0 ? BEFORE_PHOTO : WORKING_PHOTO}</h1>
      사진 찍기 : {count}
      <PreviewArea></PreviewArea>
      <ButtonTake onClick={() => handleClick()}>사진 촬영 시작</ButtonTake>
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

const PreviewArea = styled.div`
  width: 600px;
  height: 480px;
  flex-shrink: 0;
  background-color: #332f2f;

  margin: 35px auto;
`;

const ButtonTake = styled.button`
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
