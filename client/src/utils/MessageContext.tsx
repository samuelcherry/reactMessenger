import {useContext, createContext} from 'react';
import type {Dispatch, SetStateAction} from 'react';
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
	username: string | null;
	setUsername: Dispatch<SetStateAction<string | null>>;
}


export const MessageContext = createContext<MessageContextType | undefined>(undefined);


export function useMessageContext () {
	
	const context = useContext(MessageContext);

	if (!context){
		throw new Error("useMessageContext must be used within a MessageProvider"
    );
	}

	return context;
}

