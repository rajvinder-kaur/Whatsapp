import { useEffect, useState } from 'react'
import './App.css'
import  Sidebar from './Components/Sidebar';
import Chat from './Components/Chat'
import Pusher from 'pusher-js';
import instance from '../axios';
import axios from 'axios';

function App() {
  const [msg, getmsg] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
          instance.get('/messages/sync').then((response)=>{
            getmsg(response.data)
          })
        }
        catch (error) {
        console.log("Error fetching data", error);
      }
      
      
    }
    fetch();
    
  }, [fetch]);
  useEffect(() => {
    var pusher = new Pusher('99184aadb6e95ee75def', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function (data) {
      getmsg([ ...msg , data ]);
    });

    return()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  },[msg]);

  console.log(msg);


  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat msg={msg} />
      </div>
    </div>
  )
}

export default App
