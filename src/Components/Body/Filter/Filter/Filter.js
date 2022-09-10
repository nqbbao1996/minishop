import styles from "./Filter.module.scss";
import classNames from "classnames/bind";
import { ThemeContext } from "../../../../ThemeContex/ThemeContex";
import Options from "../Option/Options";

import { AiFillCaretDown } from "react-icons/ai";
import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);

function Filter() {
  const { categoryName } = useParams();
  const [valueName, setValueName] = useState("All");
  useEffect(() => {
    if (categoryName) setValueName(categoryName);
    else setValueName("All");
  }, [categoryName]);

  const themeContext = useContext(ThemeContext);
  const refSelect = useRef(null);
  const [isShowOptions, setIsShowOptions] = useState(false);

  const handleOptions = (e) => {
    if (refSelect.current)
      setIsShowOptions(refSelect.current.contains(e.target));
  };

  useEffect(() => {
    if (isShowOptions) {
      document.addEventListener("click", handleOptions);

      return () => {
        document.removeEventListener("click", handleOptions);
      };
    }
  }, [isShowOptions]);

  return (
    <div className={cx("FilterPane")}>
      <div className={cx("SelectPane")}>
        <div
          className={cx("Select", themeContext.theme)}
          ref={refSelect}
          onClick={handleOptions}
        >
          <span>{valueName}</span>
          <AiFillCaretDown />
        </div>
        <Options isShowOptions={isShowOptions} />
      </div>
    </div>
  );
}

export default Filter;
