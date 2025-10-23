import { useState, useCallback } from 'react';
import { GroqService } from '../services/groq';
import type { Message } from '../types';

const INITIAL_MESSAGE: Message = {
  id: '1',
  text: '👋 Hello! I\'m your AI assistant powered by Groq. I\'m here to help you with questions, tasks, and conversations. How can I assist you today?',
  sender: 'bot',
  timestamp: new Date()
};

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);

  // Temporary: Check if API key is loaded
  console.log('API Key loaded:', import.meta.env.VITE_GROQ_API_KEY ? 'Yes ✓' : 'No ✗');
  console.log('First 10 chars:', import.meta.env.VITE_GROQ_API_KEY?.substring(0, 10));
  
  const groqService = new GroqService(
    import.meta.env.VITE_GROQ_API_KEY || ''
  );

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Build conversation history
      const history = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }));

      const responseText = await groqService.generateResponse(text, history);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: error instanceof Error ? error.message : '❌ An unexpected error occurred. Please try again.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading, groqService]);

  const clearChat = useCallback(() => {
    setMessages([INITIAL_MESSAGE]);
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    clearChat
  };
};