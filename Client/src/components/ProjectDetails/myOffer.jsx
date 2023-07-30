import React, { useEffect, useState, useRef, useContext } from "react";
import { langContext } from "../../contextAPI/context.jsx";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useFormik } from "formik";
import { validate } from "./validate.js";
import { updateOffer } from "./helper.js";
import { useSelector } from "react-redux";
import OfferForm from "./OfferForm.jsx";
import { useTranslation } from "react-i18next";

function EditOffer({ offer, open, onClose, onSubmit }) {
  const { t } = useTranslation();
  const { lang } = useContext(langContext);
  const token = useSelector((state) => state.authSlice.userData.token);

  const formik = useFormik({
    initialValues: {
      amount: offer.amount,
      duration: offer.duration,
      description: offer.description,
    },
    validate,
    onSubmit: (values) => {
      onSubmit(values);
      updateOffer(values, token, offer._id);
    },
  });

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      PaperProps={{
        lg: {
          width: "130%",
        },
      }}
    >
      <DialogTitle style={{ textAlign: lang == "ar" ? "end" : "start" }}>
        {t("Edit Your Offer")}
      </DialogTitle>
      <div className="bg-white p-5 mt-2 ">
        <OfferForm
          formik={formik}
          handleClose={handleClose}
          EditOffer={true}
          lang={lang}
        />
      </div>
    </Dialog>
  );
}

const MyOffer = ({ offer, setMyOffer }) => {
  const { lang } = useContext(langContext);
  const [open, setOpen] = React.useState(false);
  let values = ["amount", "duration", "description"];
  const { t } = useTranslation();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (values) => {
    setMyOffer({ ...offer, ...values });
    setOpen(false);
  };
  return (
    <>
      <div className="mt-3">
        <TableContainer elevation={0} component={Paper} className="p-5">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  colSpan="2"
                  style={{
                    textAlign: "start",
                  }}
                >
                  <h5>{t("Your Offer")}</h5>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {values.map((value) => (
                <TableRow
                  key={value}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {t(value)}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ textAlign: lang == "ar" ? "end" : "start" }}
                  >
                    {offer[value]}
                  </TableCell>
                </TableRow>
              ))}
              {offer?.attachments.length ? (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <span>{t("Attachments")}</span>
                  </TableCell>
                  <TableCell align="right">
                    {offer?.attachments.map((file, index) => {
                      return (
                        <a href={file} key={file} target="_blank">
                          {t("File")} {index + 1}{" "}
                        </a>
                      );
                    })}
                  </TableCell>
                </TableRow>
              ) : (
                ""
              )}
            </TableBody>
          </Table>

          <Button
            variant="outlined bg-primary text-white"
            onClick={handleClickOpen}
          >
            {t("Edit Your Offer")}
          </Button>
        </TableContainer>
      </div>

      <EditOffer
        offer={offer}
        open={open}
        onClose={handleClose}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      />
    </>
  );
};

export default MyOffer;
