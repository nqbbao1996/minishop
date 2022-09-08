import { Fragment } from "react";
import Products from "./Container/Products/Products";
import FilterPage from "./Filter/FilterPage/FilterPage";
import TopView from "./TopView/TopView";

function MainContentWithTopView() {
  return (
    <Fragment>
      <FilterPage />
      <TopView />
      <Products />
    </Fragment>
  );
}

export default MainContentWithTopView;
