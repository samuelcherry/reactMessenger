
import {useState, useEffect,useRef, useContext} from 'react';
import {useMessageContext} from '../utils/MessageContext'


function ChatArea() {

	const bottomRef = useRef<HTMLDivElement | null>(null);
	const {messages, setMessages} = useMessageContext();
	const {username, setUsername} = useMessageContext();
	

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth"});
	}, [messages]);


return (
		<>
			<div className="bg-gray-100 h-9/10 outline-solid outline-2 outline-gray-400 rounded-t-lg overflow-y-auto">
				{messages.map( message => (
					<div key={message.id} className="flex justify-end">
						<h1 className= "p-6 rounded-xl bg-blue-400 m-3 w-1/2 color-white">
							{message.user}
							<hr/>
							{message.content}
						</h1>
					</div>
				))}
				<div ref={bottomRef}/>
			</div>
		</>
	)
}

export default ChatArea
