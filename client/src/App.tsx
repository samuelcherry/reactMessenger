import { useState, useRef, useEffect } from 'react'
import './App.css'
import ChatGroups from './components/ChatGroups'
import ChatDisplay from './components/ChatDisplay'
import ChatDetails from './components/ChatDetails'
import type {Message} from './utils/MessageContext'
import {MessageContext} from './utils/MessageContext'
import {dummyData} from './data/dummyData'

function App() {
  const [connected, setConnected] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])

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
