import Header from "./Header";
import Footer from "../DefaultLayout/Footer";
function HeaderUpload({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default HeaderUpload;
