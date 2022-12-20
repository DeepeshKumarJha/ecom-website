import { Outlet } from "react-router-dom";
import "../../scss/pages/Account/Account.scss";

const Account = () => {
  return (
    <div className="account-main-container">
      <Outlet />
    </div>
  );
};

export default Account;
