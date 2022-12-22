import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ReactComponent as BackLogo } from "../../images/icons/70 Basic Icons-all-24.svg";
import HoverAnimation from "../../microComponents/hoverAnimation/HoverAnimation.component";
import "../../scss/components/Nav/aboutPanel.scss";

export default function AboutPanel({ panel, setPanel }) {
  const [direction, setDirection] = useState(false);
  const aboutRef = useRef();
  const listRef = useRef();
  const about_text_style = {
    fontSize: "2rem",
    fontWeight: 400,
    position: "relative",
    width: "fit-content",
    zIndex: 10,
  };

  const menuItemList = [
    "Ingredients",
    "Sustainability",
    "About Us",
    "Press",
    "FAQ",
    "Blog",
  ];

  useLayoutEffect(() => {
    const animation1 = gsap.to(aboutRef.current, {
      xPercent: direction ? 0 : 100,
      onComplete: () => {
        if (direction) setPanel(false);
      },
    });

    const animation2 = gsap.fromTo(
      listRef.current.children,
      { x: -100, opacity: 0 },
      { x: 0, stagger: 0.2, opacity: 1 }
    );

    return () => {
      animation1.kill();
      animation2.kill();
    };
  }, [direction]);

  function closePanel() {
    setDirection(true);
  }

  return (
    <>
      <div
        className="about-side-panel"
        style={{
          background: direction ? "transparent" : "rgba(255, 255, 255, 0.3)",
        }}
      >
        <div className="about-panel" ref={aboutRef}>
          <div className="about-panel-container">
            <BackLogo className="about-panel-close-btn" onClick={closePanel} />
            <ul ref={listRef}>
              {menuItemList.map((val, index) => {
                return (
                  <HoverAnimation
                    text={val}
                    key={index}
                    index={index}
                    aboutText={about_text_style}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
