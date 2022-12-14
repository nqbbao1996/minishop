import styles from "./Detail.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ImageInfo({ productId }) {
  return (
    <div className={cx("image")}>
      <img src={productId.image} alt="" />
      <p>
        <strong>Price</strong> <span>: {productId.price}$</span>
      </p>
    </div>
  );
}

export default ImageInfo;
