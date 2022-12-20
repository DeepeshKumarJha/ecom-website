import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Account from "./pages/Account/Account";
import Login from "./pages/Account/Login";
import Register from "./pages/Account/Register";
import AllCollections from "./pages/Collections/AllCollections";
import {
  default as Collections,
  default as Shopping,
} from "./pages/Collections/Collections";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import Sustainability from "./pages/Sustainability/Sustainability";
import ErrorPage from "./routes/error-page";
import HelloPage from "./routes/hello-page";
import Root from "./routes/root";
import "./scss/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

const NavigateTo = ({ goto }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(goto);
  }, []);
  return <></>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "collections",
        element: <Collections />,
        children: [
          { path: "", element: <NavigateTo goto="/collections/all" /> },
          {
            path: "all",
            element: <AllCollections />,
          },
          {
            path: "oral-care",
            element: <h1>Oral Care</h1>,
          },
        ],
      },
      {
        path: "account",
        element: <Account />,
        children: [
          { path: "", element: <NavigateTo goto="/account/login" /> },
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
      { path: "sustainability", element: <Sustainability /> },
      { path: "product/:id", element: <ProductPage /> },
      { path: "about-us", element: <AboutUs /> },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);