import React from 'react'
import { generateNames } from '../../helpers/generateNames'


function ImageGeneration({firstName,LastName,role, avatarUrl,avatar}) {
  return (
    <div className='image-generation mx-auto' role={role? role : ''}>
       {firstName && LastName && <span>{generateNames(firstName,LastName)}</span>}
       {avatarUrl && <img src={avatarUrl} className="rounded-circle" width={84} height={84} alt="Profile Pic" />}
       {avatar && <img src={`${avatar}`} className="rounded-circle" width={84} height={84} alt="Profile Pic" />}
    </div>
  )
}

export default ImageGeneration