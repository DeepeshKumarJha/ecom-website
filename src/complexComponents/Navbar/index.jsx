import NavbarComputer from "./NavbarComputer";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  return window.innerWidth <= 500 ? <NavbarMobile /> : <NavbarComputer />;
}
