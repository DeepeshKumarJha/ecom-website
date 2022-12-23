import { useNavigate } from "react-router-dom";
import facebook from "../../images/icons/icons8-facebook-50.png";
import instaIcon from "../../images/icons/icons8-instagram-48.png";
import tiktok from "../../images/icons/icons8-tiktok-50.png";
import twitter from "../../images/icons/icons8-twitter-60.png";
import "../../scss/components/Footer/Footer.scss";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="fc-1">
          <div className="f-about">
            <ul className="fa-shop">
              <li className="fa-heading">SHOP</li>
              <li>All Products</li>
              <li>Sport Shoes</li>
              <li>Sneakers</li>
              <li>Boots</li>
            </ul>

            <ul className="fa-about">
              <li className="fa-heading">ABOUT</li>
              <li>Sustainability</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>FAQ</li>
            </ul>

            <ul className="fa-more">
              <li className="fa-heading">MORE</li>
              <li>Wholesale</li>
              <li>Store Locator</li>
            </ul>
          </div>
          <div className="f-social">
            <div className="f-logo">Shoes</div>
            <ul className="fs-logo">
              <li>
                <img src={instaIcon} />
              </li>
              <li>
                <img src={tiktok} />
              </li>
              <li>
                <img src={twitter} />
              </li>
              <li>
                <img src={facebook} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
