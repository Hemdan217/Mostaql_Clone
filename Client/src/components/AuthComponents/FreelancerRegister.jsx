import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { freelancerSchemaValidation } from "../../Schemas/FreelancerRegisterationSchema";
import { useLoaderData } from "react-router-dom";
import { LoadingIndecator } from "../UI_Helpers/LoadingIndecator";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { authActions, registerNewUser } from "../../store/AuthSlice/authSlice";

const fields = {
  firstName: "",
  lastName: "",
  username: "",
  jobTitle: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  categoryId: "",
};

function FreelancerRegister({ t }) {
  const { isLoading, errors } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const categories = useLoaderData();

  const handelRegisterSubmit = (values) => {
    const newUser = {
      ...values,
    };
    dispatch(registerNewUser(newUser));
  };

  useEffect(() => {
    //Cleaning
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
        <h3 className="text-center pt-4 fw-semibold">
          {t("Register As A Freelancer")}
        </h3>
        <div className="row p-5">
          <div className="col-lg-6 col-md-12 d-none d-sm-block">
            <div className="d-flex h-100 w-100 align-items-start justify-content-center">
              <img src="images/register.jpg" className=" img-fluid" />
            </div>
          </div>

          <Formik
            initialValues={fields}
            validationSchema={freelancerSchemaValidation}
            onSubmit={handelRegisterSubmit}
          >
            {({ values, touched }) => (
              <Form className="row g-3 col-lg-6 col-md-12">
                <div className=" col-md-6">
                  <label htmlFor="firstName" className="form-label">
                    {t("First Name")} <span className="text-danger">*</span>
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder={t("firstName")}
                    name="firstName"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-danger"
                  />
                  {errors.firstName && (
                    <span className="text-danger">{errors.firstName}</span>
                  )}
                </div>
                <div className=" col-md-6">
                  <label htmlFor="lastName" className="form-label">
                    {t("Last Name")} <span className="text-danger">*</span>
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder={t("lastName")}
                    name="lastName"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-danger"
                  />
                  {errors.lastName && (
                    <span className="text-danger">{errors.lastName}</span>
                  )}
                </div>
                <div className=" col-md-6">
                  <label htmlFor="username" className="form-label">
                    {t("username")} <span className="text-danger">*</span>
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder={t("username")}
                    name="username"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-danger"
                  />
                  {errors.username && (
                    <span className="text-danger">{errors.username}</span>
                  )}
                </div>
                <div className=" col-md-6">
                  <label htmlFor="jobTitle" className="form-label">
                    {t("job Title")} <span className="text-danger">*</span>
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="jobTitle"
                    placeholder={t("ex - Web Developer")}
                    name="jobTitle"
                  />
                  <ErrorMessage
                    name="jobTitle"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className=" col-md-12">
                  <label htmlFor="inputEmail4" className="form-label">
                    {t("Email")} <span className="text-danger">*</span>
                  </label>
                  <Field
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                    name="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email}</span>
                  )}
                </div>
                <div className=" col-md-12">
                  <label htmlFor="phoneNumber" className="form-label">
                    {t("Phone Number")} <span className="text-danger">*</span>
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    placeholder={t("PhoneNumber")}
                    name="phoneNumber"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-danger"
                  />
                  {errors.phoneNumber && (
                    <span className="text-danger">{errors.phoneNumber}</span>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">
                    {t("Password")} <span className="text-danger">*</span>
                  </label>
                  <Field
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder={t("password")}
                    name="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword5" className="form-label">
                    {t("Confirm Password")}
                    <span className="text-danger">*</span>
                  </label>
                  <Field
                    type="password"
                    className="form-control"
                    id="inputPassword5"
                    placeholder={t("confirmPassword")}
                    name="confirmPassword"
                  />
                  {values.password !== values.confirmPassword &&
                    touched.confirmPassword && (
                      <p className="text-danger mt-2">{t("Not Matched Password")}</p>
                    )}
                </div>
                <div className=" col-md-12">
                  <label htmlFor="categoryId" className="form-label">
                    {t("Category")} <span className="text-danger">*</span>
                  </label>
                  <Field
                    className="form-select"
                    aria-label="Default select example"
                    name="categoryId"
                    as="select"
                  >
                    <option>{t("Choose")}</option>
                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.title}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="categoryId"
                    component="div"
                    className="text-danger"
                  />
                  {errors.categoryId && (
                    <span className="text-danger">{errors.categoryId}</span>
                  )}
                </div>
                <div className="col-12  mx-auto">
                  <button type="submit" className="btn btn-primary">
                    {isLoading && <LoadingIndecator />}
                    {!isLoading && <span>{t("Submit")}</span>}
                  </button>
                </div>
                <span>
                  {t("Have you account")}
                  <Link to="/login"> {t("Log In")}</Link>
                </span>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default FreelancerRegister;
