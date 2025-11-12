import React, { useState } from "react";
import ChatItem from "./components/ChatItem";
import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";

const ChatPage = () => {
  // Initialize chats as state
  const [chatsState, setChatsState] = useState([
    {
      name: "Alice",
      lastMessage: "See you tomorrow!",
      time: "10:30 AM",
      messages: [
        { text: "Hey Alice!", position: "right", time: "10:00 AM" },
        { text: "Hi! How are you?", position: "left", time: "10:05 AM" },
      ],
    },
    {
      name: "Bob",
      lastMessage: "Thanks for your help!",
      time: "Yesterday",
      messages: [
        { text: "No problem, Bob!", position: "right", time: "Yesterday" },
        { text: "Appreciate it!", position: "left", time: "Yesterday" },
      ],
    },
  ]);

  const [activeChat, setActiveChat] = useState(0);

  // Handle sending new message
  const handleSend = (msg) => {
    if (!msg.trim()) return;

    setChatsState((prev) => {
      const newChats = [...prev]; // copy array
      newChats[activeChat] = {
        ...newChats[activeChat], // copy active chat
        messages: [
          ...newChats[activeChat].messages,
          { text: msg, position: "right", time: "Now" },
        ],
      };
      return newChats;
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md border-b-2 border-blue-700">
        <h1 className="text-lg font-bold">Chat App</h1>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: Chat List */}
        <div className="w-1/3 bg-white border-r overflow-y-auto">
          <h1 className="text-center text-2xl font-bold p-4 mb-3">Messages</h1>
          <div className="border border-gray-300 rounded-2xl m-3 overflow-hidden">
            {chatsState.map((chat, index) => (
              <ChatItem
                key={index}
                name={chat.name}
                lastMessage={chat.lastMessage}
                active={activeChat === index}
                onClick={() => setActiveChat(index)}
              />
            ))}
          </div>
        </div>

        {/* Right: Messages */}
        <div className="flex flex-col w-2/3 bg-gray-50">
          {/* Chat Header */}
          <div className="flex items-center gap-4 border-b-2 p-3">
            <img
              src={`https://ui-avatars.com/api/?name=${chatsState[activeChat].name}`}
              alt="Avatar"
              className="w-[60px] h-[60px] rounded-full border"
            />
            <h3 className="font-bold text-xl">{chatsState[activeChat].name}</h3>
          </div>

          {/* Message List */}
          <MessageList messages={chatsState[activeChat].messages} />

          {/* Input */}
          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
