import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

function PortfolioCard() {
  const { t } = useTranslation();

  return (
<div className="col-sm-12 col-md-4">
  {/*Start Card Profile*/}
  <div className="card border-0 mt-3">
    <div className="card-body">
      <div className="image text-center mt-3">
        <p><Link to="/myportfolio" className="text-dark fs-4">{t("My Portfolio")}</Link></p>
        <p className="text-dark fs-4">3</p>
        <hr />
        <div className="d-flex justify-content-center align-items-center">
          <p>
            <Link to="/add-portfolio" className="text-dark fw-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 24 24">
                <path fill="currentColor" d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z" />
              </svg> <span>{t("add Work")}</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default PortfolioCard