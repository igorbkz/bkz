export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  story: string;
  philosophy: string;
  link: string;
}

export interface Reflection {
  id: string;
  title: string;
  date: string;
  content: string;
}

export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}