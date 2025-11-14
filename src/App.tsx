import { Outlet, useMatches } from "react-router-dom";
import styled from "@emotion/styled";

interface RouteHandle {
  title?: string;
}

export default function App() {
  const matches = useMatches();
  const currentMatch = matches[matches.length - 1];

  // 아직 라우트가 매칭이 안됬다면
  if (!currentMatch || !currentMatch.handle) {
    return null;
  }

  const currentTitle =
    (currentMatch.handle as RouteHandle).title || "PHOTO-BOOTH";

  return (
    <Container className="global-container">
      <p>{currentTitle} 테스트 페이지</p>
      <div className="outlet-wrapper">
        <Outlet />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: aquamarine;
`;
