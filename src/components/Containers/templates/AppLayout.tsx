import Header from "../../Presentational/organisms/Header/Header";
import Footer from "../../Presentational/organisms/Footer/Footer";

const AppLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
