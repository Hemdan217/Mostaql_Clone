import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";


function Navigationbar() {
  const { t } = useTranslation();

  return (
<nav className="navbar navbar-expand-lg bg-primary" id="nav">
  <div className="container">
    <NavLink className="navbar-brand text-white" to="/">{t("Mostaqel")}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
        <path fill="#fff" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav text-center">
        <li className="nav-item px-1">
          <NavLink className="nav-link text-white py-2 px-3" aria-current="page" to="/">{t("Home")}</NavLink>
        </li>
        <li className="nav-item px-1">
          <NavLink className="nav-link text-white py-2 px-3" aria-current="page" to="projects.html">{t("Find Project")}</NavLink>
        </li>
        <li className="nav-item px-1">
          <NavLink className="nav-link text-white py-2 px-3" aria-current="page" to="contact">{t("Contact Us")}</NavLink>
        </li>
        <li className="nav-item px-1">
          <NavLink className="nav-link text-white py-2 px-3" aria-current="page" to="about">{t("About Us")}</NavLink>
        </li>
        <li className="nav-item px-1">
          <NavLink className="nav-link text-white border border-1 py-2 px-3" aria-current="page" to="login">
            {t("Login")}
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
              <path fill="currentColor" d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5l-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z" />
            </svg>
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navigationbar