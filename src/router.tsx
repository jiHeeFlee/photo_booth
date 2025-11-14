import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";
import Description from "./pages/Description";
import Photo from "./pages/Photo";
import Select from "./pages/Select";
import Result from "./pages/Result";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: { title: "홈 페이지" },
      },
      {
        path: "description",
        element: <Description />,
        handle: { title: "설명 페이지" },
      },
      {
        path: "photo",
        element: <Photo />,
        handle: { title: "포토 부스" },
      },
      {
        path: "select",
        element: <Select />,
        handle: { title: "편집 페이지" },
      },
      {
        path: "result",
        element: <Result />,
        handle: { title: "결과 페이지" },
      },
    ],
  },
]);
