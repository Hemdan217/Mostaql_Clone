import React, { useCallback, useEffect, useState } from "react";
import {
  Modal,
  Typography,
  Box,
  FormControl,
  InputLabel,
  InputAdornment,
  FilledInput,
  Button,
} from "@mui/material";
import { addPercent } from "../../helpers/taxs";
import { depositeCredit } from "./depositPayment";
import { withdrawFreelancer } from "./withdrawFreelancer";
import { useNavigate, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { ElevatorSharp } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function ModalPayment({ open, closeModal, userData }) {
  const { t } = useTranslation();

  const [amount, setAmount] = useState("");
  const [withdraw, setWithDraw] = useState(0);
  const [loading, setLoading] = useState(false);
  const { data } = useLoaderData();
  const navigate = useNavigate();
  const handelAmountCalculation = useCallback((e) => {
    setAmount(e.target.value);
  }, []);

  const onDepositCreditHandler = async () => {
    if (amount === "") {
      return;
    }
    setLoading(true);
    const session = await depositeCredit(amount, "deposit", userData.id);
    if (session) {
      localStorage.setItem("sessionId", session.sessionId);
      localStorage.setItem("amount", amount);
      window.location.assign(session.url);
    }
    setLoading(false);
    closeModal(false);
    setAmount(0);
  };

  const handelCloseModel = () => {
    closeModal(false);
    setAmount(0);
  };

  const handelWithdrawMony = (e) => {
    setWithDraw(+e.target.value);
  };

  const onWithdrawMony = async () => {
    setLoading(true);
    const data = await withdrawFreelancer(withdraw, userData.id);
    if (data.message) {
      setLoading(false);
      closeModal(false);
      const done = await Swal.fire({
        title: "Success",
        text: "Your Withdraw is completed",
        icon: "success",
      });

      if (done) {
        navigate(`/profile/statistics/${userData.id}`);
      }
    } else {
      setLoading(false);
      closeModal(false);
      Swal.fire({
        title: "Faild",
        text: data.error,
        icon: "error",
      });
    }
  };

  return (
    <Modal
      open={open}
      onClose={handelCloseModel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {t("Your Payment")}
        </Typography>

        {userData.role === "client" && (
          <>
            {" "}
            <Box
              component="div"
              sx={{ display: "flex", flexDirection: "column", my: 3 }}
            >
              <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">
                  {t("Amount")}
                </InputLabel>
                <FilledInput
                  id="filled-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  type="number"
                  inputProps={{ min: 0 }}
                  onChange={handelAmountCalculation}
                />
              </FormControl>
            </Box>
            <hr />
            <Box sx={{ my: 3 }}>
              <Typography variant="p" sx={{ fontWeight: "bold", fontSize: 14 }}>
                {t("Total Amount After Pay Will be")} (Amount * 2.5% tax)
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  mt: 5,
                  color: "green",
                  fontSize: 24,
                }}
              >
                $ {amount > 0 ? addPercent(+amount) : "0"}
              </Typography>
            </Box>
          </>
        )}
        {userData.role === "freelancer" && (
          <Box sx={{ my: 3 }}>
            <Typography
              variant="p"
              sx={{ fontWeight: "bold", fontSize: 14, color: "red" }}
            >
              {t("You Can Not Withdrow Your Money unless it is greater than")}{" "}
              $50
            </Typography>
          </Box>
        )}
        <Box sx={{ my: 3, textAlign: "end" }}>
          {userData.role === "client" && (
            <Button
              disabled={!data.isActive}
              variant="contained"
              sx={{ mx: 3 }}
              color="success"
              onClick={onDepositCreditHandler}
            >
              {loading ? "Loading ..." : "Pay Now"}
            </Button>
          )}
          {data.totalMoney > 50 && userData.role === "freelancer" && (
            <Box component="div">
              <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">
                  {t("Amount")}
                </InputLabel>
                <FilledInput
                  id="filled-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  type="number"
                  min="0"
                  inputProps={{ min: 0 }}
                  onChange={handelWithdrawMony}
                />
              </FormControl>
              <Button
                disabled={!data.isActive}
                onClick={onWithdrawMony}
                variant="contained"
                color="success"
              >
                {loading ? "Loading" : "Withdraw"}
              </Button>
            </Box>
          )}
          {!data.isActive && (
            <>
              <Typography
                sx={{
                  pt: 5,
                  color: "red",
                  fontWeight: "bold",
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                {t("Your account is not Active to")}{" "}
                {userData.role === "freelancer" ? "withdraw" : "deposit"}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                {t("Feel Free To Contact us at")} : mostaql-clone@mostql.com
              </Typography>
            </>
          )}
        </Box>
      </Box>
    </Modal>
  );
}

export default ModalPayment;
