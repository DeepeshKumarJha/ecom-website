import { redirect } from "react-router-dom";
import "../../scss/pages/Account/Register.scss";

export default function Register() {
  const takeMeToTheMoon = () => {
    redirect("/");
  };

  return (
    <>
      <>
        <div className="register-box">
          <h1>Create account</h1>

          <form className="register-form-container">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type={"email"} placeholder="Email" />
            <input type={"password"} placeholder="Password" />
            <button type="submit">Create</button>
          </form>

          <p className="register-return-store" onClick={takeMeToTheMoon}>
            Return to Store
          </p>
        </div>
      </>
    </>
  );
}
