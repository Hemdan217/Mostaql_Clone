import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store/AuthSlice/authSlice";
import { langContext } from "./contextAPI/context.jsx";
import { useContext } from "react";

import RootLayout from "./components/Layout/RootLayout";
import Footer from "./components/Footer/Footer";
import NavigationMUI from "./components/Navigation/NavigationMUI";
import { useTranslation } from "react-i18next";
function App() {
  const { isAuth } = useSelector((state) => state.authSlice);
  const { t } = useTranslation();
  const { lang } = useContext(langContext);
  const theLocation = useLocation();
  const currentLocation = theLocation.pathname.split("/")[1];
  useEffect(() => {
    document.title = t(`Mostaql Clone | 
        ${currentLocation[0]?.toUpperCase()}${currentLocation?.slice(1)}`);
  }, [currentLocation]);
  useEffect(() => {
    document.title = t(document.title);
  }, [lang]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.checkUserToken());
  }, []);

  return (
    <div dir={lang == "en" ? "ltr" : "rtl"}>
      <RootLayout>
        <NavigationMUI />
        <div>
          <Outlet />
        </div>
        <Footer />
      </RootLayout>
    </div>
  );
}

export default App;
