import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './side.css';
import { Avatar, IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import ChatList from './ChatList';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="header_side">
        <Avatar src="https://th.bing.com/th/id/OIP.4crjpsPaUu1SVoAfYPPYWAHaHa?pid=ImgDet&w=900&h=900&rs=1" />
        <div className="rightside">
          <IconButton>
            <MessageIcon />
          </IconButton>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>


        </div>
      </div>
      <div className="search">
        <div className="searchContainer">
          <input type="text" name="" id="" placeholder='search chats' />
          <IconButton>
          <SearchOutlined />
          </IconButton>
        </div>
      </div>
      <ChatList/>
    </div>
  )
}

export default Sidebar