import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
const ProjectInfo = ({ chat, role }) => {
  const { projectId, freelancerId, clientId, lastMessage, updatedAt, _id } =
    chat;
  return (
    <>
      <div
        className="p-4 mb-2"
        style={{
          background:
            lastMessage.read || lastMessage.sender === role
              ? "white"
              : "antiquewhite",
        }}
      >
        <h3>
          <Link to={`/chats/${_id}`}>{projectId.title}</Link>
        </h3>
        <p>
          {lastMessage.sender == role
            ? `You : ${lastMessage.content} `
            : role == "client"
            ? `${freelancerId.firstName} ${freelancerId.lastName} :  ${lastMessage.content} `
            : `${clientId.firstName} ${clientId.lastName} :  ${lastMessage.content} `}
          <span className="opacity-50">
            {moment(new Date(updatedAt)).fromNow()}
          </span>
        </p>
      </div>
    </>
  );
};

export default ProjectInfo;
