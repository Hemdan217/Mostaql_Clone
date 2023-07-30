import React, { useState, useEffect } from "react";
import { fetchOffers } from "./helper.js";
import moment from "moment";
import dateFormat from "dateformat";
import Paper from "@mui/material/Paper";
import FreelancerOffer from "./FreelancerOffer";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";

const ProjectOffers = (props) => {
  const [offers, setOffers] = useState([]);

  const { t } = useTranslation();
  let { id, isOwner, status, winningOffer, numOffers, title, setStatus } =
    props;
  useEffect(() => {
    fetchOffers(setOffers);
  }, []);
  return (
    <>
      <div className="bg-gray  mt-2">
        <h5 className="fw-bold mt-4">{t("Offers Details")}</h5>
        {!numOffers && <p className="mt-4">{t("No Offers Yet!")}</p>}

        {offers.map((offer) => {
          return (
            <FreelancerOffer
              offer={offer}
              key={offer.createdAt}
              isOwner={isOwner}
              status={status}
              winningOffer={winningOffer}
              title={title}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProjectOffers;
// <div
//   className="single-offer border-bottom mb-2 p-4"
//   key={offer._id}
// >
//   <div className="w-100">
//     <div className="freelancer-details card mb-3 border-0 w-50">
//       <div className="row g-0">
//         <div className="col-sm-2 pe-3">
//           <img
//             src="https://placehold.co/400x400"
//             className="img-fluid rounded-circle w-100"
//             alt="..."
//           />
//         </div>
//         <div className="col-sm-10">
//           <div className="card-body p-0">
// <div className="freelancer-name h6 mb-0">
//   {offer.freelancerId.firstName}{" "}
//   {offer.freelancerId.lastName}
// </div>
//             <p className="freelancer-info  opacity-50 mt-1 d-inline">
//               <i className="fa-sharp fa-solid fa-briefcase"></i>
//               {offer.freelancerId.jobTitle}{" "}
//             </p>
//             <p className=" freelancer-info card-text opacity-50 mt-1">
//               <i className=" fa-sharp fa-solid fa-timer"></i>
//               Last updated {dateFormat(new Date(offer.updatedAt))}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="offer-desc">{offer.description}</div>
// </div>;
