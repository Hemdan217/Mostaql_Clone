import React, { useEffect, useState, useContext } from "react";
import ProjectsListTitle from "../components/ProjectsList/ProjectsListTitle";
import ProjectsItemsList from "../components/ProjectsList/ProjectsItemsList";
import ProjectsListPagination from "../components/ProjectsList/ProjectsListPagination";
import ProjectsListFilter from "../components/ProjectsList/ProjectsListFilter";
import "../components/ProjectsList/ProjectList.css";
import { SentimentVeryDissatisfied } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../store/ProjectsSlice/ProjectsSlice";
import { useParams, useSearchParams } from "react-router-dom";
import LoadingSpinner from "../components/UI_Helpers/LoadingSpinner";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { langContext } from "../contextAPI/context";
const ProjectsList = () => {
  const { t } = useTranslation();

  const { projects, paginationData, isLoading } = useSelector(
    (state) => state.ProjectsSlice
  );
  const dispatch = useDispatch();

  const [params] = useSearchParams();
  const { lang } = useContext(langContext);
  useEffect(() => {
    dispatch(getAllProjects({ page: params.get("page") }));
  }, [dispatch, lang]);

  return (
    <div className="container">
      <div className="projects-list">
        <ProjectsListTitle />
        <div className="row">
          <div className="col-md-3">
            <ProjectsListFilter />
          </div>
          <div className="col-md-9">
            {!isLoading ? (
              projects.length ? (
                projects.map((project, index) => (
                  <ProjectsItemsList key={index} project={project} />
                ))
              ) : (
                <Box fontSize={30} style={{ textAlign: "center" }}>
                  <SentimentVeryDissatisfied />
                  <Typography fontSize={30} style={{ textAlign: "center" }}>
                    {t("no projects fit your requests")}
                  </Typography>
                </Box>
              )
            ) : (
              <LoadingSpinner />
            )}
            <ProjectsListPagination
              paginationData={paginationData}
              projects={projects}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsList;
