import React from "react";
import { Link } from "react-router-dom";

function Ready({ t }) {
  return (
    <section
      id="ready"
      data-aos="zoom-in-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="400"
    >
      <div className="container">
        <h1 className="fw-bold fs-3 text-white text-center mb-5">
          {t("Are You Ready ?")}
        </h1>
        <div className="d-flex justify-content-center mt-5">
          <Link
            to="projects"
            className="btn py-3 px-5 bg-white text-primary border border-white"
          >
            {t("Start Your Project Now")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Ready;
