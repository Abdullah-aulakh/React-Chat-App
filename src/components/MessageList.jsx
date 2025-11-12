import React from "react";

const MessageList = ({ messages }) => {
  return (
    <div className="flex flex-col space-y-3 p-4 overflow-y-auto flex-1">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.position === "right" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-xs px-4 py-2 rounded-lg ${
              msg.position === "right"
                ? "bg-blue-600 text-white rounded-br-none"
                : "bg-gray-200 text-gray-800 rounded-bl-none"
            }`}
          >
            <p>{msg.text}</p>
            <span className="block text-xs mt-1 opacity-75">
              {msg.time || "12:00"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
