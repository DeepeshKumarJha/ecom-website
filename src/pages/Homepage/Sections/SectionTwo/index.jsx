import { redirect, useNavigate } from "react-router-dom";
import "./index.scss";

export default function SectionTwo() {
  const takeMeToTheShop = () => {
    redirect("/collections/all");
  };

  return (
    <div className="s2-container">
      <div className="s2-btn-container">
        <div className="s2-btn" onClick={takeMeToTheShop}>
          Shop All Products
        </div>
      </div>
    </div>
  );
}
