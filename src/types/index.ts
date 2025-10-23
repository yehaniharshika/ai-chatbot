export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface GroqAPIResponse {
  choices: Array<{
    message: {
      content: string;
      role: string;
    };
  }>;
  error?: {
    message: string;
  };
}