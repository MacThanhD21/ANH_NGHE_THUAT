import React from 'react';
import { FacebookIcon, ZaloIcon, GiftIcon } from './IconComponents';

const PersonalInfo: React.FC = () => {
  const infoItems = [
    { 
      href: "https://www.facebook.com/nguyen.quocthien.58", 
      icon: FacebookIcon, 
      text: "Facebook Cá Nhân",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700"
    },
    { 
      href: "tel:0968065274", 
      icon: ZaloIcon, 
      text: "Zalo: 0968065274",
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600"
    },
    { 
      href: "https://zalo.me/g/auvzpn118", 
      icon: GiftIcon, 
      text: "Nhận Quà Tại Đây",
      bgColor: "bg-gradient-to-r from-pink-500 to-orange-400",
      hoverColor: "hover:from-pink-600 hover:to-orange-500"
    },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {infoItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 p-3 rounded-lg text-white font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-md ${item.bgColor} ${item.hoverColor}`}
          >
            <item.icon className="w-6 h-6" />
            <span>{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
