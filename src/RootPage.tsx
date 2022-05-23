import App from "./App";
import { BrowserRouter as Router, useRoutes, Navigate } from "react-router-dom";

const GetRoutes = () => {
  const element: React.ReactElement | null = useRoutes([
    { path: "*", element: <Navigate to="/app" /> },
    { path: "/app/*", element: <App /> },
    { path: "/404", element: <h1>Page not found.</h1> },
  ]);
  return element;
};

const AuthPage = () => {
  return <Router>{<GetRoutes />}</Router>;
};

export default AuthPage;
