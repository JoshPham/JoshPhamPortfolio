import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-2">
      <h1 className="text-2xl font-bold">Welcome to Josh Pham{`'`}s website.</h1>
      <p>I have decent skill with React and Django</p>
      <hr />
      <div className="flex flex-col space-x-4 mt-3">
        <h1>Contact Info</h1>
        <ul>
          <li>Email: JTPham911@gmail.com</li>
        </ul>
      </div> 
    </main>
  );
}
