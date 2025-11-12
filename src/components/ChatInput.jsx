import React, { useState } from "react";

const ChatInput = ({onSend}) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
        onSend(message);
      setMessage("");
    }
  };

  return (
    <div className="border-t p-3 flex items-center bg-white">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSend}
        className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
