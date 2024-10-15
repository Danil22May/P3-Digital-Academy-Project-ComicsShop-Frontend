import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleVoiceSearch = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
    };
    recognition.start();
  };
  return (
    <div className="flex-wrap bg-gradient-to-l from-zinc-500 to-yellow-900 p-6 px-14 shadow-md md:flex md:justify-between">
      <h1 className="inria-sans-bold mb-4 cursor-pointer text-3xl text-white sm:text-4xl md:mb-0">
        <Link to="/">Comics</Link>
      </h1>

      <div className="inter flex flex-col items-center justify-around gap-4 text-lg text-white sm:flex-row sm:gap-8 sm:text-xl md:gap-28">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-md w-full rounded-2xl border-2 border-zinc-400 px-4 py-1 font-normal text-gray-500 outline-none sm:w-auto"
            placeholder="Find_"
          />
          <button
            onClick={handleVoiceSearch}
            className="absolute bottom-3 right-3 rounded-md bg-rose-700 p-2 hover:bg-rose-800 active:bg-zinc-700"
          />
        </div>

        <div className="cursor-pointer hover:text-gray-300 active:text-gray-500">
          <Link to="/categories">Categories</Link>
        </div>
        <div className="flex cursor-pointer items-center justify-center hover:text-gray-300 active:text-gray-500">
          <Link to="/login">Login</Link>
          <svg
            width="26px"
            height="26px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="m15 12-4-4m4 4-4 4m4-4H5m5 9a9 9 0 1 0 0-18"
            />
          </svg>
        </div>
        <div className="cursor-pointer hover:text-gray-300 active:text-gray-500">
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
              stroke="#ffffff"
            />
          </svg>
        </div>
        <div className="cursor-pointer rounded-md bg-zinc-400 p-2 hover:bg-zinc-500 active:bg-zinc-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
          >
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
