import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import styles from "./Account.modules.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.6435-9/49323186_3003482743010848_555597493396570112_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=JxE7xFUrxUQAX-BkMHt&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfCbKZ_mNr9AfkLYTpS_ryL8flvBElYCIGb90Kg1s65euA&oe=6431AE0F"
        alt="text"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          Nguyen Van A
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span class="username">nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
