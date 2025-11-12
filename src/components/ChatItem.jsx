import React from "react";

const ChatItem = ({ name, lastMessage, time, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 p-3 border-b cursor-pointer hover:bg-gray-100 ${
        active ? "bg-blue-50" : ""
      }`}
    >
      <img
        src={`https://ui-avatars.com/api/?name=${name}`}
        alt={name}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold">{name}</h4>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-600 truncate">{lastMessage}</p>
      </div>
    </div>
  );
};

export default ChatItem;
