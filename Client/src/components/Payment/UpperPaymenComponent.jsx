import React, { useCallback, useState } from "react";
import { Box, Grid, Typography, Button, Modal } from "@mui/material";
import ModalPayment from "./ModalPayment";
import { useTranslation } from "react-i18next";




function  UpperPaymenComponent({ userData }) {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const handelClose = useCallback(()=>{
    setOpen(false)
  },[])
  return (
    <Grid item sm={12}>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {t("Account Payments")}
        </Typography>
        {userData.role === "freelancer" && (
          <Button
            onClick={() => setOpen(true)}
            size="small"
            variant="outlined"
            color="success"
          >
            {t("Withdraw")}
          </Button>
        )}
        {userData.role === "client" && (
          <Button
          onClick={() => setOpen(true)}
          variant="outlined"
          color="success">
            {t("Deposit")}
          </Button>
        )}
      </Box>
        <ModalPayment userData={userData} open={open} closeModal={handelClose}/>
    </Grid>
  );
}

export default UpperPaymenComponent;
