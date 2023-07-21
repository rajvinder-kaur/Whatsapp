import React, { useState } from 'react'
import './Chat.css';
import { Avatar, IconButton } from '@mui/material';
import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import instance from '../../axios';
function Chat({msg}) {
  const [message, set] = useState("");
  const send=(e)=>{
    e.preventDefault();
    instance.post('/messages/new',{
      message: message,
      name:"user",
      timestamp : new Date().toLocaleString(),
      recieved : false
    }).then(()=>{
      set("");
    })
  } 
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
      <div className="chatBody">{
        msg.map((x) => (
         <p className= {`msg ${ !x.recieved && 'msg recieved' }`} id={x.id}>
          <span className="Chat_name">{x.name}</span>
          {x.message}
          <span className="chat_timestamp">
            {x.timestamp}
          </span>
          </p> 
        ))
      }
          
          {/* <p className='msg recieved'>
          <span className="Chat_name">x.</span>
          nothing much
          <span className="chat_timestamp">
            {new Date().toUTCString()}
          </span>
          </p>    */}
      </div>
      <div className="InputBox">
        <IconButton><SentimentSatisfiedOutlinedIcon/></IconButton>
        <form action="">
          <input type="text" value={message} onChange={(e)=>{set(e.target.value)}} name="" id="" placeholder='Type a Message' />
          <button onClick={send} type='submit' >
            send
          </button>
        </form>
        <IconButton><MicOutlinedIcon/></IconButton>
      </div>
    </div>
  )
}

export default Chat