import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { validate } from "./validate.js";
import { sendMyOffer, fetchMyOffer } from "./helper.js";
import MyOffer from "./myOffer.jsx";
import OfferForm from "./OfferForm.jsx";
import { useTranslation } from "react-i18next";

const SendOffer = () => {
  const { t } = useTranslation();

  const [myOffer, setMyOffer] = useState();
  const { projectId } = useParams();
  const token = useSelector((state) => state.authSlice.userData.token);
  const id = useSelector((state) => state.authSlice.userData.id);
  useEffect(() => {
    fetchMyOffer(id, setMyOffer, projectId);
  }, []);

  const formik = useFormik({
    initialValues: {
      amount: undefined,
      duration: undefined,
      description: undefined,
      attachments: undefined,
    },
    validate,
    onSubmit: (values) => {
      sendMyOffer(values, token, setMyOffer);
    },
  });
  return (
    <>
      {myOffer ? (
        <MyOffer offer={myOffer} setMyOffer={setMyOffer} />
      ) : (
        <div className="bg-white p-4 mt-2 ">
          <h5 className=" w-100 mb-3">{t("Add your offer")}</h5>
          <OfferForm formik={formik} />
        </div>
      )}
    </>
  );
};

export default SendOffer;
