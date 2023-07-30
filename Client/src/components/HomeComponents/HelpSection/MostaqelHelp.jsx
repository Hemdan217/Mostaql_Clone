import React from "react";

function MostaqelHelp({ t }) {
  return (
    <section id="mostaqel-help" data-aos="fade-right" data-aos-delay="20">
      <div className="container">
        <h1 className="fw-bold fs-3 text-center mb-5 text-primary">
          {t("Rights And The Quality Of Your Business ?")}
        </h1>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="p-2">
              <h3 className="fs-4 fw-semibold">
                {t("Professional freelancers")}
              </h3>
              <p className="fw-normal fs-p2 text-p">
                {t(
                  "Work with independent experts in all fields you are looking for with personal data and documented identities."
                )}
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="p-2">
              <h3 className="fs-4 fw-semibold">{t("Integrated profiles")}</h3>
              <p className="fw-normal fs-p2 text-p ">
                {t(
                  "Personal files for freelancers showing their work and previous evaluations, an overview of their most important experiences and skills."
                )}
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="p-2">
              <h3 className="fs-4 fw-semibold">{t("Advance communication")}</h3>
              <p className="fw-normal fs-p2 text-p ">
                {t(
                  "Connect with freelancers via conversations to negotiate and clarify the agreement before hiring."
                )}
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="p-2 ">
              <h3 className="fs-4 fw-semibold">
                {t("Save your financial rights")}
              </h3>
              <p className="fw-normal fs-p2 text-p ">
                {t(
                  "The value of the transaction remains in the balance of your account on an independent site until you receive the project yourself."
                )}
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="p-2 ">
              <h3 className="fs-4 fw-semibold">{t("Guarantee of rights")}</h3>
              <p className="fw-normal fs-p2 text-p ">
                {t(
                  "HFull refund of the project value if you do not receive the agreed work."
                )}
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="p-2 ">
              <h3 className="fs-4 fw-semibold">{t("Support and help")}</h3>
              <p className="fw-normal fs-p2 text-p ">
                {t(
                  "Our team is available to assist you around the clock at all stages of the project."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MostaqelHelp;
