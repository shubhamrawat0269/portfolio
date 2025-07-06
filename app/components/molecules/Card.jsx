import React from "react";
import { MoveRight } from "lucide-react";

const Card = ({ imageUrl, title, onClick }) => {
  return (
    <div
      className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg group"
    >
      <img
        src={imageUrl}
        alt="Card Background"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div
        onClick={onClick}
        className="bg-white cursor-pointer w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
      >
        <div>
          <h2 className="text-xs">Frontend Project</h2>
          <p className="text-base font-semibold">{title}</p>
        </div>
        <button className="bg-white text-black p-2 rounded-full cursor-pointer hover:bg-gray-100 transition">
          <MoveRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Card;
