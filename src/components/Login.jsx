import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [status, changeStatus] = useState(1);
  const [isRegistered, setIsRegestered] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [loggingError, setLoggingError] = useState(false);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const audioRef = useRef(
    "https://us-tuna-sounds-files.voicemod.net/609379db-8438-4c15-bee3-0daa4b12a03b-1660380533038.mp3",
  );
  const playVoice = () => {
    audioRef.current.play();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleRegister = () => {
    if (loginData.password !== loginData.confirmPassword) {
      setRegisterError(true);
      return;
    }

    fetch("http://localhost:8080/api/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: loginData.username,
        password: loginData.password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setIsRegestered(true);
          navigate("/");
        }
      })
      .catch(() => setRegisterError(true));
  };

  const handleLogin = () => {
    fetch("http://localhost:8080/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: loginData.username,
        password: loginData.password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          navigate("/");
        } else {
          setLoggingError(true);
          setTimeout(() => setLoggingError(false), 5000);
        }
      })
      .catch(() => setLoggingError(true));
  };

  return (
    <div className="flex">
      <img
        src="https://w0.peakpx.com/wallpaper/67/332/HD-wallpaper-the-batman-art-batman-comics-dc.jpg"
        className="h-screen w-[58%] object-cover object-top"
      />
      <audio
        ref={audioRef}
        src="https://us-tuna-sounds-files.voicemod.net/609379db-8438-4c15-bee3-0daa4b12a03b-1660380533038.mp3"
      ></audio>
      <div className="flex flex-1 items-center justify-center border-l-4 border-gray-900 bg-gradient-to-tl from-slate-900 to-yellow-800">
        <div className="flex w-96 flex-col gap-3 rounded border-2 border-white/10 bg-white/20 p-5 backdrop-blur-lg">
          {status ? (
            <>
              <h1 className="inter text-xl text-white/50">Login</h1>
              <p className="text-white/40">Username</p>
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleInputChange}
                className="w-60 rounded border-2 border-white/40 bg-white/40 tracking-widest text-gray-900"
              />
              <p className="text-white/40">Password</p>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                className="w-60 rounded border-2 border-white/40 bg-white/40 tracking-widest text-gray-900"
              />
              <button
                onClick={handleLogin}
                className="my-2 w-36 border-2 border-white/40 bg-white/25 p-2 font-thin tracking-wider text-white/70 transition-all hover:bg-white/10"
              >
                Login
              </button>
              {isLogged ? <p>Logged Successfully</p> : null}
              {loggingError ? (
                <p className="animate-pulse text-center font-bold text-red-900 transition-all">
                  Wrong Credentials
                </p>
              ) : null}
            </>
          ) : (
            <>
              <h1 className="inter text-xl text-white/50">Register</h1>
              <p className="text-white/40">Username</p>
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleInputChange}
                className="w-60 rounded border-2 border-white/40 bg-white/40 tracking-widest text-gray-900"
              />
              <p className="text-white/40">Password</p>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                className="w-60 rounded border-2 border-white/40 bg-white/40 tracking-widest text-gray-900"
              />
              <p className="text-white/40">Confirm password</p>
              <input
                type="password"
                name="confirmPassword"
                value={loginData.confirmPassword}
                onChange={handleInputChange}
                className="w-60 rounded border-2 border-white/40 bg-white/40 tracking-widest text-gray-900"
              />
              <button
                onClick={handleRegister}
                className="my-2 w-36 border-2 border-white/40 bg-white/25 p-2 font-thin tracking-wider text-white/70 transition-all hover:bg-white/10"
              >
                Register
              </button>
            </>
          )}
          <button
            className="inter my-2 text-lg tracking-tighter text-orange-950 transition-all hover:scale-110"
            onClick={() => changeStatus((prev) => !prev)}
          >
            {status ? <p>Not registered?</p> : <p>Already registered?</p>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
