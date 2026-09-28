import React from 'react';
import RoyalWeddingBook from './components/RoyalWeddingBook';

export default function App() {
  return (
    <div className="w-full h-full min-h-screen bg-[#110105] text-stone-900 selection:bg-wedding-gold/30 selection:text-wedding-maroon-dark">
      <RoyalWeddingBook />
    </div>
  );
}
