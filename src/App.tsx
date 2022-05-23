import React from "react";
import "./App.css";
import { useRoutes, Navigate, Link, useLocation } from "react-router-dom";
import Counter from "./features/counter";

const routes = [
  { path: "counter", name: "Counter", element: <Counter /> },
  { path: "hello", name: "Hellow World", element: <h1>Hello World~</h1> },
];

const RouterViews = () => {
  const redirect = () => {
    const [defaultRoute] = routes;
    return defaultRoute.path!;
  };

  const element: React.ReactElement | null = useRoutes([
    {
      path: "*",
      name: "*",
      element: <Navigate to={redirect()} />,
    },
    ...routes,
  ]);
  return element;
};

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <header className="App-header">
        <div className="link-group">
          {routes.map((r: any) => (
            <Link
              to={r.path}
              className={`link ${
                location.pathname.includes(r.path) ? "link-active" : ""
              }`}
            >
              {r.name}
            </Link>
          ))}
        </div>
      </header>
      <main className="App-main">{<RouterViews />}</main>
      {/* <footer className="App-footer"></footer> */}
    </div>
  );
};

export default App;
