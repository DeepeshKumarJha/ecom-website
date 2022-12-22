// import { useLayoutEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import HoverAnimation from "../../microComponents/hoverAnimation/HoverAnimation.component";
// import "../../scss/components/Nav/Nav.scss";
// import AboutPanel from "./aboutPanel";
// import CartPanel from "./cartPanel";

// export default function Nav() {
//   const [Y, setY] = useState(window.scrollY);
//   const [aboutPanel, setAboutPanel] = useState(false);
//   const [cart, setCart] = useState(false);
//   const navigate = useNavigate();

//   const hover_text_style = {
//     fontSize: "1.2rem",
//     fontWeight: 500,
//     letterSpacing: "0.02rem",
//     cursor: "pointer",
//   };

//   useLayoutEffect(() => {
//     window.addEventListener("scroll", handle_on_scroll);
//   }, []);

//   function handle_on_scroll() {
//     setY(window.scrollY);
//   }

//   function handleAboutClick() {
//     setAboutPanel(true);
//   }

//   function handleCartClick() {
//     setCart(true);
//   }

//   function homesweethome() {
//     navigate("/");
//   }

//   return (
//     <>
//       <div
//         className="nav-container"
//         style={{
//           backgroundColor: Y > 20 ? "white" : "transparent",
//           boxShadow:
//             Y > 20 ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : null,
//           transition: ".3s",
//         }}
//       >
//         <div className="first-half-menu">
//           <ul>
//             <li>
//               <HoverAnimation
//                 text="Shop"
//                 takeMeTo="/collections/all"
//                 aboutText={hover_text_style}
//               />
//             </li>
//             <li onClick={handleAboutClick}>
//               <HoverAnimation text="About" aboutText={hover_text_style} />
//             </li>
//             <li>
//               <HoverAnimation
//                 text="Sustainability"
//                 takeMeTo="/sustainability"
//                 aboutText={hover_text_style}
//               />
//             </li>
//           </ul>
//         </div>
//         <div className="nav-logo" onClick={homesweethome}>
//           Shoes
//         </div>
//         <div className="second-half-menu">
//           <ul>
//             <li onClick={handleCartClick} className="nav-cart">
//               <div className="nav-cart-bubble">1</div>
//               <HoverAnimation
//                 text="Cart"
//                 aboutText={{ ...hover_text_style, position: "relative" }}
//               />
//             </li>
//             <li>
//               <HoverAnimation
//                 text="MyAccount"
//                 aboutText={hover_text_style}
//                 takeMeTo="account/login"
//               />
//             </li>
//           </ul>
//         </div>
//       </div>

//       {aboutPanel && <AboutPanel panel={aboutPanel} setPanel={setAboutPanel} />}
//       {cart && <CartPanel setCart={setCart} />}
//     </>
//   );
// }
