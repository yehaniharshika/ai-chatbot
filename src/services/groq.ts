import type { GroqAPIResponse } from "../types";

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export class GroqService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async generateResponse(userMessage: string, conversationHistory: Array<{role: string, content: string}> = []): Promise<string> {
    if (!this.apiKey || this.apiKey === 'your_groq_api_key_here' || this.apiKey.trim() === '') {
      throw new Error('⚠️ Please add your Groq API key in the .env file.\n\nGet it free at: https://console.groq.com/keys');
    }

    try {
      const messages = [
        {
          role: 'system',
          content: 'You are a helpful, friendly, and knowledgeable AI assistant. Provide clear, concise, and accurate responses. Be conversational and engaging.'
        },
        ...conversationHistory.slice(-6),
        {
          role: 'user',
          content: userMessage
        }
      ];

      const response = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile', // ✅ UPDATED MODEL!
          messages: messages,
          temperature: 0.7,
          max_tokens: 1024,
          top_p: 0.9,
          stream: false
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Groq API Error:', errorData);
        
        if (response.status === 401) {
          throw new Error('❌ Invalid API key. Please check your Groq API key.');
        } else if (response.status === 429) {
          throw new Error('⏳ Rate limit reached. Please wait a moment and try again.');
        } else {
          throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
        }
      }

      const data: GroqAPIResponse = await response.json();
      const content = data.choices[0]?.message?.content;
      
      if (!content) {
        throw new Error('No response received from AI.');
      }
      
      return content;
      
    } catch (error) {
      console.error('Groq Service Error:', error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to connect to Groq AI. Please check your internet connection.');
    }
  }
}