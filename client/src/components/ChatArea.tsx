
import {useState, useEffect, useContext} from 'react';
import {useMessageContext} from '../utils/MessageContext'


function ChatArea() {

//create an array in local storage of messages so that messages can be appended to the array on sending
//useContext to hold the messages and move them across components
	
	const {messages, setMessages} = useMessageContext();
	
	return (
		<>
			<div className="bg-gray-100 h-9/10 outline-solid outline-2 outline-gray-400 rounded-t-lg">
				{messages.map( message => (
					<div key={message.id} className="flex justify-end">
						<h1 className= "p-6 rounded-xl bg-blue-400 m-3 w-1/2 color-white">
							{message.content}
						</h1>
					</div>
				))} 
			</div>
		</>
	)
}

export default ChatArea
