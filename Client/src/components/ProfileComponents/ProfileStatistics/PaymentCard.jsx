import React from "react";
import { useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";
import { useTranslation } from "react-i18next";


function PaymentCard() {
  const { t } = useTranslation();

  const {userData} = useSelector((state)=>state.authSlice)
  const {data} = useLoaderData()
  return (
    <div className="col-sm-12 col-md-8">
      <div className="card border-0 mt-3">
        <div className="card-body  ">
          <div className="row justify-content-center text-center">
            <div className="col-4">
              <Link to={`/payment/${userData.id}`}>
                <p className="text-success fs-4">
                  {" "}
                  {t("All Payment")} <br />
                  <span className="fw-bold">${data?.totalMoney || "0"}</span>
                </p>
              </Link>
            </div>
          </div>
          <hr />

          <div className="row justify-content-center text-center">
            <div className="col-4">
              <p className="text-p fw-bold"> {t("Availble")} ${data?.totalMoney || 0}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
