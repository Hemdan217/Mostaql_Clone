import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CardPayment() {
  const { t } = useTranslation();


  let { data } = useLoaderData();


  return (
    <Grid item sm={12}>
      <Box
        component="div"
        sx={{
          display: "flex",
          margin: "20px 0px",
          width:'100%'
        }}
      >
        <Card sx={{ width:'100%', borderRadius: 1 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h6">{t("Toatal Payment Available")}</Typography>
            <Typography variant="body2">
              @{data.username || data.userName}
            </Typography>
            <br />
            <Typography variant="span">$ {data?.totalMoney || '0' }</Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}

export default CardPayment;
