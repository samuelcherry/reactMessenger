import { useState, useEffect } from 'react'
import './App.css'
import ChatGroups from './components/ChatGroups'
import ChatDisplay from './components/ChatDisplay'
import ChatDetails from './components/ChatDetails'
import type {Message} from './utils/MessageContext'
import {MessageContext} from './utils/MessageContext'
import UserPopup from './components/UserPopup'
import {socket} from "./socket";

function App() {
  const [messages, setMessages] = useState<Message[]>([])
  const [username, setUsername] = useState<string | null>(null)

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
	
	
		<div className="flex flex-row h-screen">
			<ChatGroups/>
				<MessageContext.Provider value={{messages, setMessages, username, setUsername}}>
					{!username && <UserPopup onSubmit={setUsername} />}
					<ChatDisplay/>
				</MessageContext.Provider>
			<ChatDetails/>
    	</div>
	</>
  );
}

export default App
