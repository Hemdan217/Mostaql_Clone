import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import UpperPaymenComponent from "../components/Payment/UpperPaymenComponent";
import CardPayment from "../components/Payment/CardPayment";
import TransacstionHistoryCard from "../components/Payment/TransacstionHistoryCard";
import { LoadingIndecator } from "../components/UI_Helpers/LoadingIndecator";
import { getTransactionHistory } from "../components/Payment/getTransactionHistory";
import { useTranslation } from "react-i18next";


function Payment() {
  const { t } = useTranslation();
  const { userData } = useSelector((state) => state.authSlice);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [isTransactionLoading, setIsTransactionLoading] = useState(false);

  useEffect(() => {
    setIsTransactionLoading(true);
    getTransactionHistory(userData.id).then((data) => {
      setTransactionHistory(data.data.transaction.reverse());
      setIsTransactionLoading(false);
    });
  }, []);
  return (
    <Box component="div" sx={{ background: "#f0f0f0" }}>
      <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
        <Grid container sx={{ padding: "20px" }}>
          <UpperPaymenComponent userData={userData} />
          <CardPayment userData={userData} />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {t("Transaction History")}
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={12}>
              {isTransactionLoading ? (
                <div className="d-flex justify-content-center">
                  <LoadingIndecator />
                </div>
              ) : (
                transactionHistory?.map((transaction) => (
                  <TransacstionHistoryCard
                    key={transaction._id}
                    transaction={transaction}
                  />
                ))
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default Payment;
