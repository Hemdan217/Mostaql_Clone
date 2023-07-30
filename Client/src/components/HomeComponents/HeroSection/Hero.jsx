import React from "react";
import { Link } from "react-router-dom";

function Hero({ t }) {
  return (
    <section id="hero">
      {/* OverLay */}
      <div className="overlay" />
      <div className="container">
        {/* HeroContent */}
        <div className="hero-content">
          {/* UpperContent */}
          <div className="hero-content__header text-center">
            <h3 className="fw-bold fs-1 fs-md-3">
              {t("Mostaqel to get your business done remotely")}
            </h3>
            <p>
              {t(
                "Complete your projects easily and safely through the largest freelancing platform in the Arab world"
              )}
            </p>
            {/* ForMobileOnly */}
            <a
              role="btn"
              className="btn p-3 d-sm-none rounded bg-primary text-white"
            >
              {t("Start Your Project Now")}
            </a>
          </div>
          {/* Search bar For Desktop */}
          <div className="hero-content__bottom d-none d-sm-block">
            <form className="d-flex w-100">
              <input
                className="form-control"
                placeholder={t("Enter Project Here Name")}
                name="title"
              />
              <Link to='/projects' type="submit" className="btn bg-primary text-white fs-6">
                {t("Find Your Project")}
              </Link>
            </form>
          </div>
          {/* Botton Search For Job For Freelancers */}
          <div className="hero-content__botton d-flex justify-content-center mt-5">
            <Link
              to="projects"
              className="btn p-3  rounded bg-transperant border border-white "
            >
              {t("Find Job")}
            </Link>
          </div>
          {/*        Get More Info Button */}
          <div className="hero-content__more-info d-flex flex-column align-items-center justify-content-center mt-5 scale-up-center">
            <span className="mb-3 fs-6">{t("Show More")}</span>
            <a
              href="#trusted"
              className="btn  rounded bg-transperant border border-white text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 6.41L16.59 5L12 9.58L7.41 5L6 6.41l6 6z"
                />
                <path
                  fill="currentColor"
                  d="m18 13l-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
