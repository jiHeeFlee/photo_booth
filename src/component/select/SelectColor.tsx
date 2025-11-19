import styled from "@emotion/styled";
import { useState } from "react";

import Photo from "../result/Photo";
import StepHeader from "./StepHeader";

import { SELECT_COLOR } from "../../constants/Select";

// interface SelectColorProps {
//   state: "color" | "mono";
//   selected: "color" | "mono";
// }

const FILTER_TYPE = ["color", "mono"];

export default function SelectColor() {
  const [state, setState] = useState<string>("color");
  const [selected, setSelected] = useState<string>("color");

  const handleClick = (state: string) => {
    setSelected(state);
    setState(state);
  };

  return (
    <Container>
      <StepHeader
        step={SELECT_COLOR.step}
        title={SELECT_COLOR.title}
        description={SELECT_COLOR.description}
      />
      <Photo />
      <SelectState>
        {FILTER_TYPE.map((item, key) => (
          <SelecteStateElement
            key={key}
            $state={item}
            $select={item}
            onClick={() => handleClick(item)}
          />
        ))}
      </SelectState>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SelectState = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SelecteStateElement = styled.div<{ $state: string; $select: string }>`
  display: flex;
  width: 65px;
  height: 65px;

  background-color: ${({ $state, $select }) =>
    $state === $select ? "red" : "#cad022"};
  border-radius: 999px;

  :hover {
    background-color: #2d65cc;
  }
  &:nth-child(2) {
    background-color: #535353;

    :hover {
      background-color: #2d65cc;
    }
  }
`;
