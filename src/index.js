import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
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
  useEffect(() => {
    redirect(goto);
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
        element: (
          <Suspense fallback={<div></div>}>
            <Collections />
          </Suspense>
        ),
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<div></div>}>
                <NavigateTo goto="/collections/all" />
              </Suspense>
            ),
          },
          {
            path: "all",
            element: (
              <Suspense fallback={<div></div>}>
                <AllCollections />
              </Suspense>
            ),
          },
          {
            path: "oral-care",
            element: <h1>Oral Care</h1>,
          },
        ],
      },
      {
        path: "account",
        element: (
          <Suspense fallback={<div></div>}>
            <Account />
          </Suspense>
        ),
        children: [
          { path: "", element: <NavigateTo goto="/account/login" /> },
          {
            path: "login",
            element: (
              <Suspense fallback={<div></div>}>
                <Login />
              </Suspense>
            ),
          },
          {
            path: "register",
            element: (
              <Suspense fallback={<div></div>}>
                <Register />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "sustainability",
        element: (
          <Suspense fallback={<div></div>}>
            <Sustainability />
          </Suspense>
        ),
      },
      {
        path: "product/:id",
        element: (
          <Suspense fallback={<div></div>}>
            <ProductPage />
          </Suspense>
        ),
      },
      {
        path: "about-us",
        element: (
          <Suspense fallback={<div></div>}>
            <AboutUs />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
