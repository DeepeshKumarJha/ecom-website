import "../../scss/components/cartProduct/cartProduct.scss";

const CartProduct = () => {
  return (
    <div className="cart-product-container">
      {/* image section */}
      <div className="cp-img-container">
        <div className="cp-img"></div>
      </div>
      {/* product about */}
      <div className="cp-about-product-container">
        {/* product name and delete section */}
        <div className="cpapc-product-name">
          <div className="cart-product-name-and-all">
            <h2>Fresh Mint</h2>
            <p>Mouthwash Bits</p>
          </div>
          <div className="cart-product-del-icon">🗑️</div>
        </div>
        {/* product quentity and price section */}
        <div className="cart-product-counter-and-price">
          <div className="cart-product-counter">
            <div className="cart-product-counter-negative">-</div>
            <div className="cart-product-counter-value">1</div>
            <div className="cart-product-counter-positive">+</div>
          </div>
          <div className="cart-product-price">
            <p>₹ 1550</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
