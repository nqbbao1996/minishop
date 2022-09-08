import React, { useContext, useEffect, useRef } from "react";
import Option from "./Option";
import { ThemeContext } from "../../../../ThemeContex/ThemeContex";
import classNames from "classnames/bind";
import styles from "./Option.module.scss";
const cx = classNames.bind(styles);

const CategorysList = [
  { id: 1, value: "All" },
  { id: 2, value: "Electronics" },
  { id: 3, value: "Jewelery" },
  { id: 4, value: "Men's clothing" },
  { id: 5, value: "Women's clothing" },
];

function Options({ isShowOptions }) {
  const themeContext = useContext(ThemeContext);
  const refOptions = useRef(null);
  useEffect(() => {
    const ShowOptions = () => {
      if (isShowOptions) {
        refOptions.current.style.transform = "scaleY(1)";
      } else {
        refOptions.current.style.transform = "scaleY(0)";
      }
    };
    ShowOptions();
    document.addEventListener("resize", ShowOptions);
    return () => {
      document.removeEventListener("resize", ShowOptions);
    };
  }, [isShowOptions]);

  return (
    <ul className={cx("OptionsPane", themeContext.theme)} ref={refOptions}>
      {CategorysList.map((category, index) => (
        <Option key={index} category={category} />
      ))}
    </ul>
  );
}

export default React.memo(Options);
