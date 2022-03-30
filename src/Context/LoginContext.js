import { createContext, useState, useEffect } from "react";
const dataUser = [
  {
    id: 1,
    username: "user1",
    password: "pass123",
  },
  {
    id: 2,
    username: "user2",
    password: "passuser2",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
  },
  {
    id: 4,
    username: "user4",
    password: "pass1234",
  },
];

const errors = {
  errusername: "UserName không hợp lệ",
  errpassword: "Sai mật khẩu",
};
const LoginContext = createContext();
function LoginProvider({ children }) {
  const [showUsers, setShowUsers] = useState([]);
  const [users, setUsers] = useState();
  const [submit, setSubmit] = useState(false);
  const [errorsMessage, setErrorMessage] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, pass } = document.forms[0];
    //user
    const userDB = dataUser.find((user) => user.username === username.value);
    setUsers(userDB);
    //check pass
    if (userDB) {
      if (userDB.password !== pass.value) {
        setErrorMessage({ name: "errpassword", message: errors.errpassword });
      } else {
        setSubmit(true);
      }
    } else {
      setErrorMessage({ name: "errusername", message: errors.errusername });
    }
  };
  useEffect(() => {
    setShowUsers(dataUser);
  }, []);

  const handleLogout = () => {
    setSubmit(false);
  };

  const value = {
    submit,
    errorsMessage,
    showUsers,
    handleSubmit,
    handleLogout,
    users,
  };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
export { LoginContext, LoginProvider };
