import styles from "../Form.module.scss";
import classNames from "classnames/bind";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineCloseCircle } from "react-icons/ai";

const cx = classNames.bind(styles);

function FormSignIn({ setShowIn }) {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .required("is required")
        .min(4, "tên có ít nhất 4 ký tự"),
      email: Yup.string()
        .required("is required")
        .matches(
          /^[\w-]+@([\w-]+)+[\w-]{2,4}$/,
          "địa chỉ mail không chính xác"
        ),
      password: Yup.string()
        .required("is required")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "Mật khẩu có tối thiểu 8 ký tự, ít nhất một chữ cái và một số"
        ),
      passwordConfirmation: Yup.string()
        .required("is required")
        .oneOf(
          [Yup.ref("password"), null],
          "nhập lại mật khẩu không chính xác"
        ),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.errors.fullname);

  return (
    <>
      <div
        className={cx("background-form")}
        onClick={() => setShowIn(false)}
      ></div>
      <section className={cx("formContent")}>
        <form className={cx("form")} onSubmit={formik.handleSubmit}>
          <p className={cx("heading")}>Đăng Nhập</p>
          <p className={cx("desc")}>Welcome to Shop ❤️❤️</p>
          <div className={cx("spacer")}></div>

          <div className={cx("form-group")}>
            <label className={cx("form-label")}>Email</label>
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              id="email"
              name="email"
              type="text"
              placeholder="VD: email@domain.com"
              className={cx("form-control")}
            />
            {formik.errors.email && (
              <span className={cx("form-message")}>{formik.errors.email}</span>
            )}
          </div>
          <div className={cx("form-group")}>
            <label className={cx("form-label")}>Mật khẩu</label>
            <input
              onChange={formik.handleChange}
              value={formik.values.password}
              id="password"
              name="password"
              type="text"
              placeholder="mật khẩu"
              className={cx("form-control")}
            />
            {formik.errors.password && (
              <span className={cx("form-message")}>
                {formik.errors.password}
              </span>
            )}
          </div>

          <button className={cx("form-submit")} type="submit">
            Đăng ký
          </button>

          <div className={cx("close-icon")} onClick={() => setShowIn(false)}>
            <AiOutlineCloseCircle />
          </div>
        </form>
      </section>
    </>
  );
}

export default FormSignIn;
