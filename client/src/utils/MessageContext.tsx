import {useContext, createContext} from 'react';

export interface Message {
	id: number;
	user: string;
	content: string;
};


export const MessageContext = createContext<Message | undefined>(undefined);


