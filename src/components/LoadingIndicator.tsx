import { Bot } from 'lucide-react';

export default function LoadingIndicator() {
  return (
    <div className="flex gap-4 message-enter">
      <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 shadow-md">
        <Bot className="w-5 h-5 text-gray-700" />
      </div>
      <div className="bg-white px-5 py-4 rounded-2xl rounded-tl-none shadow-md border border-gray-100">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-pink-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          <span className="text-sm text-gray-500 ml-1">Thinking...</span>
        </div>
      </div>
    </div>
  );
}