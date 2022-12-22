import { useNavigate } from "react-router-dom";
import "./Button.scss";

/*
The parent component which imports this button will be
responsible for it's position and size every things else will be handled here
 */

export default function Button({ text, type, takeMeTo }) {
  // we have these type of buttons
  // one which is black and onhover convert to white;
  // one which is white and goes to black onhover;

  const navigate = useNavigate();

  const letsGo = () => {
    navigate(takeMeTo);
  };

  return (
    <button className={`button-base ${type}`} onClick={letsGo}>
      {text}
    </button>
  );
}
