import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { DeviceProvider } from "./Context/Device";
import Root from "./routes/root";
import "./scss/index.scss";

// Lazy Loading imports ===================================================================================

const Home = React.lazy(() => {
  return import("./pages/Homepage/Home");
});

const Collections = React.lazy(() => {
  return import("./pages/Collections/Collections");
});

const AboutUs = React.lazy(() => {
  return import("./pages/AboutUs/AboutUs");
});

const Account = React.lazy(() => {
  return import("./pages/Account/Account");
});

const Login = React.lazy(() => {
  return import("./pages/Account/Login");
});

const Register = React.lazy(() => {
  return import("./pages/Account/Register");
});

const AllCollections = React.lazy(() => {
  return import("./pages/Collections/AllCollections");
});

const ProductPage = React.lazy(() => {
  return import("./pages/ProductPage/ProductPage");
});

const Sustainability = React.lazy(() => {
  return import("./pages/Sustainability/Sustainability");
});

const ErrorPage = React.lazy(() => {
  return import("./routes/error-page");
});

// Lazy Loading imports ends ==============================================================================

const root = ReactDOM.createRoot(document.getElementById("root"));

// setting view height for the application
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

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
        element: (
          <Suspense fallback={<div></div>}>
            <Home />
          </Suspense>
        ),
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
  <>
    <DeviceProvider>
      <RouterProvider router={router} />
    </DeviceProvider>
  </>
);
