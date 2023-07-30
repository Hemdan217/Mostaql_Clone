import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography } from "@mui/material";
const ProjectInfo = ({ details }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="p bg-white p-4">
        <div className="h5 w-100 mb-3">{t("Project Description")}</div>
        <div className="desc">{details.description}</div>
      </div>
      <div className="bg-white p-4 mt-2">
        <div className=" h5 w-100 mb-3">{t("Skill Required")}</div>
        <div className="skills d-flex flex-wrap gap-1">
          {details.skillsIds &&
            details.skillsIds.map((skill, index) => {
              return (
                <Typography
                  key={index}
                  variant="span"
                  style={{ padding: "8px" }}
                  className="bg-primary me-2  text-white rounded"
                >
                  {skill.name}
                </Typography>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ProjectInfo;
