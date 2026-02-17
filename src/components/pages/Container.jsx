import Header from "../templates/Header";
import Footer from "../templates/Footer";
const Container = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Container;
