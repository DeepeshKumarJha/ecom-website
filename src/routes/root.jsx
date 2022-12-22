import { Outlet } from "react-router-dom";
import Navbar from "../complexComponents/Navbar";
import Footer from "../components/Footer/footer";
import "./root.scss";

//* Root will contain nav and footer part of the application
export default function Root() {
  return (
    <div className="boss-container" style={{ overflow: "hidden" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
