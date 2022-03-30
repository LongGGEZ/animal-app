import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

function Main() {
  const context = useContext(LoginContext);
  return (
    <>
      <Header />
      {context.submit ? (
        <>
          <Content />
          <Footer />
        </>
      ) : (
        <h1 style={{ fontWeight: 500, textAlign: "center" }}>
          Vui lòng đăng nhập để xem ảnh
        </h1>
      )}
    </>
  );
}
export default Main;
