import Header from "../../Presentational/organisms/Header/Header";
import Footer from "../../Presentational/organisms/Footer/Footer";
import Main from "../../Presentational/organisms/Main/Main";
import { Outlet } from "react-router-dom";

const AppLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Main>
        <Outlet /> {children}
      </Main>
      <Footer />
    </>
  );
};

export default AppLayout;
