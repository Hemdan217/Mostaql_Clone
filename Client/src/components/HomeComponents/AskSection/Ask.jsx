import React from "react";

function Ask({ t }) {
  return (
    <section id="ask">
      <div className="container">
        <h1 className="fw-bold fs-3 text-center mb-5 text-primary">
          {t("Common Questions")}
        </h1>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="accordion" id="accordionPanels-faq">
              <div className="accordion-item">
                <h2 className="accordion-header" id="faq-1">
                  <button
                    className="accordion-button fw-bold fs-5 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-faq-1"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-faq-1"
                  >
                    {t("What is Mostaqel Clone")}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-faq-1"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-1"
                >
                  <div className="accordion-body">
                    {t(
                      "Freelancer is an Arabic platform that allows project owners and companies to contract with professional freelancers to carry out their work, and at the same time provides professional freelancers a place to find projects to work on and earn through."
                    )}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faq-2">
                  <button
                    className="accordion-button fw-bold fs-5 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-faq-2"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-faq-2"
                  >
                    {t("How do I benefit from it?")}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-faq-2"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-2"
                >
                  <div className="accordion-body">
                    {t(
                      "In an independent platform, you can add your project, such as creating a website or mobile application, or even designing a logo, and receive offers from professional freelancers interested in working on it, to compare offers and choose the best one, then hire the freelancer with the best offer and follow up with him until the completion of your project implementation. You can also search for yourself. The best freelancers and offer them your project directly to work on it."
                    )}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faq-3">
                  <button
                    className="accordion-button fw-bold fs-5 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-faq-3"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-faq-3"
                  >
                    {t("How does an independent website guarantee my rights?")}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-faq-3"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-3"
                >
                  <div className="accordion-body">
                    {t(
                      "An independent site that guarantees you your financial rights completely, so there is no need for any worries. Be assured when creating any new projects or submitting your offers on the projects presented on the site, where an independent site plays the role of mediator between the owner of the project and the freelancer and protects the financial rights of both parties in the event of compliance with the terms of an independent site Warranty terms and agreement spell out completely."
                    )}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faq-4">
                  <button
                    className="accordion-button fw-bold fs-5 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-faq-4"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-faq-4"
                  >
                    {t("What areas can I hire remote freelancers?")}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-faq-4"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-4"
                >
                  <div className="accordion-body">
                    {t(
                      "Companies resort to hiring remote workers in various disciplines, including but not limited to workers in the field of programming, text editing, e-marketing, design and advertising, translation, data entry, article writing, some online public relations work, web design and management. Websites, market studies and analyzes, and other disciplines."
                    )}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faq-5">
                  <button
                    className="accordion-button fw-bold fs-5 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-faq-5"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-faq-5"
                  >
                    {t(
                      "What will happen after publishing your project on a freelancer?"
                    )}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-faq-5"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-5"
                >
                  <div className="accordion-body">
                    {t(
                      "After your project is published, it will remain pending review by freelance technical support. After that, it will either be approved, and you will receive a notice of approval, and then the project will appear to all freelancers to submit their offers on it, or it will be rejected with a mention of the reasons that led to that in order for you to amend it and send it again for review and acceptance."
                    )}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faq-6">
                  <button
                    className="accordion-button fw-bold fs-5 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-faq-6"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-faq-6"
                  >
                    {t(
                      "Why is remote hiring via freelance the best option for me?"
                    )}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-faq-6"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-6"
                >
                  <div className="accordion-body">
                    {t(
                      "In recent years, the remote employment system has spread globally, as many companies and institutions - as well as individuals - resort to hiring individuals who work remotely from home or anywhere in the world via the Internet. Remote hiring does not recognize the existence of geographical borders; You can hire talented and creative freelancers from all over the world, so that each one of them works from his favorite place with complete comfort, and at the times that he sets for himself; Thus, employees will have all the factors driving production, and companies will have advantages, including low cost and saving a large part of money with increased productivity, in addition to physical and psychological comfort."
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ask;
