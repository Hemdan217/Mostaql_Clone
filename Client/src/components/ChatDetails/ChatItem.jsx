import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import moment from "moment";
const ProjectInfo = ({ isSender, message }) => {
  const { t } = useTranslation();

  return (
    <>
      <div style={{ marginBottom: "5px", padding: "5px" }}>
        <div
          style={{
            borderRadius: "5px",
            padding: "5px",
            backgroundColor: isSender ? "#F0FFFF" : "#eee",
            float: isSender ? "right" : "left",
            wordWrap: "break-word",
          }}
        >
          <p className="mb-0">
            {message.content}

            {message.attachments.length ? (
              <>
                <br />
                {message.attachments.map((file, index) => (
                  <a href={file} target="_blank" key={index}>
                    File {index + 1}
                  </a>
                ))}
              </>
            ) : null}
          </p>

          <time style={{ fontSize: "9px" }}>
            {moment(new Date(message.updatedAt)).fromNow()}
            <AccessTimeIcon fontSize={"9px"} />
          </time>
        </div>
      </div>
      <div style={{ clear: "both" }}></div>
      <br />
    </>
  );
};

export default ProjectInfo;
