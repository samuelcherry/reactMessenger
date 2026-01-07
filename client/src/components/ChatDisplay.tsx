import TextBox from './TextBox';
import ChatArea from './ChatArea';

function ChatDisplay(){

	return(
		<>
			<div className="w-1/3 h-full bg-gray-50 p-4">
				<div className="h-200">
					<ChatArea/>
					<TextBox/>
				</div>
			</div>
		</>
	)
};

export default ChatDisplay
