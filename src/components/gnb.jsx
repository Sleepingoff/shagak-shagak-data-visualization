import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes, gnbRootList, isParentRoute } from "../routes";

const ParentGnbItem = ({ route, currentPath }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const shouldOpen = route.children.some((childPath) =>
      currentPath.startsWith(childPath)
    );
    setOpen(shouldOpen);
  }, [currentPath, route.children]);

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <li className={`parent ${open ? "open" : ""}`}>
      <Link to={route.link} onClick={toggleOpen}>
        {route.name}
      </Link>
      <ul className="subRoutes">
        {route.children.map((childPath) => {
          const childRoute = routes[childPath];
          return (
            <GnbItem
              route={childRoute}
              currentPath={currentPath}
              key={childRoute.key}
            />
          );
        })}
      </ul>
    </li>
  );
};

const ChildGnbItem = ({ route, currentPath }) => {
  const isLeaf = !route.children;
  const activeClass = route.link === currentPath ? "active" : "";

  return (
    <li className={activeClass}>
      <Link to={route.link}>{route.name}</Link>
      {!isLeaf && (
        <ul className="subRoutes">
          {route.children.map((childPath) => {
            const childRoute = routes[childPath];
            return (
              <li key={childRoute.key}>
                <Link to={childRoute.link}>
                  {childRoute.name.split(" ").pop()}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

const GnbItem = ({ route, currentPath }) => {
  if (isParentRoute(route)) {
    return <ParentGnbItem route={route} currentPath={currentPath} />;
  }
  return <ChildGnbItem route={route} currentPath={currentPath} />;
};

const Gnb = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside>
      <h2>
        <Link to="/">
          사각사각 데이터 시각화
          <sub>with React</sub>
        </Link>
      </h2>
      <ul>
        {gnbRootList.map((route) => (
          <GnbItem route={route} currentPath={currentPath} key={route.key} />
        ))}
      </ul>
    </aside>
  );
};

export default Gnb;
