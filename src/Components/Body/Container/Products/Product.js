import styles from "./Container.module.scss";
import classNames from "classnames/bind";
import { ThemeContext } from "../../../../ThemeContex/ThemeContex";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";

const cx = classNames.bind(styles);

function Product({ product }) {
  const { addItem } = useCart();
  const themeContext = useContext(ThemeContext);
  return (
    <div className={cx("productCard", themeContext.theme)}>
      <Link to={`/products/${product.id}`}>
        <>
          <div className={cx("image")}>
            <img src={product.image} alt="ten sp" />
          </div>
          <div className={cx("productInfo")}>
            <h3> {product.name}</h3>
            <div className={cx("details")}>
              <p>Price - {product.price}$</p>
            </div>
          </div>
        </>
      </Link>
      <button onClick={() => addItem(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
