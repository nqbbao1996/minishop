import { Fragment } from "react";
import Products from "./Container/Products/Products";
import FilterPage from "./Filter/FilterPage/FilterPage";

function MainContent() {
  return (
    <Fragment>
      <FilterPage />

      <Products />
    </Fragment>
  );
}

export default MainContent;
