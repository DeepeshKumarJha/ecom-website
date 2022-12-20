import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import "../../scss/components/Nav/cartPanel.scss";
import CartProduct from "../cartProduct/cartProduct";

export default function CartPanel({ setCart }) {
  const [direction, setDirection] = useState(false);
  const cartRef = useRef();

  useLayoutEffect(() => {
    const animation1 = gsap.to(cartRef.current, {
      xPercent: direction ? 0 : -100,
      onComplete: () => {
        if (direction) setCart(false);
      },
    });

    return () => {
      animation1.kill();
    };
  }, [direction]);

  function closeCart() {
    setDirection(true);
  }

  return (
    <>
      <div className="cart-panel">
        <div ref={cartRef} className="panel">
          <div className="cart-panel-container">
            <div className="cp-header">
              <div className="cp-header-back" onClick={closeCart}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p>My Cart</p>
            </div>
            <div className="cp-body">
              <CartProduct />

              {/* <div className="cp-body-nothing">
                <p>What are you looking for ?</p>
                <p>
                  There is nothing here. Go add something and then comeback.
                </p>
              </div> */}
            </div>
            <div className="cp-footer">
              <div className="cp-footer-subtotal">
                <div className="cp-footer-subtotal-text">Subtotal</div>
                <div className="cp-footer-subtotal-price">₹1550.00</div>
              </div>
              <div className="cp-footer-checkout">
                <div className="cp-footer-checkout-btn">
                  Continue To Checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
