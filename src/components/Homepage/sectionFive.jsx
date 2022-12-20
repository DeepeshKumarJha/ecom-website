import "../../scss/components/Homepage/sectionFive.scss";
import ProductDisplay from "./sectionFourAndFiveProductDisplay/productDisplay";

let imglist = [
  "https://res.cloudinary.com/dqimeuotl/image/upload/v1671400308/shoes-ecom-site/pexels-luis-quintero-14174472_fvild4.webp",
  "https://res.cloudinary.com/dqimeuotl/image/upload/v1671400309/shoes-ecom-site/pexels-luis-quintero-14525660_f1d9vc.webp",
  "https://res.cloudinary.com/dqimeuotl/image/upload/v1671400309/shoes-ecom-site/pexels-mnz-1598508_du3cst.webp",
  "https://res.cloudinary.com/dqimeuotl/image/upload/v1671400309/shoes-ecom-site/pexels-phiraya-vlog-6438290_c1y6uj.webp",
];

// this if for the section heading and all
const SectionFourHeading = () => {
  return (
    <div className="s5-heading-container">
      <h3>Personal Care</h3>
    </div>
  );
};

export default function SectionFive() {
  return (
    <div className="s5">
      <SectionFourHeading />
      <div className="s5-cards-container">
        <div className="s5-product-container">
          {[...Array(4)].map((val, index) => {
            return <ProductDisplay key={index} imgval={imglist[index]} />;
          })}
        </div>
        <div className="s5-video-card">
          <video autoPlay muted loop>
            <source
              src={
                "https://res.cloudinary.com/dqimeuotl/video/upload/v1671402229/shoes-ecom-site/video2_txouhm.webm"
              }
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
    </div>
  );
}
