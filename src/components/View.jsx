import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const View = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default View;
