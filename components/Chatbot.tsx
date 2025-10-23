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
    className="group relative fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-amber-400 via-rose-400 to-sky-400 text-black shadow-[0_0_55px_rgba(244,114,182,0.4)] transition-transform duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
    onClick={onClick}
    aria-label="Abrir transmissão com Hendrix"
  >
    <span className="absolute inset-0 animate-pulse-soft rounded-full bg-gradient-to-br from-white/25 via-transparent to-white/10 opacity-70" aria-hidden="true" />
    <span className="absolute -inset-2 rounded-full border border-white/50 opacity-40" aria-hidden="true" />
    <svg xmlns="http://www.w3.org/2000/svg" className="relative h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      className="fixed inset-0 z-50 flex h-full w-full flex-col overflow-hidden border border-white/10 bg-[#070717]/95 shadow-[0_25px_70px_rgba(8,7,26,0.7)] backdrop-blur-3xl sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[75vh] sm:max-h-[700px] sm:w-[440px] sm:rounded-[32px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="chat-heading"
    >
      <div className="relative flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-[#0b0b1e] via-[#08071a] to-[#120720] px-5 py-4">
        <div>
          <h3 id="chat-heading" className="font-mono text-xs uppercase tracking-[0.4rem] text-amber-200">
            Hendrix Node
          </h3>
          <p className="text-[0.65rem] text-slate-400">Voz experimental da identidade digital de Igor</p>
        </div>
        <button
          onClick={onClose}
          className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-amber-400/60 hover:text-white"
          aria-label="Fechar chat"
        >
          ×
        </button>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-5 py-6">
        {messages.length === 0 && !isLoading && (
          <div className="rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-5 text-sm text-slate-400">
            Pergunte sobre visão, estratégia ou as tensões entre humanos e máquinas. Hendrix responde com sinceridade rebelde.
          </div>
        )}

        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`relative max-w-[80%] rounded-3xl px-4 py-3 text-sm shadow-[0_12px_30px_rgba(8,7,26,0.45)] ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-br from-amber-400 via-rose-400 to-sky-400 text-black'
                  : 'border border-white/10 bg-white/[0.03] text-white'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-2 rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200" aria-live="polite">
              <span className="h-2 w-2 animate-ping rounded-full bg-amber-400" />
              <span className="h-2 w-2 animate-ping rounded-full bg-amber-400" style={{ animationDelay: '0.2s' }} />
              <span className="h-2 w-2 animate-ping rounded-full bg-amber-400" style={{ animationDelay: '0.4s' }} />
              <span className="text-xs uppercase tracking-[0.4em] text-slate-400">Gerando</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-white/10 bg-[#050510]/80 p-5">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Solte uma hipótese ou uma fricção..."
            className="flex-1 rounded-full border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-400/60 focus:outline-none"
            disabled={isLoading}
            aria-label="Sua mensagem para a IA"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-rose-400 to-sky-400 text-black shadow-[0_0_35px_rgba(244,114,182,0.45)] transition hover:from-amber-300 hover:via-rose-300 hover:to-sky-300 disabled:opacity-60"
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
