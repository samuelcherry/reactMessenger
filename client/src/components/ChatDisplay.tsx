import TextBox from './TextBox';
import ChatArea from './ChatArea';

function ChatDisplay(){

	return(
		<>
			<div className="w-5/6 h-full bg-gray-50 p-4 lg:w-3/4">
				<div className="h-9/10">
					<ChatArea/>
					<TextBox/>
				</div>
			</div>
		</>
	)
};

export default ChatDisplay
