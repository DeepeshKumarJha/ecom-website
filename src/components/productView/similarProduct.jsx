import "../../scss/pages/ProductPage/similarProduct.scss";
import CollectionProductView from "./collectionProductView";

const SimilarProduct = () => {
  return (
    <>
      <div className="similar-products-container">
        <h2>Similar Products</h2>
        <div className="similar-products-list">
          <CollectionProductView type={"one"} />
          <CollectionProductView type={"two"} />
          <CollectionProductView type={"three"} />
          <CollectionProductView type={"four"} />
          <CollectionProductView type={"five"} />
          <CollectionProductView type={"six"} />
          <CollectionProductView type={"seven"} />
        </div>
      </div>
    </>
  );
};

export default SimilarProduct;
