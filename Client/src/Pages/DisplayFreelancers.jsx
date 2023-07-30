import PersonalProfile from "../components/PersonalProfile/PersonalProfile";
import { Link, useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageGeneration from "../components/UI_Helpers/ImageGeneration";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function DisplayFreelancers() {
  const { t } = useTranslation();
  const { data } = useLoaderData();
  const { userData } = useSelector((state) => state.authSlice);

  return (
    <div className="container-fluid mt-5 " style={{ backgroundColor: "white" }}>
      <div
        className="row col-md-12 justify-content-center"
        style={{ margin: "100px 0px" }}
      >
        <div className="col-md-12 text-center mt-4">
          {!data.avatar && (
            <ImageGeneration
              firstName={data.firstName}
              LastName={data.LastName || data.lastName}
            />
          )}
          {data.avatar && <ImageGeneration avatar={data.avatar} />}
        </div>
        <span className="col-md-12 text-center">
          {" "}
          {data.firstName} {data.lastName || data.LastName}
        </span>
        <span className="col-md-12 text-center">{data.jobTitle}</span>
        {data.isVerify && (
          <span className="mb-2 text-center">
            {t("Trusted")}
            <img
              src="https://api.iconify.design/fa6-regular:circle-check.svg?color=%23009dff"
              alt="verified"
              className="mx-2"
            />
          </span>
        )}
      </div>

      <div className="d-flex justify-content-between">
        <div className="col-md-3 bg-primary">
          <p className="text-center text-white mt-3">{t("personalProfile")}</p>
        </div>

        {userData.id === data._id && (
          <div>
            <Link
              to={`/profile/edit/${data._id}`}
              className="btn btn-primary"
              style={{ borderRadius: "0px" }}
            >
              {t("Edit Profile")}
            </Link>
          </div>
        )}
      </div>
      <div
        className="container-fluid mb-5"
        style={{ backgroundColor: "#F0F0F0" }}
      >
        <div className="container-fluid col-md-12 justify-content-center mb-5">
          <PersonalProfile data={data} />
        </div>
      </div>
    </div>
  );
}

export default DisplayFreelancers;
