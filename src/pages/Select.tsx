import styled from "@emotion/styled";

export default function Select() {
  return (
    <Container>
      <p>Select</p>
      <MemoInput type="text" placeholder="응원 입력" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MemoInput = styled.input`
  padding: 10px;
  width: 10rem;
  height: 3rem;

  font-size: 32px;
  color: var(--gray-scale-100);

  border: 3px solid var(--pr-pink);
  background-color: transparent;
  :focus {
    outline: none;
  }

  ::placeholder {
    color: #e0489a;
  }
`;
