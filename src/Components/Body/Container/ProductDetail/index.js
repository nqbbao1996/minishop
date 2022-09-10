import styles from "./Detail.module.scss";
import classNames from "classnames/bind";
import InfoProduct from "./Info";
import ImageInfo from "./Picture";
import { ThemeContext } from "../../../../ThemeContex/ThemeContex";
import { getProductByName } from "../../../../Redux/Actions/Action";

import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const cx = classNames.bind(styles);

function ProductDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const themeContext = useContext(ThemeContext);
  const selector = useSelector((state) => state.Products.products);

  const productId = selector.find((item) => item.id === parseInt(params.id));

  useEffect(() => {
    dispatch(getProductByName(params.id));
  }, [params.id, dispatch]);
  return (
    <div className={cx("Wrapper")}>
      <button className={cx(themeContext.theme)} onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className={cx("ProductContainer", themeContext.theme)}>
        <ImageInfo productId={productId} />
        <InfoProduct productId={productId} />
      </div>
    </div>
  );
}

export default ProductDetail;
