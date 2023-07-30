import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
const OfferForm = ({ formik, EditOffer, lang, handleClose }) => {
  const { t } = useTranslation();

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="row"
        style={{ textAlign: EditOffer && lang == "ar" ? "end" : "start" }}
      >
        {Object.keys(formik.initialValues).map((item) => {
          return item == "description" ? (
            <div className="form-group mb-3 col-12" key={item}>
              <label htmlFor={item}>{t(item)}</label>
              <textarea
                className="form-control "
                id={item}
                name={item}
                type="text"
                onChange={formik.handleChange}
                value={formik.values[item]}
                rows="3"
              ></textarea>
              <span className="text-danger">{formik.errors[item]}</span>
            </div>
          ) : (
            <div className="form-group mb-3 col-6" key={item}>
              <label htmlFor={item}>{t(item)}</label>
              <input
                className="form-control  col-6 mb-2"
                id={item}
                name={item}
                type={item == "attachments" ? "file" : "number"}
                value={formik.values[item]}
                onChange={formik.handleChange}
                multiple
              />
              <span className="text-danger">{formik.errors[item]}</span>
              {item == "amount" && formik.values[item] >= 10 && (
                <span className="text-secondary mt-2 p-3">
                  {t("Paid to you:")} ${formik.values[item]} - $
                  {(formik.values[item] * 0.2).toFixed(2)} {t("fees")} = $
                  {(formik.values[item] * 0.8).toFixed(2)}
                </span>
              )}
            </div>
          );
        })}

        <div className="form-group mb-3 text-center">
          <button
            type="submit"
            className="btn btn-primary me-5"
            disabled={formik.values == formik.initialValues}
          >
            {t("Submit")}
          </button>
          {EditOffer && (
            <button
              type="button"
              className="btn btn-danger "
              onClick={() => {
                handleClose();
              }}
            >
              {t("Cancel")}
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default OfferForm;
