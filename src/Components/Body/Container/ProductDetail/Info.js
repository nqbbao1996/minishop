import styles from "./Detail.module.scss";
import classNames from "classnames/bind";
import { useCart } from "react-use-cart";

const cx = classNames.bind(styles);

function InfoProduct({ productId }) {
  const { addItem } = useCart();
  return (
    <div className={cx("InfoProduct")}>
      <h3>{productId.name}</h3>
      <div className={cx("Detail")}>
        <p className={cx("Detail__Description")}>
          <strong>Description</strong> <span>: {productId.description}</span>
        </p>
        <p>
          <strong>Category</strong> <span>: {productId.category}</span>
        </p>

        <button onClick={() => addItem(productId)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default InfoProduct;
