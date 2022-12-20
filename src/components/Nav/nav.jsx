import gsap from "gsap";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../scss/components/Nav/Nav.scss";
import AboutPanel from "./aboutPanel";
import CartPanel from "./cartPanel";

export default function Nav() {
  const [Y, setY] = useState(window.scrollY);
  const [aboutPanel, setAboutPanel] = useState(false);
  const [cart, setCart] = useState(false);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.addEventListener("scroll", handle_on_scroll);
  }, []);

  function handle_on_scroll() {
    setY(window.scrollY);
  }

  function handleAboutClick() {
    setAboutPanel(true);
  }

  function handleCartClick() {
    setCart(true);
  }

  function homesweethome() {
    navigate("/");
  }

  function timeforLogin() {
    navigate("account/login");
  }

  function handleShopClick() {
    navigate("/collections/all");
  }

  function handleSustainClick() {
    navigate("/sustainability");
  }

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
        <div className="first-half-menu">
          <ul>
            <li onClick={handleShopClick}>Shop</li>
            <li onClick={handleAboutClick}>About</li>
            <li onClick={handleSustainClick}>Sustainability</li>
          </ul>
        </div>
        <div className="nav-logo" onClick={homesweethome}>
          Shoes
        </div>
        <div className="second-half-menu">
          <ul>
            <li onClick={handleCartClick} className="nav-cart">
              <div className="nav-cart-bubble">1</div>cart
            </li>
            <li onClick={timeforLogin}>my account</li>
          </ul>
        </div>
      </div>

      {aboutPanel && <AboutPanel panel={aboutPanel} setPanel={setAboutPanel} />}
      {cart && <CartPanel setCart={setCart} />}
    </>
  );
}
