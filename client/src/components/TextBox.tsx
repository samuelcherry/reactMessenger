import {useState,useEffect} from 'react';
import {useMessageContext} from '../utils/MessageContext'
import type {Message} from '../utils/MessageContext'
import {socket} from '../socket'


function TextBox () {

const [inputValue, setInputValue] = useState('');
const { setMessages } = useMessageContext();
const { username } = useMessageContext();

console.log("textbox log: ", username)

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(event.target.value)
	}

	useEffect(() => {
		socket.on("received_message", (data : Message) => {
			setMessages(prev => [
				...prev,
				{
					id: data.id,
					user: data.user,
					content: data.content
				}
			]);
		});
		
		return () => {
		socket.off("received_message");
		};
	}, [socket,username]);

	function sendMessage(e: React.FormEvent<HTMLFormElement>){

		e.preventDefault();

		if(!inputValue.trim()) return;

		socket.emit("send_message",{
			id: Date.now(),
			user: username,
			content: inputValue.trim(),
		});
		setInputValue("");
	}

	return(
		<>
			<form className="flex justify-between align-center p-5" onSubmit={sendMessage}>
				<input
					type="text"
					value={inputValue}
					className="outline-solid h-1/10 w-8/10"
					onChange={handleChange}
				/>
				<button className="rounded-full bg-sky-400 p-2" type="submit">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
  						<path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
					</svg>
				</button>
			</form>
		</>
	)
}

export default TextBox
