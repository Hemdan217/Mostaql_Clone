import React from "react";
import { Link } from "react-router-dom";

function Freelancers({ t }) {
  return (
    <section
      id="freelancers"
      data-aos="fade-left"
      data-aos-anchor-placement="top-center"
      data-aos-duration="400"
    >
      <div className="container">
        <h1 className="fw-bold fs-3 text-center mb-3 text-primary">
          {t("Find Freelancers ?")}
        </h1>
        <p className="fw-normal text-center fs-p2 text-p">
          {t("Cover Your Needs")}
        </p>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <Link to="projects" className="btn-project">
              <div className="text-center p-2">
                <div className="thumb mb-3">
                  <img
                    src="https://api.iconify.design/ant-design:team-outlined.svg"
                    className="rounded  mx-auto w-15"
                    alt="clients"
                  />
                </div>
                <h3 className="fs-4">
                  {t("Consulting and management business and services")}
                </h3>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link to="projects" className="btn-project">
              <div className="text-center p-2">
                <div className="thumb mb-3">
                  <img
                    src="https://api.iconify.design/iconoir:code.svg"
                    className="rounded  mx-auto w-15"
                    alt="coding"
                  />
                </div>
                <h3 className="fs-4">
                  {t("Development And Coding, Programmers, Apps")}
                </h3>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link to="projects" className="btn-project">
              <div className="text-center p-2">
                <div className="thumb mb-3">
                  <img
                    src="https://api.iconify.design/clarity:settings-outline-alerted.svg"
                    className="rounded  mx-auto w-15"
                    alt="noun-settings"
                  />
                </div>
                <h3 className="fs-4">
                  {t("Engineering, architecture and interior design")}
                </h3>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link to="projects" className="btn-project">
              <div className="text-center p-2 ">
                <div className="thumb mb-3">
                  <img
                    src="https://api.iconify.design/material-symbols:video-settings-sharp.svg"
                    className="rounded  mx-auto w-15"
                    alt="movies"
                  />
                </div>
                <h3 className="fs-4">{t("Video Editing, Editor")}</h3>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link to="projects" className="btn-project">
              <div className="text-center p-2 ">
                <div className="thumb mb-3">
                  <img
                    src="https://mostaql.hsoubcdn.com/public/assets/images/landing/mostaql-categories/line-graph.svg"
                    className="rounded  mx-auto w-15"
                    alt="line-graph"
                  />
                </div>
                <h3 className="fs-4">{t("Marketing, And Selles")}</h3>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link to="projects" className="btn-project">
              <div className="text-center p-2 ">
                <div className="thumb mb-3">
                  <img
                    src="https://mostaql.hsoubcdn.com/public/assets/images/landing/mostaql-categories/document.svg"
                    className="rounded  mx-auto w-15"
                    alt="document"
                  />
                </div>
                <h3 className="fs-4">{t("Write, Translate Languages")}</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Freelancers;
