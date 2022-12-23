import ProductDisplay from "../../../../components/Homepage/sectionFourAndFiveProductDisplay/productDisplay";
import "./index.scss";

let imglist = [
  "https://res.cloudinary.com/dqimeuotl/image/upload/v1671400675/shoes-ecom-site/pexels-madvortex-9214280_hgp47g.webp",
  "https://res.cloudinary.com/dqimeuotl/image/upload/v1671400676/shoes-ecom-site/pexels-madvortex-9214286_sw9e3b.webp",
  "https://res.cloudinary.com/dqimeuotl/image/upload/v1671400676/shoes-ecom-site/pexels-ray-piedra-1456706_dnw9lo.webp",
  "https://res.cloudinary.com/dqimeuotl/image/upload/v1671400676/shoes-ecom-site/pexels-terrance-barksdale-8268989_infb3l.webp",
];

// this if for the section heading and all
const SectionFourHeading = () => {
  return (
    <div className="s4-heading-container">
      <h3>Sports Shoes</h3>
    </div>
  );
};

export default function SectionFour() {
  return (
    <div className="s4">
      <SectionFourHeading />
      <div className="s4-cards-container">
        {window.innerWidth >= 500 && (
          <div className="s4-video-card">
            {/* <video autoPlay muted loop>
              <source
                src={
                  "https://res.cloudinary.com/dqimeuotl/video/upload/v1671402031/shoes-ecom-site/video1_ibnzef.webm"
                }
                type="video/mp4"
              ></source>
            </video> */}
          </div>
        )}
        <div className="s4-product-container">
          {[...Array(4)].map((val, index) => {
            return <ProductDisplay key={index} imgval={imglist[index]} />;
          })}
        </div>
      </div>
    </div>
  );
}
