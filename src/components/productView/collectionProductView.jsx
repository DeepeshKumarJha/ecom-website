import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import "../../scss/components/productView/collectionProductView.scss";

const CollectionProductView = ({ type }) => {
  const [isAbove, setAbove] = useState(false);
  const mainRef = useRef();
  const learnMoreRef = useRef();
  const addToCartRef = useRef();

  useLayoutEffect(() => {
    // animation that we are going to add here works when user hover above product card
    gsap.to(addToCartRef.current, { bottom: isAbove ? "20" : "-40px" });
    gsap.to(learnMoreRef.current, { bottom: isAbove ? "70" : "-70px" });
  }, [isAbove]);

  const mouseEnter = () => {
    setAbove(true);
  };

  const mouseLeave = () => {
    setAbove(false);
  };

  return (
    <>
      <div
        className="collection-product-view-container"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        ref={mainRef}
      >
        <div
          className="cpv-product-image"
          style={{
            backgroundImage: `url(https://source.unsplash.com/random?${type})`,
          }}
        >
          <div className="cpv-learn-more-btn" ref={learnMoreRef}>
            Learn More
          </div>
          <div className="cpv-add-to-cart-btn" ref={addToCartRef}>
            Add To Cart
          </div>
        </div>

        <div className="cpv-product-details">
          <div className="cpv-product-name-and-price">
            <div className="cpv-product-name">
              <h3>Toothpaste Bits</h3>
              <p>Fresh Mint with Fluoride</p>
            </div>
            <div className="cpv-product-price">
              <p className="cpv-product-new-price">₹1,500</p>
              <p className="cpv-product-old-price">₹3,500</p>
            </div>
          </div>
          <div className="cpv-product-reviews">⭐️⭐️⭐️⭐️⭐️ 300 review</div>
        </div>
      </div>
    </>
  );
};

export default CollectionProductView;
