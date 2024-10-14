import { useState } from "react";

function Login() {
  const [status, changeStatus] = useState(1);
  return (
    <div className="flex">
      <img
        src="https://w0.peakpx.com/wallpaper/67/332/HD-wallpaper-the-batman-art-batman-comics-dc.jpg"
        className="h-screen w-[58%] object-cover object-top"
      />
      <div className="flex flex-1 items-center justify-center border-l-4 border-gray-900 bg-gradient-to-tl from-slate-900 to-yellow-800">
        <div className="flex w-96 flex-col gap-3 rounded border-2 border-white/10 bg-white/20 p-5 backdrop-blur-lg">
          {status ? (
            <>
              <h1 className="inter text-xl text-white/50">Login</h1>
              <p className="text-white/40">Login</p>
              <input
                type="text"
                className="w-60 rounded border-2 border-white/40 bg-white/40 tracking-widest text-gray-900"
              />
              <p className="text-white/40">Password</p>
              <input
                type="text"
                className="w-60 rounded border-2 border-white/40 bg-white/40 tracking-widest text-gray-900"
              />
              <button className="my-2 w-36 border-2 border-white/40 bg-white/25 p-2 font-thin tracking-wider text-white/70 transition-all hover:bg-white/10">
                Login
              </button>
            </>
          ) : (
            <>
              <h1 className="inter text-xl text-white/50">Register</h1>
              <p className="text-white/40">Login</p>
              <input
                type="text"
                className="w-60 rounded border-2 border-white/40 bg-white/40 tracking-widest text-gray-900"
              />
              <p className="text-white/40">Password</p>
              <input
                type="text"
                className="w-60 rounded border-2 border-white/40 bg-white/40 tracking-widest text-gray-900"
              />
              <p className="text-white/40">Submit password</p>
              <input
                type="text"
                className="w-60 rounded border-2 border-white/40 bg-white/40 tracking-widest text-gray-900"
              />
              <button className="my-2 w-36 border-2 border-white/40 bg-white/25 p-2 font-thin tracking-wider text-white/70 transition-all hover:bg-white/10">
                Register
              </button>
            </>
          )}
          <button
            className="inter my-2 text-lg tracking-tighter text-orange-950 transition-all hover:scale-110"
            onClick={() => changeStatus((prev) => !prev)}
          >
            {status ? <p>Not registered ?</p> : <p>Already registered ? </p>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
