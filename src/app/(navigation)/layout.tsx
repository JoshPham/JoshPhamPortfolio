import React from "react";

const env = process.env.NODE_ENV;

export default function Layout({children}: {children: React.ReactNode}) {
  const learnLink = env === 'development' ? '/learn' : 'https://learn.joshpham.org';

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-16 border-b-2 border-gray-700 bg-black">
        <ul className="flex justify-end items-center w-full h-full px-2">
          <li>
              <a href={learnLink} className="z-50 text-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2 font-bold rounded-full drop-shadow-2xl hover:drop-shadow-3xl hover:scale-105 inline-block transition-all duration-150 ease-in">
                Learn
              </a>
          </li>
        </ul>
      </nav>
        <div className="mt-16">
          {children}
        </div>
      </>
  );
}