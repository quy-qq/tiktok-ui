import classNames from "classnames/bind";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
