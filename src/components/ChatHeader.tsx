import { Bot, Trash2, Zap } from 'lucide-react';

interface ChatHeaderProps {
  onClearChat: () => void;
}

export default function ChatHeader({ onClearChat }: ChatHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-xl blur-md opacity-50"></div>
            <div className="relative bg-white p-2.5 rounded-xl">
              <Bot className="w-7 h-7 text-indigo-600" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-white">Groq AI Chatbot</h1>
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                <Zap className="w-3 h-3 text-yellow-300" />
                <span className="text-xs font-semibold text-white">Fast</span>
              </div>
            </div>
            <p className="text-sm text-indigo-100">Powered by Llama 3.1</p>
          </div>
        </div>
        
        <button
          onClick={onClearChat}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg transition-all duration-200 border border-white/20"
          title="Clear chat"
        >
          <Trash2 className="w-4 h-4" />
          <span className="hidden sm:inline text-sm font-medium">Clear</span>
        </button>
      </div>
    </div>
  );
}