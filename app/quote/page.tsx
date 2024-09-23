"use client";

import React, { useState } from "react";
import '../globals.css';
import { quoteData, Data } from "../db/quoteDB";

export default function Page() {
  const [index, setIndex] = useState(0);
  const [quotes, setDataList] = useState(quoteData);

  const data = quotes[index];

  const upLike = (id: number) => {
    setDataList((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };

  const nextIndex = () => {
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length); // Loop back to the start if at the end
  };
  
  return (
    <div className='flex flex-col h-screen items-center justify-center bg-gradient-to-b p-8'>
      <div className="flex flex-col items-center justify-center bg-white shadow-lg border-2 border-gray-200 rounded-lg p-8 w-[90%] max-w-md text-center">
        <div className='text-xl font-semibold italic text-gray-800 mb-4'>{ data.text }</div>
        <div className='text-lg font-medium text-gray-600 mb-2'>Likes: { data.likes }</div>
        <button
          className="hover:scale-105 active:scale-95 px-4 py-1 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-400 transition-all shadow-md"
          onClick={() => upLike(data.id)}
        >
          Like
        </button>
      </div>

      <div className='mt-8'>
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-full font-semibold shadow-md hover:bg-blue-400 transition-all hover:scale-105 active:scale-95"
          onClick={nextIndex}
        >
          Next Quote
        </button>
      </div>
    </div>
  );
}
