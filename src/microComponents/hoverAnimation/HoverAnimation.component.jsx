import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hoverAnimation.scss";

export default function HoverAnimation({ text, takeMeTo, aboutText }) {
  const [above, setAbove] = useState(false);
  const txtRef = useRef();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    if (above) {
      tl.to(txtRef.current, { left: 0 });
      tl.set(txtRef.current, { left: 0, right: 0 });
    } else {
      tl.to(txtRef.current, { right: "100%" });
      tl.set(txtRef.current, { right: 0, left: "100%" });
    }
  }, [above]);

  const enters = () => {
    setAbove(true);
  };

  const leaves = () => {
    setAbove(false);
  };

  const letsGo = () => {
    navigate(takeMeTo);
  };

  return (
    <div
      className="hover-animation"
      onMouseEnter={enters}
      onMouseLeave={leaves}
      onClick={letsGo}
      style={aboutText}
    >
      <div ref={txtRef} className="under-line"></div>
      <p>{text}</p>
    </div>
  );
}
