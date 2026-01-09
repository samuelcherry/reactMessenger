import { useState, useRef, useEffect } from 'react'
import './App.css'
import ChatGroups from './components/ChatGroups'
import ChatDisplay from './components/ChatDisplay'
import ChatDetails from './components/ChatDetails'
import type {Message} from './utils/MessageContext'
import {MessageContext} from './utils/MessageContext'
import {dummyData} from './data/dummyData'
import UserPopup from './components/UserPopup'


function App() {
  const [connected, setConnected] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [username, setUsername] = useState<String | undefined>('')


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
