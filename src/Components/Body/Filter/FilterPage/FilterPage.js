import Filter from "../Filter/Filter";
import styles from "./FilterPage.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SearchAndFilter() {
  return (
    <div className={cx("SearchAndFilterPane")}>
      <Filter />
    </div>
  );
}

export default SearchAndFilter;
