import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import moment from "moment";
import { langContext } from "../../contextAPI/context.jsx";
const ChatInfo = ({ chatInfo, role }) => {
  const { t } = useTranslation();
  console.log(chatInfo, role);
  const { lang } = useContext(langContext);
  const timeAgo = moment(chatInfo.createdAt)
    .startOf("second")
    .fromNow()
    .split(" ");
  let rows = [
    {
      name: role == "freelancer" ? "Client Name" : "Freelancer Name",
      link:
        role == "freelancer"
          ? `/client/${chatInfo.clientId._id}`
          : `/freelancer/${chatInfo.freelancerId._id}`,
      value:
        role == "freelancer"
          ? `${chatInfo.clientId.firstName} ${chatInfo.clientId.lastName}`
          : `${chatInfo.freelancerId.firstName} ${chatInfo.freelancerId.lastName}`,
    },
    {
      name: "Chat Date",
    },
    {
      name: "Project Name",
      value: chatInfo.projectId.title,
      link: `/projects/${chatInfo.projectId._id}`,
    },
  ];
  rows[1].value =
    lang == "ar"
      ? `${t(timeAgo[2])} ${t(timeAgo[0])} ${t(timeAgo[1])} `
      : timeAgo.join(" ");

  return (
    <>
      <div className="col-lg-3 d-lg-block d-md-none">
        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  <h5>{t("Chat Card")}</h5>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <span>{t(row.name)}</span>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      direction: row.name == "Publish Date" ? "ltr" : "",
                    }}
                  >
                    <span
                      className={
                        row.value === "open" || row.value === "completed"
                          ? "bg-success p-1 text-white"
                          : ""
                      }
                    >
                      {row.link ? (
                        <Link to={row.link}>{t(row.value)}</Link>
                      ) : (
                        t(row.value)
                      )}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ChatInfo;
