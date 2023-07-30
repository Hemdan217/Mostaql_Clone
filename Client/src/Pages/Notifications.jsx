import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import { useSelector } from "react-redux";

import LoadingSpinner from "./../components/UI_Helpers/LoadingSpinner.jsx";
import { useTranslation } from "react-i18next";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";

const Notifications = () => {
  const { allNotifications } = useLoaderData();
  const { t } = useTranslation();
  return (
    <>
      <div className="container">
        <Grid container spacing={2} sx={{ minHeight: "90vh" }}>
          <Grid item md={12}>
            <Typography variant="h6" sx={{ p: 3, fontWeight: "bold" }}>
              {t("Your Notifications")}
            </Typography>
            <Box component="div" sx={{ p: 3 }}>
              {allNotifications.length ? (
                <ul className="list-group">
                  {allNotifications.map(({ content }, index) => {
                    return (
                      <Card
                        elevation={1}
                        sx={{ backgroundColor: "white", p: 1, mb: 3 }}
                        key={index}
                      >
                        <CardContent>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                            component="div"
                          >
                            <Typography variant="p">
                              {/* <Link to={`/projects/${projectId._id}`}> */}
                              {content}
                              {/* </Link> */}
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    );
                  })}
                </ul>
              ) : (
                <div>{t("You Don't Have Any Notifications Yet")}</div>
              )}
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Notifications;
