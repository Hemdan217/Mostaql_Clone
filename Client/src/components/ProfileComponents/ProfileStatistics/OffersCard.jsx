import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";
import { LoadingIndecator } from "../../UI_Helpers/LoadingIndecator";
import { useTranslation } from "react-i18next";
import OffersProgressCard from "./OffersProgressCard";

function OffersCard({ numOffers, nextCharge }) {
  const { t } = useTranslation();

  const { userData } = useSelector((state) => state.authSlice);
  const [clientsProjects, setClientsProjects] = useState([]);
  const [clientsProjectsLoading, setClientsProjectsIsLoading] = useState(false);
  const { freelancersOffers } = useLoaderData();
  useEffect(() => {
    if (userData.role === "client") {
      const getClientProjects = async () => {
        setClientsProjectsIsLoading(true);
        try {
          const clientsProjects = await axios.get(
            `${import.meta.env.VITE_API_URL}/clients/${userData.id}/projects`
          );
          setClientsProjects(clientsProjects.data.project);
          setClientsProjectsIsLoading(false);
        } catch (error) {
          setClientsProjectsIsLoading(false);
          setClientsProjects([]);
        }
      };
      getClientProjects();
    }
  }, []);
  return (
    <div className="col-sm-12 col-md-8">
      <div className="card border-0 mt-3">
        <div className="card-body">
          <div className="row">
            {/*Offers Intro*/}
            <Link
              to={userData.role === "freelancer" ? "/myoffers" : "/projects"}
              className="text-dark text-center"
            >
              {userData.role === "freelancer" && (
                <>
                  <p className="fs-4">
                    {t("My Offers")}
                    <br />
                    <span>{freelancersOffers?.length}</span>
                  </p>
                  <div className="row">
                    <OffersProgressCard
                      freelancersOffers={freelancersOffers}
                      numOffers={numOffers}
                      nextCharge={nextCharge}
                    />
                  </div>
                </>
              )}
              {userData.role === "client" && (
                <div>
                  {clientsProjectsLoading && (
                    <div className="d-flex justify-content-center">
                      <LoadingIndecator />{" "}
                    </div>
                  )}
                  {!clientsProjectsLoading && (
                    <p className="fs-4">
                      {t("My Projects")}
                      <br />
                      <span>{clientsProjects.length}</span>
                    </p>
                  )}
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersCard;
