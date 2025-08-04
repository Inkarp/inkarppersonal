import React from "react";

const cards = [
  { title: "TARGET AUDIENCE", icon: "📢", color: "bg-orange-400" },
  { title: "INCREASE SALE", icon: "💸", color: "bg-green-400" },
  { title: "GENERATE NEW IDEA", icon: "💡", color: "bg-blue-400" },
  { title: "BUILD COMMUNICATION", icon: "💬", color: "bg-pink-400" },
  { title: "DATA MANAGEMENT", icon: "🗂️", color: "bg-cyan-400" },
  { title: "RESEARCH", icon: "🔎", color: "bg-purple-400" },
  { title: "STRATEGY", icon: "🧭", color: "bg-yellow-400" },
  { title: "DEVELOPMENT", icon: "🔧", color: "bg-lime-400" },
  { title: "MONITORING", icon: "📊", color: "bg-sky-400" },
];


export default function VerticalsNew() {
  const radius = 180; // for card placement radius (adjust as needed)
  const center = 220; // for center position
  return (
    <div className="relative w-[440px] h-[440px] mx-auto flex items-center justify-center">
      {/* Center Circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg z-20"
           style={{ width: 210, height: 210 }}>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <span className="text-2xl font-bold">CREATIVE</span>
          <span className="text-base tracking-wider text-gray-500">INFOGRAPHIC</span>
          <div className="mt-2 flex gap-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          </div>
        </div>
      </div>
      {/* Circular Cards */}
      {cards.map((card, i) => {
        const angle = (360 / cards.length) * i - 90; // start from top
        const rad = (angle * Math.PI) / 180;
        const x = center + radius * Math.cos(rad) - 80;
        const y = center + radius * Math.sin(rad) - 50;
        return (
          <div
            key={card.title}
            className={`absolute flex flex-col items-center justify-center rounded-xl shadow-xl ${card.color}`}
            style={{
              width: 130,
              height: 100,
              left: `${x}px`,
              top: `${y}px`,
              transform: `rotate(${angle + 90}deg)`,
            }}
          >
            {/* Icon */}
            <div className="text-2xl mb-2">{card.icon}</div>
            {/* Title */}
            <div
              className="text-white font-bold text-center text-sm uppercase"
              style={{
                transform: `rotate(-${angle + 90}deg)`, // un-rotate text
              }}
            >
              {card.title}
            </div>
            {/* Sample Text */}
            <div
              className="text-white text-xs text-center opacity-75 mt-1 px-2"
              style={{
                transform: `rotate(-${angle + 90}deg)`,
              }}
            >
              Lorem Ipsum is simply dummy text of printing and type
            </div>
          </div>
        );
      })}
    </div>
  );
}
