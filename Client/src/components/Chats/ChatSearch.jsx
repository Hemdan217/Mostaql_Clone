import React from "react";
import { useTranslation } from "react-i18next";

const ChatSearch = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="col-md-3">
        <div className="col-xs-12  input__wrapper ">
          <div className="form-group ">
            <label forhtml="project__keyword">{t("Search")}</label>
            <input
              className="form-control"
              id="keyword__title"
              data-filter="keyword"
              maxLength="50"
              name="keyword"
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSearch;
