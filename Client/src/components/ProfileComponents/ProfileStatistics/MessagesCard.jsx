import React from "react";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

function MessagesCard() {
  const { t } = useTranslation();
  const { messages } = useLoaderData();

  return (
    <div className="col-sm-12 col-md-4">
      {/*Start Card Profile*/}
      <div className="card border-0 mt-3">
        <div className="card-body">
          <Link to="/chats">
            <div className="image text-center mt-3">
              <p className="text-dark fs-4">{t("Unread Messages")}</p>
              <hr />
              <div className="d-flex justify-content-around align-items-center">
                <p className="text-dark fw-bold">
                  {t("Received")}{" "}
                  <span className="d-block">{messages.count}</span>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MessagesCard;
