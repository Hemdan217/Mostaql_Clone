import React, { useEffect, useState, useRef, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { ProjectDeactivating, fetchData } from "./helper.js";
import styles from "./projectDetails.module.css";
import ProjectStatistics from "./ProjectStatistics.jsx";
import ProjectInfo from "./ProjectInfo.jsx";
import ProjectOffers from "./ProjectOffers.jsx";
import SendOffer from "./SendOffer.jsx";
import { useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import { Button, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import LoadingSpinner from "../UI_Helpers/LoadingSpinner";
import { useTranslation } from "react-i18next";
import { langContext } from "../../contextAPI/context.jsx";
import moment from "moment";
const ProjectDetails = () => {
  const { t } = useTranslation();

  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(details.status);
  const [freelancerInfo, setFreelancerInfo] = useState();
  const { token, role, id } = useSelector((state) => state.authSlice?.userData);
  const isOwner = details.clientId?._id == id ? true : false;
  const { projectId } = useParams();
  const navigate = useNavigate();
  const token2 = JSON.parse(localStorage.getItem("isAuth"))?.["token"];

  const { lang } = useContext(langContext);
  const handleProjectDeactivating = () => {
    Swal.fire({
      title: t("Are you sure to close this project?"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("Yes, delete it!"),
    }).then((result) => {
      if (result.isConfirmed) {
        setStatus(ProjectDeactivating(details._id, token2));
        Swal.fire(t("closed!"));
      }
    });
  };

  useEffect(() => {
    const getFreelancerInfo = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/freelancers/${id}`
      );

      setFreelancerInfo(res.data.data);
    };
    if (role == "freelancer") {
      getFreelancerInfo();
    }
    fetchData(projectId, setDetails, setLoading, navigate);
  }, [status]);

  useEffect(() => {
    fetchData(projectId, setDetails, setLoading, navigate);
  }, [lang]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div
          className={`pt-5 ${styles.project_details_page}`}
          style={{ minHeight: "90vh", paddingBottom: "10px" }}
        >
          <div>
            <Box>
              <Container>
                <Grid
                  mb={4}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography fontSize={30}>
                    <span style={{ fontSize: "14px" }} className="text-p mb-2">
                      {t("Project Details")}
                    </span>
                    <br />
                    {details.title}
                  </Typography>
                  {isOwner && details.status == "open" && (
                    <Button
                      onClick={handleProjectDeactivating}
                      color="error"
                      disabled={details.status == "close"}
                      size="small"
                      variant="contained"
                    >
                      {" "}
                      {t("Deactivate project")}
                    </Button>
                  )}
                </Grid>
                <div className="row">
                  <div className="col-lg-9 col-md-12">
                    <ProjectInfo details={details} />
                    {!loading &&
                      (token ? (
                        role == "freelancer" && !freelancerInfo?.isActive ? (
                          <Box
                            component={Paper}
                            mt={2}
                            elevation={0}
                            className="p-5 text-center"
                          >
                            <h4 className="text-danger">
                              {t(
                                "Your Account Has Been Deactivated Feel Free to contact us:"
                              )}
                            </h4>
                            <p class="text-dark text-center fw-bold">
                              mostaqel@clone.com
                            </p>
                          </Box>
                        ) : role == "freelancer" &&
                          freelancerInfo?.availableOffers == 0 ? (
                          <Box
                            component={Paper}
                            mt={2}
                            elevation={0}
                            className="p-5 text-center"
                          >
                            <h4 className="text-danger">
                              {t("You Don't Have Any Available Offers")}
                            </h4>
                            <h6 class="text-dark text-center fw-bold mt-3">
                              {t("Please Waint Until Your Next Charge After ")}
                              {Math.floor(
                                moment(freelancerInfo?.nextCharge).diff(
                                  moment()
                                ) /
                                  (24 * 60 * 60 * 1000)
                              )}{" "}
                              {t("Days")}
                            </h6>
                          </Box>
                        ) : role == "freelancer" && details.status == "open" ? (
                          <SendOffer />
                        ) : isOwner ? (
                          <Box
                            component={Paper}
                            elevation={0}
                            mt={2}
                            className="p-5 text-center"
                          >
                            <h3>
                              {details.status == "open"
                                ? t("Choose Your Freelancer")
                                : details.status == "pending"
                                ? t("Verify Work And Release Money")
                                : details.status == "complete"
                                ? t("Great Work Send Feedback To Freelancer")
                                : t("This Project Was Closed")}
                            </h3>
                          </Box>
                        ) : (
                          role == "client" && (
                            <Box
                              component={Paper}
                              elevation={0}
                              mt={2}
                              className="p-5 text-center"
                            >
                              <h3>{t("Want To Publish")} </h3>
                              <Link
                                className="btn btn-secondary "
                                to="/add-projects"
                              >
                                {t("Publish Your Own Project")}
                              </Link>
                            </Box>
                          )
                        )
                      ) : (
                        <Box
                          component={Paper}
                          mt={2}
                          elevation={0}
                          className="p-5 text-center"
                        >
                          <h3>{t("Want To Apply")}</h3>
                          <Link
                            className="btn btn-primary "
                            to="/login"
                            style={{
                              marginLeft: lang == "ar" ? "25px" : "",
                              marginRight: lang == "en" ? "25px" : "",
                            }}
                          >
                            {t("Login")}
                          </Link>
                          <Link className="btn btn-secondary " to="/register">
                            {t("Regitser")}
                          </Link>
                        </Box>
                      ))}
                    {!loading && (
                      <ProjectOffers
                        id={projectId}
                        status={details.status}
                        numOffers={details.numOffers}
                        isOwner={details?.clientId?._id == id}
                        winningOffer={details.offerId?._id}
                        title={details.title}
                      />
                    )}
                  </div>
                  <ProjectStatistics
                    details={details}
                    isOwner={details.clientId?._id == id}
                  />
                </div>
              </Container>
            </Box>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
