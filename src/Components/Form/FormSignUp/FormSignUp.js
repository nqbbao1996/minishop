import styles from "../Form.module.scss";
import classNames from "classnames/bind";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineCloseCircle } from "react-icons/ai";

const cx = classNames.bind(styles);

function FormSignUp({ setShowUp }) {
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
        onClick={() => setShowUp(false)}
      ></div>
      <section className={cx("formContent")}>
        <form className={cx("form")} onSubmit={formik.handleSubmit}>
          <p className={cx("heading")}>Đăng Ký</p>
          <p className={cx("desc")}>Welcome to Shop ❤️❤️</p>
          <div className={cx("spacer")}></div>
          <div className={cx("form-group")}>
            <label className={cx("form-label")}>Tên đầy đủ</label>
            <input
              onChange={formik.handleChange}
              value={formik.values.fullname}
              id="fullname"
              name="fullname"
              type="text"
              placeholder="VD: Nguyễn Văn A"
              className={cx("form-control")}
            />
            {formik.errors.fullname && (
              <span className={cx("form-message")}>
                {formik.errors.fullname}
              </span>
            )}
          </div>
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

          <div className={cx("form-group")}>
            <label className={cx("form-label")}>Nhập lại mật khẩu</label>
            <input
              onChange={formik.handleChange}
              value={formik.values.passwordConfirmation}
              id="passwordConfirmation"
              name="passwordConfirmation"
              type="text"
              placeholder="Nhập lại mật khẩu"
              className={cx("form-control")}
            />
            {formik.errors.passwordConfirmation && (
              <span className={cx("form-message")}>
                {formik.errors.passwordConfirmation}
              </span>
            )}
          </div>
          <button className={cx("form-submit")} type="submit">
            Đăng ký
          </button>
          <div className={cx("close-icon")} onClick={() => setShowUp(false)}>
            <AiOutlineCloseCircle />
          </div>
        </form>
      </section>
    </>
  );
}

export default FormSignUp;
