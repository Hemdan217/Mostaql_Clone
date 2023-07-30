import React from "react";
import { Navigate, Route, createBrowserRouter } from "react-router-dom";
import LoadingSpinner from "../components/UI_Helpers/LoadingSpinner";
import App from "../App";
import Error404 from "../Pages/Error404";
//Portfolio Page
const DisplayProfileDetails = React.lazy(() =>
  import("../Pages/DisplayFreelancers")
);

import { isAuthGuard } from "./PrivateRoute";

//LAZY
const HomePage = React.lazy(() => import("../Pages/Home"));
const LoginPage = React.lazy(() => import("../Pages/Login"));
const RegisterPage = React.lazy(() => import("../Pages/Register"));
const ProfileStatistics = React.lazy(() =>
  import("../Pages/ProfileStatistics")
);
const EditPage = React.lazy(() => import("../Pages/EditProfile"));
const AboutPage = React.lazy(() => import("../Pages/About"));
const ContactUsPage = React.lazy(() => import("../Pages/ContactUs"));

const AllProject = React.lazy(() => import("../Pages/ProjectsList"));
const AddProject = React.lazy(() => import("../Pages/addProject"));
//Project Details Page
const ProjectDetails = React.lazy(() =>
  import("../components/ProjectDetails/ProjectDetails.jsx")
);
const FreelancerOffers = React.lazy(() =>
  import("../components/FreelancerOffers/FreelancerOffers.jsx")
);

const ChatsPage = React.lazy(() => import("../components/Chats/ChatsPage.jsx"));
const ChatDetails = React.lazy(() =>
  import("../components/ChatDetails/ChatDetails.jsx")
);

const PaymentPage = React.lazy(() => import("../Pages/Payment"));
const ThankYou = React.lazy(() => import("../Pages/ThankYou"));
const Notifications = React.lazy(() => import("../Pages/Notifications.jsx"));
const VerifyCodePage = React.lazy(() => import("../Pages/VerifyCode"));

//LOADERS
import { httpRegisterFreelancerLoader } from "../ReactRouterHelpers/httpRegisterFreelancerLoader";
import { getUserByIdLoader } from "../components/ProfileComponents/EditProfile/getUserByIdLoader";
import { addProjectLoader } from "../ReactRouterHelpers/addProjectLoader";
import { getNotifications } from "../ReactRouterHelpers/getNotifications.js";
import { getUserStatisticsById } from "../components/ProfileComponents/ProfileStatistics/getProfileStatistics";
import { getFreelancerProfilePage } from "../ReactRouterHelpers/getFreelancerDetails";
import { getClientsProfileDetails } from "../ReactRouterHelpers/getClientsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <HomePage />
          </React.Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <AboutPage />
          </React.Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <ContactUsPage />
          </React.Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            {!isAuthGuard() ? <LoginPage /> : <Navigate to="/" />}
          </React.Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            {!isAuthGuard() ? <RegisterPage /> : <Navigate to="/" />}
          </React.Suspense>
        ),
        loader: httpRegisterFreelancerLoader,
      },
      {
        path: "profile/statistics/:userId",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            {isAuthGuard() ? <ProfileStatistics /> : <Navigate to="login" />}
          </React.Suspense>
        ),
        loader: getUserStatisticsById,
      },
      {
        path: "profile/edit/:userId",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            {isAuthGuard() ? <EditPage /> : <Navigate to="/login" />}
          </React.Suspense>
        ),
        loader: getUserByIdLoader,
      },
      {
        path: "projects",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <AllProject />
          </React.Suspense>
        ),
      },
      {
        path: "add-projects",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            {isAuthGuard() ? <AddProject /> : <Navigate to="/login" />}
          </React.Suspense>
        ),
        loader: addProjectLoader,
      },
      {
        path: "projects/:projectId",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <ProjectDetails />
          </React.Suspense>
        ),
      },
      {
        path: "myoffers",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            {isAuthGuard() ? <FreelancerOffers /> : <Navigate to="/login" />}
          </React.Suspense>
        ),
      },
      {
        path: "chats",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            {isAuthGuard() ? <ChatsPage /> : <Navigate to="/login" />}
          </React.Suspense>
        ),
      },
      {
        path: "notifications",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            {isAuthGuard() ? <Notifications /> : <Navigate to="/login" />}
          </React.Suspense>
        ),
        loader: getNotifications,
      },
      {
        path: "chats/:chatId",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            {isAuthGuard() ? <ChatDetails /> : <Navigate to="/login" />}
          </React.Suspense>
        ),
      },
      {
        path: "freelancer/:userId",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            {isAuthGuard() ? <DisplayProfileDetails /> : <Navigate to="/login" />}
          </React.Suspense>
        ),
        loader: getFreelancerProfilePage,
      },
      {
        path: "client/:userId",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            {isAuthGuard() ? <DisplayProfileDetails /> : <Navigate to="/login" />}
          </React.Suspense>
        ),
        loader: getClientsProfileDetails,
      },
      {
        path: "/payment/:userId",
        element: (
          <React.Suspense>
            {isAuthGuard() ? <PaymentPage /> : <Navigate to="/login" />}
          </React.Suspense>
        ),
        loader: getUserByIdLoader,
      },
      {
        path: "/payment/thankYou",
        element: (
          <React.Suspense>
            {isAuthGuard() ? <ThankYou /> : <Navigate to="/login" />}
          </React.Suspense>
        ),
      },
      {
        path: "/verify-account/:freelancerId",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            {isAuthGuard() ? <VerifyCodePage /> : <Navigate to="/login" />}
          </React.Suspense>
        ),
      },
    ],
  },
]);
