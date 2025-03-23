import { Message } from '../../types/chat';

interface Props {
  message: Message;
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg p-3 ${
          isUser
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-900'
        }`}
      >
        <div className="text-sm">{message.content}</div>
        {message.suggestions && (
          <div className="mt-3 flex flex-wrap gap-2">
            {message.suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="text-xs bg-white bg-opacity-20 rounded-full px-3 py-1 hover:bg-opacity-30 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
        <span className="text-xs opacity-75 mt-1 block">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}