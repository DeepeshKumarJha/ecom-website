import "../../scss/components/Homepage/sectionOne.scss";
import SectionOneCard from "./sectionOneCard";

const products = [
  {
    title: "Air Jordans",
    price: 1489.0,
    images:
      "https://res.cloudinary.com/dqimeuotl/image/upload/v1671400875/shoes-ecom-site/usama-akram-kP6knT7tjn4-unsplash_xv2v2h.webp",
  },
  {
    title: "Nike Air Force",
    price: 5500.0,
    images:
      "https://res.cloudinary.com/dqimeuotl/image/upload/v1671400948/shoes-ecom-site/usama-akram-g3CMh2nqj_w-unsplash_l3cz60.webp",
  },
  {
    title: "Adidas",
    price: 4098.0,
    images:
      "https://res.cloudinary.com/dqimeuotl/image/upload/v1671401021/shoes-ecom-site/giorgio-trovato-RrNKFfM9jJI-unsplash_om4hsn.webp",
  },
  {
    title: "Puma",
    price: 1089.0,
    images:
      "https://res.cloudinary.com/dqimeuotl/image/upload/v1671401082/shoes-ecom-site/peri-stojnic-r3rbIwZ9DJc-unsplash_lnvqio.webp",
  },
  {
    title: "Original",
    price: 4568.0,
    images:
      "https://res.cloudinary.com/dqimeuotl/image/upload/v1671401140/shoes-ecom-site/david-hinkle-D-20LoCzgds-unsplash_jrzm9c.webp",
  },
];

export default function SectionOne() {
  return (
    <>
      <div className="s1-container">
        {products.map((product, index) => {
          return <SectionOneCard key={index} data={product} />;
        })}
      </div>
    </>
  );
}
