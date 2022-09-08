import styles from "./Option.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Option({ category }) {
  const navigate = useNavigate();
  const handleClickCategory = () => {
    if (category.value !== "All")
      navigate(`/products/category/${category.value}`);
    else navigate("/");
  };
  return (
    <li className={cx("OptionItem")} onClick={handleClickCategory}>
      <span>{category.value}</span>
    </li>
  );
}
export default Option;
