'use client';

import React from 'react';

export default function Home() {
  const copyToClipboard = async (e: React.MouseEvent<HTMLButtonElement | HTMLParagraphElement>) => {
    const target = e.target as HTMLButtonElement | HTMLParagraphElement;
    const email = "JTPham911@gmail.com";
    try {
      await navigator.clipboard.writeText(email);

      // Find the copy button
      const copyButton = document.getElementById('copyButton') as HTMLButtonElement;
      copyButton.innerHTML = "Copied!";
      copyButton.classList.add('font-extrabold');

      setTimeout(() => {
        copyButton.innerHTML = "Copy";
        copyButton.classList.remove('font-extrabold');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <main className="flex flex-col items-center p-24 gap-6">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#00422e_100%)] bottom-0"></div>
      <h1 className="font-bold text-4xl">Welcome to Josh Pham{`'`}s website.</h1>
      <p>I have decent skill with React and Django</p>
      <div className="relative group">
        <div className="absolute inset-0.5 bg-gradient-to-tr from-emerald-600 to-emerald-300 blur group-hover:blur-md group-hover:-inset-0.5 transition-all duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-black flex flex-col space-x-4 border-2 p-5 transition-all ease h-full">
          <h1 className="font-bold">Contact Info</h1>
          <ul className="">
            <li className="flex w-full gap-1 group">
              Email:
              <p onClick={copyToClipboard} className="cursor-pointer group-hover:underline">JTPham911@gmail.com</p>
              <button id="copyButton" onClick={copyToClipboard} className='font-semibold'>Copy</button>
            </li>
          </ul>
        </div> 
      </div>
    </main>
  );
}
