import React, { useEffect, useState } from "react";
import FreelancerRegister from "../components/AuthComponents/FreelancerRegister";
import ClientRegister from "../components/AuthComponents/ClientRegister";
// import ClientRegister from "../components/AuthComponents/ClientRegister";
import { useTranslation } from "react-i18next";

function Register() {
  const [client, setClient] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Mostaql Clone | Register";
  }, []);
  return (
    <>
      {/* Choose Type */}
      {!client && (
        <div
          className="d-flex flex-column  align-items-center justify-content-center"
          style={{ height: "80vh" }}
        >
          <h1>{t("Please Choose Type of Registeration")}</h1>
          <button
            onClick={() => setClient("client")}
            className="btn btn-danger p-3 mb-2"
          >
            {t("Do You Want To be A Client")}
          </button>
          <button
            onClick={() => setClient("freelancer")}
            className="btn btn-dark p-3"
          >
            {t("Do You Want To be A Freelancer")}
          </button>
        </div>
      )}

      {/* Freelancer Form */}
      {client === "freelancer" && <FreelancerRegister t={t} />}
      {/* Client Form */}
      {client === "client" && <ClientRegister t={t} />}
    </>
  );
}

export default Register;
