'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import clipboard from '../../images/clipboard.png';

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const copyToClipboard = async (e: React.MouseEvent<HTMLButtonElement | HTMLParagraphElement>) => {
    const target = e.target as HTMLButtonElement | HTMLParagraphElement;
    const email = "JTPham911@gmail.com";
    try {
      setCopiedEmail(false)
      await navigator.clipboard.writeText(email);
      
      setCopiedEmail(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopiedEmail(false);
      }, 2500);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <main className="flex flex-col items-center p-24 gap-12">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#00422e_100%)] bottom-0"></div>
      <h1 className="font-bold text-4xl">Welcome to Josh Pham{`'`}s website.</h1>
      <div className="flex flex-col gap-2 w-50"> 
        <h1 className="font-bold text-xl">Skills</h1>
        <ul className="flex flex-wrap text-lg gap-3 font-mono">
          <li>React</li>
          <li>Next.js</li>
          <li>Django</li>
          <li>Python</li>
          <li>Java</li>
        </ul>
      </div>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-emerald-300 blur group-hover:blur-md group-hover:-inset-0.5 transition-all duration-1000 group-hover:duration-200 w-full"></div>
        <div className="relative bg-black flex flex-col space-x-4 border-2 p-5 transition-all ease h-full w-full xxs:pe-9 xs:pe-5">
          <h1 className="font-bold">Contact Info</h1>
          <ul className="">
            <li className="flex w-full gap-2 group">
              Email:
              <p onClick={copyToClipboard} className="cursor-pointer group-hover:underline">JTPham911@gmail.com</p>
              <Image
                src={clipboard}
                alt="clipboard"
                width={25}
                layout="fixed"
                className="cursor-pointer inline-block"
                onClick={copyToClipboard}
              />
            </li>
          </ul>
        </div> 
      </div>
      
      {copiedEmail && (
        <div className="absolute flex items-center gap-2 left-8 bottom-8 bg-emerald-500 px-4 py-3 rounded-md fade-in-out opacity-0">
          <h1>Copied email to clipboard!</h1>
        </div>
      )}

    </main>
  );
}
