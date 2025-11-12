import React from "react";
import { MessageList, ChatList, Input, Avatar } from "react-chat-elements";
import "react-chat-elements/dist/main.css";

const ChatLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-lg font-semibold">Chat App</h1>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: Chat List */}
        <div className="w-1/3 bg-white border-r overflow-y-auto">
        <h1 className="text-center text-2xl font-bold text p-4 mb-5">Messages</h1>
          <div className="border-black border-2 rounded-2xl p-1">
            <ChatList
            dataSource={[
              {
                avatar: "https://ui-avatars.com/api/?name=Alice",
                alt: "Alice",
                title: "Alice",
                subtitle: "Hey, how are you?",
                date: new Date(),
              }
            ]}
          />
        </div>
          </div>

        {/* Right: Message Box */}
        <div className="flex flex-col w-2/3 bg-gray-50">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto">
            <div className="w-full flex gap-5 items-center border-b-2 mb-2">
             <div className="w-[60px] h-[60px]">
              <img src="https://avatars.githubusercontent.com/u/80540635?v=4" alt="" />
             </div>
              <h3 className="font-bold text-xl">John</h3>
            </div>
            <MessageList
              className="message-list"
              lockable={true}
              toBottomHeight={"100%"}
              dataSource={[
                {
                  position: "right",
                  type: "text",
                  text: "Hey there!",
                  date: new Date(),
                },
                {
                  position: "left",
                  type: "text",
                  text: "Hi! How’s it going?",
                  date: new Date(),
                },
              ]}
            />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t bg-white">
            <Input
              placeholder="Type a message..."
              rightButtons={
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Send
                </button>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
