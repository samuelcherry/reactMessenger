import { useState, useRef, useEffect } from 'react'
import { io } from "socket.io-client"
import './App.css'
import ChatGroups from './components/ChatGroups'
import ChatDisplay from './components/ChatDisplay'
import ChatDetails from './components/ChatDetails'
import {MessageContext} from './utils/MessageContext'
import {dummyData} from './data/dummyData'

function App() {
  const [connected, setConnected] = useState(false)
  const socketRef = useRef(null);
  const [messages, setMessages] = useState(dummyData)

useEffect(() => {
	  socketRef.current = io("http://localhost:3000",{
		  autoConnect:false,
		  transports:["websocket"],
	});

	socketRef.current.on("connect", () => {
		console.log("Connected to server");
		setConnected(true);
	});

	socketRef.current.on("disconnect", () => {
		console.log("Disconnected from server");
		setConnected(false);
	});

	return () => {
		socketRef.current.disconnect();
	};
  },[]);

  	const connect = () => {
		if(!socketRef.current.connected){
			socketRef.current.connect();
		}
	};

	const disconnect = () => {
		if(socketRef.current.connected) {
			socketRef.current.disconnect();
		}
	};

  return (
    <>
		<div className="flex flex-row h-200 m-5">
			<ChatGroups/>
				<MessageContext.Provider value={{messages, setMessages}}>
					<ChatDisplay/>
				</MessageContext.Provider>
			<ChatDetails/>
    	</div>
	</>
  );
}

export default App
