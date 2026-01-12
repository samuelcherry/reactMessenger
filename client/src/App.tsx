import { useState, useRef, useEffect } from 'react'
import './App.css'
import ChatGroups from './components/ChatGroups'
import ChatDisplay from './components/ChatDisplay'
import ChatDetails from './components/ChatDetails'
import type {Message} from './utils/MessageContext'
import {MessageContext} from './utils/MessageContext'
import {dummyData} from './data/dummyData'
import UserPopup from './components/UserPopup'
import { io} from "socket.io-client";
import {socket} from "./socket";

function App() {
  const [connected, setConnected] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [username, setUsername] = useState<String | undefined>('')

    useEffect(() => {
		socket.connect();

		socket.on("connect", () => {
			console.log("Connected:",socket.id);
		})
		
		return () => {
			socket.disconnect();
		};
	}, []);



  return (
    <>
	
	
		<div className="flex flex-row h-200 m-5">
			<ChatGroups/>
				<MessageContext.Provider value={{messages, setMessages, username, setUsername}}>
					{!username && <UserPopup onSubmit={setUsername}/>}

					<ChatDisplay/>
				</MessageContext.Provider>
			<ChatDetails/>
    	</div>
	</>
  );
}

export default App
