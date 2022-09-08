import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./TopView.module.scss";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { SmoothHorizontalScrolling } from "../../../SmoothScroll";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function TopView() {
  const products = useSelector((state) => state.Products.products);

  const sliderRef = useRef();
  const itemRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);

  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft)
      SmoothHorizontalScrolling(
        sliderRef.current,
        50,
        itemRef.current.clientWidth,
        sliderRef.current.scrollLeft * 1.04
      );
  };

  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0)
      SmoothHorizontalScrolling(
        sliderRef.current,
        50,
        -itemRef.current.clientWidth,
        sliderRef.current.scrollLeft * 1.04
      );
  };

  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handleScrollRight();
      if (dragMove > dragDown) handleScrollLeft();
    }
  }, [dragDown, dragMove, isDrag]);

  const onDragStart = (e) => {
    setDragDown(e.screenX);
    setIsDrag(true);
  };
  const onDragEnd = (e) => {
    setIsDrag(false);
  };
  const onDragEnter = (e) => {
    setDragMove(e.screenX);
  };

  return (
    <div className={cx("ContentsSection")}>
      <h3 className={cx("heading")}>New Products</h3>
      <div
        className={cx("InfoMoviesSlider")}
        ref={sliderRef}
        draggable="true"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
      >
        {products.length > 0 &&
          products.slice(8, 20).map((product) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <div key={product.id} className={cx("movieItem")} ref={itemRef}>
                <img src={product.image} alt="hinh anh" />
                <div>{product.name}</div>
              </div>
            </Link>
          ))}
      </div>

      <div className={cx("btnLeft")} onClick={handleScrollLeft}>
        <FiChevronLeft />
      </div>
      <div className={cx("btnRight")} onClick={handleScrollRight}>
        <FiChevronRight />
      </div>
    </div>
  );
}

export default TopView;
