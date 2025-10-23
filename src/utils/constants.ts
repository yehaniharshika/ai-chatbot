export const HUGGINGFACE_API_URL = 
  'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2';

export const INITIAL_MESSAGE = {
  id: '1',
  text: 'Hello! I\'m your AI assistant powered by Hugging Face. How can I help you today?',
  sender: 'bot' as const,
  timestamp: new Date()
};

export const ERROR_MESSAGES = {
  API_ERROR: 'Sorry, I encountered an error. Please try again.',
  NO_API_KEY: 'Please add your Hugging Face API key in the .env file.',
  NETWORK_ERROR: 'Network error. Please check your connection.'
};