import React, { useEffect, useState, useRef, useContext } from "react";
import { Box, Grid, Typography, Avatar, Rating } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import { hireFreelancer, sendMessage } from "./helper.js";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SwipeRightIcon from "@mui/icons-material/SwipeRight";
import PaymentsIcon from "@mui/icons-material/Payments";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { langContext } from "../../contextAPI/context.jsx";
function FreelancerOffer({ offer, isOwner, status, winningOffer, title }) {
  const { t } = useTranslation();
  const { lang } = useContext(langContext);
  const { role, id } = useSelector((state) => state.authSlice?.userData);
  const {
    _id,
    freelancerId,
    updatedAt,
    description,
    amount,
    duration,
    attachments,
  } = offer;
  const timeAgo = moment(updatedAt).startOf("second").fromNow().split(" ");
  let showTime =
    lang == "ar"
      ? `${t(timeAgo[2])} ${t(timeAgo[0])} ${t(timeAgo[1])} `
      : timeAgo.join(" ");
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("isAuth"))?.["token"];

  const [hired, setHired] = useState(false);

  useEffect(() => {
    console.log("hired");
  }, [hired]);

  const handleHired = () => {
    setHired(true);
  };
  return (
    <Grid
      sx={{
        backgroundColor: "white",
        marginTop: "16px",
        marginBottom: "16px",
        padding: "20px",
        direction: "ltr",
      }}
      style={{ backgroundColor: _id == winningOffer ? "antiquewhite" : "" }}
    >
      <div className="d-flex flex-lg-row flex-md-column justify-content-lg-between align-items-center ">
        <Box
          component="div"
          sx={{
            width: "70%",
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          {/* image Box */}
          <Box>
            {freelancerId.avatar ? (
              <Avatar
                alt="Remy Sharp"
                src={freelancerId.avatar}
                lg={{ width: 100, height: 100 }}
                md={{ width: 50, height: 50 }}
              />
            ) : (
              <Avatar
                lg={{ width: 1000, height: 1000 }}
                md={{ width: 50, height: 50 }}
              >
                {freelancerId.firstName.slice(0, 1)}
              </Avatar>
            )}
          </Box>
          {/* Typo Box */}
          <Box>
            <Link to={`/freelancer/${freelancerId._id}`}>
              {" "}
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "0",
                }}
              >
                {freelancerId.firstName} {freelancerId.lastName}
              </p>
            </Link>
            <p className="  opacity-50 ">{freelancerId.jobTitle}</p>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                padding: "0 30px ",
              }}
            >
              {description}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                padding: "0 30px ",
              }}
            >
              {(isOwner && attachments.length) ||
              (freelancerId._id == id && attachments.length)
                ? attachments.map((file, index) => {
                    return (
                      <a href={file} key={index} target="_blank">
                        File {index + 1}
                      </a>
                    );
                  })
                : ""}
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "30%" }}>
          {isOwner && (
            <>
              <div className="text-center mb-2">
                <button
                  className="btn"
                  onClick={() => {
                    sendMessage(token, freelancerId._id, title, navigate);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#1976d2"
                      d="M17 9H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm0 4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"
                    />
                    <path
                      fill="#1976d2"
                      d="M19 2H5a3.003 3.003 0 0 0-3 3v10a3.003 3.003 0 0 0 3 3h11.586l3.707 3.707A1 1 0 0 0 22 21V5a3.003 3.003 0 0 0-3-3Zm-2 11H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Zm0-4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Z"
                      opacity=".5"
                    />
                  </svg>
                </button>
                <button
                  style={{ display: status == "open" ? "" : "none" }}
                  className="btn"
                  onClick={() => {
                    hireFreelancer(token, _id, title, navigate, t);
                    handleHired();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#028f00"
                      d="M9.84 17.08a.997.997 0 0 1-.707-.293l-3.84-3.84a1 1 0 1 1 1.414-1.414l3.133 3.133l7.453-7.453a1 1 0 0 1 1.414 1.414l-8.16 8.16a.997.997 0 0 1-.707.293Z"
                    />
                  </svg>
                </button>
              </div>

              <h5
                className="text-center mb-2"
                style={{ direction: lang == "ar" ? "rtl" : "ltr" }}
              >
                {amount}
                <AttachMoneyIcon /> {t("Within")} {duration} {t("days")}
              </h5>
            </>
          )}
          {freelancerId._id == id && (
            <h5
              className="text-center mb-2"
              style={{ direction: lang == "ar" ? "rtl" : "ltr" }}
            >
              {amount}
              <AttachMoneyIcon /> {t("Within")} {duration} {t("days")}
            </h5>
          )}
          <p className="  opacity-50 text-center">
            {t("Last updated")} {showTime}
          </p>
        </Box>
      </div>
    </Grid>
  );
}

export default FreelancerOffer;
// <Rating name="read-only" value={4} max={5} readOnly />
// <Typography>3.9</Typography>
// <Typography sx={{ margin: "0px 10px" }}>
//   <MessageIcon color="warning" /> 511
// </Typography>
// <Typography>
//   <AttachMoneyIcon color="success" /> 511
// </Typography>
