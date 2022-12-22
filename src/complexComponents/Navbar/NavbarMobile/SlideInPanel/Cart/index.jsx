import { gsap } from "gsap/dist/gsap";
import { useLayoutEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import "./index.scss";

const Cart = ({ changeState }) => {
  const cart_ref = useRef();
  const back_arrow = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.to(cart_ref.current, { x: "-100vw" });

    return () => {
      tl.kill();
    };
  }, []);

  const onClose = () => {
    gsap.to(cart_ref.current, {
      x: "100vw",
      onComplete: () => {
        changeState(false);
      },
    });
  };

  return (
    <div className="mobile-cart-panel" ref={cart_ref}>
      <h1>Cart</h1>
      <div className="mobile-cart-product-container">
        <div className="mobile-cart-product"></div>
        <div className="mobile-cart-product"></div>
        <div className="mobile-cart-product"></div>
        <div className="mobile-cart-product"></div>
        <div className="mobile-cart-product"></div>
        <div className="mobile-cart-product"></div>
        <div className="mobile-cart-product"></div>
      </div>
      <div className="mobile-cart-checkout-or-close">
        <div className="mobile-cart-checkout-btn">Checkout</div>
        <div className="mobile-cart-close-btn" onClick={onClose}>
          <div className="mc-back-arrow">
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
