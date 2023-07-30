import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
function ProjectItemCard({project}) {
  return (
    <div className="project-item mb-3">
    <h5>
      <Link to={`/projects/${project._id}`}>
        {project.title}
      </Link>
    </h5>
    <div className="d-flex align-items-center">
      <span className="fs-p1 text-secondary mr-1">
        <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 24 24">
          <path fill="currentColor" d="M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM18 18H6v-.78c0-.38.2-.72.52-.88C7.71 15.73 9.63 15 12 15c2.37 0 4.29.73 5.48 1.34c.32.16.52.5.52.88V18zm-8.22-6h4.44c1.21 0 2.14-1.06 1.98-2.26l-.32-2.45C15.57 5.39 13.92 4 12 4S8.43 5.39 8.12 7.29L7.8 9.74c-.16 1.2.77 2.26 1.98 2.26zm.32-4.41C10.26 6.67 11.06 6 12 6s1.74.67 1.9 1.59l.32 2.41H9.78l.32-2.41z" />
        </svg>
        {project.clientId.userName}
      </span>
      <span className="fs-p1 text-secondary mr-1">
        <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 24 24">
          <path fill="currentColor" d="m22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86L2 5.71l1.29 1.53l4.59-3.85zM12.5 8H11v6l4.75 2.85l.75-1.23l-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z" />
        </svg>
        {moment(project.createdAt).startOf("hour").fromNow()}
      </span>
    </div>
  </div>
  )
}

export default ProjectItemCard