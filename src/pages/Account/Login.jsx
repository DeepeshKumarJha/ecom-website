import { useNavigate } from "react-router-dom";
import "../../scss/pages/Account/Login.scss";

export default function Login() {
  const navigate = useNavigate();

  const takeMeToTheMoon = () => {
    navigate("/account/register");
  };

  return (
    <>
      <div className="login-box">
        <h1>Login</h1>
        <p>Login to check your order.</p>

        <form className="login-form-container">
          <input type={"email"} placeholder="Email" />
          <input type={"password"} placeholder="Password" />
          <button type="submit">Submit</button>
        </form>

        <p className="login-create-account-link" onClick={takeMeToTheMoon}>
          Create account
        </p>
      </div>
    </>
  );
}
