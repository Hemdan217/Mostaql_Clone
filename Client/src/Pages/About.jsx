import React from "react";
import { useTranslation } from "react-i18next";
function About() {
  const { t } = useTranslation();
  return (
    <div className="container" style={{ height: "80vh" }}>
      <div className="row">
        <div className="col-md-12 mt-5 mb-3">
          <h3>{t("About Mostaqel - Clone")}</h3>
        </div>
        <div
          className="col-md-12 p-4"
          style={{ backgroundColor: "rgb(255, 255, 255)" }}
        >
          <h4 className="fw-bold fs-3">
            {t("Mostaql is the biggest freelancing platform in the arab world")}
          </h4>
          <p className="text-p">
            {t(
              "Freelancers connect companies and owners of small and medium-sized projects with the best projects and professional events. Prepare for your project suitable for work in the field of work. It guarantees you an independent platform as a project owner or, as it acts as an independent mediator between the two parties in the delivery of the work in full."
            )}
          </p>
        </div>
        <div
          className="col-md-12 p-4"
          style={{ backgroundColor: "rgb(255, 255, 255)" }}
        >
          <h4 className="mt-5 fw-bold mb-2">{t("About Mostaql")}</h4>
          <p className="text-p">
            {t(
              "Freelancers connect companies and owners of small and medium-sized projects with the best projects and professional events. Prepare for your project suitable for work in the field of work."
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
