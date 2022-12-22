import { useLayoutEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import "./index.scss";
import Cart from "./SlideInPanel/Cart";
import Menu from "./SlideInPanel/Menu";

export default function NavbarMobile() {
  const [Y, setY] = useState(window.scrollY);
  const [menuPanel, setMenuPanel] = useState(false);
  const [cartPanel, setCartPanel] = useState(false);

  const activateMenu = () => {
    setMenuPanel(true);
  };

  const activateCart = () => {
    setCartPanel(true);
  };

  function handle_on_scroll() {
    setY(window.scrollY);
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", handle_on_scroll);
  }, []);

  return (
    <>
      <div
        className="nav-mobile"
        style={{
          backgroundColor: Y > 20 ? "white" : "transparent",
          boxShadow:
            Y > 20 ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : null,
          transition: ".3s",
        }}
      >
        {/* burger menu btn */}
        <div className="nm-s1">
          <IoMenu className="burger-icon" onClick={activateMenu} />
        </div>

        {/* logo */}
        <div className="nav-logo">Shoes</div>

        {/* cart and shop menu item */}
        <div className="nm-s2">
          <HiShoppingCart className="nav-cart" onClick={activateCart} />
        </div>
      </div>

      {menuPanel && <Menu changeState={setMenuPanel} />}
      {cartPanel && <Cart changeState={setCartPanel} />}
    </>
  );
}
