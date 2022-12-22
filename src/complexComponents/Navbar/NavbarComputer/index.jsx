import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutPanel from "../../../components/Nav/aboutPanel";
import CartPanel from "../../../components/Nav/cartPanel";
import { useDeviceWidthContext } from "../../../Context/Device";
import HoverAnimation from "../../../microComponents/hoverAnimation/HoverAnimation.component";
import "./index.scss";

export default function NavbarComputer() {
  const [Y, setY] = useState(window.scrollY);
  const [aboutPanel, setAboutPanel] = useState(false);
  const [cart, setCart] = useState(false);
  const navigate = useNavigate();

  const hover_text_style = {
    fontSize: "1.2rem",
    fontWeight: 500,
    letterSpacing: "0.02rem",
    cursor: "pointer",
  };

  function handleAboutClick() {
    setAboutPanel(true);
  }

  function handleCartClick() {
    setCart(true);
  }

  function handle_on_scroll() {
    setY(window.scrollY);
  }

  function homesweethome() {
    navigate("/");
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", handle_on_scroll);
  }, []);

  return (
    <>
      <div
        className="nav-container"
        style={{
          backgroundColor: Y > 20 ? "white" : "transparent",
          boxShadow:
            Y > 20 ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : null,
          transition: ".3s",
        }}
      >
        <div className="nav-wrapper">
          <ul className="nav-c1">
            <li>
              <HoverAnimation
                text="Shop"
                takeMeTo="/collections/all"
                aboutText={hover_text_style}
              />
            </li>
            <li onClick={handleAboutClick}>
              <HoverAnimation text="About" aboutText={hover_text_style} />
            </li>
            <li>
              <HoverAnimation
                text="Sustainability"
                takeMeTo="/sustainability"
                aboutText={hover_text_style}
              />
            </li>
          </ul>
        </div>
        <div className="nav-c2" onClick={homesweethome}>
          Shoes
        </div>
        <div className="nav-wrapper">
          <ul className="nav-c3">
            <li className="nav-cart" onClick={handleCartClick}>
              <HoverAnimation
                text="Cart"
                aboutText={{ ...hover_text_style, position: "relative" }}
              />
            </li>
            <li onClick={handleCartClick}>
              <HoverAnimation
                text="MyAccount"
                aboutText={hover_text_style}
                takeMeTo="account/login"
              />
            </li>
          </ul>
        </div>
      </div>

      {aboutPanel && <AboutPanel panel={aboutPanel} setPanel={setAboutPanel} />}
      {cart && <CartPanel setCart={setCart} />}
    </>
  );
}
