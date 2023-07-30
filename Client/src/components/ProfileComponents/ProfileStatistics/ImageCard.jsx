import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import ImageGeneration from '../../UI_Helpers/ImageGeneration'
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';


function ImageCard() {
  const { t } = useTranslation();
  const {userData} = useSelector((state)=> state.authSlice)
  const {data} = useLoaderData()
  return (
<div className="col-sm-12 col-md-4">
  {/*Start Card Profile*/}
  <div className="card border-0 mt-3">
    <div className="card-body">
      <div className="image text-center position-relative">
       {data.avatar &&  <ImageGeneration avatar={data.avatar} />}
        {!data.avatar && <ImageGeneration firstName={data.firstName} LastName={data.LastName || data.lastName}/>}
        <p><Link to={`/${userData.role}/${data._id}`} className="text-dark">{data.firstName + ' ' +data.lastName || data.LastName}</Link></p>
        {data.isVerify && <span className='mb-2'>Trusted<img src="https://api.iconify.design/fa6-regular:circle-check.svg?color=%23009dff" alt="verified" className='mx-2' /></span>}
        <hr />
        <p><Link to={`/profile/edit/${data._id}`} className="text-dark">{t("Edit Profile")}</Link></p>
      </div>
    </div>
  </div>
</div>

  )
}

export default ImageCard