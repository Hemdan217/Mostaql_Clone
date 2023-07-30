import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { fetchMyOffers } from "./helpers.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../UI_Helpers/LoadingSpinner";
import { useTranslation } from "react-i18next";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";

const FreelancerOffers = () => {
  const { t } = useTranslation();

  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.authSlice.userData?.token);
  const navigate = useNavigate();
  useEffect(() => {
    fetchMyOffers(setOffers, token, navigate, setLoading);
  }, []);
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="container">
          <Grid container spacing={2} sx={{ minHeight: "90vh" }}>
            <Grid item md={12}>
              <Typography variant="h6" sx={{ py: 4, fontWeight: "bold" }}>
                {t("Freelancers Offers")}
              </Typography>
              <Box component="div" sx={{ p: 3 }}>
                {offers.length ? (
                  <div className="card-body table-responsive p-0">
                    <table className="table table-hover text-nowrap">
                      <thead>
                        <tr>
                          <th>{t("Project Title")}</th>
                          <th>{t("Your Offer")}</th>
                          <th>{t("Stage")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {offers.map(
                          (
                            { amount, duration, projectId, updatedAt, stage },
                            index
                          ) => {
                            return (
                              <tr key={projectId._id}>
                                <td>
                                  {" "}
                                  <Link
                                    to={`/projects/${projectId._id}`}
                                    style={{ color: "#1976D2" }}
                                  >
                                    {projectId.title.slice(0, 30)}
                                  </Link>
                                </td>
                                <td>
                                  {" "}
                                  $ {amount} {t("within")} {duration}{" "}
                                  {t("days")}{" "}
                                  <Typography
                                    variant="span"
                                    sx={{ opacity: ".5" }}
                                  >
                                    last update{" "}
                                    {moment(new Date(updatedAt)).fromNow()}
                                  </Typography>
                                </td>
                                <td>
                                  <span
                                    className={
                                      stage == "Winning"
                                        ? "text-white p-1 px-2 bg bg-success"
                                        : stage == "Waiting"
                                        ? "text-white p-1 px-2 bg bg-info"
                                        : "text-white p-1 px-2 bg bg-secondary"
                                    }
                                  >
                                    {stage}
                                  </span>
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <Card sx={{ backgroundColor: "white" }}>
                    {t("You Don't Have Any Offer Before")}
                    <Link to="/projects"> {t("Go To Apply")}</Link>
                  </Card>
                )}
              </Box>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default FreelancerOffers;
