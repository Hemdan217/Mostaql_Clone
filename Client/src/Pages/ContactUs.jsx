import React from "react";
import { useTranslation } from "react-i18next";
function ContactUs() {
  const { t } = useTranslation();
  return (
    <div className="container mt-3">
      <div className="row col-md-12 justify-content-center grid gap-4">
        <div className="col-md-4" style={{ backgroundColor: "#F7FAF7" }}>
          <h3 className="my-3 text-break">{t("Customer Support")}</h3>
          <a href="#" className="text-break">
            {t("Visit Help Center")}
          </a>
        </div>
        <div className="col-md-4" style={{ backgroundColor: "#F7FAF7" }}>
          <h3 className="my-3 text-break">{t("Enterprise Solutions")}</h3>
          <a href="#" className="text-break">
            886.548.447
          </a>
        </div>
      </div>
      <div className="row col-md-12 justify-content-center grid gap-4 pt-4">
        <div className="col-md-4" style={{ backgroundColor: "#F7FAF7" }}>
          <h3 className="my-3 text-break">{t("Press Inquiries")}</h3>
          <a href="#" className="text-break">
            Press@Mostaql.com
          </a>
        </div>
        <div className="col-md-4 text-end" />
      </div>
      <div className="row col-md-12 justify-content-center grid gap-4 mb-2">
        <div className="col-md-4">
          <h3 className="mt-5 text-break">{t("Our Offices")}</h3>
        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="row col-md-12 justify-content-center mb-4 px-0">
        <div className="col-md-4 px-0">
          <img src="/images/map.jpeg" className="img-fluid" alt="..." />
        </div>
        <div className="col-md-4 p-4" style={{ backgroundColor: "#F7FAF7" }}>
          <h3 className="my-3 text-break">{t("Global HQ")}</h3>
          <p className="text-break">
            475 Brannan St. Suite 430 San Francisco CA 94107 Phone: (650)
            316-7500
          </p>
        </div>
      </div>
      <div className="row col-md-12 justify-content-center mb-4 px-0">
        <div className="col-md-4 px-0">
          <img src="/images/map.jpeg" className="img-fluid" alt="..." />
        </div>
        <div className="col-md-4 p-4" style={{ backgroundColor: "#F7FAF7" }}>
          <h3 className="my-3 text-break">Chicago Office</h3>
          <p className="text-break">
            525 W. Van Buren Suite 1100 Chicago IL 60607
          </p>
        </div>
      </div>
      <div className="row col-md-12 justify-content-center mb-4 px-0">
        <div className="col-md-4 px-0">
          <img src="/images/map.jpeg" className="img-fluid" alt="..." />
        </div>
        <div className="col-md-4 p-4" style={{ backgroundColor: "#F7FAF7" }}>
          <h3 className="my-3 text-break">Mailing Address</h3>
          <p className="text-break">
            655 Montgomery St. Suite 490 Dept. 17022 San Francisco CA 94111-2676
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
