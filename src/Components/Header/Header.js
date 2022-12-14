import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import SwitchMode from "./SwitchMode/SwitchMode";
import { ThemeContext } from "../../ThemeContex/ThemeContex";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiHomeHeart } from "react-icons/bi";

const cx = classNames.bind(styles);

function Header({ setShowUp, setShowIn, setShowCart }) {
  const { totalItems } = useCart();
  const themeContext = useContext(ThemeContext);

  return (
    <header className={cx(themeContext.theme)}>
      <SwitchMode />
      <Link to={"/"}>
        <i className={cx("homeIcon")}>
          <BiHomeHeart />
        </i>
        <span className={cx("brand")}>MINI SHOP</span>
      </Link>
      <div className={cx("nav-btn")}>
        {/* <Link to={"/signup"}> */}
        <button
          className={cx("Sign-btn", themeContext.theme)}
          onClick={() => setShowUp(true)}
        >
          Sign Up
        </button>
        {/* </Link> */}
        {/* <Link to={"/signin"}> */}
        <button
          className={cx("Sign-btn", themeContext.theme)}
          onClick={() => setShowIn(true)}
        >
          Sign In
        </button>
        {/* </Link> */}
        {/* <Link to={"/carts"}> */}
        <button
          className={cx("Sign-btn", themeContext.theme)}
          onClick={() => setShowCart(true)}
        >
          <BsFillCartCheckFill /> ({totalItems})
        </button>
        {/* </Link> */}
      </div>
    </header>
  );
}

export default Header;
