import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/footer";
import Nav from "../components/Nav/nav";
import HelloPage from "./hello-page";

//* Root will contain nav and footer part of the application
export default function Root() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
