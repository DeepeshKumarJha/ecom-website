import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../../scss/components/Homepage/sectionFourAndFiveProductDisplay/productDisplay.scss";

const ProductDisplay = ({ imgval }) => {
  const [isIn, setIsIn] = useState(false);
  const learnRef = useRef();
  const addCartRef = useRef();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    // move add to cart
    const anim1 = gsap.to(addCartRef.current, {
      y: isIn ? -70 : 0,
      opacity: isIn ? 1 : 0,
      // delay: isIn ? 0 : 0.1,
      duration: 0.5,
    });

    // move learn more
    const anim2 = gsap.to(learnRef.current, {
      // delay: isIn ? 0.1 : 0,
      y: isIn ? -120 : 0,
      opacity: isIn ? 1 : 0,
      duration: 0.6,
    });

    return () => {
      anim1.kill();
      anim2.kill();
    };
  }, [isIn]);

  const handleEntry = () => {
    setIsIn(true);
  };

  const handleExit = () => {
    setIsIn(false);
  };

  const takeMeToTheMoon = () => {
    navigate("product/asfsf");
  };

  return (
    <div
      className="pd-product"
      onMouseEnter={handleEntry}
      onMouseLeave={handleExit}
      onClick={takeMeToTheMoon}
    >
      <div
        className="pd-product-image"
        style={{ backgroundImage: `url(${imgval})` }}
      >
        <div className="pd-pm-learn-more" ref={learnRef}>
          Learn More
        </div>
        <div
          className="pd-pm-add-to-cart"
          ref={addCartRef}
          onClick={takeMeToTheMoon}
        >
          Add To Cart
        </div>
      </div>

      <div className="pd-product-details">
        <div className="pd-product-details-p1">
          <div className="pd-pd-heading-and-all">
            <h3>Tootpaste Bits</h3>
            <p>Fresh Mint with Fluoride</p>
          </div>
          <div className="pd-pd-price">
            <p>₹2050.00</p>
          </div>
        </div>

        <div className="pd-product-details-p2">
          <div>⭐️⭐️⭐️⭐️⭐️ 700 Reviews</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
