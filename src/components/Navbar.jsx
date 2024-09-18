import "./Navbar.css";
import "./lang.svg";
function Navbar() {
  return (
    <div className="bg-zinc-600 p-6 flex justify-between shadow-md">
      {" "}
      <h1 className="text-white text-4xl inria-sans-bold">Comics</h1>
      <div className="flex justify-around items-center gap-28 text-white text-xl inter ">
        <input
          type="text"
          className="rounded-2xl text-md py-1 px-4 border-2 border-zinc-400"
          placeholder="Find_"
        />
        <div className="hover:text-gray-300 active:text-gray-500">
          Categories
        </div>
        <div className="hover:text-gray-300 active:text-gray-500">Login</div>
        <div className="hover:text-gray-300 active:text-gray-500">Cart</div>
        <div className="bg-zinc-400 rounded-md p-2 hover:bg-zinc-500 active:bg-zinc-700">
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
