import React, { createContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// 1) Create a new context
const langContext = createContext();
const UseContextProvider = ({ children }) => {
  const initialLang = localStorage.getItem("lang")
    ? localStorage.getItem("lang")
    : "en";
  const { t, i18n } = useTranslation();

  const [lang, setLang] = useState(initialLang);

  //-update data in context
  useEffect(() => {
    i18n.changeLanguage(initialLang);
    document.title = t(document.title);
  }, []);
  const changeLang = () => {
    const newValue = localStorage.getItem("lang") == "en" ? "ar" : "en";
    setLang(newValue);
    localStorage.setItem("lang", newValue);

    i18n.changeLanguage(newValue);
    document.title = t(document.title);
  };
  //2-create provider
  return (
    <langContext.Provider value={{ lang, changeLang }}>
      {children}
    </langContext.Provider>
  );
};

export { UseContextProvider, langContext };
