import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/AuthSlice/authSlice";
import ImageGeneration from "../UI_Helpers/ImageGeneration";
import { useTranslation } from "react-i18next";

function AuthNavigation() {
  const { t } = useTranslation();

  const dispatch = useDispatch()
  const {userData} = useSelector((state)=>state.authSlice)
  const onLogoutHandler = useCallback(()=>{
    dispatch(authActions.logoutHandler())
  },[])
  return (
    <>
      {/* -Navigation Draw Mobile */}
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title text-primary"
            id="offcanvasWithBothOptionsLabel"
          >
            {t("Mostaqel Clone")}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <div className="justify-content-end">
            <ul className="navbar-nav text-center align-items-start">
              <li className="nav-item w-100 px-1">
                <Link
                  className="nav-link text-start py-2 px-3"
                  aria-current="page"
                  to="project/add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={17}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"
                    />
                  </svg>
                  {t("Add Project")}
                </Link>
              </li>
              <li className="nav-item w-100 px-1">
                <Link
                  className="nav-link text-start py-2 px-3"
                  aria-current="page"
                  to="projects"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={17}
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M15.5 7a2.5 2.5 0 0 1 2.495 2.335l.006.164v6a2.5 2.5 0 0 1-2.336 2.495l-.164.005h-6a2.5 2.5 0 0 1-2.495-2.336l-.005-.164v-6a2.5 2.5 0 0 1 2.336-2.495L9.5 7h6Zm0 1H9.502a1.5 1.5 0 0 0-1.493 1.355l-.007.144v6a1.5 1.5 0 0 0 1.356 1.493l.144.007h6a1.5 1.5 0 0 0 1.493-1.356L17 15.5v-6a1.5 1.5 0 0 0-1.356-1.493L15.5 8Zm-2.999 1a.5.5 0 0 1 .492.41L13 9.5v2.498h2.501a.5.5 0 0 1 .09.992l-.09.008H13l.001 2.5a.5.5 0 0 1-.992.09l-.008-.09L12 13H9.501a.5.5 0 0 1-.09-.992l.09-.008H12l.001-2.5a.5.5 0 0 1 .5-.5Zm.162-5.306l.048.158l.575 2.147H12.25l-.505-1.889a1.5 1.5 0 0 0-1.696-1.091l-.141.03l-5.796 1.554a1.5 1.5 0 0 0-1.091 1.695l.03.142l1.554 5.795A1.5 1.5 0 0 0 6 13.346v1a2.502 2.502 0 0 1-2.31-1.682l-.052-.17l-1.553-5.795a2.5 2.5 0 0 1 1.61-3.015l.158-.047l5.795-1.553a2.5 2.5 0 0 1 2.957 1.458l.057.152Z"
                    />
                  </svg>
                  {t("Find Project")}
                </Link>
              </li>
              <li className="nav-item w-100 px-1">
                <Link
                  className="nav-link text-start py-2 px-3"
                  aria-current="page"
                  to="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={17}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9l-7 7.02z"
                    />
                    <circle cx="6.5" cy="6.5" r="1.5" fill="currentColor" />
                  </svg>
                  {t("My Offers")}
                </Link>
              </li>
              <li className="nav-item w-100 px-1">
                <Link
                  className="nav-link text-start py-2 px-3"
                  aria-current="page"
                  to="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={17}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6 22q-.825 0-1.413-.588T4 20V8q0-.825.588-1.413T6 6h2q0-1.65 1.175-2.825T12 2q1.65 0 2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.588 1.413T18 22H6Zm0-2h12V8h-2v2q0 .425-.288.713T15 11q-.425 0-.713-.288T14 10V8h-4v2q0 .425-.288.713T9 11q-.425 0-.713-.288T8 10V8H6v12Zm4-14h4q0-.825-.588-1.413T12 4q-.825 0-1.413.588T10 6ZM6 20V8v12Z"
                    />
                  </svg>
                  {t("Portfolio")}
                </Link>
              </li>
              <li className="nav-item w-100 px-1">
                <Link
                  className="nav-link text-start py-2 px-3"
                  aria-current="page"
                  to={{pathname:`/profile/statistics/${userData.id}`}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M9.775 12q-.9 0-1.5-.675T7.8 9.75l.325-2.45q.2-1.425 1.3-2.363T12 4q1.475 0 2.575.938t1.3 2.362l.325 2.45q.125.9-.475 1.575t-1.5.675h-4.45Zm0-2h4.45L13.9 7.6q-.1-.7-.637-1.15T12 6q-.725 0-1.263.45T10.1 7.6L9.775 10ZM12 10ZM4 20v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Zm2-2h12v-.8q0-.275-.138-.5t-.362-.35q-1.35-.675-2.725-1.012T12 15q-1.4 0-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2v.8Zm6 0Z"
                    />
                  </svg>
                  {t("Profile")}
                </Link>
              </li>
              <li className="nav-item w-100 px-1">
                <button
                  className="nav-link d-block w-100 text-start py-2 px-3"
                  aria-current="page"
                  onClick={onLogoutHandler}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={17}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h7v2H5v14h7v2H5Zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5l-5 5Z"
                    />
                  </svg>
                  {t("Logout")}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* -END Navigation Draw Mobile */}
      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg bg-primary" id="nav">
        <div className="container">
          <Link className="navbar-brand text-white" to={`profile/statistics/${userData.id}`}>
            {t("Mostaqel")}
          </Link>
          {/*Desktop Navigation*/}
          <div className="navigation d-flex align-items-center">
            <div className="justify-content-end d-lg-flex w-100 d-none">
              <ul className="navbar-nav text-end align-items-start">
                <li className="nav-item px-1">
                  <Link
                    className="nav-link text-white py-2 px-3"
                    aria-current="page"
                    to="project/add"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={17}
                      height={17}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"
                      />
                    </svg>
                    {t("Add Project")}
                  </Link>
                </li>
                <li className="nav-item px-1">
                  <Link
                    className="nav-link text-white py-2 px-3"
                    aria-current="page"
                    to="projects"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={17}
                      height={17}
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="M15.5 7a2.5 2.5 0 0 1 2.495 2.335l.006.164v6a2.5 2.5 0 0 1-2.336 2.495l-.164.005h-6a2.5 2.5 0 0 1-2.495-2.336l-.005-.164v-6a2.5 2.5 0 0 1 2.336-2.495L9.5 7h6Zm0 1H9.502a1.5 1.5 0 0 0-1.493 1.355l-.007.144v6a1.5 1.5 0 0 0 1.356 1.493l.144.007h6a1.5 1.5 0 0 0 1.493-1.356L17 15.5v-6a1.5 1.5 0 0 0-1.356-1.493L15.5 8Zm-2.999 1a.5.5 0 0 1 .492.41L13 9.5v2.498h2.501a.5.5 0 0 1 .09.992l-.09.008H13l.001 2.5a.5.5 0 0 1-.992.09l-.008-.09L12 13H9.501a.5.5 0 0 1-.09-.992l.09-.008H12l.001-2.5a.5.5 0 0 1 .5-.5Zm.162-5.306l.048.158l.575 2.147H12.25l-.505-1.889a1.5 1.5 0 0 0-1.696-1.091l-.141.03l-5.796 1.554a1.5 1.5 0 0 0-1.091 1.695l.03.142l1.554 5.795A1.5 1.5 0 0 0 6 13.346v1a2.502 2.502 0 0 1-2.31-1.682l-.052-.17l-1.553-5.795a2.5 2.5 0 0 1 1.61-3.015l.158-.047l5.795-1.553a2.5 2.5 0 0 1 2.957 1.458l.057.152Z"
                      />
                    </svg>
                    {t("Find Project")}
                  </Link>
                </li>
                <li className="nav-item px-1">
                  <Link
                    className="nav-link text-white py-2 px-3"
                    aria-current="page"
                    to="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={17}
                      height={17}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9l-7 7.02z"
                      />
                      <circle cx="6.5" cy="6.5" r="1.5" fill="currentColor" />
                    </svg>
                      {t("Find Freelancers")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="notifay d-flex align-items-center mr-3">
              {/*Drop Down Menu Notification Bell*/}
              <div className="dropdown mr-3 position-relative">
                {/*Notify Alert*/}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  9
                </span>
                <a
                  className="nav-link text-white mr-1"
                  
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#fff"
                      d="M4 19v-2h2v-7q0-2.075 1.25-3.688T10.5 4.2v-.7q0-.625.438-1.063T12 2q.625 0 1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2H4Zm8-7.5ZM12 22q-.825 0-1.413-.588T10 20h4q0 .825-.588 1.413T12 22Zm-4-5h8v-7q0-1.65-1.175-2.825T12 6q-1.65 0-2.825 1.175T8 10v7Z"
                    />
                  </svg>
                </a>
                <ul className="dropdown-menu notifay-list">
                  <li>
                    <a className="dropdown-item wrap text-wrap" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M9.775 12q-.9 0-1.5-.675T7.8 9.75l.325-2.45q.2-1.425 1.3-2.363T12 4q1.475 0 2.575.938t1.3 2.362l.325 2.45q.125.9-.475 1.575t-1.5.675h-4.45Zm0-2h4.45L13.9 7.6q-.1-.7-.637-1.15T12 6q-.725 0-1.263.45T10.1 7.6L9.775 10ZM12 10ZM4 20v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Zm2-2h12v-.8q0-.275-.138-.5t-.362-.35q-1.35-.675-2.725-1.012T12 15q-1.4 0-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2v.8Zm6 0Z"
                        />
                      </svg>
                      <span className="text-primary">
                        Khaled Ahmed Has Invited You
                      </span>
                      Looking For PHP Developer To Working with me in a big
                      Project
                      <div className="project-item mt-1">
                        <div className="d-flex align-items-center">
                          <span className="fs-p1 text-secondary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={17}
                              height={17}
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="m22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86L2 5.71l1.29 1.53l4.59-3.85zM12.5 8H11v6l4.75 2.85l.75-1.23l-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z"
                              />
                            </svg>
                            2 Hours Ago
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item wrap text-wrap" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M9.775 12q-.9 0-1.5-.675T7.8 9.75l.325-2.45q.2-1.425 1.3-2.363T12 4q1.475 0 2.575.938t1.3 2.362l.325 2.45q.125.9-.475 1.575t-1.5.675h-4.45Zm0-2h4.45L13.9 7.6q-.1-.7-.637-1.15T12 6q-.725 0-1.263.45T10.1 7.6L9.775 10ZM12 10ZM4 20v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Zm2-2h12v-.8q0-.275-.138-.5t-.362-.35q-1.35-.675-2.725-1.012T12 15q-1.4 0-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2v.8Zm6 0Z"
                        />
                      </svg>
                      <span className="text-primary">
                        Abdallah Muhammed Has Invited You
                      </span>
                      Looking For Wordpress Developer
                      <div className="project-item mt-1">
                        <div className="d-flex align-items-center">
                          <span className="fs-p1 text-secondary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={17}
                              height={17}
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="m22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86L2 5.71l1.29 1.53l4.59-3.85zM12.5 8H11v6l4.75 2.85l.75-1.23l-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z"
                              />
                            </svg>
                            2 Hours Ago
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </div>
              {/*Drop Down Menu Notification Massage*/}
              <div className={` dropdown mr-1 position-relative`}>
                {/*Notify Alert*/}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  3
                </span>
                <a
                  className="nav-link text-white mr-1 "
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4ZM20 8l-7.475 4.675q-.125.075-.263.113t-.262.037q-.125 0-.263-.037t-.262-.113L4 8v10h16V8Zm-8 3l8-5H4l8 5ZM4 8v.25v-1.475v.025V6v.8v-.012V8.25V8v10V8Z"
                    />
                  </svg>
                </a>
                <ul className="dropdown-menu  notifay-list">
                  <li>
                    <a className="dropdown-item wrap text-wrap" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M9.775 12q-.9 0-1.5-.675T7.8 9.75l.325-2.45q.2-1.425 1.3-2.363T12 4q1.475 0 2.575.938t1.3 2.362l.325 2.45q.125.9-.475 1.575t-1.5.675h-4.45Zm0-2h4.45L13.9 7.6q-.1-.7-.637-1.15T12 6q-.725 0-1.263.45T10.1 7.6L9.775 10ZM12 10ZM4 20v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Zm2-2h12v-.8q0-.275-.138-.5t-.362-.35q-1.35-.675-2.725-1.012T12 15q-1.4 0-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2v.8Zm6 0Z"
                        />
                      </svg>
                      <span className="text-primary">
                        Khaled Ahmed Massaged You
                      </span>
                      About PHP Project
                      <div className="project-item mt-1">
                        <div className="d-flex align-items-center">
                          <span className="fs-p1 text-secondary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={17}
                              height={17}
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="m22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86L2 5.71l1.29 1.53l4.59-3.85zM12.5 8H11v6l4.75 2.85l.75-1.23l-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z"
                              />
                            </svg>
                            2 Hours Ago
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </div>
              <button
                className="btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                <span className="text-white fs-6">{userData.username}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* End Main Navigation */}
    </>
  );
}

export default AuthNavigation;
