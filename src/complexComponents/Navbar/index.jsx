import { useDeviceWidthContext } from "../../Context/Device";
import NavbarComputer from "./NavbarComputer";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  const { deviceWidth } = useDeviceWidthContext();

  return deviceWidth <= 500 ? <NavbarMobile /> : <NavbarComputer />;
}
