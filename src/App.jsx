import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
  // routes 객체를 배열로 변환
  const routeConfig = Object.values(routes).map((route) => ({
    path: route.link,
    element: <div>{route.name}</div>, // 여기에 실제 컴포넌트를 렌더링하도록 수정하세요
    children: route.children?.map((childPath) => ({
      path: routes[childPath].link,
      element: <div>{routes[childPath].name}</div>, // 마찬가지로 실제 컴포넌트로 수정
    })),
  }));

  const element = useRoutes(routeConfig);
  return element;
};

export default App;
