import styles from "./Container.module.scss";
import classNames from "classnames/bind";
import Product from "./Product";
import { ThemeContext } from "../../../../ThemeContex/ThemeContex";
import {
  getProducts,
  getProductsByCategory,
} from "../../../../Redux/Actions/Action";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useContext } from "react";

const cx = classNames.bind(styles);

function Products() {
  const dispatch = useDispatch();
  const slug = useParams();
  const products = useSelector((state) => state.Products.products);
  const themeContext = useContext(ThemeContext);

  const [more, setMore] = useState(12);
  const handleShowMore = () => {
    setMore(more + 4);
  };

  useEffect(() => {
    if (slug.categoryName) {
      dispatch(getProductsByCategory(slug.categoryName.toLowerCase()));
      console.log(slug.categoryName);
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, slug.categoryName]);

  return (
    <>
      <h3 className={cx("heading")}>All Products</h3>
      <div className={cx("ProductsContainer")}>
        {products.slice(0, more).map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
      <button
        className={cx("btn-more", themeContext.theme)}
        onClick={() => handleShowMore()}
      >
        Show more
      </button>
    </>
  );
}

export default Products;
