import { useNavigate } from "react-router-dom";
import "../../scss/components/Homepage/sectionOneCard.scss";

export default function SectionOneCard({ data }) {
  const navigate = useNavigate();

  const takeMeToTheMoon = () => {
    navigate("/product/asfdasdf");
  };

  return (
    <div className="s1-card-container" onClick={takeMeToTheMoon}>
      <div
        className="s1-card-product-image"
        style={{ backgroundImage: `url(${data.images})` }}
      ></div>
      <div className="s1-card-product-details">
        <h3>{data.title}</h3>
        <p>₹{data.price}.00</p>
      </div>
      <button className="s1-shop-now-btn" onClick={takeMeToTheMoon}>
        Shop Now
      </button>
    </div>
  );
}
