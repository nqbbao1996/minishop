import styles from "./SwitchMode.module.scss";
import classNames from "classnames/bind";
import { ThemeContext } from "../../../ThemeContex/ThemeContex";

import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useRef, useState, useEffect, useContext } from "react";

const cx = classNames.bind(styles);

function SwitchMode() {
  const themeContext = useContext(ThemeContext);
  const refInput = useRef(null);
  const refCircle = useRef(null);
  const refToggle = useRef(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    refInput.current.checked = isDark;
  }, [isDark]);

  const handleToggle = () => {
    refInput.current.checked = !refInput.current.checked;
    setIsDark(refInput.current.checked);
    themeContext.toggleTheme();
  };

  useEffect(() => {
    const changeBackgroundButton = () => {
      if (isDark) {
        refToggle.current.style.background = "#fff";
        refCircle.current.style.background = "#222";
      } else {
        refToggle.current.style.background = "var(--ToggleButtonBackground)";
        refCircle.current.style.background = "#fff";
      }
    };
    changeBackgroundButton();
    document.addEventListener("resize", changeBackgroundButton);
    return () => {
      document.removeEventListener("resize", changeBackgroundButton);
    };
  }, [isDark]);

  return (
    <>
      <div
        className={cx("ToggleButton")}
        ref={refToggle}
        onClick={handleToggle}
      >
        <input type="checkbox" className={cx("Input")} ref={refInput} />
        <div className={cx("Icon")}>
          {isDark ? <RiMoonFill /> : <RiSunFill />}
        </div>
        <div className={cx("Circle")} ref={refCircle}></div>
      </div>
    </>
  );
}
export default SwitchMode;
