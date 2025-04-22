'use client';

import React from 'react';

const StreamingButton = () => {
  return (
    <button
      onClick={() => window.open('https://your-streaming-url.com', '_blank')}
      className="bg-[#7C7080] text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
    >
      Ver en vivo
    </button>
  );
};

export default StreamingButton;