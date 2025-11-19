import { Outlet, useMatches } from "react-router-dom";
import styled from "@emotion/styled";

export default function App() {
  const matches = useMatches();
  const currentMatch = matches[matches.length - 1];

  // 아직 라우트가 매칭이 안됬다면
  if (!currentMatch || !currentMatch.handle) {
    return null;
  }

  return (
    <Container className="global-container">
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
