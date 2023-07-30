import Swal from "sweetalert2";
import React, { useCallback, useEffect, useState } from "react";
import ImageCard from "../components/ProfileComponents/ProfileStatistics/ImageCard";
import PaymentCard from "../components/ProfileComponents/ProfileStatistics/PaymentCard";
import MessagesCard from "../components/ProfileComponents/ProfileStatistics/MessagesCard";
import OffersCard from "../components/ProfileComponents/ProfileStatistics/OffersCard";
import PortfolioCard from "../components/ProfileComponents/ProfileStatistics/PortfolioCard";
import LatestProjectsCard from "../components/ProfileComponents/ProfileStatistics/LatestProjectsCard";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router-dom";
import { sendOTPCodeVerification } from "../helpers/verifyAccount";

function ProfileStatistics() {
  const { t } = useTranslation();
  const { userData } = useSelector((state) => state.authSlice);
  const [isVerify, setIsVerify] = useState(false);
  const { data } = useLoaderData();

  const verifyAccount = useCallback(async () => {
    const confirm = await Swal.fire({
      title: `${t("Want To Verify Your Account")}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: `${t("No")}`,
      confirmButtonText: `${t("Yes, I Want")}`,
    });
    if (confirm.isConfirmed) {
      const confirmationCode = await sendOTPCodeVerification(userData.id);
      if (confirmationCode.message) {
        Swal.fire({
          titleText: `${t("Please Check Your Email Account")}`,
          icon: "success",
          iconColor: "#3085d6",
        });
      }
    }
  }, []);
  return (
    <section id="control-pannel">
      <div className="container">
        {!data.isActive && (
          <div className="py-4 bg-white mb-3">
            <p className="text-center text-danger fw-bold">
              {t("Your Account Has Been Deactivated Feel Free to contact us:")}{" "}
              <br />
            </p>
            <p className="text-dark text-center fw-bold">mostaqel@clone.com</p>
          </div>
        )}
        {!data.isVerify && userData.role === "freelancer" && (
          <div className="mb-3 py-4 bg-white r fw-bold">
            <p className="text-center text-danger">
              {t("To Verify Your Account")}{" "}
              <button
                onClick={verifyAccount}
                className="btn btn-outline-danger mx-2"
              >
                {t("Click Here")}
              </button>
              <br />{" "}
              {isVerify && (
                <span className="text-dark">
                  {t("Please Check Your Email Account")}
                </span>
              )}
            </p>
          </div>
        )}
        <span className="text-p mb-2">{t("Main")}</span>
        <h3>{t("Control Pannel")}</h3>

        {/* <!--Row 1 Pannel Information ImageCard And Payment Card--> */}
        <div className="row">
          <ImageCard />
          <PaymentCard />
        </div>

        {/* <!--Row 2 Pannel Information MessagesCard And OffersCard--> */}
        <div className="row">
          <MessagesCard />
          <OffersCard
            numOffers={data?.availableOffers}
            nextCharge={data?.nextCharge}
          />
        </div>

        {/* <!--Row 2 Pannel Information PortfolioCard And LatestProjects--> */}

        <div className="row">
          {userData.role === "freelancer" && <PortfolioCard />}
          <LatestProjectsCard />
        </div>
      </div>
    </section>
  );
}

export default ProfileStatistics;
