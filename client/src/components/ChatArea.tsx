
import {useEffect,useRef} from 'react';
import {useMessageContext} from '../utils/MessageContext'

function ChatArea() {

	const bottomRef = useRef<HTMLDivElement | null>(null);
	const {messages} = useMessageContext();

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth"});
	}, [messages]);
	
	console.log("message shape: ", messages);

return (
		<>
			<div className="bg-gray-100 h-full outline-solid outline-2 outline-gray-400 overflow-y-auto">
				{messages.map( message => (
					<div key={message.id} className="flex justify-end">
						<h1 className= "p-6 rounded-xl bg-blue-400 m-3 w-full color-white">
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
