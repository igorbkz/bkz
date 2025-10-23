import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { ChatMessage } from '../types';
import { sendMessageToAI } from '../services/geminiService';

const CHAT_HISTORY_KEY = 'igor-chat-history';

const getInitialMessages = (): ChatMessage[] => {
  try {
    const savedHistory = localStorage.getItem(CHAT_HISTORY_KEY);
    if (savedHistory) {
      const parsedHistory = JSON.parse(savedHistory) as ChatMessage[];
      if (Array.isArray(parsedHistory) && parsedHistory.length > 0) {
        return parsedHistory;
      }
    }
  } catch (error) {
    console.error('Failed to load chat history:', error);
    localStorage.removeItem(CHAT_HISTORY_KEY);
  }
  return [];
};

const ChatbotIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    type="button"
    className="fixed bottom-6 right-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-rose-500 text-black shadow-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 z-50"
    onClick={onClick}
    aria-label="Abrir transmissão com Hendrix"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4v-4z" />
    </svg>
  </button>
);

const ChatWindow: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(getInitialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    try {
      const historyToSave = messages.slice(-20);
      if (historyToSave.length > 0) {
        localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(historyToSave));
      } else {
        localStorage.removeItem(CHAT_HISTORY_KEY);
      }
    } catch (error) {
      console.error('Failed to save chat history:', error);
    }
  }, [messages]);

  const handleSend = useCallback(async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const botResponseText = await sendMessageToAI(input);

    const botMessage: ChatMessage = { sender: 'bot', text: botResponseText };
    setMessages((prev) => [...prev, botMessage]);
    setIsLoading(false);
  }, [input, isLoading]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex h-full w-full flex-col border border-gray-900/60 bg-black/95 sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[75vh] sm:max-h-[680px] sm:w-[420px] sm:rounded-3xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="chat-heading"
    >
      <div className="flex items-center justify-between rounded-t-3xl border-b border-gray-900/60 bg-gradient-to-r from-gray-950 via-black to-gray-900 px-4 py-3">
        <div>
          <h3 id="chat-heading" className="font-mono text-xs uppercase tracking-[0.4rem] text-amber-200">
            Hendrix Node
          </h3>
          <p className="text-[0.65rem] text-gray-500">Voz experimental da identidade digital de Igor</p>
        </div>
        <button
          onClick={onClose}
          className="rounded-full border border-gray-800 p-1 text-gray-400 transition hover:border-amber-400/60 hover:text-white"
          aria-label="Fechar chat"
        >
          ×
        </button>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5">
        {messages.length === 0 && !isLoading && (
          <div className="rounded-2xl border border-dashed border-gray-800/80 bg-black/40 p-4 text-sm text-gray-500">
            Pergunte sobre visão, estratégia ou as tensões entre humanos e máquinas. Hendrix responde com sinceridade rebelde.
          </div>
        )}

        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-md ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-br from-amber-500 to-rose-500 text-black'
                  : 'border border-gray-900/60 bg-gray-900/60 text-gray-100'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-2 rounded-2xl border border-gray-900/60 bg-gray-900/60 px-4 py-3 text-sm text-gray-200" aria-live="polite">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" style={{ animationDelay: '0.15s' }} />
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-gray-900/60 bg-black/70 p-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Solte uma hipótese ou uma fricção..."
            className="flex-1 rounded-full border border-gray-900/60 bg-gray-950/70 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-amber-400/60 focus:outline-none"
            disabled={isLoading}
            aria-label="Sua mensagem para a IA"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-rose-500 text-black transition hover:from-amber-400 hover:to-rose-400 disabled:opacity-60"
            aria-label="Enviar"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L6 12zm0 0h7.5" />
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
