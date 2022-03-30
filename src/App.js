import Main from "./component/Main";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
