import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { loginSchema } from "../../Schemas/LoginSchema";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { authActions, loginToAccount } from "../../store/AuthSlice/authSlice";

const fields = {
  email: "",
  password: "",
  loginType: "",
};

function Login() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handelLoginSubmit = (values) => {
    dispatch(loginToAccount(values));
  };

  useEffect(() => {
    return () => {
      dispatch(authActions.cleanUpRegister());
    };
  }, []);
  return (
    <div
      id="form__container"
      style={{ padding: "50px 0px", backgroundColor: "#F9F9F9" }}
    >
      <div
        className="container bg-white"
        style={{ borderRadius: 40, boxShadow: "0px 0px 5px 0px #2386" }}
      >
        <div className="row p-5">
          <div className="col-lg-6 col-md-12 d-none d-sm-block">
            <div className="d-flex h-100 w-100 align-items-start justify-content-center">
              <img src="images/register.jpg" className=" img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <Formik
              initialValues={fields}
              onSubmit={handelLoginSubmit}
              validationSchema={loginSchema}
            >
              {() => (
                <Form>
                  <div className=" col-md-12">
                    <label htmlFor="email" className="form-label">
                      {t("Email")}
                    </label>
                    <Field
                      type="email"
                      className="form-control mb-3"
                      id="email"
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
                      className="text-danger"
                      component="div"
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="password" className="form-label">
                      {t("Password")}
                    </label>
                    <Field
                      type="password"
                      className="form-control mb-3"
                      id="password"
                      name="password"
                    />
                    <ErrorMessage
                      name="password"
                      className="text-danger"
                      component="div"
                    />
                  </div>
                  <div className="col-md-12">
                    <>
                      <label>{t("Please Choose Login As")}</label>
                      <div className="form-check">
                        <Field
                          className="form-check-input"
                          type="radio"
                          id="freelancer"
                          name="loginType"
                          value="freelancer"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="freelancer"
                        >
                          {t("Freelancer")}
                        </label>
                      </div>
                      <div className="form-check">
                        <Field
                          className="form-check-input"
                          type="radio"
                          name="loginType"
                          id="client"
                          value="client"
                        />
                        <label className="form-check-label" htmlFor="client">
                          {t("Client")}
                        </label>
                        <ErrorMessage
                          name="loginType"
                          className="text-danger"
                          component="div"
                        />
                      </div>
                    </>
                  </div>

                  <div className="col-12  mx-auto">
                    <button
                      type="submit"
                      className="btn btn-primary text-white mb-3"
                    >
                      {t("Login")}
                    </button>
                  </div>

                  <span>
                    {t("Haven't you account")}
                    <Link to="/register"> {t("Sign Up")}</Link>
                  </span>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
