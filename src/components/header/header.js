import React from 'react'
import logo from '../logo/logo.png'
import "./header.css"
// Logos
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function header() {
  return (
    <div className='header'>
      <div className='header_left'>
        <img src={logo} alt="Logo" />
        <div className='header_input'>
          <SearchIcon />
          <input type='text' placeholder='Search LinkLoop' />
        </div>
      </div>


      <div className='header_center'>
          <div className='header_options header_options--active'>
            <HomeIcon fontSize='large' />
          </div>
          <div className='header_options'>
            <FlagIcon fontSize='large' />
          </div>
          <div className='header_options'>
            <SubscriptionsOutlinedIcon fontSize='large' />
          </div>
          <div className='header_options'>
            <StorefrontOutlinedIcon fontSize='large' />
          </div>
          <div className='header_options'>
            <SupervisedUserCircleOutlinedIcon fontSize='large' />
          </div>
      </div>


      <div className='header_right'>
        <div className='header_info'>
          <Avatar />
          <h4>ayush mishra</h4>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
