import { gsap } from "gsap/dist/gsap";
import { useLayoutEffect, useRef } from "react";
import { BiArrowBack } from "react-icons/bi";
import "./index.scss";

const Menu = ({ changeState }) => {
  const menu_ref = useRef();
  const back_btn = useRef();
  const arrow = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.to(menu_ref.current, { x: "100vw" });
    tl.from(".mobile-menu-items>li", { x: -50, stagger: 0.1, opacity: 0 });
    tl.to(back_btn.current, { opacity: 1 });
    tl.from(".back-icon", { xPercent: 180 });

    return () => {
      tl.kill();
    };
  }, []);

  const onClose = () => {
    gsap.to(menu_ref.current, {
      x: "-100vw",
      onComplete: () => {
        changeState(false);
      },
    });
  };

  return (
    <div className="mobile-menu-panel" ref={menu_ref}>
      {/* menu items */}
      <ul className="mobile-menu-items">
        <li>Shop</li>
        <li>AboutUs</li>
        <li>Sustainability</li>
        <li>ContactUs</li>
      </ul>

      {/* close button */}
      <div className="mobile-menu-back-btn" onClick={onClose} ref={back_btn}>
        <div className="back-btn-icon-container">
          <BiArrowBack className="back-icon" ref={arrow} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
