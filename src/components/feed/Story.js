import { Avatar } from '@mui/material'
import React from 'react'
import './Feed.css'
export default function Story({Image, profile, title}) {
  return (
    <div style={{backgroundImage:`url(${Image})`}} className='story '>
        <Avatar className='story__avatar' src={profile} />
        <h4>{title}</h4>
    </div>
  )
}
