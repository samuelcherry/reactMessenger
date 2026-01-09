import {useContext, createContext, Dispatch, SetStateAction} from 'react';

export interface Message {
	id: number;
	user: string;
	content: string;
};

export interface User {
	id: number;
	username: string;
}

interface MessageContextType {
	messages: Message[];
	setMessages: Dispatch<SetStateAction<Message[]>>;
	username: User;
	setUsername: Dispatch<SetStateAction<User>>;
}


export const MessageContext = createContext<MessageContextType | undefined>(undefined);


export function useMessageContext () {
	
	const context = useContext(MessageContext);

	if (!context){
		console.log("messages is undefined");
	}

	return context;
}

