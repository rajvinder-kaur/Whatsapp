import { Avatar } from '@mui/material'
import React from 'react';
import './ChatList.css'

function ChatList() {
    return (
    <div className="chatbarContainer">
        <div className="Chatbar">
        <Avatar src="https://th.bing.com/th/id/OIP.v_1YLKx8MWLtwB2SBELATgHaEK?pid=ImgDet&rs=1"/> 
        <div className="info">
        <h3>Mikasa</h3>
        <p>hey buddy ! </p>
        </div>
    </div>
    </div>
  )
}

export default ChatList