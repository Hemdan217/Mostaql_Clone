import React, { useContext } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Box, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useTranslation } from "react-i18next";
import { langContext } from "../../contextAPI/context";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import TimerRoundedIcon from "@mui/icons-material/TimerRounded";
import PauseCircleFilledRoundedIcon from "@mui/icons-material/PauseCircleFilledRounded";
import ClassRoundedIcon from "@mui/icons-material/ClassRounded";
import { generateNames } from "../../helpers/generateNames";
const ProjectsListSingleProject = ({ project }) => {
  const { t } = useTranslation();
  const { lang } = useContext(langContext);
  const timeAgo = moment(project.createdAt)
    .startOf("second")
    .fromNow()
    .split(" ");

  return (
    <Box component="div" className="project">
      <Grid container spacing={2}>
        <Grid item sm={10}>
          <Box
            component="div"
            style={{ display: "flex", justifyContent: "space-between" }}
            className="project-title"
          >
            <Link to={project._id}>{project.title}</Link>
          </Box>

          <Box
            component="div"
            sx={{ marginTop: "20px", inlineSize: "95%" }}
            className="project-excerpt"
          >
            <Typography sx={{ color: "#343a40", opacity: ".7" }} variant="p">
              {project.description.slice(0, 180) + "..."}
            </Typography>
          </Box>

          <Box component="div" mt={5} className="project-info ">
            <Grid item sm={1}>
              {project.clientId.avatar ? (
                <img
                  src={project.clientId.avatar}
                  alt="avatar"
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                />
              ) : (
                <Typography
                  variant="span"
                  style={{
                    fontSize: "15px",
                    padding: "15px",
                    borderRadius: "50%",
                    backgroundColor: "#eee",
                  }}
                >
                  {generateNames(
                    project.clientId.firstName,
                    project.clientId.lastName
                  )}
                </Typography>
              )}
            </Grid>
            <Grid item sm={2} style={{ color: "#736e7a" }}>
              <Typography fontSize={12}>
                {project.clientId.firstName + " " + project.clientId.lastName}
              </Typography>
              <Typography fontSize={12}>
                <BusinessCenterIcon style={{ fontSize: "15px" }} />{" "}
                {project.clientId.userName}
              </Typography>
            </Grid>
            <Grid item sm={9}>
              <Box component="div" className="d-flex flex-wrap gap-2">
                {project.skillsIds.map((skill, index) => (
                  <Typography
                    key={index}
                    variant="span"
                    fontSize={10}
                    style={{ padding: "4px 9px", borderRadius: "5px" }}
                    className="bg-primary me-2  text-white"
                  >
                    {skill.name}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          sm={2}
          style={{
            fontSize: "13px",
            display: "flex",
            alignItems: "revert",
            justifyContent: "center",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Typography>
            <TimerRoundedIcon style={{ fontSize: "18px", margin: "2px" }} />
            <Typography variant="span" style={{ fontSize: "13px" }}>
              {project.duration} {t("days")}
            </Typography>
          </Typography>

          <Typography>
            <AccessTimeFilledOutlinedIcon
              style={{ fontSize: "18px", margin: "2px" }}
            />
            <Typography variant="span" style={{ fontSize: "13px" }}>
              {lang == "ar"
                ? `${t(timeAgo[2])} ${t(timeAgo[0])} ${t(timeAgo[1])} `
                : timeAgo.join(" ")}
            </Typography>
          </Typography>

          <Typography style={{ display: "flex", alignItems: "center" }}>
            <MonetizationOnIcon style={{ fontSize: "18px", margin: "2px" }} />

            <Typography variant="span" style={{ fontSize: "13px" }}>
              {project.range}
            </Typography>
            <AttachMoneyIcon style={{ fontSize: "18px" }} />
          </Typography>

          <Typography style={{ display: "flex", alignItems: "center" }}>
            <PauseCircleFilledRoundedIcon
              style={{ fontSize: "18px", margin: "2px" }}
            />

            <Typography variant="span" style={{ fontSize: "13px" }}>
              {t(project.status)}
            </Typography>
          </Typography>
          <Typography style={{ display: "flex", alignItems: "center" }}>
            <ClassRoundedIcon style={{ fontSize: "18px", margin: "2px" }} />

            <Typography variant="span" style={{ fontSize: "13px" }}>
              {project?.categoryId?.title}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectsListSingleProject;
