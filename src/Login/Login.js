import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginProvider, LoginContext } from "../Context/LoginContext";
import "./FormLogin.css";

function Login() {
  const context = useContext(LoginContext);
  const FormLogin = () => {
    return (
      <>
        <div className="login-title">LOGIN</div>
        <div className="form">
          <form onSubmit={context.handleSubmit}>
            <div className="input-container">
              <label>Username: </label>
              <input type="text" name="username" required />
              {renderMessageError("errusername")}
            </div>
            <div className="input-container">
              <label>Password: </label>
              <input type="password" name="pass" required />
              {renderMessageError("errpassword")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
          <div style={{ textAlign: "center", paddingTop: "50px" }}>
            <h1>List User</h1>
            {context.showUsers.map((user) => (
              <div key={user.id} style={{ padding: "10px 0" }}>
                <div>UserName: {user.username}</div>
                <div>Password: {user.password}</div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  const renderMessageError = (name) =>
    name === context.errorsMessage.name && (
      <div className="error">{context.errorsMessage.message}</div>
    );
  return (
    <LoginProvider>
      {context.submit ? <Navigate to="/" /> : <FormLogin />}
    </LoginProvider>
  );
}
export default Login;
