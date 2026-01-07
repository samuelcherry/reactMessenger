import {useState, useContext} from 'react';
import {MessageContext} from '../utils/MessageContext'
import type {Message} from '../utils/MessageContext'

function TextBox () {

const [inputValue, setInputValue] = useState('');
const messages = useContext(MessageContext);

	const handleChange = (event) => {
		setInputValue(event.target.value)
	}

	function sendMessage(e){
		e.preventDefault();
		const textContent = inputValue;
		messages.messages.push({id:4, user:"test", content:textContent});
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
