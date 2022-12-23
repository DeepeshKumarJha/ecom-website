import Button from "../../../../microComponents/Button/Button.component";
import "./index.scss";

export default function Header() {
  return (
    <>
      <div
        className="header-container"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dqimeuotl/image/upload/v1671399012/shoes-ecom-site/hero-image_rgrvfr.webp)`,
        }}
      >
        <div className="header-text-and-btn">
          <h1>Step up your shoe game with us.</h1>
          <div className="header-btn">
            <Button
              text="Shop Now"
              type="black-white"
              takeMeTo="/collections/all"
            />
          </div>
        </div>
      </div>
    </>
  );
}
