import React from 'react'
import ProjectItemCard from '../../ReusableComponents/ProjectItemCard'
import { useLoaderData } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from "react-i18next";


function LatestProjectsCard() {
  const { t } = useTranslation();

  const {latestProjects} = useLoaderData()
  const {userData} = useSelector((state) => state.authSlice)
  return (
<div className={`col-sm-12 ${userData.role === 'freelancer' ? 'col-md-8' : 'col-md-12'}`}>
  <div className="card border-0 mt-3">
    <div className="card-body">
      <h3 className="mt-3">{t("Latest Projects")}</h3>
      <hr />
      {/*Project Items*/}
      {latestProjects.map(project => {
        return(
          <div key={project._id} className='mb-3'>
            <ProjectItemCard project={project} />
            <hr/>
          </div>
        )
      })}
    </div>
  </div>
</div>

  )
}

export default LatestProjectsCard