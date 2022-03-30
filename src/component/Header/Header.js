import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../Context/LoginContext";
import "./Header.css";
function Header() {
  const context = useContext(LoginContext);
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/dog-collar.png"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="users">
        {context.submit ? (
          <div className="user">
            <Link to="/">Xin chào {context.users && context.users.username}</Link>
            <div className="logout" onClick={context.handleLogout}>
              <img
                src="https://img.icons8.com/material/24/000000/exit.png"
                alt="Logout"
              />
            </div>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}
export default Header;
