import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../Button";
import { Wrapper as PopperWrapper } from "../../Popper";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import AccountItem from "../../../AccountItem";

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setsearchResult] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setsearchResult([]);
    }, 0);
  }, []);
  const show = () => setsearchResult(true);
  const hide = () => setsearchResult(false);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="logo tiktok" />
        </div>
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              placeholder="Search accounts and videos"
              spellCheck="false"
            />
            <button className={cx("clear-btn")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("actions")}>
          <Button primary>Log In</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
