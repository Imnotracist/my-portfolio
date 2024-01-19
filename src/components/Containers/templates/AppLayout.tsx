import Header from "../../Presentational/organisms/Header/Header";
import Footer from "../../Presentational/organisms/Footer/Footer";
import Main from "../../Presentational/organisms/Main/Main";
import { Outlet } from "react-router-dom";
import { AppLayoutContainer } from "./AppLayout.styles";

const AppLayout = ({ children }: any) => {
  return (
    <AppLayoutContainer>
      <Header />
      <Main>
        <Outlet /> {children}
      </Main>
      <Footer />
    </AppLayoutContainer>
  );
};

export default AppLayout;
