import React from "react";
import ProjectsListSingleProject from "./ProjectsListSingleProject";
import { Box } from "@mui/material";

const ProjectsItemsList = ({ project }) => {
  return (
    <Box className="projects-list-side mb-3">
      <ProjectsListSingleProject project={project} />
    </Box>
  );
};

export default ProjectsItemsList;
