import React from 'react'
import './Chat.css';
import { Avatar, IconButton } from '@mui/material';
import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
function Chat() {
  return (
    <div className="chat">
      <div className="chatHeader">
        <Avatar src="https://th.bing.com/th/id/OIP.fvrCJlruyjC-7A6_1R4teQAAAA?pid=ImgDet&rs=1"/>
        <div className="headerInfo">
          <h3>Buddy</h3>
          <p>Online</p>
        </div>
        <div className="headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chatBody">
          <p className='msg'>
          <span className="Chat_name">Ace</span>
          hey whatsup?
          <span className="chat_timestamp">
            {new Date().toUTCString()}
          </span>
          </p>
          <p className='msg recieved'>
          <span className="Chat_name">Ace</span>
          nothing much
          <span className="chat_timestamp">
            {new Date().toUTCString()}
          </span>
          </p>
      </div>
      <div className="InputBox">
        <IconButton><SentimentSatisfiedOutlinedIcon/></IconButton>
        <form action="">
          <input type="text" name="" id="" placeholder='Type a Message' />
          <button type='submit' >
            send
          </button>
        </form>
        <IconButton><MicOutlinedIcon/></IconButton>
      </div>
    </div>
  )
}

export default Chat