import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ReactComponent as BackLogo } from "../../images/icons/70 Basic Icons-all-24.svg";
import "../../scss/components/Nav/aboutPanel.scss";

const ListItems = ({ value, index }) => {
  const [isAbove, setIsAbove] = useState(false);
  const list_ref = useRef();

  useLayoutEffect(() => {
    const timeline = gsap.timeline();

    if (isAbove) {
      timeline.to(list_ref.current, { left: 0 });
      timeline.set(list_ref.current, { left: 0, right: 0 });
    } else {
      timeline.to(list_ref.current, { right: "100%" });
      timeline.set(list_ref.current, { right: 0, left: "100%" });
    }
  }, [isAbove]);

  const mouseEnters = () => {
    setIsAbove(true);
  };

  const mouseLeaves = () => {
    setIsAbove(false);
  };

  return (
    <li
      onMouseEnter={mouseEnters}
      onMouseLeave={mouseLeaves}
      className={`about-panel-list-item ${value.replaceAll(" ", "-")}-${index}`}
    >
      <div className="about-panel-list-overlay" ref={list_ref}></div>
      <p>{value}</p>
    </li>
  );
};

export default function AboutPanel({ panel, setPanel }) {
  const [direction, setDirection] = useState(false);
  const aboutRef = useRef();
  const listRef = useRef();
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
                return <ListItems value={val} key={index} index={index} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
