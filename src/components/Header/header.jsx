import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../scss/components/Header/header.scss";
import letsPlayFetch from "../../utils/letsPlayFetch";

export default function Header() {
  const [img, setImg] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const takeMeToTheMoon = () => {
    navigate("/collections/all");
  };

  useEffect(() => {
    const gotIt = async () => {
      try {
        let res = await letsPlayFetch("hero-image_rgrvfr", "webp");
        setImg(res.data);
        setLoading(false);
      } catch (error) {
        alert("something went wrong while fetching hero image");
      }
    };

    gotIt();
  }, []);

  return (
    <>
      {!loading && (
        <div
          className="header-container"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dqimeuotl/image/upload/v1671399012/shoes-ecom-site/hero-image_rgrvfr.webp)`,
          }}
        >
          <div className="header-text-and-btn">
            <h1>The best things for you life.</h1>
            <div className="header-btn" onClick={takeMeToTheMoon}>
              shop now
            </div>
          </div>
        </div>
      )}
    </>
  );
}
