 import React from 'react'
 import MessageIcon from '@mui/icons-material/Message';
 import DonutLargeIcon from '@mui/icons-material/DonutLarge';
 import MoreVertIcon from '@mui/icons-material/MoreVert';
 import './side.css';
import { IconButton } from '@mui/material';
 
 function Sidebar() {
   return (
     <div className="sidebar">
        <div className="header_side">
            <div className="rightside">
            <IconButton>
                <MessageIcon/>
            </IconButton>
            <IconButton>
                <DonutLargeIcon/>
            </IconButton>
            <IconButton>
               <MoreVertIcon/>
            </IconButton>
             
             
            </div>
        </div>
     </div>
   )
 }
 
 export default Sidebar