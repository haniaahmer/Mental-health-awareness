import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-10">
      <p className="text-green-400 font-semibold text-lg mb-2">
        Thpki Movement © {new Date().getFullYear()}
      </p>
      <p className="text-gray-400">Zehni Sehat Ehm Hai | ذہنی صحت اہم ہے</p>
    </footer>
  );
}