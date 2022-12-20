import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../scss/components/Homepage/sectionThree.scss";

gsap.registerPlugin(ScrollTrigger);

function CardOne() {
  const img1ref = useRef();
  const img2ref = useRef();
  const img3ref = useRef();
  const navigate = useNavigate();

  const takeMeToTheMoon = () => {
    navigate("/about-us");
  };

  useLayoutEffect(() => {
    gsap.to(img1ref.current, {
      y: "-60",
      scrollTrigger: {
        trigger: ".s3-c1",
        scrub: 3,
      },
    });
  }, []);

  return (
    <div className="s3-c1">
      <div className="s3-c1-main-text">
        <div className="s3c1-heading">
          Meet <span>Shoes</span>
        </div>
        <div className="s3c1-para">
          We’re here to make daily routines better for your body and better for
          our planet — because small change can make a big impact.
        </div>
        <div className="s3c1-btn" onClick={takeMeToTheMoon}>
          About Us
        </div>
      </div>
      {/* movable images */}

      <div className="s3-c1-img1-container">
        <img
          className="s3-c1-img1"
          ref={img1ref}
          src={
            "https://res.cloudinary.com/dqimeuotl/image/upload/v1671400066/shoes-ecom-site/shoe7_rpuzxh.webp"
          }
          alt={"shoes-image"}
        />
      </div>
    </div>
  );
}

function CardTwo() {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".s3-c2",
      {
        opacity: 0,
        y: 50,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".s3-c2",
          end: "20% 90%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div
      className="s3-c2"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dqimeuotl/image/upload/v1671401300/shoes-ecom-site/pexels-melvin-buezo-2529148_pbipec.webp)`,
      }}
    >
      <div className="s3-c2-screen">
        <div className="s3-c2-content">
          <p>Here's to no guessing</p>
          <h2>Digital Gift Cards</h2>

          <div className="s3-c2-content-btn">Send A Gift</div>
        </div>
      </div>
    </div>
  );
}

function CardThree() {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".s3-c3",
      {
        opacity: 0,
        y: 50,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".s3-c3",
          start: "top 90%",
          end: "20% 80%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div
      className="s3-c3"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dqimeuotl/image/upload/v1671401302/shoes-ecom-site/pexels-melvin-buezo-2529157_bybnsa.webp)`,
      }}
    >
      <div className="s3-c3-screen">
        <div className="s3-c3-content">
          <p>Introducing</p>
          <h2>Carbon Capture Cleaner</h2>

          <div className="s3-c3-content-btn">Send A Gift</div>
        </div>
      </div>
    </div>
  );
}

export default function SectionThree() {
  return (
    <>
      <div className="s3-container">
        <CardOne />
        <CardTwo />
        <CardThree />
      </div>
    </>
  );
}
