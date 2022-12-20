import SimilarProduct from "../../components/productView/similarProduct";
import "../../scss/pages/ProductPage/ProductPage.scss";

const ProductPage = () => {
  return (
    <>
      <div className="product-main">
        <div
          className="product-page-image-section"
          style={{
            backgroundImage: "url(https://source.unsplash.com/random?shoes)",
          }}
        ></div>
        <div className="product-page-details-section">
          <div className="product-heading">
            <h1>Product Name</h1>
            <p>Teeth Whitening Kit</p>
            <div className="product-review-container">
              ⭐️⭐️⭐️⭐️⭐️ 300 Reviews
            </div>
          </div>

          <div className="product-details">
            <p>
              The Future of Whitening Looks Bright - Brighten your smile with
              the first and only plastic-free teeth whitening system.
            </p>
          </div>

          <div className="product-grid-shit">
            <div className="product-grid-item">🌎 100% Plastic free</div>
            <div className="product-grid-item">👄 Baking soda-free</div>
            <div className="product-grid-item">🐰 Cruelty-free & Vegan</div>
            <div className="product-grid-item">💸 Money back guarantee</div>
            <div className="product-grid-item">🌿 Clean Ingredients</div>
            <div className="product-grid-item">💌 Delivered every 4 months</div>
          </div>

          <div className="product-add-to-cart">Add To Cart - ₹1,500.00 </div>
        </div>
      </div>

      <SimilarProduct />
    </>
  );
};

export default ProductPage;
