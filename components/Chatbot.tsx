import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { ChatMessage } from '../types';
import { sendMessageToAI } from '../services/geminiService';

const ChatbotIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <div 
        className="fixed bottom-5 right-5 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg transform hover:scale-110 transition-transform z-50"
        onClick={onClick}
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4v-4z" />
        </svg>
    </div>
);


const ChatWindow: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { sender: 'bot', text: "Eu sou o Mini Hendrix. Como posso te surpreender hoje?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = useCallback(async () => {
        if (input.trim() === '' || isLoading) return;

        const userMessage: ChatMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const botResponseText = await sendMessageToAI(input);
        
        const botMessage: ChatMessage = { sender: 'bot', text: botResponseText };
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
    }, [input, isLoading]);

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };
    
    return (
        <div className="fixed bottom-24 right-5 w-full max-w-sm h-[60vh] bg-black border border-gray-700 rounded-lg shadow-2xl flex flex-col z-50 animate-fade-in-up">
            <div className="flex justify-between items-center p-3 border-b border-gray-700 bg-gray-900 rounded-t-lg">
                <h3 className="font-bebas tracking-wider text-lg text-yellow-500">Mini-Hendrix</h3>
                <button onClick={onClose} className="text-gray-400 hover:text-white">&times;</button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-lg ${msg.sender === 'user' ? 'bg-yellow-600 text-black' : 'bg-gray-800 text-gray-200'}`}>
                            <p className="text-sm">{msg.text}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                     <div className="flex justify-start">
                        <div className="max-w-[80%] p-3 rounded-lg bg-gray-800 text-gray-200">
                           <div className="flex items-center space-x-2">
                               <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                               <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                               <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                           </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="p-3 border-t border-gray-700">
                <div className="flex">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Desafie a IA..."
                        className="flex-1 bg-gray-800 text-white placeholder-gray-500 px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        disabled={isLoading}
                    />
                    <button onClick={handleSend} disabled={isLoading} className="bg-yellow-500 text-black px-4 py-2 rounded-r-md font-bold hover:bg-yellow-400 disabled:bg-gray-600">
                        Forjar
                    </button>
                </div>
            </div>
        </div>
    );
};

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {!isOpen && <ChatbotIcon onClick={() => setIsOpen(true)} />}
            {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
        </>
    );
};


export default Chatbot;