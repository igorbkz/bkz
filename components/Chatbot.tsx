import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { ChatMessage } from '../types';
import { sendMessageToAI } from '../services/geminiService';

const initialMessages: ChatMessage[] = [
  {
    sender: 'bot',
    text: 'Oi! Sou o Mini-Hendrix. Posso ajudar com ideias, próximos passos ou apenas dizer olá.',
  },
];

const ChatbotIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    type="button"
    className="fixed bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
    onClick={onClick}
    aria-label="Abrir chat"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4v-4z" />
    </svg>
  </button>
);

const ChatWindow: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = useCallback(async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const botResponseText = await sendMessageToAI(userMessage.text);
    const botMessage: ChatMessage = {
      sender: 'bot',
      text: botResponseText || 'Estou aqui. Pode tentar novamente se quiser.',
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsLoading(false);
  }, [input, isLoading]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex h-[70vh] w-full flex-col border-t border-slate-200 bg-white shadow-2xl sm:inset-auto sm:bottom-20 sm:right-5 sm:h-[520px] sm:w-96 sm:rounded-3xl sm:border"
      role="dialog"
      aria-modal="true"
      aria-labelledby="chat-heading"
    >
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <div>
          <h3 id="chat-heading" className="text-sm font-medium text-slate-900">
            Mini-Hendrix
          </h3>
          <p className="text-xs text-slate-500">Sempre cordial e pronto para ajudar.</p>
        </div>
        <button
          onClick={onClose}
          className="rounded-full border border-slate-200 p-1 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
          aria-label="Fechar chat"
          type="button"
        >
          ×
        </button>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4 text-sm">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm ${
                msg.sender === 'user' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-slate-600" aria-live="polite">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" style={{ animationDelay: '0.15s' }} />
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-slate-200 bg-white px-4 py-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escreva uma mensagem gentil..."
            className="flex-1 rounded-full border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-slate-400 focus:outline-none"
            disabled={isLoading}
            aria-label="Sua mensagem para a IA"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white transition-colors hover:bg-emerald-600 disabled:opacity-60"
            aria-label="Enviar"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12l12-7-4 7 4 7-12-7zm0 0h6" />
            </svg>
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
