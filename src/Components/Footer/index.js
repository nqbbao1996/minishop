import React, { useContext } from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { ThemeContext } from "../../ThemeContex/ThemeContex";
import "../../IconZalo/zalo.jpg";

const cx = classNames.bind(styles);

function Footer() {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={cx("footerContainer", themeContext.theme)}>
      <a href="https://zalo.me/0968871596">
        <h4>
          <img src={require("../../IconZalo/zalo.jpg")} alt="" />
          Quốc Bảo
        </h4>
      </a>
    </div>
  );
}

export default Footer;
